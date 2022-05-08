import React from "react"
import { ProgressIndicator } from '@fluentui/react/lib/ProgressIndicator';
import { TextField } from "@fluentui/react/lib/TextField";
import ReactDOM from "react-dom";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { DefaultPalette, IStackItemStyles, IStackStyles, Stack, StackItem } from "@fluentui/react";
import { equal } from "assert";
import { fromEvent } from "rxjs";
import { buffer, pluck, debounceTime, filter } from "rxjs/operators";

export interface iProps {
  inPcnt: number;
}

/// FINALIZE !!!!!!!!!!!!!!!!!!!!
const ON_LOAD_CONTENT_EVENT = 'onLoadContent';
const ON_CONTENT_CHANGE_EVENT = 'onContentChange';

window.addEventListener(ON_LOAD_CONTENT_EVENT, (e: any) => {
  ReactDOM.render(
    <React.StrictMode>
      <ProgressUI
        inPcnt={e.detail.inPcnt}
      />
    </React.StrictMode>,
    document.getElementById('controlAddIn')
  );
})

// definice React aplikace FC .. functional component
export const ProgressUI: React.FC<iProps> = (props: iProps) => {

  // stavová proměnná, pokud se změní pomocí setPer..., překreslí (renderuje) se komponenta, která ji obsahuje  
  const [percentageComlete, setPercentageComlete] = React.useState<number>(props.inPcnt)

  // // musi byt nad volanim, nebo to musi byt funkce
  // const _keyDownHandle = (event: any) => {
  //   switch (event.keyCode) {
  //     default:
  //       alert(event.keyCode)
  //       break;
  //   }
  // }

  // React.useEffect(() => {
  //   document.addEventListener("keydown", _keyDownHandle)
  // }, []) // prazdne = initial jednou

  let keyCode = fromEvent(document, "keypress").pipe(pluck('keyCode'));

  let keyCodesBuffer = keyCode.pipe(buffer(keyCode.pipe(
    debounceTime(50))
  ), filter(isFromScan)
  )

  React.useEffect(() => {
    keyCodesBuffer.subscribe(x => {
      var scannedString = "";
      x.forEach((code: number) => {
        scannedString += String.fromCharCode(code);
      });
      callBCBack(scannedString);
    });
  }, []) // prazdne = initial jednou

  
  function isFromScan(keyCodes: any) {
    return keyCodes.length > 5; // && keyCodes[keyCodes.length - 1] == 13;
  }

  const bntStyle = {
    backgroundColor: '#ff0000',
    width: '200px',
    height: '200px',
    borderRadius: '15px'
  }

  // pro celý stack
  const stackStyles: IStackStyles = {
    root: {
      padding: 5,
    },
  };

  // pro Items
  const stackItemStyles: IStackItemStyles = {
    root: {
      color: DefaultPalette.white,
      padding: 5,
      width: "50%"
    },
  };

  function callBCBack (param:any) {
    const rawContent = {
      outPcnt: param
    }
    let event = new CustomEvent(ON_CONTENT_CHANGE_EVENT, { detail: rawContent });
    window.dispatchEvent(event);
  }

  return (
    //root element misto div
    <>
      <h1>hello world {percentageComlete} %</h1>
      <Stack horizontal styles={stackStyles}>
        <StackItem styles={stackItemStyles}>
          <ProgressIndicator label="My progress" description="kolikaty jsi" percentComplete={percentageComlete / 100} />
          <TextField
            defaultValue={percentageComlete.toString()}
            onChange={(e, v) => setPercentageComlete(v ? +v : 0)} />
        </StackItem>
        <StackItem styles={stackItemStyles}>
          <PrimaryButton text="START" style={bntStyle} onClick={() => callBCBack(percentageComlete)} />
        </StackItem>
      </Stack>
    </>
  );
}