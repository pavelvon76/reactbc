page 55000 "ProgressBarTESTMZLU"
{
    Caption = 'TestScannCard';
    PageType = Card;
    SourceTable = "Scanned Data MZLU";

    layout
    {
        area(content)
        {

            usercontrol(ProgressBarControlAddinMZLU; ProgressBarControlAddinMZLU)
            {
                ApplicationArea = all;
                trigger ControlReady()
                begin
                    //ControlIsReady := true;
                    InitControls();
                    message('Started and what?');
                end;

                trigger onScanned(Barcode: Text)
                var
                    ScanRec: Record "Scanned Data MZLU";
                    ScannMgt: Codeunit ControlAddInManagementMZLU;
                begin

                    ScannMgt.FindScannedCode(Barcode, ScanRec);
                    CurrPage.Update(false);
                end;

                trigger OnContentChange(Content: JsonObject)
                var
                    myToken: JsonToken;
                begin
                    if Content.get('outPcnt', myToken) then
                        Message(myToken.AsValue().AsText());
                end;

            }
            group(General)
            {
                field(ScannedItemTableName; Rec.ScannedItemTableName)
                {
                    ApplicationArea = All;
                    ToolTip = 'Specifies the value of the Found Record field.';
                }
                field(ScannedPrimaryKey; Rec.ScannedPrimaryKey)
                {
                    ApplicationArea = All;
                    ToolTip = 'Specifies the value of the Record Primary ID field.';
                }
                field(ScannedDescription; Rec.ScannedDescription)
                {
                    ApplicationArea = All;
                    ToolTip = 'Specifies the value of the Record Description field.';
                }
            }
        }
    }
    actions
    {
        area(processing)
        {
            group(ItemActionGroup)
            {
                action(CallReact)
                {
                    ApplicationArea = All;

                    trigger OnAction()
                    var
                        JObject: JsonObject;
                    begin
                        JObject.Add('inPcnt', 77);
                        CurrPage.ProgressBarControlAddinMZLU.LoadContent(JObject);
                    end;
                }
            }
        }

    }

    local procedure InitControls()
    //RecRef: RecordRef;
    //Data: JsonArray;
    // FieldList: JsonArray;
    // PageActions: JsonArray;
    // FieldObject: JsonObject;
    // i: Integer;
    begin

        // Message('Fieldlist: %1', Format(FieldList));
        // Message('Actions: %1', Format(PageActions));
        // Message('Data: %1', Format(Data));

        //CurrPage. . ReactPageControlAddinRED.InitControls(FieldList, Data, PageActions);
        CurrPage.ProgressBarControlAddinMZLU.InitControls();

    end;
}