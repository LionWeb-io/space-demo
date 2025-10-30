using System.Diagnostics;
using Languages;
using LionWeb.Core;
using LionWeb.Core.M1;
using LionWeb.Core.M3;
using LionWeb.Protocol.Delta.Repository;
using LionWeb.WebSocket;

namespace SpaceDemo.Repository;

public class Repository
{
    public const int DEFAULT_WS_PORT = 40000;
    public async static Task Main(string[] args)
    {
        Trace.Listeners.Add(new ConsoleTraceListener());

        Log($"server args: {string.Join(", ", args)}");

        var interactive = args.Length == 0
            ? true
            : !args.Any(a => a == "--non-interactive");

        var port = args.Length > 0
            ? int.Parse(args[0])
            : DEFAULT_WS_PORT;

        LionWebVersions lionWebVersion = LionWebVersions.v2023_1;
        List<Language> languages =
        [
            PowerBudgetLanguage.Instance, FindingLanguage.Instance,
            lionWebVersion.BuiltIns, lionWebVersion.LionCore
        ];

        var webSocketServer = new WebSocketServer(lionWebVersion)
        {
            Languages = languages
        };

        webSocketServer.StartServer("localhost", port);

        Console.WriteLine($"WS listening at port {port}...");

        var serverForest = new Forest();

        var lionWebServer = new LionWebRepository(lionWebVersion, languages, "server",
            serverForest, webSocketServer.Connector);
        lionWebServer.CommunicationError += (_, exception) => Log(exception.ToString());

        if (interactive)
        {
            Console.ReadLine();
            webSocketServer.Stop();
        }
        else
        {
            int i = 0;
            // For ever .....
            while (true)
            {
                Console.WriteLine($"alive {i++} {DateTime.Now:O}");
                await Task.Delay(10000);
            }
        }
        Console.WriteLine("Closed repository.");
        return;
    }

    private static void Log(string message, bool header = false) =>
        Console.WriteLine(header
            ? $"{ILionWebRepository.HeaderColor_Start}{message}{ILionWebRepository.HeaderColor_End}"
            : message);
}