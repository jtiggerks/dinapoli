/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {

    initialize: function()
    {
        this.bindEvents(); 
    },
 
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false); 
 
    },
    onDeviceReady: function() {
 
 
    
   

    var notificationOpenedCallback = function(jsonData)
    {          
        var jsonstring = JSON.stringify(jsonData);
        var jsonobject = JSON.parse(jsonstring);
        URL_APP = jsonobject.notification.payload.additionalData.foo;

        var urlfull= 'http://www.kjagrillburger.com.br/painel/index.php?page=pedidos&i=i099092&u='+URL_APP+'&idd='+device.uuid;        
  
        location.href = urlfull+device.uuid;
    };

     window.plugins.OneSignal
        .startInit("27c4b5a1-5809-4cc2-9afe-7768f7d509d6")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit(); 


  
    app.receivedEvent('deviceready');

    var urlfull= 'http://www.kjagrillburger.com.br/painel/index.php?page=pedidos&i=i099092&idd='+device.uuid;
    location.href = urlfull;

    },receivedEvent: function(id)
    {

       
    }
};

 

 