let isMac = navigator.platform.toLowerCase().indexOf("mac") > -1;

(function($){

    if ( isMac ) {
        $(".key-shift,.key-shift-mac").each(function(){
                let $this = $(this);
                $this.html("&#8679; Shift");
        });
        $(".key-ctrl,.key-cmd-mac,.key-meta").each(function(){
                let $this = $(this);
                $this.html("&#8984; Cmd");
        });
        $(".key-ctrl-mac").each(function(){
                let $this = $(this);
                $this.html("&#8963; Ctrl");
        });
        $(".key-alt,.key-option-mac").each(function(){
                let $this = $(this);
                $this.html("&#8997; Option");
        });
    }//if isMac

    $(window).keydown(function( event ) {
        let keySelector = "";
        if ( event.metaKey )
            keySelector += isMac ? ".key-ctrl,.key-cmd-mac,.key-meta," : ".key-cmd-mac,.key-meta,";
        if ( event.ctrlKey )
            keySelector += isMac ? ".key-ctrl-mac," : ".key-ctrl,";
        if ( event.altKey )
            keySelector += ".key-option-mac,.key-alt,";
        if ( event.shiftKey )
            keySelector += ".key-shift,.key-shift-mac,";
        keySelector = keySelector.slice(0,-1);

        if (keySelector.length)
            $(keySelector).not(".static").addClass("keydown");
    });
    $(window).keyup(function( event ) {
        let $keydownObjs = $(".keydown");
        if ($keydownObjs.length){
            let keySelector = "";
            if ( event.metaKey )
                keySelector += isMac ? ".key-ctrl,.key-cmd-mac,.key-meta," : ".key-cmd-mac,.key-meta,";
            if ( event.ctrlKey )
                keySelector += isMac ? ".key-ctrl-mac," : ".key-ctrl,";
            if ( event.altKey )
                keySelector += ".key-option-mac,.key-alt,";
            if ( event.shiftKey )
                keySelector += ".key-shift,.key-shift-mac,";
            keySelector = keySelector.slice(0,-1);

            $keydownObjs.not(keySelector).removeClass("keydown");
        }
    });

})(jQuery);
