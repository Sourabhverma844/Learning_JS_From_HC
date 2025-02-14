Lets Learn How To Request API<br>
Yaha Abhi hum fetch ki bat nahi krenge fetch to abhi 3-4 sal pahle aya he.<br>
usse pahle bhi to API Request Hoti Thi waha hum XML HttpRequest Bhejte The.<br>
Ye Bahut hi powerful or bahut hi interesting he
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest<br> 
The XMLHttpRequest.readyState property returns the state an XML HttpRequest client is in.<br>
An XHR client exists in one of the following states:<br>
Jo Hum XML ki Request bhejte he use AJAX request kaha jata he<br>

| Value | State             | Description                                          |
|-------|------------------|------------------------------------------------------|
| 0     | UNSENT           | Client has been created. open() not called yet.     |
| 1     | OPENED           | open() has been called.                             |
| 2     | HEADERS_RECEIVED | send() has been called, and headers and status are available. |
| 3     | LOADING          | Downloading: responseText holds partial data.       |
| 4     | DONE             | The operation is complete.                          |
