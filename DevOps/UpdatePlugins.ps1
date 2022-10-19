if (!(Get-Module -Name Xrm.Framework.CI.PowerShell.Cmdlets)) {
   Install-Module -Name Xrm.Framework.CI.PowerShell.Cmdlets
}

Import-Module -Name Xrm.Framework.CI.PowerShell.Cmdlets
Import-Module -Name Microsoft.Xrm.Tooling.CrmConnector.PowerShell

$currentPath = Get-Location
$parentPath = (Get-Item -Path $currentPath).Parent.FullName
$registrationFile = -Join($parentPath,"\Norriq.DataVerse.Events.Plugins\PluginRegistration.json")
$assemblyFile = -Join($parentPath,"\Norriq.DataVerse.Events.Plugins\bin\Debug\Norriq.DataVerse.Events.Plugins.dll")

Write-Output("Current Path:         " + $currentPath);
Write-Output("Parent Path:          " + $parentPath);
Write-Output("Registration File:    " + $registrationFile);
Write-Output("Assembly File:        " + $assemblyFile);

# Test the plugin registration file
if (Test-Path -Path $registrationFile -PathType Leaf) {
    Write-Output("Plugin Registration File Exists");
} else {
    Write-Output("Plugin Registration File Not Found");
}

# Test the assembly registration file
if (Test-Path -Path $assemblyFile -PathType Leaf) {
    Write-Output("Assembly File (dll) Exists");
} else {
    Write-Output("Assembly File (dll) Not Found");
}

$connectionString = "AuthType=ClientSecret; url=https://org40428ab9.crm4.dynamics.com; ClientId=c505ceed-17ad-4d8b-9306-0a87c82bd4d4; ClientSecret=t2d8Q~lbI2_HJt1odGxAEQmu6A1_V_F9cumlvaRA"

Set-XrmPluginRegistration -Mappingfile $registrationFile -SolutionName "NorriqDataVerseEventsPlugins" -RegistrationType Upsert -AssemblyPath $assemblyFile -ConnectionString $connectionString