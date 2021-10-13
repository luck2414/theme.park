 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>   
                                      _____ __                                ____          
                                     / ___// /__________  ____  ____ ___     /  _/___  _____
                                     \\__ \\/ __/ ___/ __ \\/ __ \\/ __ '__ \\    / // __ \\/ ___/
                                    ___/ / /_/ /  / /_/ / /_/ / / / / / /  _/ // / / / /___ 
                                   /____/\\__/_/   \\____/\\____/_/ /_/ /_/  /___/_/ /_/\\___(_)                                                          
                                </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
