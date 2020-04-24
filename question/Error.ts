export interface ErrorMessage {
  message: string
  stack: Array<{
    line: number
    column: number
    filename: string
  }>
}

export function parseError(err: Error): ErrorMessage {
    let userAgent = navigator.userAgent;
    if (userAgent.indexOf("Firefox") > -1) {
      console.log("Firefox");
    }else if (userAgent.indexOf("Chrome") > -1){
        
    }
}