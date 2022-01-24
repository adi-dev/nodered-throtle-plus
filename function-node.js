tO(msg);

function tO(val){
    if(context.t){
        // Timeout is still running
        context.v = val;
        node.status({
            fill:"blue",
            shape:"dot",
            text:"Buffered"
        });
    }else{
        // First call
        context.t = setTimeout(function(){
            clearTimeout(context.t);
            context.t = null;
            if(context.v != null){
                // Received message during timeout, return it
                var r = context.v;
                context.v = null;
                tO(r);
            }else{
                node.status({
                    fill:"green",
                    shape:"ring",
                    text:"Idle"
                });
            }
        }, 1000)
        node.status({
            fill:"blue",
            shape:"ring",
            text:"Block next"
        });
        node.send(val);
    }
}
