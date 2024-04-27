let $headers = $("h1");
for (let i = 0; i < $headers.length; i++) {
  let $header = $($headers[i]);
  $header.text($header.text() + "test");
}
