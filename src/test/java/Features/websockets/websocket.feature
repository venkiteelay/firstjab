Feature: To test standard websocket

  Scenario: Sample scenario to test websockets

    * def demoBaseUrl = 'wss://echo.websocket.org'
    * def handler = function(msg){ karate.signal(msg) }
    * def socket = karate.webSocket(demoBaseUrl, handler)
    * def txt = '"Hello world"'
    * eval socket.send(txt)
    * def result = karate.listen(5000)
    * match result == txt
