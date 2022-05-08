controladdin "ProgressBarControlAddinMZLU"
{
    HorizontalShrink = true;
    HorizontalStretch = true;
    MinimumWidth = 250;
    RequestedHeight = 300;
    Scripts = 'BCReactExtension\src\js\Progress-Bar.js',
              'BCReactExtension\src\js\Progress-Bar-Events.js';
    //StartupScript = 'BCReactExtension\src\js\reactPageStart.js';
    StyleSheets = 'BCReactExtension\src\css\Progress-Bar.css';
    VerticalShrink = true;
    VerticalStretch = true;

    // The event declarations specify what callbacks could be raised from JavaScript by using the webclient API:
    // Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('CallBack', [42, 'some text', 5.8, 'c'])
    procedure SetData(Data: JsonObject);
    procedure InitControls();
    procedure LoadContent(content: JsonObject)
    event ControlReady();
    event Scanned(Barcode: Text);
    event OnContentChange(content: JsonObject);

}