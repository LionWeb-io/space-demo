# C# implementation of Space DSL

Requirements to run:

* C# 8

* LionWeb-CSharp version (at least) 0.6.0
    Note that this version is configured in *two* places:
    * In `cs/Directory.Packages.props`, inside the `<LionWebCSharpVersion>` tag;
    * In `cs/SpaceDemo.Languages/.config/dotnet-tools.json`, as the value of the `version` property.


## Generate languages

Run in `SpaceDemo.Languages`:

```shell
$ dotnet tool restore
$ dotnet LionWebGenerator --config generate-languages.config.json
```


## Start repository and C# clients

Run in this exact order:

1. in `SpaceDemo.Repository`:
  ```shell
  $ dotnet run [port; default=40000] [host; default=localhost, use + for all interfaces]
  ```
  This starts the _empty_ repository – with ID "`myRepo`" – on the specified port.

2. in `SpaceDemo.Validator`:
  ```shell
  $ dotnet run
  ```
  This listens to model changes and validates all partitions.

3. in `SpaceDemo.Loader`:
  ```shell
  $ dotnet run <space-DSL Git root>/chunks/ [host name; default=localhost] [WebSocket port number; default=40000]
  ```
This _watches_ the `chunks/` dir., and (re-)loads any file which name matches `*.instance.json`, adding the corresponding partitions to the repository.

