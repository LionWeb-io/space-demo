using System.Diagnostics;
using Languages;
using LionWeb.Core;
using LionWeb.Core.M1;
using LionWeb.Core.M3;
using LionWeb.Protocol.Delta.Client;
using LionWeb.Protocol.Delta.Repository;
using LionWeb.WebSocket;

namespace SpaceDemo.Validator;

class ValidatorClient
{
    public static async Task Main(string[] args)
    {
        Trace.Listeners.Add(new ConsoleTraceListener());

        string name = "Validator";
        string serverIp = "localhost";
        int serverPort = 40000;
        var repositoryId = "myRepo";

        LionWebVersions lionWebVersion = LionWebVersions.v2023_1;
        List<Language> languages = [
            PowerBudgetLanguage.Instance, FindingLanguage.Instance,
            lionWebVersion.BuiltIns, lionWebVersion.LionCore];

        Log($"Starting client {name} to connect to {serverIp}:{serverPort}@{repositoryId}");

        var webSocketClient = new WebSocketClient(name);
        
        var forest = new Forest();
        var lionWeb = new LionWebClient(lionWebVersion, languages, $"client_{name}", forest, webSocketClient);

        await webSocketClient.ConnectToServer(serverIp, serverPort);

        Console.ReadLine();
    }
 
    private static void Log(string message, bool header = false) =>
        Console.WriteLine(header
            ? $"{ILionWebRepository.HeaderColor_Start}{message}{ILionWebRepository.HeaderColor_End}"
            : message);   
}