Feature: To test Apollo server based graphql subscriptions

  Scenario: Sample scenario to test graphql subscription

    * def demoBaseUrl = 'wss://subscriptions.graph.cool/v1/cizfapt9y2jca01393hzx96w9'
    * def handler = function(msg){ karate.signal(msg) }
    * def socket = karate.webSocket(demoBaseUrl, handler)
    * def txt = '{"type": "connection_init", "payload": {}}'
    * eval socket.send(txt)

    * def result = karate.listen(5000)
    * match result == {type:'connection_ack'}