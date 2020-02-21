    (window.webpackJsonp=window.webpackJsonp||[]).push([[0], [, , , , , , , , , , function(e, t, a) {
    "use strict";
    a.d(t, "a", (function() {
        return i
    }
    ));
    var o=a(5);
    const n=["audio_enabled", "chat_message", "kick_client", "client_kicked", "client_left", "client_metadata_received", "client_ready", "client_unable_to_join", "connect_error", "connecting", "device_identified", "disconnect", "knock_handled", "knocker_left", "new_client", "reconnect", "recording_started", "recording_stopped", "room_joined", "room_knocked", "room_left", "room_locked", "room_mode_changed", "screenshare_started", "screenshare_stopped", "video_enabled", "room_integration_activated", "room_integration_deactivated", "room_integration_enabled", "room_integration_disabled"], i=n.reduce((e, t)=>(e[`$ {
        t.toUpperCase()
    }
    `]=`SIGNAL/$ {
        t
    }
    `, e[`$ {
        t.toUpperCase()
    }
    _ERROR`]=`SIGNAL/$ {
        t
    }
    /ERROR`, e), {}
    );
    t.b=e=>( {
        name:"signalConnection", init:( {
            dispatch: t
        }
        )=> {
            n.forEach(a=>e.on(a, function(e, t) {
                const a=e.toUpperCase();
                return e=> {
                    e&&e.error?t( {
                        type:i[`$ {
                            a
                        }
                        _ERROR`], payload:e, error:e.error
                    }
                    ):t( {
                        type: i[a], payload: e
                    }
                    )
                }
            }
            (a, t)))
        }
        , reducer:(e="", {
            type: t
        }
        )=>( {
            SIGNAL_CONNECTING: "connecting", SIGNAL_DISCONNECTING: "disconnected", [i.DEVICE_IDENTIFIED]: "connected", [i.DISCONNECT]: "disconnected", [i.CONNECT_ERROR]: "disconnected", [i.RECONNECT]: "reconnect"
        }
        [t]||e), getMiddleware:()=>()=>t=>a=> {
            if(a.meta&&a.meta.signal) {
                const {
                    type: t, payload: o
                }
                =a.meta.signal;
                e.emit(t, o)
            }
            return t(a)
        }
        , selectSignalStatus:e=>e.signalConnection, selectHasSignalTrouble:Object(o.f)("selectSignalStatus", e=>"disconnected"===e), doConnectSignal:()=>( {
            dispatch: e, store: t
        }
        )=> {
            e( {
                type:"SIGNAL_CONNECTING", meta: {
                    signal: {
                        type:"identify_device", payload: {
                            deviceCredentials: t.selectDeviceCredentials()
                        }
                    }
                }
            }
            )
        }
        , doDisconnectSignal:()=>( {
            dispatch: t
        }
        )=> {
            e.disconnect(), t( {
                type: "SIGNAL_DISCONNECTING"
            }
            )
        }
        , reactSignalConnection:Object(o.f)("selectDeviceCredentials", "selectRoomConnectionStatus", "selectSignalStatus", (e, t, a)=>["", "reconnect"].includes(a)&&e? {
            actionCreator: "doConnectSignal"
        }
        :["kicked", "left"].includes(t)&&"disconnected"!==a? {
            actionCreator: "doDisconnectSignal"
        }
        :void 0)
    }
    )
}

, function(e, t, a) {
    "use strict";
    function o( {
        top: e=0, left: t=0
    }
    = {}
    ) {
        return {
            top: e, left: t
        }
    }
    function n( {
        width: e=0, height: t=0
    }
    = {}
    ) {
        return {
            width: Math.max(e, 0), height: Math.max(t, 0)
        }
    }
    function i( {
        top: e=0, left: t=0, width: a=0, height: i=0
    }
    = {}
    ) {
        return {
            bounds:n( {
                width: a, height: i
            }
            ), origin:o( {
                top: e, left: t
            }
            )
        }
    }
    function r(e) {
        return!!e&&!(e.width<=0||e.height<=0)
    }
    function s( {
        bounds: e, fromBounds: t
    }
    ) {
        return {
            width: Math.max(t.width-e.width, 0), height: Math.max(t.height-e.height, 0)
        }
    }
    a.d(t, "e", (function() {
        return o
    }
    )), a.d(t, "c", (function() {
        return n
    }
    )), a.d(t, "d", (function() {
        return i
    }
    )), a.d(t, "a", (function() {
        return r
    }
    )), a.d(t, "b", (function() {
        return s
    }
    ))
}

, function(e, t, a) {
    e.exports= {
        buttonIconWrapper: "buttonIconWrapper-1-pZ", VideoControls: "VideoControls-3SC9", buttonCenterWrapper: "buttonCenterWrapper-3COV", button: "button-20jP", buttonFigure: "buttonFigure-2JAN", buttonIconBadge: "buttonIconBadge-Ol2x", isOff: "isOff-a-I8", buttonIcon: "buttonIcon-32XP", buttonLegend: "buttonLegend-D6Xt", menuDivider: "menuDivider-2TaZ"
    }
}

, , , , , function(e, t, a) {
    "use strict";
    (function(e) {
        a.d(t, "f", (function() {
            return m
        }
        )), a.d(t, "i", (function() {
            return p
        }
        )), a.d(t, "b", (function() {
            return h
        }
        )), a.d(t, "a", (function() {
            return b
        }
        )), a.d(t, "c", (function() {
            return E
        }
        )), a.d(t, "g", (function() {
            return S
        }
        )), a.d(t, "d", (function() {
            return v
        }
        )), a.d(t, "j", (function() {
            return C
        }
        )), a.d(t, "k", (function() {
            return y
        }
        )), a.d(t, "h", (function() {
            return O
        }
        )), a.d(t, "e", (function() {
            return w
        }
        ));
        a(7);
        var o=a(6), n=a.n(o), i=a(333), r=a(334), s=a(14);
        const c=!/mobile/i.test(navigator.userAgent)&&"firefox"===s.a.browserDetails.browser, l= {
            video: {
                width: {
                    max: window.screen.width
                }
                , height: {
                    max: window.screen.height
                }
            }
        }
        , d=new i.a("MediaDevicesStore"), u= {
            videoId: "default", audioId: "default", outputId: "default"
        }
        ;
        function m() {
            const e=d.loadOrDefault(u);
            return {
                ...u, ...e
            }
        }
        function p(e) {
            const t= {}
            ;
            for(const a of Object.keys(u))void 0!==e[a]&&(t[a]=e[a]||u[a]);
            Object.keys(t).length&&d.save( {
                ...m(), ...t
            }
            )
        }
        function g(e) {
            return e.filter((e, t, a)=>t===a.findIndex(t=>t.deviceId===e.deviceId&&t.kind===e.kind))
        }
        function h() {
            return e.navigator.mediaDevices.enumerateDevices().then(g)
        }
        const f= {
            audioinput: "audioId", videoinput: "videoId", audiooutput: "outputId"
        }
        ;
        function b( {
            busyDeviceIds: e, devices: t, kind: a
        }
        ) {
            const o=t&&t.length&&t.filter(e=>e.kind===a).map(t=>( {
                [f[a]]:t.deviceId, label:`$ {
                    e.includes(t.deviceId)?"(busy) ": ""
                }
                $ {
                    t.label||t.deviceId.slice(0, 5)
                }
                `
            }
            ));
            return o&&0!==o.length?o:[ {
                [f[a]]: "default", label: "Default"
            }
            ]
        }
        function E( {
            devices: e, videoId: t, audioId: a, noAudio: o, options: n, type: i="ideal"
        }
        ) {
            const s=e.filter(e=>"audioinput"===e.kind), c=e.filter(e=>"videoinput"===e.kind), l=!a||"default"===a||!s.some(e=>e.deviceId===a), d=!t||"default"===t||!c.some(e=>e.deviceId===t), u=Object(r.a)( {
                preferredDeviceIds: {
                    audioId:l?"default": {
                        [i]: a
                    }
                    , videoId:d?"default": {
                        [i]: t
                    }
                }
                , ...n
            }
            );
            return!o&&s.length||delete u.audio, c.length||delete u.video, u
        }
        const R= {}
        ;
        function S(t) {
            return t.audio||t.video?e.navigator.mediaDevices.getUserMedia(t).then(e=>(c&&function(e) {
                if(!e.getTracks().some(e=>!R[e.getSettings&&e.getSettings().deviceId]))return;
                const t=e.clone();
                for(const a of t.getTracks())if(a.getSettings) {
                    const e=a.getSettings();
                    e.deviceId&&!R[e.deviceId]&&(R[e.deviceId]=a, a.enabled=!1)
                }
            }
            (e), e)).catch(e=> {
                throw console.error("getUserMedia error: %s, constraints: %o", e.message, t), e
            }
            ):Promise.reject( {
                name: "nodevices"
            }
            )
        }
        function I(e) {
            if(e.getSettings) {
                const {
                    deviceId: t
                }
                =e.getSettings();
                if(t)return t
            }
            if(e.getCapabilities)return e.getCapabilities().deviceId;
            const t=e.getConstraints();
            return t.deviceId?t.deviceId.exact:void 0
        }
        function v(e) {
            const t=e.getVideoTracks()[0], a=e.getAudioTracks()[0];
            return {
                videoId: t&&I(t)||"", audioId: a&&I(a)||""
            }
        }
        function C(e) {
            n()(e, "stream is required"), e.getTracks().forEach(e=>e.stop())
        }
        async function y(e, t, a=c) {
            n()(e, "stream is required"), n()(t, "constraints is required");
            const o=e.getVideoTracks()[0], i=e.getAudioTracks()[0];
            a?e.getTracks().forEach(e=> {
                e.enabled=!1
            }
            ):e.getTracks().forEach(e=>e.stop());
            try {
                const n=await S(t);
                return a&&e.getTracks().forEach(e=>e.stop()), o&&e.removeTrack(o), i&&e.removeTrack(i), e.addTrack(n.getVideoTracks()[0]), e.addTrack(n.getAudioTracks()[0]), e
            }
            catch(r) {
                if("NotAllowedError"===r.name&&a)return e.getTracks().forEach(e=> {
                    e.enabled=!0
                }
                ), e;
                if("AbortError"===r.name&&a)return y(e, t, !1);
                throw r
            }
        }
        function O() {
            return!e.navigator.userAgent.includes("Android")&&!!(e.navigator.mediaDevices|| {}
            ).getDisplayMedia
        }
        function w(t=l) {
            return e.navigator.mediaDevices.getDisplayMedia(t).then(e=>(e.getVideoTracks().forEach(e=> {
                "contentHint"in e&&(e.contentHint="detail")
            }
            ), e))
        }
    }
    ).call(this, a(15))
}

, , function(e, t, a) {
    e.exports= {
        "WebRtcVideo--zoomed": "WebRtcVideo--zoomed-3LH5", "WebRtcVideo--draggable": "WebRtcVideo--draggable-1ZoZ", WebRtcVideo: "WebRtcVideo-1rhW", switching: "switching-2Axg", mirror: "mirror-Whm2", content: "content-2Y_S", topControls: "topControls-3DUh", "WebRtcVideo--small": "WebRtcVideo--small-1nYG", connectionInterrupted: "connectionInterrupted-3Ocp", controls: "controls-3XiP", controlsContent: "controlsContent-38mA", nameBanner: "nameBanner-2vTM", nameChangeConfirmBtn: "nameChangeConfirmBtn-hc5r", switchButton: "switchButton-gYBn", muteIcon: "muteIcon-tDar", mutedLocallyIcon: "mutedLocallyIcon-2JvK", mutedLocallyIconWrapper: "mutedLocallyIconWrapper-3sdS", menuButton: "menuButton-15Iq", recIcon: "recIcon-2ePo", rec: "rec-2yOn", videoOffIndicator: "videoOffIndicator-kLXw", avatar: "avatar-3L1N"
    }
}

, function(e, t, a) {
    "use strict";
    a.d(t, "a", (function() {
        return r
    }
    )), a.d(t, "b", (function() {
        return s
    }
    )), a.d(t, "c", (function() {
        return l
    }
    ));
    var o=a(1), n=a.n(o), i=a(11);
    const r=500;
    function s( {
        bounds: e, origin: t=Object(i.e)()
    }
    ) {
        const a=e.width>e.height, o=function(e, t) {
            const a=!t&&e.width<=r, o=t&&e.height<=r&&e.width<=750;
            return a||o
        }
        (e, a), n=!o&&function(e, t) {
            const a=!t&&e.width<=750, o=t&&e.height<=750&&e.width<=1025;
            return a||o
        }
        (e, a);
        return {
            origin: t, bounds: e, isPhone: o, isTablet: n, isDesktop: !o&&!n, isLandscape: a, isPortrait: !a
        }
    }
    const c=n.a.shape( {
        width: n.a.number, height: n.a.number
    }
    ), l=n.a.shape( {
        bounds: c, isPhone: n.a.bool, isTablet: n.a.bool, isDesktop: n.a.bool, isLandscape: n.a.bool, isVertical: n.a.bool
    }
    )
}

, , function(e, t, a) {
    e.exports= {
        RoomNotFound: "RoomNotFound-3hcf", body: "body-1E1m", headerText: "headerText-2PTM", headerTextSubdomain: "headerTextSubdomain-12s_", subHeaderText: "subHeaderText-1-jB", largeText: "largeText-1ZQb", button: "button-1aMI", link: "link-2rrV", logoInSubHeader: "logoInSubHeader-HjYo", illustration: "illustration-2tIl", isPhone: "isPhone-17D0"
    }
}

, , function(e, t, a) {
    e.exports= {
        body: "body-xEF_", bodyFlex: "bodyFlex-1WnL", bodyInstallPrimer: "bodyInstallPrimer-26Ke", footer: "footer-oTwq", list: "list-1FD2", listItem: "listItem-FrLp", spinner: "spinner-2bAR", title: "title-3cap"
    }
}

, function(e, t, a) {
    e.exports= {
        RoomStatusBar: "RoomStatusBar-1EZY", roomLogo: "roomLogo-3vlp", newLogoWrapper: "newLogoWrapper-1HUR", isCollapsed: "isCollapsed-1fbD", roomLogoImg: "roomLogoImg-2BT9", statusButton: "statusButton-3107", item: "item-2d8q", participantsIconWrapper: "participantsIconWrapper-5vnt", participantsIcon: "participantsIcon-1TEH", peopleIcon: "peopleIcon-FvLL", participantCounter: "participantCounter-ul1J", lockWrapper: "lockWrapper-2UhQ", roomNameWrapper: "roomNameWrapper-2Gsy", recIcon: "recIcon-wTX9", recWrapper: "recWrapper-3dd0"
    }
}

, function(e, t, a) {
    e.exports= {
        IncomingKnocker: "IncomingKnocker-3OAB", knockerImageWrapper: "knockerImageWrapper-E_2-", knockerImage: "knockerImage-1960", knockerNoImage: "knockerNoImage-2hQ5", knockerNoImageIconWrapper: "knockerNoImageIconWrapper-3Xk7", buttonGroup: "buttonGroup-21h4", holdIcon: "holdIcon-3ECq", buttonGroupButton: "buttonGroupButton-2Ple", respondButton: "respondButton-2Km_", respondLabelWrapper: "respondLabelWrapper-3Od8", respondOptions: "respondOptions-3szj", respondOptionsItem: "respondOptionsItem-2ema", isDestructive: "isDestructive-1z5S", respondOptionsIcon: "respondOptionsIcon-2T2z"
    }
}

, function(e, t, a) {
    e.exports= {
        videoContainer: "videoContainer-yK-u", withRoundedCorners: "withRoundedCorners-2hYK", noVideoContainer: "noVideoContainer-t7RL", fixedAspectRatioContainer: "fixedAspectRatioContainer-2bwK", fixedAspectRatioVideo: "fixedAspectRatioVideo-2P_t", videoPlaceholder: "videoPlaceholder-1Y5i", "videoPlaceholder--light": "videoPlaceholder--light--N1J", "videoPlaceholder--dark": "videoPlaceholder--dark-27ej", "videoPlaceholder--error": "videoPlaceholder--error-2Q6C", cameraNotEnabled: "cameraNotEnabled-244x", camOffIcon: "camOffIcon-ApKB", captionOverlay: "captionOverlay-2CBu", "captionOverlay--dark": "captionOverlay--dark-2JQc", "captionOverlay--top": "captionOverlay--top-1gJr"
    }
}

, , , , function(e, t, a) {
    e.exports= {
        reaction: "reaction-3UEv", emoji: "emoji-1yC7", "text-left": "text-left-1qpJ", "text-up": "text-up-3UB8", new: "new-34Ib", reactionBounceIn: "reactionBounceIn-cyfJ", "new-up": "new-up-2oLz", reactionMoveUp: "reactionMoveUp-3BAS", "new-left": "new-left-1Tg7", reactionMoveLeft: "reactionMoveLeft-j8QF", text: "text-3y5s", textMoveUp: "textMoveUp-2wue", textMoveLeft: "textMoveLeft-3NIS", "expired-none": "expired-none-1d68", textWidthWrapper: "textWidthWrapper-2EqR", "textWidthWrapper-left": "textWidthWrapper-left-2Jhy", "textWidthWrapper-align-start": "textWidthWrapper-align-start-mIFl", "textWidthWrapper-align-end": "textWidthWrapper-align-end-5f4e", "textWidthWrapper-up": "textWidthWrapper-up-2QDG", avatarReactionWrapper: "avatarReactionWrapper-K9bh", avatarWrapper: "avatarWrapper-3jW2", avatarShake: "avatarShake-J5P0"
    }
}

, , , function(e, t, a) {
    "use strict";
    a.d(t, "a", (function() {
        return o
    }
    )), a.d(t, "b", (function() {
        return n
    }
    )), a.d(t, "e", (function() {
        return i
    }
    )), a.d(t, "d", (function() {
        return r
    }
    )), a.d(t, "c", (function() {
        return s
    }
    )), a.d(t, "f", (function() {
        return c
    }
    ));
    const o="https://api.appearin.net", n="BD88n_PIppfC93wfzOqgX3NvRZtcWjy2yuD1olpEt-NrynbgJjhtri0nJQF1QLsvNk6PWGIvlAl7YxKlFSMu9kc", i="https://signal.appearin.net", r= {
        NORMAL: "normal", GROUP: "group", TOWNHALL: "townhall"
    }
    , s= {
        [r.NORMAL]: 4, [r.GROUP]: 12, [r.TOWNHALL]: 50
    }
    , c=12
}

, , , function(e, t, a) {
    e.exports= {
        ChatExpandedUrlMessage: "ChatExpandedUrlMessage-bom8", spinner: "spinner-2YLb", content: "content-2kZb", headerImage: "headerImage-17_-", titleWrapper: "titleWrapper-xRpZ", urlWrapper: "urlWrapper-1w4n", clippedText: "clippedText-2uUA", bottomRow: "bottomRow-3-xH", favicon: "favicon-3LgC", linkWrapper: "linkWrapper-3idF", titleText: "titleText-27bT"
    }
}

, , function(e, t, a) {
    "use strict";
    a.d(t, "a", (function() {
        return m
    }
    ));
    var o=a(1), n=a.n(o), i=a(0), r=a.n(i), s=a(3), c=a(2), l=a.n(c), d=a(216), u=a.n(d);
    function m( {
        children: e, header: t, footer: a, isFullscreen: o
    }
    ) {
        return r.a.createElement(s.n, {
            className:l()(u.a.PrecallDialogLayout, {
                [u.a.fixedHeight]: !o
            }
            ), disableOverlay:!0, fullscreen:o
        }
        , t&&r.a.createElement(s.n.Header, null, t), r.a.createElement(s.n.Body, null, e), a&&r.a.createElement(s.n.Footer, null, a))
    }
    m.propTypes= {
        children: n.a.node.isRequired, footer: n.a.node, header: n.a.node, isFullscreen: n.a.bool.isRequired
    }
}

, function(e, t, a) {
    "use strict";
    var o=a(1), n=a.n(o), i=a(0), r=a.n(i), s=a(8), c=a(317), l=a.n(c), d=a(2), u=a.n(d), m=a(33), p=a(3), g=a(48), h=a.n(g);
    function f( {
        className: e, organization: t, owner: a, room: o
    }
    ) {
        const n=t&&t.logoUrl, i=r.a.createElement(p.t, {
            modifiers: ["sized"], className: h.a.lockIcon
        }
        );
        return r.a.createElement("div", {
            className: u()(h.a.precallHeader, e)
        }
        , r.a.createElement("div", {
            className: h.a.brandingItems
        }
        , a&&r.a.createElement(p.b, {
            className: h.a.avatar, name: a.name, avatarUrl: a.avatarUrl, size: 60
        }
        ), (t||!a)&&r.a.createElement(r.a.Fragment, null, n?r.a.createElement("img", {
            className:u()(h.a.logo, {
                [h.a.logoPadded]: !!a
            }
            ), src:n, alt:"Logo"
        }
        ):r.a.createElement(p.u, {
            modifiers: ["large"], className: h.a.wherebyLogo
        }
        ))), r.a.createElement("div", {
            className: h.a.precallHeaderText
        }
        , a?r.a.createElement("span", null, "You\u2019re about to join", " ", r.a.createElement("strong", null, a.name, " ", t&&`($ {
            t.name
        }
        )`), " ", "in a video meeting"):r.a.createElement("span", null, "You\u2019re about to join a video meeting")), r.a.createElement("div", {
            className: h.a.roomNameWrapper
        }
        , o.isLocked&&i, r.a.createElement("span", {
            className: h.a.roomName
        }
        , m.a.organizationDomain+o.roomName)))
    }
    f.propTypes= {
        className: n.a.string, organization: n.a.object, owner: n.a.object, room: n.a.object
    }
    ;
    var b=f;
    function E( {
        isPublicOrganization: e, organizationName: t, organizationLogoUrl: a, room: o
    }
    ) {
        const n=e?void 0: {
            name: t, logoUrl: a
        }
        ;
        return r.a.createElement(b, {
            className: l.a.precallHeader, organization: n, owner: void 0, room: o
        }
        )
    }
    E.propTypes= {
        isPublicOrganization: n.a.bool, organizationLogoUrl: n.a.string, organizationName: n.a.string, room: n.a.object.isRequired
    }
    ;
    t.a=Object(s.b)("selectIsPublicOrganization", "selectOrganizationName", "selectOrganizationLogoUrl", "selectRoom", E)
}

, function(e, t, a) {
    e.exports= {
        SelectOverlay: "SelectOverlay-1iuW", icon: "icon-3Jr0", selectWithOverlay: "selectWithOverlay-YQD-"
    }
}

, function(e, t, a) {
    e.exports= {
        NavButton: "NavButton-2kvr", shell: "shell-36Qv", ImgButton: "ImgButton-1JLk", IconButton: "IconButton-2aoD", light: "light-29nx"
    }
}

, function(e, t, a) {
    e.exports= {
        ClientStats: "ClientStats-1pFk", inset: "inset-2r1s", senders: "senders-h_PX"
    }
}

, function(e, t, a) {
    e.exports= {
        RosterListItem: "RosterListItem-1Pw5", userNameWrapper: "userNameWrapper-137V", userName: "userName-wCC7", "userName--current": "userName--current-imXe", currentUserBadge: "currentUserBadge-3Lp6", statusIcon: "statusIcon-3orV", avatar: "avatar-3n74", avatarWrapper: "avatarWrapper-1Tzw"
    }
}

, function(e, t, a) {
    e.exports= {
        integrationsPopover: "integrationsPopover-1t4u", Integrations: "Integrations-DqdX", title: "title-1Pb-", paragraph: "paragraph-38_r", roomIntegrations: "roomIntegrations-2PKl", roomIntegration: "roomIntegration-1NtZ", settingsSection: "settingsSection-1mWG", integrationCopy: "integrationCopy-1Owe", icon: "icon-t-wX", subTitle: "subTitle-FUan", description: "description-3Hu6"
    }
}

, , function(e, t, a) {
    "use strict";
    a.d(t, "c", (function() {
        return i
    }
    )), a.d(t, "d", (function() {
        return r
    }
    )), a.d(t, "a", (function() {
        return c
    }
    )), a.d(t, "b", (function() {
        return l
    }
    ));
    var o=a(1), n=a.n(o);
    const i=n.a.arrayOf(n.a.exact( {
        text: n.a.string.isRequired, url: n.a.string, id: n.a.string.isRequired
    }
    )), r=n.a.exact( {
        url:n.a.string.isRequired, status:n.a.string.isRequired, metadata:n.a.shape( {
            image: n.a.string, logo: n.a.string, publisher: n.a.string, title: n.a.string
        }
        ).isRequired, error:n.a.object
    }
    ), s=n.a.exact( {
        isReaction:n.a.bool.isRequired, text:n.a.string.isRequired, tokenizedText:i.isRequired, urlMetadata:r, timestamp:n.a.number.isRequired, localId:n.a.string.isRequired, senderId:n.a.string.isRequired, previewUrl:n.a.string, integration:n.a.shape( {
            roomIntegration:n.a.shape( {
                roomIntegrationId: n.a.string.isRequired, isEnabled: n.a.bool.isRequired, productCategories: n.a.arrayOf(n.a.string).isRequired
            }
            ), config:n.a.string.isRequired
        }
        )
    }
    ), c= {
        localId: n.a.string.isRequired, displayName: n.a.string, fromSelf: n.a.bool.isRequired, senderId: n.a.string.isRequired, avatarUrl: n.a.string, messages: n.a.arrayOf(s)
    }
    , l=n.a.exact( {
        ...c
    }
    )
}

, function(e, t, a) {
    e.exports= {
        precallHeader: "precallHeader-1O9B", precallHeaderText: "precallHeaderText-3Zty", brandingItems: "brandingItems-1_Fz", avatar: "avatar-8nYr", wherebyLogo: "wherebyLogo-2LCV", logo: "logo-2qvg", logoPadded: "logoPadded-3llE", roomNameWrapper: "roomNameWrapper-2tZv", roomName: "roomName-26Km", lockIcon: "lockIcon-sbj3"
    }
}

, function(e, t, a) {
    e.exports= {
        VideoStageLayout: "VideoStageLayout-3XF4", noneOnStage: "noneOnStage-33Of", gridCellsWrapper: "gridCellsWrapper-1FcY", supersizedContent: "supersizedContent-1jWq", noneOnStageMessage: "noneOnStageMessage-P7HD", hidden: "hidden-2LXc", debugShape: "debugShape-3mb5"
    }
}

, , , , , , function(e, t, a) {
    "use strict";
    a.d(t, "a", (function() {
        return i
    }
    ));
    var o=a(6), n=a.n(o);
    class i {
        constructor(e= {}
        ) {
            n.a.ok(e instanceof Object, "properties<object> must be empty or an object"), this.userId=null, this.created=null, this.lastUpdated=null, this.displayName=null, this.email=null, this.hasSentWelcomeEmail=null, this.androidAppVersion=null, this.avatarUrl=null, this.ownedRooms=[], this.permissions= {}
            ;
            const t= {}
            ;
            Object.getOwnPropertyNames(e).forEach(a=> {
                -1!==Object.getOwnPropertyNames(this).indexOf(a)&&(t[a]=e[a])
            }
            ), Object.assign(this, t)
        }
    }
}

, function(e, t, a) {
    "use strict";
    a(7);
    var o=a(0), n=a.n(o), i=a(1), r=a.n(i), s=a(2), c=a.n(s), l=a(95), d=a.n(l), u=a(6), m=a.n(u);
    var p=a(91);
    function g( {
        children: e, inline: t, modifiers: a=[]
    }
    ) {
        const[i, r]=Object(o.useState)(!1);
        Object(o.useEffect)(()=> {
            const e=setTimeout(()=>r(!0), 4e3);
            return()=>clearTimeout(e)
        }
        , []), t||a.push("fullPage");
        const s=function( {
            name: e, modifiers: t, styles: a
        }
        ) {
            return m.a.ok(Array.isArray(t), "modifiers<Array> is required"), m.a.ok("object"===typeof a, "styles<Object> is required"), m.a.ok("string"===typeof e, "name<String> is required"), t.reduce((t, o)=> {
                const n=a[`$ {
                    e
                }
                --$ {
                    o
                }
                `];
                return n&&t.push(n), t
            }
            , [])
        }
        ( {
            name: "LoadingScreen", modifiers: a, styles: d.a
        }
        );
        return n.a.createElement("div", {
            className: c()(d.a.LoadingScreen, ...s)
        }
        , n.a.createElement("div", {
            className: c()(d.a.spinnerWrapper)
        }
        , n.a.createElement(p.a, null)), e&&n.a.createElement("div", {
            className: c()(d.a.why, i&&d.a["why--visible"])
        }
        , e))
    }
    a.d(t, "a", (function() {
        return g
    }
    )), g.propTypes= {
        children: r.a.node, inline: r.a.bool, modifiers: r.a.array
    }
}

, , function(e, t, a) {
    e.exports= {
        RoomLeft: "RoomLeft--e72 fullPage-2Bx8", dialogBody: "dialogBody-4Nmm", illustration: "illustration-3mJz", header: "header-39_-", subHeaderText: "subHeaderText-1CY6", upsellText: "upsellText-2cmI", mainButton: "mainButton-17wh", learnMoreButton: "learnMoreButton-1KpL", link: "link-1SKF"
    }
}

, , , , function(e, t, a) {
    "use strict";
    a.d(t, "b", (function() {
        return r
    }
    )), a.d(t, "a", (function() {
        return s
    }
    ));
    a(7);
    var o=a(5), n=a(10), i=a(20);
    const r="People", s="Chat", c= {
        manualSupersize: null, isSidebarOpen: null, activeSidebarPane: s, sortedClientIds: []
    }
    ;
    t.c= {
        name:"roomLayout", reducer:(e=c, {
            type: t, payload: a
        }
        )=> {
            switch(t) {
                case n.a.ROOM_KNOCKED:return!e.isSidebarOpen&&window.innerWidth>i.a? {
                    ...e, isSidebarOpen: !0, activeSidebarPane: r
                }
                :e;
                case"ROOM_LAYOUT_SUPERSIZE_MANUAL_ADD":return {
                    ...e, manualSupersize: a
                }
                ;
                case"ROOM_LAYOUT_SUPERSIZE_MANUAL_REMOVE":return {
                    ...e, manualSupersize: !0
                }
                ;
                case"ROOM_LAYOUT_TOGGLE_SIDEBAR_PANE":return {
                    ...e, activeSidebarPane: a
                }
                ;
                case"ROOM_LAYOUT_OPEN_SIDEBAR":return {
                    ...e, isSidebarOpen: !0, activeSidebarPane: a||e.activeSidebarPane
                }
                ;
                case"ROOM_LAYOUT_CLOSE_SIDEBAR":return {
                    ...e, isSidebarOpen: !1
                }
                ;
                case"ROOM_LAYOUT_SET_SORTED_CLIENT_IDS":return {
                    ...e, sortedClientIds: a
                }
            }
            return e
        }
        , doToggleSidebarPane:e=>( {
            type: "ROOM_LAYOUT_TOGGLE_SIDEBAR_PANE", payload: e
        }
        ), doOpenSidebar:e=>( {
            type: "ROOM_LAYOUT_OPEN_SIDEBAR", payload: e
        }
        ), doCloseSidebar:()=>( {
            type: "ROOM_LAYOUT_CLOSE_SIDEBAR"
        }
        ), doSetSupersizedClient:( {
            id: e
        }
        )=>( {
            type: "ROOM_LAYOUT_SUPERSIZE_MANUAL_ADD", payload: e
        }
        ), doUnsetSupersizedClient:()=>( {
            type: "ROOM_LAYOUT_SUPERSIZE_MANUAL_REMOVE"
        }
        ), doReorderClients:( {
            id: e, withId: t
        }
        )=>( {
            dispatch: a, store: o
        }
        )=> {
            const n=o.selectSupersizedClientId(), i=o.selectClientViewsOnStage().map(e=>e.id), r=i.indexOf(e), s=i.indexOf(t);
            r<0||s<0||([i[s], i[r]]=[i[r], i[s]], e===n?o.doSetSupersizedClient( {
                id: t
            }
            ):t===n&&o.doSetSupersizedClient( {
                id: e
            }
            ), a( {
                type: "ROOM_LAYOUT_SET_SORTED_CLIENT_IDS", payload: i
            }
            ))
        }
        , selectRoomLayoutRaw:e=>e.roomLayout, selectIsSidebarOpen:e=>!!e.roomLayout.isSidebarOpen, selectActiveSidebarPane:e=>e.roomLayout.activeSidebarPane, selectSortedClientIds:e=>e.roomLayout.sortedClientIds, selectIsChatOpen:Object(o.f)("selectRoomLayoutRaw", e=>!!e.isSidebarOpen&&e.activeSidebarPane===s), selectIsParticipantListOpen:Object(o.f)("selectRoomLayoutRaw", e=>!!e.isSidebarOpen&&e.activeSidebarPane===r), selectSupersizedClientId:Object(o.f)("selectRoomLayoutRaw", "selectScreenshareClientIds", (e, t)=>!0===e.manualSupersize?null:e.manualSupersize||t[0]), selectSupersizedClientView:Object(o.f)("selectLocalClient", "selectRemoteClientViews", "selectShouldShowSubgrid", "selectSupersizedClientId", (e, t, a, o)=> {
            if(o) {
                const n=[e, ...t].find(e=>e.id===o);
                return a&&n&&!n.isAudioEnabled&&!n.isVideoEnabled?null: n
            }
            return null
        }
        ), selectClientViewsOnStage:Object(o.f)("selectLocalClient", "selectRemoteClientViews", "selectShouldShowSubgrid", "selectSortedClientIds", (e, t, a, o)=> {
            let n=[e, ...t];
            return a&&(n=n.filter(e=>e.isAudioEnabled||e.isVideoEnabled)), function( {
                sortedClientIds: e=[], clients: t=[]
            }
            ) {
                if(!e.length)return t;
                const a=t.filter(t=>!e.includes(t.id)).map(e=>e.id);
                return e=[...e, ...a], [...t].sort((t, a)=>e.indexOf(t.id)-e.indexOf(a.id))
            }
            ( {
                sortedClientIds: o, clients: n
            }
            )
        }
        ), selectClientViewsInGrid:Object(o.f)("selectClientViewsOnStage", "selectIsRoomIntegrationRunning", "selectSupersizedClientView", (e, t, a)=> {
            let o=e;
            return a&&!t&&(o=o.filter(e=>e.id!==a.id)), o
        }
        ), selectClientViewsInSubgrid:Object(o.f)("selectLocalClient", "selectRemoteClientViews", "selectShouldShowSubgrid", (e, t, a)=>a?[e, ...t].filter(e=>!(e.isAudioEnabled||e.isVideoEnabled)):[]), selectShouldShowRoomInvitation:Object(o.f)("selectConfigNoEmptyRoomInvitation", "selectIsTownhallMode", "selectIsRoomEmpty", (e, t, a)=>!e&&!t&&a), selectShouldShowSubgrid:Object(o.f)("selectFeatureSubgridOn", "selectIsTownhallMode", (e, t)=>t||e), reactOpenSidebarOnRoomConnected:Object(o.f)("selectRoomLayoutRaw", "selectRoomConnectionStatus", "selectKnockers", "selectDocumentSize", (e, t, a, o)=> {
            if(null===e.isSidebarOpen&&"joined"===t&&a.length>0&&o[0]>i.a)return {
                actionCreator: "doOpenSidebar", args: [r]
            }
        }
        ), reactOpenSidebarOnRoomFull:Object(o.f)("selectRoomLayoutRaw", "selectShouldShowRoomFullWarning", "selectDocumentSize", (e, t, a)=> {
            if(null===e.isSidebarOpen&&t&&a[0]>i.a)return {
                actionCreator: "doOpenSidebar", args: [r]
            }
        }
        )
    }
}

, function(e, t, a) {
    e.exports= {
        People: "People-18gT", GroupWrapper: "GroupWrapper-TFp_", GroupWrapperLabel: "GroupWrapperLabel-3Pec", BoxedGroupWrapperContent: "BoxedGroupWrapperContent-31Xe", dismissButton: "dismissButton-3A6r", roomFullWarning: "roomFullWarning-IvAS", link: "link-3K5o"
    }
}

, , function(e, t, a) {
    e.exports= {
        memberRow: "memberRow-2cS0", avatar: "avatar-1iS8", displayname: "displayname-2DTX", spacingDouble: "spacingDouble-3qVj", spacingRight: "spacingRight-1g1Q"
    }
}

, , function(e, t, a) {
    "use strict";
    a.d(t, "a", (function() {
        return i
    }
    ));
    a(7);
    var o=a(6), n=a.n(o);
    function i(e, {
        delay: t=500, edges: a
    }
    = {}
    ) {
        n.a.ok("function"===typeof e, "fn<function> is required");
        let o=null, i=0;
        return(...n)=> {
            i+=1, a&&1===i&&e(...n), clearTimeout(o), o=setTimeout(()=> {
                (!a||i>1)&&e(...n), o=null, i=0
            }
            , t)
        }
    }
}

, , function(e, t, a) {
    e.exports= {
        body: "body-1YZ5", footer: "footer-1CNy", acceptButton: "acceptButton-pVfC", dismissButton: "dismissButton-1DS0", recIcon: "recIcon-1-Sq", title: "title-1Ak7", copy: "copy-18jM"
    }
}

, function(e, t, a) {
    e.exports= {
        ChatNotification: "ChatNotification-3ygu", content: "content-1Js4", reactionContent: "reactionContent-1kKH", smallCell: "smallCell-3A2l", shortText: "shortText-2KvR", mine: "mine-2phD"
    }
}

, function(e, t, a) {
    e.exports= {
        MediaSettings: "MediaSettings-2h0j", buttons: "buttons-1NnN", advancedButton: "advancedButton-3O_o", advancedButtonChevron: "advancedButtonChevron-3tlS", header: "header-1BvM", headerText: "headerText-1iET", content: "content-1AhK", cameraPreview: "cameraPreview-QFLA", inputSelectorsWrapper: "inputSelectorsWrapper-1zbD", deviceSettingsWrapper: "deviceSettingsWrapper-yGno"
    }
}

, function(e, t, a) {
    e.exports= {
        wrapper: "wrapper-2S_W fullPage-2Bx8", isCollapsed: "isCollapsed-1C72", content: "content-on4x", sidebarContainer: "sidebarContainer-2Vky", isCollapsedPortrait: "isCollapsedPortrait-1x5v", isFloating: "isFloating-3Hb8"
    }
}

, function(e, t, a) {
    e.exports= {
        cameraPreviewContainer: "cameraPreviewContainer-1vMa", settingsButton: "settingsButton-1NRV", footerText: "footerText-1J0X", skipReviewOption: "skipReviewOption-3qqq", knockInstructions: "knockInstructions-xTZX", inputSelectorsWrapper: "inputSelectorsWrapper-2EVq", videoControlsContainer: "videoControlsContainer-2TVR"
    }
}

, , , , , , function(e, t, a) {
    e.exports= {
        ChatMessageGroup: "ChatMessageGroup-27nc", fromSelf: "fromSelf-2KbG", displayName: "displayName-ZCd8", avatarImage: "avatarImage-BK-0", timestamp: "timestamp-1t8R", content: "content-3N87"
    }
}

, function(e, t, a) {
    e.exports= {
        integrationIcon: "integrationIcon-2F7M", menuItem: "menuItem-21io", unavailable: "unavailable-2VSc", isRunning: "isRunning-3VSL", menuDivider: "menuDivider-36VX"
    }
}

, function(e, t, a) {
    e.exports= {
        WebRtcOverflowVideo: "WebRtcOverflowVideo-3bb9", hiddenContent: "hiddenContent-VM6R", content: "content-3gzG", avatarWrapper: "avatarWrapper-3Big", avatar: "avatar-1Ziu", menuButton: "menuButton-3llw"
    }
}

, function(e, t, a) {
    e.exports= {
        ChatNotificationInVideo: "ChatNotificationInVideo-2_ym", reaction: "reaction-1wpU", ChatNotification: "ChatNotification--gnr", new: "new-20WQ", expired: "expired-2aWG", replaced: "replaced-2tTA"
    }
}

, function(e, t, a) {
    e.exports= {
        Sidebar: "Sidebar-26pj", header: "header-c6Cq", segmentedControlWrapper: "segmentedControlWrapper-881L", segmentedControl: "segmentedControl-1Yxx", sidebarButton: "sidebarButton-2RsN", content: "content-3fSc"
    }
}

, , , , , , , function(e, t, a) {
    "use strict";
    (function(e) {
        var o=a(0), n=a.n(o), i=a(1), r=a.n(i), s=a(8), c=a(308), l=a(3), d=a(40), u=a(39), m=a(155);
        function p() {
            e.location.href="/"
        }
        function g( {
            error: e, isPhoneResolution: t, onAccept: a
        }
        ) {
            const o=c.a(e), {
                headerText: i, bodyText: r, includeRoomHeader: s, customFooter: g
            }
            =function(e) {
                switch(e) {
                    case"room_full":return {
                        headerText:"Sorry, this room is full", bodyText:"We've let the room owner know that someone attempted to enter. Please try to join the room again later", includeRoomHeader:!0, customFooter:n.a.createElement(l.d, {
                            onClick: ()=>document.location.reload(), modifiers: ["full", "small"]
                        }
                        , "Try again")
                    }
                    ;
                    case"kicked":return {
                        headerText: "Meeting ended", bodyText: "You've been removed from the room. If this is a surprise, please contact the room owner."
                    }
                    ;
                    default:return {
                        headerText: "Sorry, something went wrong", bodyText: e
                    }
                }
            }
            (o), h=g||n.a.createElement(l.d, {
                onClick: a||p, modifiers: ["full", "small"]
            }
            , "Got It");
            return n.a.createElement(m.a, null, n.a.createElement(u.a, {
                isFullscreen: t, footer: h
            }
            , s&&n.a.createElement(d.a, null), n.a.createElement(l.e, {
                modifiers: ["warning"]
            }
            , n.a.createElement("h1", null, i), n.a.createElement("p", null, r))))
        }
        g.propTypes= {
            error: r.a.oneOfType([r.a.string, r.a.object]).isRequired, isPhoneResolution: r.a.bool.isRequired, onAccept: r.a.func
        }
        , t.a=Object(s.b)("selectIsPhoneResolution", g)
    }
    ).call(this, a(15))
}

, function(e, t, a) {
    "use strict";
    var o=a(2), n=a.n(o), i=a(1), r=a.n(i), s=a(0), c=a.n(s), l=a(217), d=a.n(l);
    function u() {
        return(u=Object.assign||function(e) {
            for(var t=1;
            t<arguments.length;
            t++) {
                var a=arguments[t];
                for(var o in a)Object.prototype.hasOwnProperty.call(a, o)&&(e[o]=a[o])
            }
            return e
        }
        ).apply(this, arguments)
    }
    function m( {
        classNames: e, ...t
    }
    ) {
        return c.a.createElement("div", u( {
            className: n()(e, d.a.RotatingSpinner)
        }
        , t), c.a.createElement("svg", {
            className: d.a.RotatingSpinnerImage, width: "136", height: "136", viewBox: "0 0 136 136", xmlns: "http://www.w3.org/2000/svg"
        }
        , c.a.createElement("g", {
            transform: "rotate(15 56.533 77.24)", strokeWidth: "4.5", fill: "none", fillRule: "evenodd"
        }
        , c.a.createElement("circle", {
            stroke: "#6a6feb", cx: "65.52", cy: "65.52", r: "65.52"
        }
        ), c.a.createElement("path", {
            d: "M65.52 131.05c36.2 0 65.53-29.34 65.53-65.53C131.05 29.34 101.7 0 65.52 0S0 29.34 0 65.52", stroke: "#6a6feb"
        }
        ), c.a.createElement("path", {
            d: "M65.52 0C29.34 0 0 29.34 0 65.52", stroke: "#ff7e6c"
        }
        ))))
    }
    m.propTypes= {
        classNames: r.a.string
    }
    , t.a=m
}

, function(e, t, a) {
    "use strict";
    a(7);
    var o=a(0);
    const n= {
        isMenuVisible: !1, buttonHover: !1, menuHover: !1
    }
    ;
    function i(e, t) {
        switch(t.type) {
            case"buttonHover":return {
                ...e, buttonHover: !0, isMenuVisible: !0
            }
            ;
            case"buttonBlur":return {
                ...e, buttonHover:!1, ...!e.menuHover&& {
                    isMenuVisible: !1
                }
            }
            ;
            case"menuHover":return {
                ...e, menuHover: !0, isMenuVisible: !0
            }
            ;
            case"menuBlur":return {
                ...e, menuHover:!1, ...!e.buttonHover&& {
                    isMenuVisible: !1
                }
            }
            ;
            case"menuToggle":return {
                ...e, isMenuVisible: !e.isMenuVisible
            }
            ;
            case"menuClose":return {
                ...e, menuHover: !1, buttonHover: !1, isMenuVisible: !1
            }
        }
        return e
    }
    t.a=function() {
        const[ {
            isMenuVisible: e
        }
        , t]=Object(o.useReducer)(i, n), a=Object(o.useRef)(null), r=Object(o.useCallback)(()=>a.current=setTimeout(()=> {
            a.current=null, t( {
                type: "buttonBlur"
            }
            )
        }
        , 150), [t]), s=Object(o.useCallback)(()=> {
            clearTimeout(a.current), e||t( {
                type: "buttonHover"
            }
            )
        }
        , [t, e, a]), c=Object(o.useCallback)(()=>t( {
            type: "menuHover"
        }
        ), [t]), l=Object(o.useCallback)(()=>t( {
            type: "menuBlur"
        }
        ), [t]), d=Object(o.useCallback)(()=>t( {
            type: "menuToggle"
        }
        ), [t]), u=Object(o.useCallback)(()=>t( {
            type: "menuClose"
        }
        ), [t]);
        return {
            isMenuVisible: e, onButtonBlur: r, onButtonHover: s, onCloseMenu: u, onMenuHover: c, onMenuBlur: l, onToggle: d
        }
    }
}

, , function(e, t, a) {
    e.exports= {
        wrapper: "wrapper-3SN2 fullPage-2Bx8", bottomShade: "bottomShade-3RkA", fadeIn: "fadeIn-MGYs", horizontallyCentered: "horizontallyCentered-tfW-", verticallyCentered: "verticallyCentered-MFOm"
    }
}

, function(e, t, a) {
    e.exports= {
        LoadingScreen: "LoadingScreen-2UIR", spinnerWrapper: "spinnerWrapper-2z5M", "LoadingScreen--fullPage": "LoadingScreen--fullPage-3k-c fullPage-2Bx8", why: "why-EfQs", "why--visible": "why--visible-U59P"
    }
}

, function(e, t, a) {
    e.exports= {
        component: "component-17lm", chatMessages: "chatMessages-26Ff", scrollDetector: "scrollDetector-1SoB", unreadMessagesIndicator: "unreadMessagesIndicator-1QcW", chatMessageInput: "chatMessageInput-26K9", downloadChatHistoryButton: "downloadChatHistoryButton-2RYP"
    }
}

, function(e, t, a) {
    e.exports= {
        EmojiPicker: "EmojiPicker-qexQ", emojiBody: "emojiBody-30M3", emojiFooter: "emojiFooter-1dry", emojiButton: "emojiButton-14Qw", emoji: "emoji-1_Rx"
    }
}

, function(e, t, a) {
    e.exports= {
        EmptyRoomInvitation: "EmptyRoomInvitation-3hQj", shareButton: "shareButton-2XiQ", content: "content-3V6l", title: "title-2Oex", linkInput: "linkInput-1w3T", newBranding: "newBranding-2ea8"
    }
}

, function(e, t, a) {
    e.exports= {
        VideoCell: "VideoCell-2RSl", VideoCellContent: "VideoCellContent-Vl4m", withRoundedCorners: "withRoundedCorners-1g8w", withShadow: "withShadow-3bdU", isConstrained: "isConstrained-UWWw"
    }
}

, function(e, t, a) {
    e.exports= {
        title: "title-2Unr", helpText: "helpText-3wgB"
    }
}

, function(e, t, a) {
    e.exports= {
        settingsSection: "settingsSection-13LP", settingsSectionBody: "settingsSectionBody-1Ek3", settingsSectionIcon: "settingsSectionIcon-23Jz", settingsSectionRight: "settingsSectionRight-1jDx"
    }
}

, , , , , , , , , function(e, t, a) {
    "use strict";
    var o=a(0), n=a.n(o), i=a(1), r=a.n(i), s=a(2), c=a.n(s), l=a(318), d=a.n(l);
    function u( {
        children: e, onClick: t
    }
    ) {
        return n.a.createElement("div", {
            className: c()("jstest-waiting-notification", d.a.HeadsUpNotification), onClick: t
        }
        , e)
    }
    u.propTypes= {
        children: r.a.node.isRequired, onClick: r.a.func
    }
    , t.a=u
}

, , , , , , , , function(e, t, a) {
    e.exports= {
        chooseAppButtons: "chooseAppButtons-3dE3", chooseAppButton: "chooseAppButton-1INA", betaLabel: "betaLabel-9jxw"
    }
}

, function(e, t, a) {
    e.exports= {
        ChatMessageInput: "ChatMessageInput-1AwJ", inputField: "inputField-3uQ0", submitButton: "submitButton-BF-L", chatReactions: "chatReactions-1eEv"
    }
}

, function(e, t, a) {
    e.exports= {
        dragIndicator: "dragIndicator-1r6t", dropTargetIndicator: "dropTargetIndicator-1Kty", DragOverlay: "DragOverlay-Zwsf", withRoundedCorners: "withRoundedCorners-SHaC"
    }
}

, function(e, t, a) {
    e.exports= {
        menuHeader: "menuHeader-1sxj", "menuHeader--withDivider": "menuHeader--withDivider-2Ijq", menuAvatar: "menuAvatar-1ug9", menuName: "menuName-31cs"
    }
}

, function(e, t, a) {
    e.exports= {
        RosterList: "RosterList-3PNI", itemsWrapper: "itemsWrapper-1vyw", rosterListItem: "rosterListItem-3Y5M"
    }
}

, function(e, t, a) {
    e.exports= {
        settingsPopover: "settingsPopover-3pMi", hidden: "hidden-1Y12", header: "header-3Vbx"
    }
}

, function(e, t, a) {
    e.exports= {
        ToggleSwitch: "ToggleSwitch-3OJa", "ToggleSwitch--active": "ToggleSwitch--active-2WX9", "ToggleSwitch--disabled": "ToggleSwitch--disabled-glak", ball: "ball-1qCu"
    }
}

, , , , , , , , , , , , , , , , , , , , , , , function(e, t, a) {
    "use strict";
    var o=a(304);
    t.a=Object(o.a)( {
        version: 2, name: "pwa-cache"
    }
    )
}

, function(e, t, a) {
    "use strict";
    a.d(t, "a", (function() {
        return l
    }
    ));
    a(7);
    var o=a(0), n=a.n(o), i=a(67);
    function r() {
        const e=window&&window.getComputedStyle(document.documentElement), t=t=>e&&parseInt(e.getPropertyValue(t), 10)||0;
        return {
            top: t("--safe-area-inset-top"), right: t("--safe-area-inset-right"), bottom: t("--safe-area-inset-bottom"), left: t("--safe-area-inset-left")
        }
    }
    document&&(document.documentElement.style.setProperty("--safe-area-inset-top", "env(safe-area-inset-top)"), document.documentElement.style.setProperty("--safe-area-inset-right", "env(safe-area-inset-right)"), document.documentElement.style.setProperty("--safe-area-inset-bottom", "env(safe-area-inset-bottom)"), document.documentElement.style.setProperty("--safe-area-inset-left", "env(safe-area-inset-left)"));
    const s=(e, t)=> {
        switch(t.type) {
            case"update":return {
                ...e, ...t.newDimensions
            }
        }
        return e
    }
    , c=()=>( {
        windowSize: {
            width: document.documentElement.clientWidth, height: document.documentElement.clientHeight
        }
        , safeAreaInsets:r()
    }
    ), l=e=> {
        const[t, a]=n.a.useReducer(s, {}
        , c);
        return n.a.useEffect(()=> {
            const t=()=> {
                const e=c();
                a( {
                    type: "update", newDimensions: e
                }
                )
            }
            , o=e?t:Object(i.a)(t, {
                delay: 60
            }
            );
            return window.addEventListener("resize", o), ()=>window.removeEventListener("resize", o)
        }
        , [e]), t
    }
}

, function(e, t, a) {
    "use strict";
    a.d(t, "a", (function() {
        return c
    }
    ));
    var o=a(0), n=a.n(o), i=a(3), r=a(323), s=a.n(r);
    function c() {
        return n.a.createElement(i.a, {
            className: s.a.IntegrationUpsell, href: "/user/order/details?utm_source=appearin&utm_campaign=integrations_upsell&utm_medium=web", target: "_blank", modifiers: ["button", "button-extraSmall"]
        }
        , "Upgrade")
    }
}

, function(e, t, a) {
    "use strict";
    a(7);
    var o=a(0), n=a.n(o), i=a(1), r=a.n(i), s=a(2), c=a.n(s), l=a(3), d=a(119), u=a.n(d), m=a(151);
    function p( {
        autoFocus: e, onMessageSubmit: t, hideEmojiPicker: a
    }
    ) {
        const[i, r]=Object(o.useState)(""), [s, d]=Object(o.useState)(0), p=Object(o.useRef)(), g=Object(o.useCallback)(e=> {
            const t=e.length, a=p.current, {
                selectionStart: o, selectionEnd: n
            }
            =a;
            d(o+t), r(t=>`$ {
                t.substring(0, o)
            }
            $ {
                e
            }
            $ {
                t.substring(n)
            }
            `)
        }
        , [d, r]);
        Object(o.useEffect)(()=> {
            requestAnimationFrame(()=> {
                const e=p.current;
                e&&(e.focus(), e.selectionStart=s, e.selectionEnd=s)
            }
            )
        }
        , [s]);
        return n.a.createElement("form", {
            onSubmit:function(e) {
                e.preventDefault(), i&&(t(i), r(""))
            }
            , className:c()("jstest-chatmessage-input-form", u.a.ChatMessageInput)
        }
        , !a&&n.a.createElement(m.a, {
            onSelect: g
        }
        , ( {
            onToggle: e
        }
        )=>n.a.createElement("button", {
            type: "button", onClick: e, className: c()("jstest-emoji-picker-toggle", u.a.chatReactions)
        }
        , n.a.createElement(l.G, {
            modifiers: ["sized", "primary"]
        }
        ))), n.a.createElement("input", {
            autoComplete: "off", autoFocus: e, name: "message", placeholder: "Send a chat message...", className: c()("jstest-chatmessage-input-field", u.a.inputField), value: i, onChange: e=>r(e.target.value), maxLength: "1000", ref: p
        }
        ), n.a.createElement(l.d, {
            type: "submit", modifiers: ["extraSmall", "primary", "invisible"], className: c()("jstest-send-button", u.a.submitButton)
        }
        , "Send"))
    }
    p.propTypes= {
        autoFocus: r.a.bool.isRequired, hideEmojiPicker: r.a.bool, onMessageSubmit: r.a.func.isRequired
    }
    , t.a=p
}

, function(e, t, a) {
    "use strict";
    var o=a(2), n=a.n(o), i=a(1), r=a.n(i), s=a(0), c=a.n(s), l=a(30), d=a.n(l), u=a(97), m=a.n(u), p=a(92);
    const g= {
        1: "\ud83d\udc4d", 2: "\ud83d\udc4e", 3: "\ud83d\udc4f", 4: "\ud83d\ude02", 5: "\ud83c\udf89", 6: "\ud83d\ude0d", 7: "\ud83d\ude2e", 8: "\ud83e\udd14", 9: "\ud83d\udc4b", 0: "\u270b"
    }
    ;
    function h( {
        onSelect: e, footer: t, children: a
    }
    ) {
        const {
            isMenuVisible: o, onButtonBlur: i, onButtonHover: r, onCloseMenu: l, onMenuHover: u, onMenuBlur: h, onToggle: f
        }
        =Object(p.a)(), b=Object(s.useMemo)(()=>c.a.createElement("div", {
            className: n()("jstest-emoji-picker", m.a.EmojiPicker), onMouseEnter: u, onMouseLeave: h
        }
        , c.a.createElement("div", {
            className: m.a.emojiBody
        }
        , Object.keys(g).map(t=> {
            const a=g[t];
            return c.a.createElement("button", {
                className:m.a.emojiButton, key:t, onClick:()=> {
                    e(a), l()
                }
                , accessKey:t
            }
            , c.a.createElement("span", {
                className: m.a.emoji
            }
            , a))
        }
        )), t&&c.a.cloneElement(t, {
            onToggle: f, classNames: m.a.emojiFooter
        }
        )), [t, h, u, e, l, f]);
        return c.a.createElement(d.a, {
            containerClassName:n()("jstest-emojipicker-popover", d.a.defaultProps.containerClassName), isOpen:o, padding:8, transitionDuration:.01, containerStyle: {
                overflow: "visible"
            }
            , content:b, onClickOutside:e=>(e.stopPropagation(), l(), !1)
        }
        , a( {
            onButtonBlur: i, onButtonHover: r, onToggle: f, isMenuVisible: o
        }
        ))
    }
    h.propTypes= {
        children: r.a.func.isRequired, footer: r.a.element, onSelect: r.a.func.isRequired
    }
    , t.a=h
}

, function(e, t, a) {
    "use strict";
    (function(e) {
        a.d(t, "a", (function() {
            return s
        }
        ));
        var o=a(326);
        const n=()=> {}
        , i= {}
        ;
        function r( {
            audioContext: e, audioBuffer: t, outputId: a
        }
        ) {
            return new Promise(i=> {
                const r=e.createBufferSource();
                r.buffer=t, function( {
                    source: e, outputId: t, audioContext: a
                }
                ) {
                    if("default"===t||!Object(o.a)())return e.connect(a.destination), Promise.resolve(n);
                    const i=new Audio;
                    return i.setSinkId(t).then(()=> {
                        const t=a.createMediaStreamDestination();
                        return i.srcObject=t.stream, i.play(), e.connect(t), ()=> {
                            t.disconnect(), setTimeout(()=> {
                                i.pause(), i.srcObject=null
                            }
                            , 300)
                        }
                    }
                    )
                }
                ( {
                    source: r, outputId: a, audioContext: e
                }
                ).then(e=> {
                    let t=!0;
                    const a=[], o=()=> {
                        t=!1, r.disconnect(), r.buffer=null, r.removeEventListener("ended", o), a.forEach(e=>e()), a.length=0, e()
                    }
                    ;
                    r.addEventListener("ended", o), r.start(), i( {
                        stop() {
                            t=!1, r.stop()
                        }
                        , get isPlaying() {
                            return t
                        }
                        , onEnded(e) {
                            a.push(e)
                        }
                    }
                    )
                }
                )
            }
            )
        }
        function s(t="playback") {
            if(!i[t]) {
                const a=new(e.AudioContext||e.webkitAudioContext);
                i[t]= {
                    audioContext:a, loadAudio:e=>function( {
                        audioContext: e, src: t
                    }
                    ) {
                        return fetch(t).then(e=>e.arrayBuffer()).then(t=>new Promise((a, o)=> {
                            e.decodeAudioData(t, e=> {
                                a(e)
                            }
                            , o)
                        }
                        ))
                    }
                    ( {
                        audioContext: a, src: e
                    }
                    ), play:( {
                        audioBuffer: e, outputId: t
                    }
                    )=>r( {
                        audioContext: a, audioBuffer: e, outputId: t
                    }
                    ), unlockSafari:()=>function(e) {
                        const t=e.createBufferSource();
                        t.buffer=e.createBuffer(1, 1, 22050), t.connect(e.destination);
                        const a=()=> {
                            t.disconnect(), t.buffer=null, t.removeEventListener("ended", a)
                        }
                        ;
                        t.addEventListener("ended", a), t.start()
                    }
                    (a), close:()=> {
                        a.close(), Object.keys(i[t]).forEach(e=> {
                            delete i[t][e]
                        }
                        ), delete i[t]
                    }
                }
            }
            return i[t]
        }
    }
    ).call(this, a(15))
}

, , function(e, t, a) {
    "use strict";
    a(7);
    var o=a(5), n=a(125), i=a(342), r=a(33);
    const {
        subdomain: s
    }
    =r.a;
    function c(e, t) {
        return {
            amplitude: {
                eventName:e, eventProperties: {
                    ...s&& {
                        subdomain: s
                    }
                    , ...t
                }
            }
        }
    }
    function l() {
        try {
            return window.location!==window.parent.location
        }
        catch(e) {
            return!0
        }
    }
    const d=()=>c("Audio enabled"), u=()=>c("Audio disabled"), m=( {
        error: e
    }
    )=>c("Cam/Mic: error msg shown", {
        error: e
    }
    ), p=( {
        isReaction: e
    }
    )=>c("Chat: message sent", {
        isReaction: e
    }
    ), g=( {
        experimentName: e, featureSource: t
    }
    )=>c("Experiment: button clicked", {
        experimentName: e, featureSource: t
    }
    ), h=( {
        roomMode: e, roomName: t, roomType: a, roomProduct: o, numClients: n, userRoleName: i, roomSessionId: r, roomSessionStart: l, roomSessionElapsedTimeInSeconds: d, roomSessionRelativeJoinTimeInSeconds: u, roomSessionClientElapsedTimeInSeconds: m
    }
    )=> {
        return {
            ...c("In a conversation", {
                roomMode: e, roomName: t, roomType: a, roomProduct: o, numClients: n, userRoleName: i, roomSessionId: r, roomSessionStart: l, roomSessionElapsedTimeInSeconds: d, roomSessionRelativeJoinTimeInSeconds: u, roomSessionClientElapsedTimeInSeconds: m
            }
            ), ...(p="In a conversation", {
                intercom: {
                    eventName:p, eventProperties: {
                        ...s&& {
                            subdomain: s
                        }
                        , ...g
                    }
                }
            }
            )
        }
        ;
        var p, g
    }
    , f=( {
        clientCount: e
    }
    )=>function( {
        category: e, action: t, label: a, value: o, dimensions: n
    }
    ) {
        return {
            googleAnalytics: {
                category: e, action: t, label: a, value: o, dimensions: n
            }
        }
    }
    ( {
        category:"In Room", action:"Minute elapsed", label:"Minute elapsed in conversation", value:e, dimensions: {
            dimension5: e
        }
    }
    ), b=( {
        stepName: e, roomProduct: t, roomName: a, roomType: o
    }
    )=>c("Precall: entered", {
        stepName: e, roomProduct: t, roomName: a, roomType: o
    }
    ), E=( {
        openInApp: e
    }
    )=>c("Precall: ios platform selected", {
        openInApp: e
    }
    ), R=e=>c("Precall: skip review set", {
        skip: e
    }
    ), S=()=>c("Recording: Started recording"), I=()=>c("Recording: Stopped recording"), v=( {
        exitMethod: e, roomName: t, roomType: a, roomProduct: o, numClients: n, userRoleName: i, roomSessionId: r, roomSessionStart: s, roomSessionElapsedTimeInSeconds: l, roomSessionRelativeJoinTimeInSeconds: d, roomSessionClientElapsedTimeInSeconds: u
    }
    )=>c("Room: exited", {
        exitMethod: e, roomName: t, roomType: a, roomProduct: o, numClients: n, userRoleName: i, roomSessionId: r, roomSessionStart: s, roomSessionElapsedTimeInSeconds: l, roomSessionRelativeJoinTimeInSeconds: d, roomSessionClientElapsedTimeInSeconds: u
    }
    ), C=( {
        roomProduct: e
    }
    )=>c("Room: full", {
        roomProduct: e
    }
    ), y=( {
        isRoomOwner: e, roomProduct: t
    }
    )=>c("Room: help", {
        isRoomOwner: e, roomProduct: t
    }
    ), O=( {
        integrationName: e, numClients: t, featureSource: a
    }
    )=>c("Room integration: started", {
        integrationName: e, numClients: t, featureSource: a
    }
    ), w=( {
        integrationName: e
    }
    )=>c("Room integration: stopped", {
        integrationName: e
    }
    ), N=()=>c("Knock: knocked"), T=( {
        response: e
    }
    )=>c("Knock: response", {
        response: e
    }
    ), A=()=>c("Room: link copied"), k=e=>c("Room: toggle lock", {
        locked: e
    }
    ), _=()=>c("Screen share: activated"), L=()=>c("Screen share: ended"), D=()=>c("Video enabled"), P=()=>c("Video disabled"), M=()=>c("Video name change saved"), j=( {
        noOfParticipants: e, roomClaimed: t, roomName: a, roomType: o, userRoleName: n
    }
    )=>c("Visited room", {
        isEmbedded: l(), noOfParticipants: e, pageURL: window.location.href, roomClaimed: t, roomName: a, roomType: o, userRoleName: n
    }
    ), F=()=>c("Website: visited", {
        isEmbedded: l(), pageURL: window.location.href
    }
    );
    const x=function() {
        const e=new i.a( {
            isEnabled: !1
        }
        ), t=new n.a( {
            isEnabled: !0, logger: e, platform: window.navigator&&/Android.*(Whereby|Appearin)/.test(window.navigator.userAgent)?"Android app": "pwa"
        }
        );
        window.ga=window.ga||function() {
            (window.ga.q=window.ga.q||[]).push(arguments)
        }
        , window.ga.l=window.PAGE_LOADED, window.ga("create", "UA-42631098-1", "auto"), window.ga("send", "pageview");
        const a=new n.b( {
            logger: e, googleAnalytics: window.ga
        }
        );
        a.enable();
        const o=new n.c( {
            logger: e, appId: "mk8uzwtx", isEnabled: !0
        }
        );
        return new n.d( {
            amplitudeService: t, googleAnalyticsService: a, intercomService: o, logger: e
        }
        )
    }
    (), q= {
        keepAliveSent: 0
    }
    , B=e=> {
        const t=e.selectRoomSessionElapsedTime(), a=e.selectRoomSessionRelativeJoinTime(), o=t-a;
        return {
            roomMode: e.selectRoomMode(), roomName: e.selectRoomName(), roomProduct: e.selectRoomProduct(), roomType: e.selectRoomType(), numClients: e.selectNumClients(), userRoleName: e.selectLocalClientRole(), roomSessionId: e.selectRoomSessionId(), roomSessionStart: e.selectRoomSessionStartTime()&&new Date(e.selectRoomSessionStartTime()), roomSessionElapsedTimeInSeconds: Math.floor(t/1e3), roomSessionRelativeJoinTimeInSeconds: Math.floor(a/1e3), roomSessionClientElapsedTimeInSeconds: Math.floor(o/1e3)
        }
    }
    ;
    var U= {
        name:"analytics", init:e=> {
            window.addEventListener("beforeunload", ()=> {
                e.doRoomExitAnalytics("unload")
            }
            )
        }
        , reducer:(e=q, {
            type: t, payload: a
        }
        )=> {
            switch(t) {
                case"ANALYTICS":return {
                    ...e, [a]: !0
                }
                ;
                case"ANALYTICS_KEEP_ALIVE":return {
                    ...e, keepAliveSent: a
                }
            }
            return e
        }
        , getMiddleware:()=>()=>e=>t=>(t.meta&&t.meta.analytics&&x.sendEvent(t.meta.analytics), e(t)), selectAnalyticsRaw:e=>e.analytics, doRoomExitAnalytics:e=>( {
            dispatch: t, store: a
        }
        )=> {
            t( {
                type:"ANALYTICS", payload:"roomExited", meta: {
                    analytics:v( {
                        ...B(a), exitMethod: e
                    }
                    )
                }
            }
            )
        }
        , doRoomLinkCopiedAnalytics:()=>( {
            type:"ANALYTICS", payload:"roomLinkCopied", meta: {
                analytics: A()
            }
        }
        ), doWebsiteVisitedAnalytics:()=>( {
            dispatch: e, store: t
        }
        )=> {
            e( {
                type:"ANALYTICS", payload:"websiteVisited", meta: {
                    analytics:F( {
                        roomName: t.selectRoomName()
                    }
                    )
                }
            }
            )
        }
        , doIdentifyUserAnalytics:()=>( {
            dispatch: e, store: t
        }
        )=> {
            const a=t.selectUser(), o=t.selectConfigNoIntercom(), n=t.selectIsRoomOwner(), i=t.selectIsPublicOrganization(), r=t.selectCanCancelSubscription();
            x.identifyUser(a, {
                isIntercomEnabledForUser: !o&&!!(n&&r||!i&&a.userId)
            }
            ), e( {
                type: "ANALYTICS", payload: "identifyUser"
            }
            )
        }
        , doInAConversationAnalytics:()=>( {
            dispatch: e, store: t
        }
        )=> {
            e( {
                type:"ANALYTICS", payload:"inAConversation-"+t.selectRoomSessionId(), meta: {
                    analytics: h(B(t))
                }
            }
            )
        }
        , doLocalStreamErrorAnalytics:e=>( {
            dispatch: t, store: a
        }
        )=> {
            t( {
                type:"ANALYTICS", payload:"localStreamErrortracked", meta: {
                    analytics:m( {
                        error: e||a.selectLocalStreamError().name
                    }
                    )
                }
            }
            )
        }
        , doPrecallEnteredAnalytics:e=>( {
            dispatch: t, store: a
        }
        )=> {
            t( {
                type:"ANALYTICS", payload:"precallEntered", meta: {
                    analytics:b( {
                        stepName: e, roomName: a.selectRoomName(), roomProduct: a.selectRoomProduct(), roomType: a.selectRoomType()
                    }
                    )
                }
            }
            )
        }
        , doMinuteElapsedAnalytics:()=>( {
            dispatch: e, store: t
        }
        )=> {
            const a=t.selectNumClients(), {
                keepAliveSent: o
            }
            =t.selectAnalyticsRaw();
            e( {
                type:"ANALYTICS_KEEP_ALIVE", payload:t.selectAppTime(), ...0!==o&& {
                    meta: {
                        analytics:f( {
                            clientCount: a
                        }
                        )
                    }
                }
            }
            )
        }
        , doRoomFullAnalytics:()=>( {
            dispatch: e, store: t
        }
        )=> {
            e( {
                type:"ANALYTICS", payload:"roomFull", meta: {
                    analytics:C( {
                        roomProduct: t.selectRoomProduct()
                    }
                    )
                }
            }
            )
        }
        , doVisitedRoomAnalytics:()=>( {
            dispatch: e, store: t
        }
        )=> {
            e( {
                type:"ANALYTICS", payload:"visitedRoom", meta: {
                    analytics:j( {
                        roomName: t.selectRoomName(), roomType: t.selectRoomType(), roomClaimed: !t.selectIsRoomUnclaimed(), noOfParticipants: t.selectNumClients(), userRoleName: t.selectLocalClientRole()
                    }
                    )
                }
            }
            )
        }
        , reactMinuteElapsedAnalytics:Object(o.f)("selectAnalyticsRaw", "selectApplicationState", "selectAppTime", (e, t, a)=> {
            if(!["kicked", "left"].includes(t)&&a-e.keepAliveSent>=6e4)return {
                actionCreator: "doMinuteElapsedAnalytics"
            }
        }
        ), reactWebsiteVisited:Object(o.f)("selectAnalyticsRaw", e=>!e.websiteVisited&& {
            actionCreator: "doWebsiteVisitedAnalytics"
        }
        ), reactInAConversationAnalytics:Object(o.f)("selectAnalyticsRaw", "selectNumClients", "selectRoomSessionId", (e, t, a)=> {
            if(!e["inAConversation-"+a]&&t>1)return {
                actionCreator: "doInAConversationAnalytics"
            }
        }
        ), reactLocalStreamErrorAnalytics:Object(o.f)("selectAnalyticsRaw", "selectLocalStreamError", (e, t)=> {
            if(t&&!e.localStreamErrortracked&&["nodevices", "NotAllowedError", "NotReadableError"].includes(t.name))return {
                actionCreator: "doLocalStreamErrorAnalytics"
            }
        }
        ), reactRoomFullAnalytics:Object(o.f)("selectAnalyticsRaw", "selectShouldShowRoomFullWarning", (e, t)=> {
            if(!e.roomFull&&t)return {
                actionCreator: "doRoomFullAnalytics"
            }
        }
        ), reactVisitedRoomAnalytics:Object(o.f)("selectAnalyticsRaw", "selectApplicationState", (e, t)=> {
            if(!e.visitedRoom&&"joined"===t)return {
                actionCreator: "doVisitedRoomAnalytics"
            }
        }
        ), reactUserIdentifiedAnalytics:Object(o.f)("selectAnalyticsRaw", "selectHasUserFetched", "selectHasOrganizationFetched", (e, t, a)=>!(e.identifyUser||!t||!a)&& {
            actionCreator: "doIdentifyUserAnalytics"
        }
        ), reactRoomExitAnalytics:Object(o.f)("selectAnalyticsRaw", "selectApplicationState", (e, t)=>!(e.roomExited||!/kicked|left/.test(t))&& {
            actionCreator: "doRoomExitAnalytics", args: [t]
        }
        )
    }
    ;
    const z=document.createElement("video");
    let H=z&&z.canPlayType&&"probably"===z.canPlayType('video/webm; codecs="vp8", vorbis');
    const V=!!window.RTCPeerConnection;
    let W=!1;
    (navigator.getDisplayMedia||navigator.mediaDevices&&navigator.mediaDevices.getDisplayMedia)&&(W=!0), /^(https:|chrome-extension:)$/g.test(location.protocol||"")||(W=!1);
    var G= {
        name:"browserSupport", doTrackIosPlatformSelected:( {
            openInApp: e
        }
        )=>( {
            type:"BROWSERSUPPORT_TRACK_IOS_PLATFORM_SELECTED", meta: {
                analytics:E( {
                    openInApp: e
                }
                )
            }
        }
        ), doBrowserSupportAcceptPartial:()=>( {
            type:"BROWSERSUPPORT_ACCEPT_PARTIAL", meta: {
                persist: {
                    browserSupportAcceptedPartial: Date.now()
                }
            }
        }
        ), selectBrowserFeatures:()=> {
            const e=navigator.userAgent, t=/Version[^\d]*(\d+)\.(\d+)/.exec(e), a=t? {
                major: parseInt(t[1]), minor: parseInt(t[2])
            }
            : {}
            , o=e.includes("Safari")&&!e.includes("Chrome")&&!e.includes("Edge/");
            return H=H||o&&a.major>=13, {
                browserVersion: a, isFullySupported: V&&W&&H, isIos: /iPad|iPhone|iPod/.test(e), isScreenCapturingSupported: W, isWebRTCSupported: V, isSFUSupported: H, isSafari: o
            }
        }
        , selectBrowserSupportIgnored:Object(o.f)("selectPersisted", "selectAppStartTime", (e, t)=>e.browserSupportAcceptedPartial+864e5>t), selectCanJoinUsingIosBrowser:Object(o.f)("selectBrowserFeatures", "selectFeatureIosVersionCheckOff", (e, t)=>e.isIos&&e.isSafari&&(t||e.browserVersion.major>=13)), selectShouldShowBrowserSupport:Object(o.f)("selectBrowserFeatures", "selectBrowserSupportIgnored", (e, t)=>!t&&(e.isIos||!e.isFullySupported))
    }
    , K=a(10);
    var $=a(343), Y=a.n($);
    const Z=/((?:https?(?::\/\/))(?:www\.)?(?:[a-zA-Z\d-_.]+(?:\.[a-zA-Z\d] {
        2,
    }
    )|localhost)(?:(?:[-a-zA-Z\d:%_+.~#!?& //=@]*)(?:[,](?![\s]))*)*)/g,J=e=>["\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f","\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f"].includes(e)||/^(\ue50a|([\u00a9\u00ae]\ufe0f)|([\u0023\u002a\u0030-\u0039]\u20e3)|(\ud83c[\udde0-\uddff]\ud83c[\udde0-\uddff])|(([\ud83c-\ud83e]|[\u2030-\u3300])[\ud000-\udfff]?([\ud83c][\udff0-\udfff])?[\ufe00-\ufe0f]?(\u200d(([\ud83c-\ud83e]|[\u2030-\u3300])[\ud000-\udfff]?([\ud83c][\udff0-\udfff])?[\ufe00-\ufe0f]?))*))$/.test(e);function Q(e){const t=e.match(Z);return t&&0!==t.length?{previewUrl:t[0]}:null}function X(e,t){if(!e)return;const a=t.find(t=>t.matcher.test(e));return a?{integration:{config:e.match(a.matcher).shift(),roomIntegration:a}}:null}function ee({senderId:e,text:t,timestamp:a,uuidFn:o=Y.a}){return{localId:o(),senderId:e,text:t,timestamp:new Date(a).getTime()}}const te=e=>({displayName:e.displayName||void 0,avatarUrl:e.avatarUrl||void 0}),ae=({chatMessage:e,urlMetadata:t})=>({...e,urlMetadata:t}),oe=({chatMessage:e,selfId:t,userMetadata:a,urlMetadata:o})=>({senderId:e.senderId,...a,fromSelf:t===e.senderId,localId:`${e.localId}_group`,messages:[ae({chatMessage:e,urlMetadata:o})]}),ne={chatMessages:[],chatUsersByClientId:{},isChatOpen:!1,unreadMessageCount:0,urlMetadata:{}};const ie=function(e){const t=[];function a(e){const a=t.indexOf(e);t.splice(a,1)}function o(){const e=t.findIndex(e=>void 0===e.isRunning);if(e<0)return;const a=t[e];a.isRunning=!0,a()}return{runWorker:function(n){return new Promise((i,r)=>{const s=()=>n().then(e=>{a(s),i(e),o()}).catch(e=>{a(s),r(e),o()});t.push(s),t.length<=e&&(s.isRunning=!0,s())})},workers:t}}(2);var re={name:"chat",reducer:(e=ne,{type:t,payload:a})=>{switch(t){case K.a.CHAT_MESSAGE:return{...e,chatMessages:[...e.chatMessages,ee(a)],unreadMessageCount:e.isChatOpen?0:e.unreadMessageCount+(document.hasFocus()||J(a.text)?0:1)};case K.a.CLIENT_METADATA_RECEIVED:return"UserData"===a.type?{...e,chatUsersByClientId:{...e.chatUsersByClientId,[a.payload.clientId]:{...te(a.payload)}}}:e;case"CHAT_FETCH_URL_METADATA_STARTED":return{...e,urlMetadata:{[a.url]:{status:"started",url:a.url,metadata:{}},...e.urlMetadata}};case"CHAT_FETCH_URL_METADATA_FINISHED":return{...e,urlMetadata:{...e.urlMetadata,[a.url]:{status:"finished",url:a.url,metadata:a.urlMetadata}}};case"CHAT_FETCH_URL_METADATA_FAILED":return{...e,urlMetadata:{...e.urlMetadata,[a.url]:{status:"failed",url:a.url,error:a.error,metadata:{}}}};case"CHAT_ISOPEN_CHANGED":return{...e,isChatOpen:a,unreadMessageCount:0}}return e},doSendChatMessage:e=>({store:t,dispatch:a})=>{if("!debug:stats"===e)return t.doToggleStats();e=(e||"").replace(/:([\w+-_]+?):/gi,(e,t)=>({"+1":"\ud83d\udc4d","-1":"\ud83d\udc4e",100:"\ud83d\udcaf",ok:"\ud83d\udc4c",bacon:"\ud83e\udd53",hand:"\u270b",smile:"\ud83d\ude04",disappointed:"\ud83d\ude1e",grin:"\ud83d\ude00",party:"\ud83c\udf89",tada:"\ud83c\udf89",rofl:"\ud83e\udd23",fire:"\ud83d\udd25",poop:"\ud83d\udca9",kiss:"\ud83d\udc8b"}[t]||e)),a({type:"CHAT_SENT",meta:{analytics:p({isReaction:J(e)}),signal:{type:"chat_message",payload:{text:e}}}})},doSetChatOpen:e=>({type:"CHAT_ISOPEN_CHANGED",payload:e}),doFetchChatUrlMetadata:e=>({dispatch:t,utilsService:a})=>{t({type:"CHAT_FETCH_URL_METADATA_STARTED",payload:{url:e}}),ie.runWorker(async()=>{try{const o=await a.getUrlMetadata(e);t({type:"CHAT_FETCH_URL_METADATA_FINISHED",payload:{url:e,urlMetadata:o}})}catch(o){t({type:"CHAT_FETCH_URL_METADATA_FAILED",payload:{url:e,error:o},error:!0})}})},selectChatRaw:e=>e.chat,selectChatUrlMetadata:e=>e.chat.urlMetadata,selectChatMessages:e=>e.chat.chatMessages,selectChatUnreadMessageCount:e=>e.chat.unreadMessageCount,selectChatUsersByClientId:Object(o.f)("selectChatRaw","selectLocalClient",(e,t)=>{let a={};return t.id&&(a={[t.id]:te(t)}),Object.keys(e.chatUsersByClientId).reduce((t,a)=>(t[a]=te(e.chatUsersByClientId[a]),t),a)}),selectParsedChatMessages:Object(o.f)("selectAvailableRoomIntegrations","selectChatMessages","selectUnavailableRoomIntegrations",(e,t,a)=>t.map(t=>{return{...t,tokenizedText:(o=t.text,n=t.localId,o.split(Z).reduce((e,t,a)=>{const o=`${n}_${a}`;var i;return a%2?e.push({text:t,url:(i=t,function(e){switch(e){case",":case".":case"?":case":":case"!":return!0;default:return!1}}(i.slice(-1))&&(i=i.slice(0,-1)),i),id:o}):t.length>0&&e.push({text:t,id:o}),e},[])),isReaction:J(t.text),...Q(t.text),...X(t.text,[...e,...a])};var o,n})),selectRecentChatMessagesByClientId:Object(o.f)("selectParsedChatMessages",e=>{const t=Date.now(),a={};for(let o=e.length-1;o>=0;o--){const n=e[o];if(Math.abs(t-n.timestamp)>3e3)break;a[n.senderId]||(a[n.senderId]=n)}return a}),selectLatestReactionByClientId:Object(o.f)("selectParsedChatMessages",e=>e.reduce((e,t)=>{if(!t.isReaction)return e;const a=e[t.senderId];return(!a||a.timestamp<t.timestamp)&&(e[t.senderId]=t),e},{})),selectChatMessageGroups:Object(o.f)("selectChatUrlMetadata","selectChatUsersByClientId","selectLocalClientId","selectParsedChatMessages",(e,t,a,o)=>o.reduce((o,n)=>{const[i]=o.slice(-1),{senderId:r,previewUrl:s}=n,c=t[r],l=e[s];return i?function({prevChatMessageGroup:e,chatMessage:t}){if(e.senderId!==t.senderId)return!1;const[a]=e.messages.slice(0,1);return Math.abs(new Date(a.timestamp)-new Date(t.timestamp))<6e4}({prevChatMessageGroup:i,chatMessage:n})?[...o.slice(0,-1),{...i,messages:[...i.messages,ae({chatMessage:n,urlMetadata:l})]}]:[...o,oe({chatMessage:n,selfId:a,userMetadata:c,urlMetadata:l})]:[oe({chatMessage:n,selfId:a,userMetadata:c,urlMetadata:l})]},[])),reactChatMessage:Object(o.f)("selectParsedChatMessages","selectChatUrlMetadata",(e,t)=>{const[a]=e.slice(-1);if(a&&a.previewUrl&&!t[a.previewUrl])return{actionCreator:"doFetchChatUrlMetadata",args:[a.previewUrl]}}),reactCopyIsChatOpenToLocalState:Object(o.f)("selectChatRaw","selectIsChatOpen",(e,t)=>{if(e.isChatOpen!==t)return{actionCreator:"doSetChatOpen",args:[t]}})},se=a(344),ce=a(357),le=a(17);const de=["stream_added","client_connection_status_changed","microphone_stopped_working"],ue=de.reduce((e,t)=>(e[`${t.toUpperCase()}`]=`RTC/${t}`,e),{}),me=e=>({emit:(t,a)=>{de.includes(t)?e({type:`RTC/${t}`,payload:a}):console.warn(`[rtc] ${t} missing handler. Data: %o`,a)}}),pe={acceptedExtraStreamIds:[],clientIdsToAccept:[],error:null,status:""};var ge=(e,t=null)=>({name:"rtcConnection",reducer:(e=pe,{type:t,payload:a})=>{switch(t){case K.a.CLIENT_READY:return{...e,clientIdsToAccept:[...e.clientIdsToAccept,a.clientId]};case K.a.RECONNECT:return{...e,acceptedExtraStreamIds:[],status:"reconnect"};case"RTC_CONNECTION_READY":return{...e,status:"ready"};case"RTC_CONNECTION_ALL_CLIENTS_ACCEPTED":return{...e,clientIdsToAccept:[]};case"RTC_DISCONNECTED":return{...e,status:"disconnected"};case"RTC_EXTRA_STREAMS_ACCEPTED":return{...e,acceptedExtraStreamIds:Array.from(new Set([...e.acceptedExtraStreamIds,...a]))}}return e},getMiddleware:()=>e=>a=>o=>{const n=e.selectIsAudioEnabled(),i=e.selectIsVideoEnabled(),r=e.selectIsLocalStreamSwitching(),s=e.selectLocalScreenshareStream(),c=e.selectUpdatedVideoSizes(),l=a(o),d=e.selectLocalStream();if(!t||!d||""===e.selectRtcConnectionStatus())return l;if(o.type===K.a.CLIENT_LEFT&&t.disconnect(o.payload.clientId),o.type===ue.MICROPHONE_STOPPED_WORKING){Object(le.c)(e.selectGetConstraintsOptions()).audio&&e.doLocalStreamErrorAnalytics(ue.MICROPHONE_STOPPED_WORKING)}const u=r&&!e.selectIsLocalStreamSwitching();if(u){const a=d.getVideoTracks()[0],o=d.getAudioTracks()[0];Promise.all([a&&t.replaceTrack(null,a),o&&t.replaceTrack(null,o)]).catch(t=>e.doCaptureException(t,{extra:{from:"replaceTrack"}}))}const m=e.selectLocalScreenshareStream();s!==m&&(s&&t.removeStream(s.id,s),m&&t.addNewStream(m.id,m));const p=e.selectIsAudioEnabled();(n!==p||u)&&(t.stopOrResumeAudio(d,p),t.sendAudioMutedStats(!p));const g=e.selectIsVideoEnabled();return(i!==g||u)&&(t.stopOrResumeVideo(d,g),t.sendVideoMutedStats(!g)),c!==e.selectUpdatedVideoSizes()&&e.selectUpdatedVideoSizes().forEach(([e,a,o])=>{t.updateStreamResolution(e,null,{width:a,height:o})}),l},doConnectRtc:()=>({dispatch:a,store:o})=>{const n=o.selectLocalClientId(),i=o.selectRoomName(),r=o.selectLocalStream(),s=o.selectSfuServer(),c={getMediaConstraints:()=>Object(le.c)(o.selectGetConstraintsOptions())};t&&!t.isInitializedWith({selfId:n,roomName:i,sfuServer:s})&&(t.disconnectAll(),t=void 0),t||((t=ce.a.create({emitter:me(a),options:{dualPlanSignaling:o.selectFeatureDualPlanSignaling(),lowDataModeEnabled:o.selectPrefLowData(),multiScreenShare:!o.selectRoomIsFree(),opusDtx:o.selectFeatureOpusDtx(),sfuP2P:o.selectFeatureSfuP2P(),unifiedPlanConsideredSafeForP2P:o.selectFeatureUnifiedPlanConsideredSafeForP2P(),unifiedPlanConsideredSafeForSFU:o.selectFeatureUnifiedPlanConsideredSafeForSFU(),useOnlyTURN:"only"===o.selectConfigTURN(),useUnifiedPlan:o.selectFeatureUseUnifiedPlan()},roomName:i,selfId:n,serverSocket:e,sfuServer:s,webrtcProvider:c})).setupSocketListeners(),o.selectLocalStreamIsDummy()||(t.addNewStream("0",r),t.stopOrResumeAudio&&!o.selectIsAudioEnabled()&&t.stopOrResumeAudio(r,!1),t.stopOrResumeVideo&&!o.selectIsVideoEnabled()&&t.stopOrResumeVideo(r,!1))),a({type:"RTC_CONNECTION_READY"})},doAcceptExistingRtcClients:()=>({dispatch:e,store:a})=>{a.selectClientIdsToAccept().forEach(e=>t.accept(e,a.selectIceServers(),!0)),e({type:"RTC_CONNECTION_ALL_CLIENTS_ACCEPTED"})},doAcceptExtraStreamIds:()=>({dispatch:e,store:a})=>{const o=a.selectExtraStreamsToAccept();for(const{clientId:n,streamId:i}of o)t.acceptNewStream(i,n,a.selectIceServers());e({type:"RTC_EXTRA_STREAMS_ACCEPTED",payload:o.map(({streamId:e})=>e)})},doKickClient:e=>({type:"KICK_CLIENT",meta:{signal:{type:"kick_client",payload:{clientId:e}}}}),doDisconnectRtc:()=>({dispatch:e})=>{t&&(t.disconnectAll(),t=void 0),e({type:"RTC_DISCONNECTED"})},selectRtcManager_:()=>t,selectRtcConnectionRaw:e=>e.rtcConnection,selectRtcConnectionStatus:e=>e.rtcConnection.status,selectIsRtcConnectionMissing:e=>!e.rtcConnection.status,selectAcceptedExtraStreamIds:e=>e.rtcConnection.acceptedExtraStreamIds,selectClientIdsToAccept:e=>e.rtcConnection.clientIdsToAccept,selectIsSimulcast:Object(o.f)("selectRoomMode",e=>"group"===e||"townhall"===e),selectExtraStreamsToAccept:Object(o.f)("selectRemoteClients","selectAcceptedExtraStreamIds",(e,t)=>{const a=[];for(const o of e)for(const e of o.streamIds.slice(1))t.includes(e)||a.push({clientId:o.id,streamId:e});return a}),reactUpdateRtcConnection:Object(o.f)("selectRtcConnectionStatus","selectRoomConnectionStatus","selectLocalStream",(e,t,a)=>"joined"===t&&a&&["","reconnect"].includes(e)?{actionCreator:"doConnectRtc"}:["kicked","left"].includes(t)&&"disconnected"!==e?{actionCreator:"doDisconnectRtc"}:void 0),reactAcceptExistingRtcClients:Object(o.f)("selectRtcConnectionStatus","selectClientIdsToAccept",(e,t)=>{if("ready"===e&&t.length)return{actionCreator:"doAcceptExistingRtcClients"}}),reactAcceptExtraStreams:Object(o.f)("selectExtraStreamsToAccept","selectRtcConnectionStatus",(e,t)=>{if("ready"===t&&e.length)return{actionCreator:"doAcceptExtraStreamIds"}})}),he=a(6),fe=a.n(he),be=a(84);let Ee,Re,Se;function Ie(e){fe()(Ee,"should have audioContext object"),Ee.createMediaStreamSource(new MediaStream([e])).connect(Re)}function ve(){Se&&"recording"===Se.state&&(Se.stop(),Se=void 0)}function Ce({roomName:e,tracks:t,onStart:a,onStop:o}){fe()(!Se,"recording already started"),Ee=new AudioContext,Re=Ee.createMediaStreamDestination(),t.forEach(e=>{"audio"===e.kind?Ie(e):"video"===e.kind&&(Re.stream.addTrack(e),e.addEventListener("ended",()=>{ve()}))}),Se=new MediaRecorder(Re.stream,{bitsPerSecond:Re.stream.getVideoTracks().length?1e6:96e3,mimeType:"video/webm;codecs=vp8"});const n=(e=>{const t=Date.now(),a=`whereby-${t}`,o={meetingIdentifier:a,roomName:e,startTime:t},n=be.c();let i=0,r=0,s=Promise.resolve();const c=e=>be.e(a,{...o,...e},n);return be.a(a,o,n),{meetingIdentifier:a,addChunk:e=>(s=be.d(a,i++,e,n).then(()=>(r+=e.size,c({lastTime:Date.now(),bytesWritten:r}))),s),close:()=>{const e=Date.now();return s.then(()=>c({endTime:e,bytesWritten:r})).catch(e=>{console.warn("Unable to flush last metadata update, ignoring",e.message)}).then(()=>n.then(e=>e.close())),e-t}}})(e);let i;Se.addEventListener("dataavailable",e=>{e.data&&e.data.size>0&&n.addChunk(e.data).catch(()=>{i="unable to write more recording data to disk",ve()})}),Se.addEventListener("stop",()=>{const e=n.close();if(Ee&&Ee.close(),Re&&Re.stream.getVideoTracks().length){const e=Re.stream.getVideoTracks()[0];Re.stream.removeTrack(e),e.stop()}o({duration:e,meetingIdentifier:n.meetingIdentifier,stopCause:i})}),Se.addEventListener("start",()=>a()),Se.start(6e4)}var ye=a(350);var Oe=(e=new ye.a)=>({name:"recording",init:t=>{t.doFetchRecordingCount(),"missing"===t.selectRecordingExtensionStatus()&&e.available.then(()=>t.dispatch({type:"RECORDING_EXTENSION_AVAILABLE"}))},getReducer:()=>{const t={status:"",error:null,extensionStatus:e.isAvailable()?"installed":"missing",extensionWant:e.isSupported(),hasConsent:!1,numRecordings:null};return(e=t,{type:a,payload:o})=>{switch(a){case"RECORDING_REQUEST":return{...e,status:"requested"};case"RECORDING_INSTALL_STARTED":return{...e,extensionStatus:"installing"};case"RECORDING_INSTALL_FINISHED":return{...e,extensionStatus:"installed"};case"RECORDING_INSTALL_FAILED":return/timeout/i.test(o)||"installed"===e.extensionStatus?e:{...e,extensionStatus:"missing",extensionWant:!1,error:o};case"RECORDING_EXTENSION_AVAILABLE":return{...e,extensionStatus:"installed"};case"RECORDING_EXTENSION_IGNORED":return{...e,extensionWant:!1};case"RECORDING_DIALOGS_DISMISS":return{...e,status:""};case"RECORDING_CONSENT_ANSWER":return{...e,hasConsent:o};case"RECORDING_REQUEST_STARTED":return{...e,status:"starting"};case"RECORDING_REQUEST_FAILED":return{...e,status:"",error:o};case"RECORDING_REQUEST_FINISHED":return{...e,status:"recording",error:null};case"RECORDING_ENDED":return{...e,status:"",error:null};case"RECORDING_COUNT_FETCHED":return{...e,numRecordings:o}}return e}},getMiddleware:()=>e=>t=>a=>{const o=e.selectIsLocalStreamSwitching(),n=e.selectIsAnyoneRecording(),i=t(a);if(n&&!e.selectIsAnyoneRecording()&&e.doFetchRecordingCount(),!e.selectIsRecording())return i;if(a.type===ue.STREAM_ADDED&&a.payload.stream.getAudioTracks().length){Ie(a.payload.stream.getAudioTracks()[0])}const r=e.selectLocalStream();return o&&!e.selectIsLocalStreamSwitching()&&r&&r.getAudioTracks().length&&Ie(r.getAudioTracks()[0]),i},selectRecordingRaw:e=>e.recording,selectRecordingStatus:Object(o.f)("selectRecordingRaw",e=>e.status),selectRecordingExtensionStatus:Object(o.f)("selectRecordingRaw",e=>e.extensionStatus),selectIsRecording:Object(o.f)("selectRecordingStatus",e=>"recording"===e),selectRecordingWantExtension:Object(o.f)("selectRecordingRaw",e=>e.extensionWant),selectRecordingError:Object(o.f)("selectRecordingRaw",e=>e.error&&String(e.error)),selectRecordingSettings:Object(o.f)("selectResolution",e=>[Math.min(1920,e[0]),Math.min(1080,e[1]),10]),selectHasRecordingConsent:Object(o.f)("selectRecordingRaw",e=>e.hasConsent),selectNumRecordings:Object(o.f)("selectRecordingRaw",e=>e.numRecordings),selectRecordingDialog:Object(o.f)("selectRecordingRaw",e=>{const{status:t,extensionWant:a,extensionStatus:o,hasConsent:n}=e;return"requested"!==t?"":!a||"installing"!==o&&"missing"!==o?n?"":"consent":"extension"}),doRecordingInstall:()=>async({dispatch:t})=>{t({type:"RECORDING_INSTALL_STARTED"});try{await e.install(),t({type:"RECORDING_INSTALL_FINISHED"})}catch(a){t({type:"RECORDING_INSTALL_FAILED",payload:a,error:!0})}},doRecordingConsent:()=>({type:"RECORDING_CONSENT_ANSWER",payload:!0}),doRecordingDialogsDismiss:()=>({type:"RECORDING_DIALOGS_DISMISS"}),doRecordingIgnoreExtension:()=>({type:"RECORDING_EXTENSION_IGNORED"}),doFetchRecordingCount:()=>async({dispatch:e})=>{try{e({type:"RECORDING_COUNT_FETCHED",payload:await function(){const e=be.c(),t=()=>e.then(e=>e.close());return be.b(e).then(e=>(t(),e.length),e=>{throw t(),e})}()})}catch(t){console.error(t)}},doRequestRecording:()=>({type:"RECORDING_REQUEST"}),doStopRecording:()=>()=>ve(),doStartRecording_:()=>({dispatch:t,store:a})=>{t({type:"RECORDING_REQUEST_STARTED"});const[o,n,i]=a.selectRecordingSettings();(async({width:e,height:t,frameRate:a},o)=>{if(o){const n=await o.shareTab();return await Object(le.g)({audio:!1,video:{mandatory:{maxWidth:e,minWidth:e,maxHeight:t,minHeight:t,maxFrameRate:a,chromeMediaSource:"desktop",chromeMediaSourceId:n}}})}return await Object(le.e)({audio:!1,video:{width:e,height:t,frameRate:a}})})({width:o,height:n,frameRate:i},a.selectRecordingWantExtension()&&e).then(e=>{e.addEventListener("inactive",()=>{ve()});const[o]=e.getVideoTracks(),n=o?[o]:[];a.selectRemoteClients().forEach(e=>{e.stream&&e.stream.getAudioTracks().length&&n.push(e.stream.getAudioTracks()[0])});const i=a.selectLocalStream();i.getAudioTracks().length&&n.push(i.getAudioTracks()[0]),Ce({roomName:a.selectRoomName(),tracks:n,onStart:()=>{t({type:"RECORDING_REQUEST_FINISHED",meta:{signal:{type:"start_recording"},analytics:S()}})},onStop:e=>{t({type:"RECORDING_ENDED",payload:e,meta:{signal:{type:"stop_recording"},analytics:I()}})}})}).catch(e=>{t({type:"RECORDING_REQUEST_FAILED",payload:e,error:!0})})},reactStartRecording:Object(o.f)("selectRecordingDialog","selectRecordingStatus",(e,t)=>"requested"!==t||e?null:{actionCreator:"doStartRecording_"})});const we=e=>{const{type:t}=e;return"DEVICE_CREDENTIALS_FETCH_FINISHED"===t||"CHAT_SENT"===t||t===K.a.DEVICE_IDENTIFIED||t===K.a.CHAT_MESSAGE?{type:e.type}:t.endsWith("_FINISHED")?{...e,payload:"<scrub>"}:e},Ne=e=>{const{deviceCredentials:t,chat:a,...o}=e,{chatMessages:n,...i}=a;return{...o,deviceCredentials:{...t,data:"<scrub>"},chat:{...i,chatMessages:n.map(e=>({...e,tokenizedText:[]}))}}},Te={enabled:null,isLoading:!1};var Ae=(e=(()=>{let e=[];const t=window.onerror,a=window.onunhandledrejection;window.onerror=(...a)=>{e.push({e:a}),t&&t.apply(window,a)},window.onunhandledrejection=t=>{e.push({p:t.reason}),a&&a.call(window,t)};return{addException:t=>{null!==e?e.push(t):console.error("no registered exception spy",t)},unregister:()=>{let o=[];return null!==e&&(o=[...e],window.onerror=t,window.onunhandledrejection=a,e=null),o}}})())=>{let t=null,n=[];return{name:"sentry",reducer:(e=Te,{type:t})=>{switch(t){case"SENTRY_LOAD_STARTED":return{...e,isLoading:!0};case"SENTRY_LOAD_FINISHED":case"SENTRY_LOAD_FAILED":return{...e,isLoading:!1};case"SENTRY_ENABLED":return{...e,enabled:!0};case"SENTRY_UNREGISTERED":return{...e,enabled:!1}}return e},getMiddleware:()=>()=>e=>t=>(n=[we(t),...n.slice(0,24)],e(t)),selectSentryRaw:e=>e.sentry,selectSentryEnabled:e=>e.sentry.enabled,selectSentryIsLoading:e=>e.sentry.isLoading,doLoadSentry:()=>({dispatch:e,store:o})=>{e({type:"SENTRY_LOAD_STARTED"}),a.e(3).then(a.t.bind(null,595,7)).catch(()=>{}).then(({default:a})=>{if(!a)return Promise.reject("can not load raven-js");t=a,t.setDataCallback((e,t)=>(e.extra={lastActions:n,state:Ne(o.getState()),...e.extra},t?t(e):e)),e({type:"SENTRY_LOAD_FINISHED"})}).catch(t=>{e({type:"SENTRY_LOAD_FAILED"}),console.error("unexpected raven error: ",t)})},doEnableSentry:()=>({dispatch:a})=>{((e,t)=>{e.config("https://d74afa80160245fdb20d50ee7c200cc6@sentry.appearin.net/2",{release:"pwa-20200207-7d4fa3a",ignoreUrls:[/^chrome:\/\//i,/127\.0\.0\.1[:0-9]*\//i,/localhost[:0-9]*\//i],shouldSendCallback(e){const{message:t,request:{headers:a}}=e;return!/InvalidStateError: A mutation .* did not allow mutations/.test(t)||!a["User-Agent"].includes("Firefox")}}).install(),t.unregister().forEach(({e:t,p:a,o:o})=>{t?window.onerror.apply(e.TraceKit,t):a&&e.captureException(a,o)})})(t,e),e=null,a({type:"SENTRY_ENABLED"})},doClearExceptionSpy:()=>({dispatch:t})=>{e.unregister().forEach(e=>{console.error("unregistering sentry, would sent:",e)}),e=null,t({type:"SENTRY_UNREGISTERED"})},doCaptureException:(a,o)=>({store:n})=>{t&&n.selectSentryEnabled()?t.captureException(a,o):e?e.addException({p:a,o:o}):console.error("no registered exception spy",a)},doCaptureMessage:(e,a)=>({store:o})=>{t&&o.selectSentryEnabled()&&t.captureMessage(e,a)},reactSentryStatusChanged:Object(o.f)("selectFeatureSentry","selectSentryIsLoading","selectSentryEnabled",(a,o,n)=>{if(void 0!==a)if(a){if(!t&&!o)return{actionCreator:"doLoadSentry"};if(t&&null===n)return{actionCreator:"doEnableSentry"}}else if(e&&null===n)return{actionCreator:"doClearExceptionSpy"}})}},ke=a(67);const _e=!!(window&&window.matchMedia&&window.matchMedia("(hover: none)").matches),Le=()=>({screenHeight:window.screen.height,screenWidth:window.screen.width,docHeight:window.document.body.clientHeight,docWidth:window.document.body.clientWidth});var De={name:"device",init:e=>{const t=Object(ke.a)(e.doUpdateResolution_,{edges:!0});window.addEventListener("resize",t,{passive:!0})},getReducer:()=>{const e={hasGetDisplayMedia:Object(le.h)(),isFullscreenSupported:!(!window.document.fullscreenEnabled&&!window.document.webkitFullscreenEnabled),isRecordSupported:!!window.AudioContext&&!!window.MediaRecorder&&!!window.indexedDB&&!!window.chrome,isAndroidApp:/Android.*(Whereby|Appearin)/.test(window.navigator.userAgent),isTouchOnlyDevice:_e,isPreviewCapable:!/mobi/i.test(window.navigator.userAgent)&&!(window.navigator.userAgent.match(/(Safari)/)&&_e),...Le()};return(t=e,{type:a,payload:o})=>{switch(a){case"DEVICE_UPDATE_RESOLUTION":return{...t,...o}}return t}},doUpdateResolution_:()=>({type:"DEVICE_UPDATE_RESOLUTION",payload:Le()}),doOptOutPwa:e=>({dispatch:t,store:a})=>{fe()(!window.document.cookie.includes("use_pwa=false"),"use_pwa already false"),window.document.cookie=`use_pwa=false; domain=${window.location.hostname}; samesite=lax; secure; max-age=3600`,t({type:"DEVICE_OPT_OUT_PWA",meta:{analytics:g({experimentName:"optOutPwa",featureSource:e?"manual":"auto"})}}),a.doReload()},selectDeviceRaw:e=>e.device,selectIsAndroidApp:e=>e.device.isAndroidApp,selectIsTouchOnlyDevice:e=>e.device.isTouchOnlyDevice,selectCanFullscreen:e=>e.device.isFullscreenSupported,selectCanScreenshare:Object(o.f)("selectDeviceRaw","selectConfigNoScreenshare",(e,t)=>e.hasGetDisplayMedia&&!t),selectResolution:Object(o.f)("selectDeviceRaw",e=>[e.screenWidth,e.screenHeight]),selectDocumentSize:Object(o.f)("selectDeviceRaw",e=>[e.docWidth,e.docHeight]),selectIsPhoneResolution:Object(o.f)("selectResolution",e=>Math.min(...e)<500),selectIsPreviewEnabled:Object(o.f)("selectDeviceRaw","selectFeaturePreview",(e,t)=>!(!e.isPreviewCapable&&!t)),selectCanRecord:Object(o.f)("selectDeviceRaw","selectCanStartRecording","selectConfigNoRecording",(e,t,a)=>e.hasGetDisplayMedia&&e.isRecordSupported&&t&&!a),selectShouldShowRecordingUpsell:Object(o.f)("selectDeviceRaw","selectCanRecord","selectConfigNoRecording","selectIsRoomOwner","selectIsPublicOrganization",(e,t,a,o,n)=>e.hasGetDisplayMedia&&e.isRecordSupported&&o&&n&&!t&&!a),selectPrefLowData:Object(o.f)("selectFeatureLowDataModeEnabled","selectFeatureLowDataOff","selectIsPhoneResolution",(e,t,a)=>!t&&!(!e&&!a)),reactTurnPwaOff:Object(o.f)("selectFeaturePwaOff",e=>{if(e)return{actionCreator:"doOptOutPwa"}})};const Pe={isFetching:!1,data:null};var Me={name:"deviceCredentials",reducer:(e=Pe,{type:t,payload:a})=>{switch(t){case"DEVICE_CREDENTIALS_FETCH_STARTED":return{...e,isFetching:!0};case"DEVICE_CREDENTIALS_FETCH_FINISHED":return{...e,isFetching:!1,data:a}}return e},selectDeviceCredentialsRaw:e=>e.deviceCredentials,selectDeviceCredentials:Object(o.f)("selectDeviceCredentialsRaw",e=>e.data),doGetDeviceCredentials:()=>async({dispatch:e,credentialsService:t})=>{e({type:"DEVICE_CREDENTIALS_FETCH_STARTED"});try{e({type:"DEVICE_CREDENTIALS_FETCH_FINISHED",payload:await t.getCredentials()})}catch(a){e({type:"DEVICE_CREDENTIALS_FETCH_FAILED"})}},reactShouldGetDeviceCredentials:Object(o.f)("selectDeviceCredentialsRaw",e=>{if(!e.data&&!e.isFetching)return{actionCreator:"doGetDeviceCredentials"}})};const je={error:null,hasFetched:!1,isFetching:!1},Fe={off:!1,on:!0,"":null};var xe=Object.assign({name:"feature",reducer(e=je,{type:t,payload:a,error:o}){switch(t){case"FEATURE_FETCH_STARTED":return{...e,isFetching:!0};case"FEATURE_FETCH_FINISHED":return{...e,data:a,hasFetched:!0,isFetching:!1};case"FEATURE_FETCH_FAILED":return{...e,error:a||o,hasFetched:!0,isFetching:!1}}return e},doSetFeatureContext:e=>async({dispatch:t,featureService:a})=>{t({type:"FEATURE_FETCH_STARTED"});try{t({type:"FEATURE_FETCH_FINISHED",payload:await a.update(e)})}catch(o){t({type:"FEATURE_FETCH_FAILED",payload:o,error:!0})}},selectFeatures:e=>e.feature.data,selectHasFeaturesFetched:e=>e.feature.hasFetched,selectConfigAudio:Object(o.f)("selectFeatures",e=>Fe[e&&e.audio||""]),selectConfigDisplayName:Object(o.f)("selectFeatures",e=>e&&e.displayName&&decodeURIComponent(e.displayName)),selectConfigNoChat:Object(o.f)("selectFeatures",e=>e&&("off"===e.chat||Boolean(e.embed)&&"on"!==e.chat)),selectConfigNoEmptyRoomInvitation:Object(o.f)("selectFeatures",e=>e&&("off"===e.emptyRoomInvitation||Boolean(e.embed)&&"on"!==e.emptyRoomInvitation)),selectConfigNoHelp:Object(o.f)("selectFeatures",e=>e&&(e.helpOff||"off"===e.help||Boolean(e.embed)&&"on"!==e.help)),selectConfigNoIntercom:Object(o.f)("selectFeatures",e=>e&&("off"===e.intercom||Boolean(e.embed)&&"on"!==e.intercom)),selectConfigNoLeaveButton:Object(o.f)("selectFeatures",e=>e&&("off"===e.leaveButton||Boolean(e.embed)&&"on"!==e.leaveButton)),selectConfigNoPrecallReview:Object(o.f)("selectFeatures",e=>e&&("off"===e.precallReview||Boolean(e.embed)&&"on"!==e.precallReview)),selectConfigNoRecording:Object(o.f)("selectFeatures",e=>e&&("off"===e.recording||Boolean(e.embed)&&"on"!==e.recording)),selectConfigNoScreenshare:Object(o.f)("selectFeatures",e=>e&&("off"===e.screenshare||Boolean(e.embed)&&"on"!==e.screenshare)),selectConfigNoTopToolbar:Object(o.f)("selectFeatures",e=>e&&("off"===e.topToolbar||Boolean(e.embed)&&"on"!==e.topToolbar)),selectConfigNoMirror:Object(o.f)("selectFeatures",e=>e&&"off"===e.mirror),selectConfigNoRoomIntegrations:Object(o.f)("selectFeatures",e=>e&&("off"===e.roomIntegrations||Boolean(e.embed)&&"on"!==e.roomIntegrations)),selectConfigSfu:Object(o.f)("selectFeatures",e=>e&&e.sfu),selectConfigSkipMediaPermissionPrompt:Object(o.f)("selectFeatures",e=>e&&e.skipMediaPermissionPrompt),selectConfigVideo:Object(o.f)("selectFeatures",e=>Fe[e&&e.video||""]),selectConfigTURN:Object(o.f)("selectFeatures",e=>e&&e.turn)},...["embed","dualPlanSignaling","iosVersionCheckOff","isExemptFromRoomUnclaimedConstraint","jsGridMobileLayoutOff","legacyRoomMembersOn","lowDataModeEnabled","lowDataOff","namePromptOff","newStart","opusDtx","sfuP2P","preview","pwaOff","roundedCornersOff","sentry","sizeReportingOff","stats","subgridOn","unifiedPlanConsideredSafeForP2P","unifiedPlanConsideredSafeForSFU","unifiedPlanPwaOn","useUnifiedPlan","volumeMuteOn","widescreen"].map(e=>({["selectFeature"+e[0].toUpperCase()+e.slice(1)]:Object(o.f)("selectFeatures",t=>t&&t[e])}))),qe=a(20),Be=a(11);const Ue={organization_business:"d1d1061a-3416-45e5-9d22-2fe8552018a4",personal_free:"61516c47-a054-4c3c-bdd0-4b7d3e180fff",personal_pro:"9cd1eca1-5ec0-437a-9e7f-cd547fbe2160"};let ze=void 0;var He={name:"helpscout",getReducer:()=>{const e={isHelpscoutInitializing:!1,helpscoutInitializedForUserId:void 0};return(t=e,{type:a,payload:o})=>{switch(a){case"HELPSCOUT_INIT_STARTED":return{...t,isHelpscoutInitializing:!0};case"HELPSCOUT_INIT_FAILED":return{...t,isHelpscoutInitializing:!1};case"HELPSCOUT_INIT_FINISHED":return{...t,helpscoutInitializedForUserId:o,isHelpscoutInitializing:!1}}return t}},doInitializeHelpscout:()=>({dispatch:e,store:t})=>{const a=t.selectUser(),o=t.selectIsRoomOwner(),n=t.selectRoomProduct();e({type:"HELPSCOUT_INIT_STARTED"}),ze&&(ze("destroy"),ze=null),function(e,{messagingEnabled:t}){return function(e,t,a){function o(){var e=t.getElementsByTagName("script")[0],a=t.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://beacon-v2.helpscout.net",e.parentNode.insertBefore(a,e)}if(e.Beacon=a=function(t,a,o){e.Beacon.readyQueue.push({method:t,options:a,data:o})},a.readyQueue=[],"complete"===t.readyState)return o();e.attachEvent?e.attachEvent("onload",o):e.addEventListener("load",o,!1)}(window,document,window.Beacon||(()=>{})),window.Beacon("init",e),window.Beacon("config",{display:{position:"left",style:"manual"},messaging:{chatEnabled:!0},mode:"neutral",docsEnabled:!0,messagingEnabled:t}),new Promise(e=>{window.Beacon("once","ready",()=>e(window.Beacon))})}(Ue[n],{messagingEnabled:o&&"personal_free"!==n}).then(t=>{ze=t,ze("prefill",{name:a.displayName,email:a.email}),ze("once","open",()=>{e({type:"HELPSCOUT_OPENED",meta:{analytics:y({isRoomOwner:o,roomProduct:n})}})}),e({type:"HELPSCOUT_INIT_FINISHED",payload:a.userId})}).catch(()=>{e({type:"HELPSCOUT_INIT_FAILED"})})},doToggleHelpMenu:()=>ze&&ze("toggle"),selectHelpscoutInitializedForUserId:e=>e.helpscout.helpscoutInitializedForUserId,selectIsHelpscoutInitializing:e=>e.helpscout.isHelpscoutInitializing,selectShouldShowHelpButton:Object(o.f)("selectConfigNoHelp","selectDocumentSize",(e,t)=>!1===e&&function([e,t]){return!Object(qe.b)(Object(Be.d)({width:e-60,height:t-60})).isPhone}(t)),reactShowHelpButton:Object(o.f)("selectHasUserFetched","selectUser","selectIsHelpscoutInitializing","selectHelpscoutInitializedForUserId","selectShouldShowHelpButton",(e,t,a,o,n)=>{if(!a&&n&&e&&o!==t.userId)return{actionCreator:"doInitializeHelpscout"}})};const Ve={error:null,roomKey:null,status:""};var We={name:"knock",reducer:(e=Ve,{type:t,payload:a,error:o})=>{switch(t){case K.a.ROOM_JOINED_ERROR:return"room_locked"===o?{...e,status:"standby"}:e;case K.a.KNOCK_HANDLED_ERROR:return{...e,error:o};case K.a.KNOCK_HANDLED:return{...e,status:a.resolution,error:null,roomKey:a.metadata&&a.metadata.roomKey||null};case"KNOCK_KNOCKED":return{...e,status:"waiting"};default:return e}},doKnock:e=>({dispatch:t,store:a})=>{const o=a.selectOrganizationId(),n=a.selectRoomName();t({type:"KNOCK_KNOCKED",meta:{signal:{type:"knock_room",payload:{imageUrl:e,organizationId:o,roomName:n,liveVideo:!1}},analytics:N()}})},selectKnockRaw:e=>e.knock,selectKnockStatus:e=>e.knock.status,selectKnockRoomKey:e=>e.knock.roomKey,selectShouldShowKnockPage:Object(o.f)("selectCanSetLock","selectKnockStatus","selectRoomConnectionError","selectRoomConnectionStatus","selectRoomIsLocked",(e,t,a,o,n)=>n&&!e&&!("joined"===o||"accepted"===t)||"room_locked"===a),reactConnectToKnockedRoom:Object(o.f)("selectKnockStatus","selectRoomConnectionError","selectRoomConnectionStatus",(e,t,a)=>{if("accepted"===e&&"error"===a&&"room_locked"===t)return{actionCreator:"doConnectRoom"}})};const Ge=[];function Ke({clientId:e,imageUrl:t,liveVideo:a}){return fe()(e,"clientId is required"),{clientId:e,imageUrl:t,liveVideo:a}}const $e=(e,t)=>a=>({type:e,payload:a,meta:{signal:{type:"handle_knock",payload:{action:t,clientId:a.clientId}},analytics:T({response:t})}});var Ye={name:"knockers",reducer:(e=Ge,{type:t,payload:a})=>{switch(t){case K.a.ROOM_JOINED:return[...e,...(a.room.knockers||[]).map(Ke)];case K.a.ROOM_KNOCKED:return[...e,Ke(a)];case K.a.KNOCKER_LEFT:return e.filter(e=>e.clientId!==a.clientId);case"KNOCKER_HELD":return((e,t,a)=>{const o=e.findIndex(e=>e.clientId===t),n=e[o];if(!n)return e;const i=[...e];return i.splice(o,1,{...n,...a}),i})(e,a.clientId,{held:!0});default:return e}},doKnockerAccept:$e("KNOCKER_ACCEPTED","accept"),doKnockerHold:$e("KNOCKER_HELD","hold"),doKnockerReject:$e("KNOCKER_REJECTED","reject"),selectKnockers:e=>e.knockers};const Ze={locale:null,bundles:null,error:null,hasFetched:!1,isFetching:!1};var Je={name:"localization",reducer:(e=Ze,{type:t,payload:a,error:o})=>{switch(t){case"LOCALIZATION_FETCH_RESOURCES_STARTED":return{...e,locale:a,isFetching:!0};case"LOCALIZATION_FETCH_RESOURCES_FINISHED":return{...e,bundles:[a],hasFetched:!0,isFetching:!1};case"LOCALIZATION_FETCH_RESOURCES_FAILED":return{...e,error:a||o,hasFetched:!0,isFetching:!1}}return e},doFetchLocalization:()=>async({dispatch:e,fluentService:t})=>{const a=(window.location.search||"").match(/[?&]lang=([^&]+)/),o=a?a[1]:"en",n=["en","nb"].includes(o)?o:"en";e({type:"LOCALIZATION_FETCH_RESOURCES_STARTED",payload:n});try{e({type:"LOCALIZATION_FETCH_RESOURCES_FINISHED",payload:await t.createResourcesBundle(n)})}catch(i){e({type:"LOCALIZATION_FETCH_RESOURCES_FAILED",payload:i,error:!0})}},reactFetchLocalization:Object(o.f)("selectHasLocalizationFetched","selectIsLocalizationFetching",(e,t)=>{if(!t&&!e)return{actionCreator:"doFetchLocalization"}}),selectHasLocalizationFetched:e=>e.localization.hasFetched,selectIsLocalizationFetching:e=>e.localization.isFetching,selectLocalizationBundles:e=>e.localization.bundles,selectLocalizationError:e=>e.localization.error};const Qe={connectionStatus:"",overrideAudio:null,wantAudio:null,wantVideo:null,needMetadataSend:!1,roleName:""};var Xe={name:"localClient",reducer:(e=Qe,{type:t,payload:a})=>{switch(t){case K.a.ROOM_JOINED:{const t=a.room.clients.find(e=>e.id===a.selfId);return{...e,roleName:t.role.roleName,needMetadataSend:!0}}case K.a.NEW_CLIENT:return{...e,needMetadataSend:!0};case"AUDIO_ENABLED":return{...e,wantAudio:a,overrideAudio:null};case"VIDEO_ENABLED":return{...e,wantVideo:a};case"LOCAL_DISPLAY_NAME_UPDATED":return{...e,needMetadataSend:!0};case"LOCAL_CLIENT_METADATA_SENT":return{...e,needMetadataSend:!1};case"LOCAL_CLIENT_AUDIO_OVERRIDDEN":return{...e,overrideAudio:a}}return e},getMiddleware:()=>e=>t=>a=>{const o=e.selectIsAudioEnabled(),n=e.selectIsVideoEnabled(),i=t(a);if("joined"===e.selectRoomConnectionStatus()){const t=e.selectIsAudioEnabled();o!==t&&e.dispatch({type:"@",meta:{signal:{type:"enable_audio",payload:{enabled:t}}}});const a=e.selectIsVideoEnabled();n!==a&&e.dispatch({type:"@",meta:{signal:{type:"enable_video",payload:{enabled:a}}}})}return i},doOverrideAudio:e=>({type:"LOCAL_CLIENT_AUDIO_OVERRIDDEN",payload:e}),doToggleAudioEnabled:e=>({dispatch:t,store:a})=>{a.selectAudioId&&t({type:"AUDIO_ENABLED",payload:e=void 0!==e?e:!a.selectIsAudioWanted(),meta:{analytics:e?d():u(),persist:a.selectIsTownhallMode()||null!==a.selectConfigAudio()?void 0:{audioEnabled:e}}})},doToggleVideoEnabled:e=>({dispatch:t,store:a})=>{a.selectVideoId&&t({type:"VIDEO_ENABLED",payload:e=void 0!==e?e:!a.selectIsVideoWanted(),meta:{analytics:e?D():P(),persist:a.selectIsTownhallMode()||null!==a.selectConfigVideo()?void 0:{videoEnabled:e}}})},doSendClientMetadata:()=>({dispatch:e,store:t})=>{const a=t.selectLocalClient();e({type:"LOCAL_CLIENT_METADATA_SENT",meta:{signal:{type:"send_client_metadata",payload:{type:"UserData",payload:{clientId:a.id,displayName:a.displayName,avatarUrl:a.avatarUrl}}}}})},doSetLocalDisplayName:e=>({store:t,dispatch:a})=>{const o=t.selectUser().displayName;e&&e!==o||(e=o?null:t.selectDisplayName()),a({type:"LOCAL_DISPLAY_NAME_UPDATED",payload:e,meta:{analytics:M(),persist:{displayName:e}}})},selectLocalClientRaw:e=>e.localClient,selectIsAudioOverridden:e=>e.localClient.overrideAudio,selectLocalClientRole:e=>e.localClient.roleName,selectDisplayName:Object(o.f)("selectConfigDisplayName","selectUser","selectPersisted",(e,t,a)=>a.displayName||e||t.displayName),selectNeedMetadataSend:Object(o.f)("selectLocalClientRaw","selectNumClients",(e,t)=>e.needMetadataSend&&t>1),selectIsAudioWanted:Object(o.f)("selectLocalClientRaw","selectIsTownhallMode","selectPersisted","selectLocalStreamIsDummy","selectConfigAudio",(e,t,a,o,n)=>null!==e.wantAudio?e.wantAudio:!o&&(!1!==n&&(!0===n||!t&&!1!==a.audioEnabled))),selectIsAudioEnabled:Object(o.f)("selectIsAudioOverridden","selectIsAudioWanted","selectIsTownhallMode","selectShouldShowKnockPage","selectShouldShowReviewPage","selectTownhallHasRestoredMuteState",(e,t,a,o,n,i)=>null!==e?!e:!(!o&&!n)||!(a&&!i)&&t),selectIsVideoWanted:Object(o.f)("selectLocalClientRaw","selectIsTownhallMode","selectPersisted","selectLocalStreamIsDummy","selectConfigVideo",(e,t,a,o,n)=>null!==e.wantVideo?e.wantVideo:!o&&(!1!==n&&(!0===n||!t&&!1!==a.videoEnabled))),selectIsVideoEnabled:Object(o.f)("selectIsTownhallMode","selectIsScreensharing","selectIsVideoWanted","selectRoomIsFree","selectShouldShowKnockPage","selectShouldShowReviewPage","selectTownhallHasRestoredMuteState",(e,t,a,o,n,i,r)=>!(!t||!o)||(!(!n&&!i)||!(e&&!r)&&a)),selectLocalClient:Object(o.f)("selectDisplayName","selectIsAudioEnabled","selectIsRecording","selectIsSelfieCam","selectIsVideoEnabled","selectLocalClientId","selectLocalClientRole","selectLocalStream","selectUser",(e,t,a,o,n,i,r,s,c)=>({stream:s,id:i,isAudioEnabled:t,isVideoEnabled:n,isRecording:a,isSelfieCam:o,roleName:r,isLocalClient:!0,avatarUrl:c.avatarUrl,displayName:e})),reactSendClientMetadata:Object(o.f)("selectNeedMetadataSend",e=>{if(e)return{actionCreator:"doSendClientMetadata"}}),reactRoomIntegrationDeactivated:Object(o.f)("selectIsAudioOverridden","selectIsRoomIntegrationRunning",(e,t)=>{if(!t&&e)return{actionCreator:"doOverrideAudio",args:[null]}})};const et={status:"",stream:null,error:null};var tt={name:"localScreenshare",reducer:(e=et,{type:t,payload:a})=>{switch(t){case"LOCAL_SCREENSHARE_CLOSED":return{...e,status:"",stream:null};case"LOCAL_SCREENSHARE_REQUEST_FAILED":return{...e,status:"",error:a,stream:null};case"LOCAL_SCREENSHARE_REQUEST_STARTED":return{...e,status:"starting"};case"LOCAL_SCREENSHARE_REQUEST_FINISHED":return{...e,status:"active",stream:a,error:null}}return e},selectLocalScreenshareRaw:e=>e.localScreenshare,selectLocalScreenshareStream:e=>e.localScreenshare.stream,selectIsScreensharing:e=>"active"===e.localScreenshare.status,selectLocalScreenshareError:Object(o.f)("selectLocalScreenshareRaw",e=>e.error&&String(e.error)),doToggleScreenshare:e=>async({dispatch:t,store:a})=>{if(e||a.selectIsScreensharing()){const e=a.selectLocalScreenshareStream();e&&e.getTracks().forEach(e=>e.stop()),t({type:"LOCAL_SCREENSHARE_CLOSED",meta:{analytics:L()}})}else{t({type:"LOCAL_SCREENSHARE_REQUEST_STARTED"});try{const e=await Object(le.e)();e.addEventListener("inactive",()=>a.doToggleScreenshare(!0)),t({type:"LOCAL_SCREENSHARE_REQUEST_FINISHED",payload:e,meta:{analytics:_()}})}catch(o){t({type:"LOCAL_SCREENSHARE_REQUEST_FAILED",payload:o,error:!0}),a.doSetToast("Could not start screensharing. The browser is having trouble accessing your screen.",{helpLink:{href:"https://whereby.helpscoutdocs.com/article/315-screen-sharing",target:"_blank","data-beacon-article":"315"}})}}}},at=a(352),ot=a(353);const nt={isFetchingRoomMembers:!1,roomMembers:null};var it={name:"membership",reducer:(e=nt,{type:t,payload:a})=>{switch(t){case"ROOM_MEMBERS_FETCH_STARTED":return{...e,isFetchingRoomMembers:!0};case"ROOM_MEMBERS_FETCH_FINISHED":return{...e,isFetchingRoomMembers:!1,roomMembers:a.roles};case"ROOM_MEMBERS_REMOVED":return{...e,roomMembers:e.roomMembers.filter(e=>e.userId!==a)}}return e},doFetchRoomMembers:()=>async({dispatch:e,roleService:t,store:a})=>{e({type:"ROOM_MEMBERS_FETCH_STARTED"}),e({type:"ROOM_MEMBERS_FETCH_FINISHED",payload:await t.getRolesOverview(a.selectRoomName())})},doRemoveRoomMember:e=>async({dispatch:t,roleService:a,store:o})=>{await a.removeRole({roomName:o.selectRoomName(),userId:e}),t({type:"ROOM_MEMBERS_REMOVED",payload:e})},doInviteRoomMember:e=>async({roleService:t,store:a})=>{await t.inviteMembers({roomName:a.selectRoomName(),emails:[e]})},selectMembershipRaw:e=>e.membership,selectIsFetchingRoomMembers:e=>e.membership.isFetchingRoomMembers,selectRoomMembers:e=>e.membership.roomMembers},rt=(a(267),a(268),a(584),a(34));function st(e){const t=(e+"=".repeat((4-e.length%4)%4)).replace(/-/g,"+").replace(/_/g,"/"),a=window.atob(t);return Uint8Array.from([...a].map(e=>e.charCodeAt(0)))}const ct=navigator.serviceWorker?navigator.serviceWorker.ready.then(e=>e.pushManager?e.pushManager.getSubscription().then(t=>({sw:e,isSupported:!0,hasSubscribed:!!t})):{isSupported:!1}):Promise.resolve({isSupported:!1});const lt={isBlocked:!1,isEnabled:!1,isSupported:!1,isToggling:!1};var dt={name:"notifications",init:e=>{ct.then(({isSupported:t,hasSubscribed:a})=>{e.dispatch({type:"NOTIFICATIONS_LIB_INITIALIZED",payload:{isSupported:t,isEnabled:a}})})},reducer:(e=lt,{type:t,payload:a})=>{switch(t){case"NOTIFICATIONS_LIB_INITIALIZED":return{...e,...a};case"NOTIFICATIONS_ENABLED":return{...e,isEnabled:!0,isBlocked:!1,isToggling:!1};case"NOTIFICATIONS_BLOCKED":return{...e,isBlocked:!0,isToggling:!1};case"NOTIFICATIONS_DISABLED":return{...e,isEnabled:!1,isToggling:!1};case"NOTIFICATIONS_TOGGLING":return{...e,isToggling:!0}}return e},doSetNotificationsEnabled:()=>async({store:e,dispatch:t,deviceContactPointService:a})=>{if(!e.selectIsNotificationsToggling()){t({type:"NOTIFICATIONS_TOGGLING"});try{const e=await ct.then(({sw:e})=>e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:st(rt.b)})),{p256dh:o,auth:n}=e.toJSON().keys;await a.setContactPoint({type:"web-push",token:e.endpoint,publicKey:o,authKey:n}),t({type:"NOTIFICATIONS_ENABLED"})}catch(o){t({type:"NOTIFICATIONS_BLOCKED"})}}},doSetNotificationsDisabled:()=>async({store:e,dispatch:t,deviceContactPointService:a})=>{if(!e.selectIsNotificationsToggling()){t({type:"NOTIFICATIONS_TOGGLING"});try{await ct.then(({sw:e})=>!!e&&e.pushManager.getSubscription().then(e=>!!e&&e.unsubscribe())),await a.removeContactPoint(),t({type:"NOTIFICATIONS_DISABLED"})}catch(o){console.error(o)}}},doToggleNotifications:()=>({store:e})=>e.selectIsNotificationsEnabled()?e.doSetNotificationsDisabled():e.doSetNotificationsEnabled(),selectIsNotificationsBlocked:e=>e.notifications.isBlocked,selectIsNotificationsEnabled:e=>e.notifications.isEnabled,selectIsNotificationsSupported:e=>e.notifications.isSupported,selectIsNotificationsToggling:e=>e.notifications.isToggling,selectCanToggleNotifications:Object(o.f)("selectIsNotificationsSupported","selectIsUserLoggedIn",(e,t)=>e&&t),reactDisableNotificationsIfLoggedOut:Object(o.f)("selectIsNotificationsEnabled","selectIsUserLoggedIn","selectHasUserFetched","selectIsNotificationsToggling",(e,t,a,o)=>{if(!o&&e&&!t&&a)return{actionCreator:"doSetNotificationsDisabled"}})};const ut={id:"",name:"",error:null,fetchedAt:null,isFetching:!1};var mt={name:"organization",reducer:(e=ut,{type:t,payload:a,error:o})=>{switch(t){case"ORGANIZATION_FETCH_STARTED":return{...e,isFetching:!0};case"ORGANIZATION_FETCH_FINISHED":return{...e,id:a.organizationId,name:a.organizationName,permissions:a.permissions,backgroundUrl:a.roomBackgroundImageUrl,knockBackgroundUrl:a.roomKnockPageBackgroundImageUrl,logoUrl:a.logoImageUrl,organizationName:a.organizationName,error:null,fetchedAt:Date.now(),isFetching:!1,subdomain:a.subdomain};case"ORGANIZATION_FETCH_FAILED":return{...e,error:a||o,isFetching:!1}}return e},doFetchCurrentOrganization:()=>async({dispatch:e,organizationServiceCache:t})=>{e({type:"ORGANIZATION_FETCH_STARTED"});try{e({type:"ORGANIZATION_FETCH_FINISHED",payload:await t.fetchOrganization()})}catch(a){e({type:"ORGANIZATION_FETCH_FAILED",payload:a,error:!0})}},selectOrganizationRaw:e=>e.organization,selectOrganizationBackgroundUrl:e=>e.organization.backgroundUrl,selectOrganizationKnockBackgroundUrl:e=>e.organization.knockBackgroundUrl,selectOrganizationFetchedAt:e=>e.organization.fetchedAt,selectOrganizationId:e=>e.organization.id,selectOrganizationLogoUrl:e=>e.organization.logoUrl,selectOrganizationName:e=>e.organization.organizationName,selectOrganizationPermissions:e=>e.organization.permissions,selectHasOrganizationFetched:e=>!!e.organization.id,selectHasOrganizationError:e=>!!e.organization.error,selectIsPublicOrganization:e=>""===e.organization.subdomain,selectIsFetchingOrganization:e=>e.organization.isFetching,selectIsListOrganizationSubscriptionsSupported:Object(o.f)("selectOrganizationPermissions",e=>!(!e||!e.subscriptions.list.isSupported)),reactFetchCurrentOrganization:Object(o.f)("selectIsFetchingOrganization","selectLoginStatusChangedAt","selectOrganizationFetchedAt",(e,t,a)=>{if(!e&&t>a)return{actionCreator:"doFetchCurrentOrganization"}})};const pt={data:null,fetchedAt:null,isFetching:!1};var gt={name:"permissions",reducer:(e=pt,{type:t,payload:a})=>{switch(t){case"PERMISSIONS_FETCH_STARTED":return{...e,isFetching:!0};case"PERMISSIONS_FETCH_FINISHED":return{...e,data:a,fetchedAt:Date.now(),isFetching:!1};case"PERMISSIONS_FETCH_FAILED":return{...e,isFetching:!1}}return e},doFetchPermissions:()=>async({store:e,dispatch:t,roomService:a})=>{t({type:"PERMISSIONS_FETCH_STARTED"});try{t({type:"PERMISSIONS_FETCH_FINISHED",payload:await a.getRoomPermissions(e.selectRoomName())})}catch(o){t({type:"PERMISSIONS_FETCH_FAILED",payload:o,error:!0})}},selectPermissionsRaw:e=>e.permissions,selectPermissions:Object(o.f)("selectPermissionsRaw",e=>e.data&&e.data.permissions),selectPermissionsFetchedAt:e=>e.permissions.fetchedAt,selectCanKickVisitor:Object(o.f)("selectPermissions",e=>!!(e&&e.actionsOnRole&&e.actionsOnRole.visitor.kick.isAllowed)),selectCanListRoomMembers:Object(o.f)("selectPermissions",e=>!!(e&&e.roomRoles&&e.roomRoles.remove.isAllowed)),selectCanSetLock:Object(o.f)("selectPermissions",e=>!!(e&&e.rooms&&e.rooms.lock.isAllowed)),selectCanSetRoomBackground:Object(o.f)("selectOrganizationPermissions",e=>!!(e&&e.images&&e.images.roomBackgroundImageUrl&&e.images.roomBackgroundImageUrl.set.isAllowed)),selectCanSetRoomMode:Object(o.f)("selectPermissions",e=>!!(e&&e.rooms&&e.rooms.changeMode.isAllowed)),selectCanStartRecording:Object(o.f)("selectPermissions",e=>!!(e&&e.rooms&&e.rooms.startRecording.isAllowed)),selectCanChangeRoomIntegrations:Object(o.f)("selectPermissions",e=>!!(e&&e.rooms&&e.rooms.changeEnabledRoomIntegrations.isAllowed)),reactFetchPermissions:Object(o.f)("selectPermissionsRaw","selectHasRoomFetched","selectLoginStatusChangedAt","selectPermissionsFetchedAt",(e,t,a,o)=>{if(t&&!e.isFetching&&(!e.data||a>o))return{actionCreator:"doFetchPermissions"}})},ht={name:"persist",persistActions:["PERSIST"],reducer:(e={},{type:t,payload:a})=>"PERSIST"===t?{...e,...a}:e,getMiddleware:()=>e=>t=>a=>{const o=t(a);return a.meta&&a.meta.persist&&e.doPersist(a.meta.persist),o},doPersist:e=>({type:"PERSIST",payload:e}),selectPersisted:e=>e.persist};const ft={reviewed:!1,namepromptEmpty:!1,wantPrecallReview:null};var bt={name:"precall",reducer:(e=ft,{type:t,payload:a})=>{switch(t){case"PRECALL_REVIEW_DONE":return{...e,reviewed:!0};case"PRECALL_REVIEW_WANTED":return{...e,wantPrecallReview:a};case"PRECALL_NAMEPROMPT_EMPTY":return{...e,namepromptEmpty:!0}}return e},doSetPrecallReviewDone:()=>({type:"PRECALL_REVIEW_DONE"}),doSetPrecallReviewWanted:e=>({type:"PRECALL_REVIEW_WANTED",payload:e,meta:{analytics:R(!e),persist:{skipPrecallReview:!e}}}),doSetPrecallNamePrompt:e=>({store:t})=>{if(e)return t.doSetLocalDisplayName(e);t.dispatch({type:"PRECALL_NAMEPROMPT_EMPTY"})},selectPrecallNamePromptEmpty:e=>e.precall.namepromptEmpty,selectPrecallRaw:e=>e.precall,selectHasReachedPrecallReview:Object(o.f)("selectPersisted",e=>!!e.precallReachedReview),selectShouldShowNamePrompt:Object(o.f)("selectApplicationState","selectDisplayName","selectFeatureNamePromptOff","selectPrecallNamePromptEmpty","selectWasRecentlyInRoom",(e,t,a,o,n)=>"started"===e&&!a&&!o&&!t&&!n),selectIsPrecallReviewWanted:Object(o.f)("selectPrecallRaw","selectPersisted",(e,t)=>null!==e.wantPrecallReview?e.wantPrecallReview:!0!==t.skipPrecallReview),selectShouldShowReviewPage:Object(o.f)("selectPrecallRaw","selectApplicationState","selectConfigNoPrecallReview","selectIsPrecallReviewWanted","selectLocalStreamIsDummy","selectShouldShowKnockPage","selectWasRecentlyInRoom",(e,t,a,o,n,i,r)=>i?!e.reviewed:!n&&!a&&(!(null===e.wantPrecallReview&&!o)&&(!e.reviewed&&"started"===t&&!r)))};const Et={clients:[]};function Rt(e){const{streams:t,...a}=e;return{streamIds:t,isMutedLocally:!1,...a}}function St(e,t){const a=e.clients.findIndex(e=>e.id===t);return{index:a,client:e.clients[a]}}function It(e,t,a){const{client:o,index:n}=St(e,t);if(!o)return console.error(`Did not find client for update ${t}`),e;const i=[...e.clients];return i.splice(n,1,{...o,...a}),{...e,clients:i}}var vt={name:"remoteClients",reducer:(e=Et,{type:t,payload:a})=>{switch(t){case K.a.NEW_CLIENT:return function(e,t){const{client:a}=St(e,t.id);return a?(console.warn(`Tried adding already found client ${t.id}, updating instead`),It(e,t.id,t)):{...e,clients:[...e.clients,t]}}(e,Rt(a.client));case K.a.CLIENT_LEFT:return{...e,clients:e.clients.filter(e=>e.id!==a.clientId)};case K.a.ROOM_JOINED:return{...e,clients:a.room.clients.filter(e=>e.id!==a.selfId).map(e=>Rt(e))};case K.a.CLIENT_METADATA_RECEIVED:if("UserData"===a.type)return It(e,a.payload.clientId,{avatarUrl:a.payload.avatarUrl,displayName:a.payload.displayName});console.warn(`Unknown client metadata type ${a.type}`);break;case K.a.SCREENSHARE_STARTED:return function(e,t,a){const{client:o}=St(e,t);return!o||o.streamIds.includes(a)?(console.warn(`No client ${t} or stream ${a} already exists`),e):It(e,t,{streamIds:[...o.streamIds,a]})}(e,a.clientId,a.streamId);case K.a.SCREENSHARE_STOPPED:return function(e,t,a){const{client:o}=St(e,t);if(!o)return console.error(`No client ${t} found to remove stream ${a}`),e;const n=o.stream&&o.stream.id,i=o.presentationStream&&o.presentationStream.id;return It(e,t,{streamIds:o.streamIds.filter(e=>e!==a),...n===a&&{stream:null,audioOnlyStream:null},...i===a&&{presentationStream:null}})}(e,a.clientId,a.streamId);case K.a.RECORDING_STARTED:return It(e,a.clientId,{isRecording:!0});case K.a.RECORDING_STOPPED:return It(e,a.clientId,{isRecording:!1});case K.a.AUDIO_ENABLED:return It(e,a.clientId,{isAudioEnabled:a.isAudioEnabled});case K.a.VIDEO_ENABLED:return It(e,a.clientId,{isVideoEnabled:a.isVideoEnabled});case ue.STREAM_ADDED:return function(e,t,a){const{client:o}=St(e,t);if(!o)return console.error(`Did not find client ${t} for adding stream`),e;if(!o.stream||o.stream.id===a.id){const o=new MediaStream(a.getAudioTracks());return It(e,t,{stream:a,audioOnlyStream:o})}return It(e,t,{presentationStream:a})}(e,a.clientId,a.stream);case ue.CLIENT_CONNECTION_STATUS_CHANGED:return It(e,a.clientId,{connectionStatus:a.status});case"REMOTE_CLIENTS_SET_LOCAL_MUTE":return It(e,a.clientId,{isMutedLocally:a.isMutedLocally})}return e},selectRemoteClients:e=>e.remoteClients.clients,selectActiveScreenshareView:Object(o.f)("selectRemoteClientViews",e=>e.find(e=>e.isPresentation)),selectIsRoomEmpty:Object(o.f)("selectRemoteClients",e=>0===e.length),selectIsAnyoneRecording:Object(o.f)("selectRemoteClients","selectIsRecording",(e,t)=>t||e.some(e=>e.isRecording)),selectRemoteClientViews:Object(o.f)("selectLocalScreenshareStream","selectRemoteClients","selectRoomIsFree",(e,t,a)=>{const o=[];e&&!a&&o.push({id:"local-screenshare",stream:e,displayName:"Your screenshare",isPresentation:!0,isVideoEnabled:!0,isAudioEnabled:!0});for(const n of t){const{presentationStream:e,...t}=n,a=n.displayName||"Guest",i=e&&e.active,r=n.stream&&n.stream.active;!r&&i||o.push({...t,displayName:a}),i&&o.push({...t,id:"pres-"+n.id,stream:n.presentationStream,displayName:`Screenshare (${a})`,isPresentation:!0,isVideoEnabled:!0,...r&&{isRecording:null}})}return o}),selectNumClients:Object(o.f)("selectRemoteClients",e=>e.length+1),selectScreenshareClientIds:Object(o.f)("selectRemoteClientViews",e=>e.filter(e=>e.isPresentation).map(e=>e.id)),doSetRemoteClientLocalMute:({clientId:e,isMutedLocally:t})=>({type:"REMOTE_CLIENTS_SET_LOCAL_MUTE",payload:{clientId:e,isMutedLocally:t}})};function Ct(e){return{isClaimed:e.isClaimed,isLocked:e.isLocked,mode:e.mode,product:e.product,type:e.type,roomName:e.roomName,knockPage:e.knockPage,backgroundUrl:e.backgroundImageUrl,logoUrl:e.logoUrl}}const yt={error:null,hasFetched:!1,isFetching:!1,isFull:!1,isFullWarningDismissed:!1,session:null,modeError:null,refreshing:!1,remoteRecording:!1,room:Ct({}),roomLockError:null};var Ot={name:"room",reducer:(e=yt,{type:t,payload:a,error:o})=>{switch(t){case K.a.CLIENT_UNABLE_TO_JOIN_ERROR:return{...e,isFull:"room_full"===a.error||e.room.isFull};case K.a.CLIENT_LEFT:return{...e,isFull:!1,isFullWarningDismissed:!1};case K.a.NEW_CLIENT:case K.a.ROOM_JOINED:return{...e,session:a.room.session};case K.a.ROOM_MODE_CHANGED:return{...e,refreshing:!0};case K.a.ROOM_LOCKED_ERROR:return{...e,roomLockError:o};case K.a.ROOM_LOCKED:return{...e,room:{...e.room,isLocked:a.isLocked}};case"ROOM_IS_FULL_WARNING_DISMISSED":return{...e,isFullWarningDismissed:!0};case"ROOM_FETCH_STARTED":return{...e,isFetching:!0};case"ROOM_FETCH_FINISHED":return{...e,room:Ct(a),hasFetched:!0,isFetching:!1};case"ROOM_FETCH_FAILED":return{...e,error:a||o,hasFetched:!0,isFetching:!1};case"ROOM_SET_MODE_FAILED":return{...e,modeError:a}}return e},doFetchRoom:e=>async({dispatch:t,roomService:a})=>{t({type:"ROOM_FETCH_STARTED"});try{t({type:"ROOM_FETCH_FINISHED",payload:await a.getRoom(e)})}catch(o){t({type:"ROOM_FETCH_FAILED",payload:o,error:!0})}},doSetRoomLock:e=>({type:"ROOM_LOCK_CHANGE_INITIATED",payload:e,meta:{signal:{type:"set_lock",payload:{locked:e}},analytics:k(e)}}),doSetRoomMode:e=>async({dispatch:t,store:a,roomService:o})=>{const n=a.selectRoomName();t({type:"ROOM_SET_MODE_STARTED",payload:e});try{await o.changeMode({roomName:n,mode:e}),t({type:"ROOM_SET_MODE_FINISHED"})}catch(i){t({type:"ROOM_SET_MODE_FAILED",payload:i,error:!0})}},doDismissRoomFullWarning:()=>({type:"ROOM_IS_FULL_WARNING_DISMISSED"}),selectRoomRaw:e=>e.room,selectRoom:e=>e.room.room,selectRoomError:e=>e.room.error,selectRoomIsLocked:e=>e.room.room.isLocked,selectRoomLockError:e=>e.room.roomLockError,selectRoomMode:e=>e.room.room.mode,selectRoomProduct:e=>e.room.room.product&&e.room.room.product.categoryName,selectRoomRefreshing:e=>e.room.refreshing,selectRoomType:e=>e.room.room.type,selectRoomServerSessionRaw:e=>e.room.session,selectRoomSessionId:e=>e.room.session&&e.room.session.id,selectHasRoomFetched:e=>!e.room.error&&e.room.hasFetched,selectIsRoomFetching:e=>e.room.isFetching,selectRoomParticipantLimit:Object(o.f)("selectRoomMode",e=>rt.c[e]),selectRoomIsFree:Object(o.f)("selectRoomProduct",e=>"personal_free"===e),selectRoomModeError:Object(o.f)("selectRoomRaw",e=>e.modeError?e.modeError.data&&e.modeError.data.error?e.modeError.data.error:"Unknown error":""),selectIsRoomUnclaimed:Object(o.f)("selectRoomRaw","selectRoomName",(e,t)=>e.hasFetched&&!1===e.room.isClaimed&&!t.startsWith("/e2etest-")),selectCanSetLargerRoomMode:Object(o.f)("selectCanSetRoomMode","selectRoomMode",(e,t)=>e&&"normal"===t),selectCanUpgradeRoom:Object(o.f)("selectRoomIsFree","selectIsRoomOwner",(e,t)=>e&&t),selectRoomSessionStartTime:Object(o.f)("selectRoomServerSessionRaw",e=>e&&e.createdAt&&new Date(e.createdAt).getTime()),selectRoomSessionElapsedTime:Object(o.f)("selectRoomSessionStartTime","selectAppTime",(e,t)=>e&&Math.abs(t-e)||0),selectRoomSessionRelativeJoinTime:Object(o.f)("selectRoomSessionStartTime","selectRoomSession",(e,t)=>e&&t&&Math.max(t.joined-e,0)||0),selectShouldShowRoomFullWarning:Object(o.f)("selectRoomRaw","selectIsRoomOwner",(e,t)=>t&&e.isFull&&!e.isFullWarningDismissed),selectRoomSession:Object(o.f)("selectRoomName","selectPersisted",(e,t)=>t.roomSessions&&t.roomSessions[e]),selectWasRecentlyInRoom:Object(o.f)("selectRoomSession","selectAppTime",(e,t)=>e&&e.lastSeen>t-6e4),reactUpdateRoomSession:Object(o.f)("selectAppTime","selectPersisted","selectRoomSession","selectRoomName","selectRoomConnectionStatus",(e,t,a,o,n)=>{if("joined"===n&&(!a||a.lastSeen<e-3e4)){const a={};return Object.keys(t.roomSessions||{}).forEach(o=>{t.roomSessions[o].lastSeen>e-864e5&&(a[o]=t.roomSessions[o])}),a[o]||(a[o]={joined:e}),a[o].lastSeen=e,{type:"ROOMSESSION_UPDATED",meta:{persist:{roomSessions:a}}}}})},wt=a(18);const Nt={status:"",error:null,iceServers:[],sfuServer:null,localClientId:""};var Tt={name:"roomConnection",reducer:(e=Nt,{type:t,payload:a,error:o})=>{switch(t){case K.a.ROOM_JOINED:return{...e,status:"joined",error:null,iceServers:a.room.iceServers,localClientId:a.selfId,sfuServer:a.room.sfuServer};case K.a.ROOM_JOINED_ERROR:return{...e,status:"error",error:o};case K.a.CLIENT_KICKED:return{...e,status:"kicked"};case K.a.ROOM_LEFT:return{...e,status:"left"};case K.a.RECONNECT:return{...e,status:"reconnect"};case"CONNECT_ROOM_INITIATED":return{...e,status:"joining"};case"DISCONNECT_ROOM_INITIATED":return{...e,status:"leaving"}}return e},selectRoomConnectionRaw:e=>e.roomConnection,selectRoomConnectionStatus:e=>e.roomConnection.status,selectRoomConnectionError:e=>e.roomConnection.error,selectIceServers:e=>e.roomConnection.iceServers,selectLocalClientId:e=>e.roomConnection.localClientId,selectSfuServer:Object(o.f)("selectRoomConnectionRaw","selectConfigSfu",(e,t)=>t?{url:t}:e.sfuServer),doConnectRoom:()=>({dispatch:e,store:t})=>{e({type:"CONNECT_ROOM_INITIATED",meta:{signal:{type:"join_room",payload:{organizationId:t.selectOrganizationId(),roomName:t.selectRoomName(),roomKey:t.selectKnockRoomKey(),selfId:t.selectLocalClientId(),config:{isAudioEnabled:t.selectIsAudioEnabled(),isVideoEnabled:t.selectIsVideoEnabled()}}}}})},doDisconnectRoom:()=>({type:"DISCONNECT_ROOM_INITIATED",meta:{signal:{type:wt.a.LEAVE_ROOM}}}),reactUpdateRoomConnection:Object(o.f)("selectApplicationState","selectFeatureIsExemptFromRoomUnclaimedConstraint","selectHasRoomFetched","selectIsRoomUnclaimed","selectShouldShowKnockPage","selectMediaPermissionStatus","selectShouldShowReviewPage","selectSignalStatus","selectRoomConnectionStatus",(e,t,a,o,n,i,r,s,c)=>"connected"!==s||!a||o&&!t||r||n||"granted"!==i||!["","reconnect"].includes(c)?"left"===e&&"joined"===c?{actionCreator:"doDisconnectRoom"}:void 0:{actionCreator:"doConnectRoom"})};function At({entrypoint:e,description:t,icons:a,link:o,name:n,productCategories:i=[],roomIntegrationId:r,title:s,type:c,matcher:l,webview:d}){fe.a.ok(e,"entrypoint is required"),fe.a.ok(t,"description is required"),fe.a.ok(a,"icons is required"),fe.a.ok(a.small,"icons.small is required"),fe.a.ok(a.large,"icons.small is required"),fe.a.ok(o,"link is required"),fe.a.ok(n,"name is required"),fe.a.ok(r,"roomIntegrationId is required"),fe.a.ok(s,"title is required"),fe.a.ok(c,"type is required"),fe.a.ok(l,"matcher is required"),fe.a.ok(d,"webview is required");const u=l.match(/\/(.*?)\/([a-z]*)?$/i);return{entrypoint:e,description:t,icons:{small:a.small,large:a.large},link:o,name:n,productCategories:i,roomIntegrationId:String(r),title:s,type:c,webview:d,matcher:new RegExp(u[1]||"^$",u[2]||"")}}function kt(e={}){return Object.keys(e).reduce((t,a)=>{const{entrypoint:o,tagName:n,props:i}=e[a];return function(e){if("string"!==typeof e)return!1;try{return new URL(e),!0}catch(t){return!1}}(o)?"string"===typeof(r=n)&&r.toLowerCase()===r&&r.includes("-")?null===(s=i)||Array.isArray(s)||"object"!==typeof s?(console.warn(`malformed props: ${i}`),t):(t[a]={entrypoint:o,tagName:n,props:i},t):(console.warn(`malformed tagName: ${n}`),t):(console.warn(`malformed entrypoint URL: ${o}`),t);var r,s},{})}function _t(e,t){const{[e]:a,...o}=t;return o}function Lt(e,t){const a=e.name.toUpperCase(),o=t.name.toUpperCase();return a<o?-1:a>o?1:0}const Dt={available:[],bootstrap:{},disableError:null,enableError:null,enabled:[],error:null,hasFetched:!1,isFetching:!1,isDialogOpen:!1,running:{},startError:null,stopError:null,unavailable:[]};var Pt={name:"roomIntegration",reducer:(e=Dt,{type:t,payload:a,error:o})=>{switch(t){case K.a.ROOM_INTEGRATION_ACTIVATED:return{...e,running:{...e.running,[a.roomIntegrationId]:a.state}};case K.a.ROOM_INTEGRATION_ACTIVATED_ERROR:return{...e,startError:o};case K.a.ROOM_INTEGRATION_DEACTIVATED:return{...e,running:_t(a.roomIntegrationId,e.running)};case K.a.ROOM_INTEGRATION_DEACTIVATED_ERROR:return{...e,stopError:o};case K.a.ROOM_INTEGRATION_ENABLED:return{...e,enabled:[...e.enabled,String(a.roomIntegrationId)]};case K.a.ROOM_INTEGRATION_DISABLED:return{...e,enabled:e.enabled.filter(e=>e!==String(a.roomIntegrationId))};case K.a.ROOM_JOINED:return{...e,running:kt(a.roomIntegrationSession)};case"ROOM_INTEGRATION_FETCH_STARTED":return{...e,isFetching:!0};case"ROOM_INTEGRATION_FETCH_FINISHED":return{...e,available:[...a.enabledRoomIntegrations,...a.disabledRoomIntegrations].map(At),enabled:a.enabledRoomIntegrations.map(({roomIntegrationId:e})=>String(e)),unavailable:a.unavailableRoomIntegrations.map(At),hasFetched:!0,isFetching:!1};case"ROOM_INTEGRATION_FETCH_FAILED":return{...e,error:a||o,hasFetched:!0,isFetching:!1};case"ROOM_INTEGRATION_BOOTSTRAP_STARTED":return{...e,bootstrap:{...e.bootstrap,[a.roomIntegrationId]:{config:a.config,featureSource:a.featureSource}}};case"ROOM_INTEGRATION_BOOTSTRAP_FINISHED":return{...e,bootstrap:{...e.bootstrap,[a]:null}};case"ROOM_INTEGRATION_BOOTSTRAP_FAILED":return{...e,error:a};case"ROOM_INTEGRATION_CONFIGURE_MODAL":return{...e,isDialogOpen:a};case"ROOM_INTEGRATION_ENABLE_FAILED":return{...e,enableError:a};case"ROOM_INTEGRATION_DISABLE_FAILED":return{...e,disableError:a}}return e},doEnableRoomIntegration:e=>async({dispatch:t,store:a,roomIntegrationService:o})=>{t({type:"ROOM_INTEGRATION_ENABLE_STARTED"});try{await o.enableRoomIntegration({roomName:a.selectRoomName(),roomIntegrationId:Number(e)}),t({type:"ROOM_INTEGRATION_ENABLE_FINISHED"})}catch(n){t({type:"ROOM_INTEGRATION_ENABLE_FAILED",payload:n,error:!0})}},doDisableRoomIntegration:e=>async({dispatch:t,store:a,roomIntegrationService:o})=>{t({type:"ROOM_INTEGRATION_DISABLE_STARTED"});try{await o.disableRoomIntegration({roomName:a.selectRoomName(),roomIntegrationId:Number(e)}),t({type:"ROOM_INTEGRATION_DISABLE_FINISHED"})}catch(n){t({type:"ROOM_INTEGRATION_DISABLE_FAILED",payload:n,error:!0})}},doFetchRoomIntegrations:()=>async({dispatch:e,store:t,roomIntegrationService:a})=>{e({type:"ROOM_INTEGRATION_FETCH_STARTED"});try{const{enabledRoomIntegrations:o,disabledRoomIntegrations:n,unavailableRoomIntegrations:i}=await a.findRoomIntegrations(t.selectRoomName());e({type:"ROOM_INTEGRATION_FETCH_FINISHED",payload:{enabledRoomIntegrations:o,disabledRoomIntegrations:n,unavailableRoomIntegrations:i}})}catch(o){e({type:"ROOM_INTEGRATION_FETCH_FAILED",payload:o,error:!0})}},doStartRoomIntegration:({roomIntegrationId:e,tagName:t,props:a,featureSource:o})=>({dispatch:n,store:i})=>{const{webview:r,entrypoint:s,name:c}=i.selectEnabledRoomIntegrations().find(({roomIntegrationId:t})=>t===e),l=i.selectNumClients();n({type:"ROOM_INTEGRATION_ACTIVATE_INITIATED",meta:{signal:{type:"activate_room_integration",payload:{roomIntegrationId:Number(e),state:{tagName:t,props:a,webview:r,entrypoint:s}}},analytics:O({integrationName:c,numClients:l,featureSource:o})}})},doBootstrapRoomIntegration:({roomIntegrationId:e,config:t,featureSource:a})=>async({dispatch:o,store:n})=>{const{entrypoint:i,tagName:r,isEnabled:s}=n.selectAvailableRoomIntegrations().find(t=>t.roomIntegrationId===e);s||n.doEnableRoomIntegration(e),o({type:"ROOM_INTEGRATION_BOOTSTRAP_STARTED",payload:{roomIntegrationId:e,config:t,featureSource:a}});try{const a=await import(i),s=()=>o({type:"ROOM_INTEGRATION_BOOTSTRAP_FINISHED",payload:e}),c={closeRoomIntegration:()=>n.doStopRoomIntegration({roomIntegrationId:e}),enableAudioInput:({enabled:e})=>n.doOverrideAudio(!e),formSubmit:({props:t,tagName:a,featureSource:o})=>{n.doStartRoomIntegration({roomIntegrationId:e,props:t,tagName:a,featureSource:o}),s()},formClose:s};a.default.prototype.integrationApi=c,customElements.get(r)||customElements.define(r,a.default),null===t&&s()}catch(c){o({type:"ROOM_INTEGRATION_BOOTSTRAP_FAILED",payload:c,error:!0})}},doStopRoomIntegration:({roomIntegrationId:e})=>({dispatch:t,store:a})=>{const{name:o}=a.selectEnabledRoomIntegrations().find(t=>t.roomIntegrationId===e);t({type:"ROOM_INTEGRATION_DEACTIVATE_INITIATED",meta:{signal:{type:"deactivate_room_integration",payload:{roomIntegrationId:Number(e)}},analytics:w({integrationName:o})}})},doToggleRoomIntegrationSettings:e=>({type:"ROOM_INTEGRATION_CONFIGURE_MODAL",payload:e}),selectRoomIntegrationRaw:e=>e.roomIntegration,selectHasRoomIntegrationFetched:e=>e.roomIntegration.hasFetched,selectIsRoomIntegrationFetching:e=>e.roomIntegration.isFetching,selectIsRoomIntegrationDialogOpen:e=>e.roomIntegration.isDialogOpen,selectRoomIntegrationError:Object(o.f)("selectRoomIntegrationRaw",e=>e.error||e.startError||e.stopError||e.enableError||e.disableError),selectAvailableRoomIntegrations:Object(o.f)("selectRoomIntegrationRaw",e=>e.available.sort(Lt).map(t=>{const{roomIntegrationId:a,name:o}=t;return{...t,isEnabled:e.enabled.includes(a),isRunning:!!e.running[a],tagName:`${o}-integration`,bootstrap:e.bootstrap[a]}})),selectEnabledRoomIntegrations:Object(o.f)("selectAvailableRoomIntegrations",e=>e.filter(({isEnabled:e})=>e).sort(Lt)),selectUnavailableRoomIntegrations:Object(o.f)("selectRoomIntegrationRaw",e=>e.unavailable.sort(Lt).map(e=>({...e,isEnabled:!1}))),selectRunningRoomIntegrations:Object(o.f)("selectRoomIntegrationRaw",e=>Object.keys(e.running).filter(t=>e.enabled.includes(t)).map(t=>({roomIntegrationId:t,type:e.available.find(e=>e.roomIntegrationId===t).type,state:e.running[t]}))),selectIsRoomIntegrationsAvailable:Object(o.f)("selectCanChangeRoomIntegrations","selectConfigNoRoomIntegrations","selectEnabledRoomIntegrations","selectHasRoomFetched",(e,t,a,o)=>o&&!t&&(e||a.length>0)),selectIsRoomIntegrationRunning:Object(o.f)("selectRunningRoomIntegrations",e=>e.length>0),reactRoomIntegrationStarted:Object(o.f)("selectRoomIntegrationRaw","selectRunningRoomIntegrations",(e,t)=>{if(t.length>0&&"undefined"===typeof e.bootstrap[t[0].roomIntegrationId]){const{roomIntegrationId:e}=t[0];return{actionCreator:"doBootstrapRoomIntegration",args:[{roomIntegrationId:e,config:null,featureSource:null}]}}}),reactFeatureRoomIntegrations:Object(o.f)("selectConfigNoRoomIntegrations","selectHasRoomFetched","selectHasUserFetched","selectHasOrganizationFetched","selectHasRoomIntegrationFetched","selectIsRoomIntegrationFetching",(e,t,a,o,n,i)=>{if(!e&&t&&a&&o&&!n&&!i)return{actionCreator:"doFetchRoomIntegrations"}})},Mt=a(62);const jt={rtcStatsIntervalHandle:null,rtcPrevStatsPerClient:{},statsPerClient:{}};function Ft(e,t){return t.split(".").reduce((e,t)=>e[t],e)}const xt=e=>{const t={byType:{},byId:{}};return e.forEach(e=>{t.byId[e.id]=e,t.byType[e.type]||(t.byType[e.type]=[]),t.byType[e.type].push(e)}),t},qt=(e,t)=>{if(!e||!t)return{};const a=xt(e.stats),o=xt(t.stats),n={};return["inbound","outbound"].forEach(e=>{const t=e+"-rtp",i=a.byType[t],r=o.byType[t];if(i&&r){const t={};n[e]=t,["audio","video"].forEach(n=>{const s=r.filter(e=>(e.kind||e.mediaType)===n);for(const r of s){const s=i.find(e=>e.id===r.id);if(s&&r){const i=(r.timestamp-s.timestamp)/1e3,c={rtp:r,codec:o.byId[r.codecId],track:o.byId[r.trackId],transport:o.byId[r.transportId]},l={rtp:s,codec:a.byId[s.codecId],track:a.byId[s.trackId],transport:a.byId[s.transportId]},d=(e,t=1)=>{try{const a=Ft(l,e),o=Ft(c,e);if(void 0!==a&&void 0!==o)return(o-a)/t}catch(a){}};c.diff={kbps:d("rtp."+("inbound"===e?"bytesReceived":"bytesSent"),1024*i),fps:d("track."+("inbound"===e?"framesReceived":"framesSent"),i),fpsEncoding:d("rtp."+("inbound"===e?"framesDecoded":"framesEncoded"),i),qpSumPerSecond:d("rtp.qpSum",i),framesDroppedPerSecond:d("track.framesDropped",i),packetsLostPerSecond:d("rtp.packetsLost",i),jittterBufferDelayPerSecond:d("track.jitterBufferDelay",i)},t[n]||(t[n]=[]),t[n].push(c)}}})}}),n.senders=t.senders,n};var Bt={name:"stats",reducer:(e=jt,{type:t,payload:a})=>{switch(t){case"STATS_STARTED":return{...e,rtcStatsIntervalHandle:a.rtcStatsIntervalHandle};case"STATS_STOPPED":return{...e,rtcStatsIntervalHandle:null};case"STATS_RTCSTATS_REPORTED":{const t=e.rtcPrevStatsPerClient[a.id],o=a.data;return{...e,rtcPrevStatsPerClient:{...e.rtcPrevStatsPerClient,[a.id]:o},statsPerClient:{...e.statsPerClient,[a.id]:{...e.statsPerClient[a.id]||{},rtc:qt(t,o)}}}}}return e},doReportStats:(e,t)=>({type:"STATS_RTCSTATS_REPORTED",payload:{id:e,data:t}}),doStartStats:()=>({dispatch:e,store:t})=>{if(t.selectStatsIsRunning())return;e({type:"STATS_STARTED",payload:{rtcStatsIntervalHandle:setInterval(()=>{const e=t.selectRtcManager_();if(!e)return;const a=[...t.selectRemoteClients(),{id:t.selectLocalClientId()}];for(const o of a){const a=e.peerConnections[o.id];if(!a)continue;const n=a.pc.getSenders().map(e=>({kind:e.track&&e.track.kind,parameters:e.getParameters()}));a.pc.getStats().then(e=>{t.doReportStats(o.id,{stats:e,senders:n})})}},2e3)}})},doStopStats:()=>({dispatch:e,store:t})=>{const{rtcStatsIntervalHandle:a}=t.selectStatsRaw();a&&(clearInterval(a),e({type:"STATS_STOPPED"}))},doToggleStats:()=>({store:e})=>{e.selectStatsIsRunning()?e.doStopStats():e.doStartStats()},selectStatsRaw:e=>e.stats,selectStats:e=>e.stats.statsPerClient,selectStatsIsRunning:e=>!!e.stats.rtcStatsIntervalHandle,reactStartStatsOnRoomConnected:Object(o.f)("selectFeatureStats","selectStatsIsRunning","selectRoomConnectionStatus",(e,t,a)=>{if(e&&!t&&"joined"===a)return{actionCreator:"doStartStats"}})},Ut={name:"theme",selectThemeRaw:e=>e.theme,selectThemeBackgroundUrl:Object(o.f)("selectOrganizationBackgroundUrl","selectPersisted","selectRoom","selectRoomName",(e,t,a,o)=>void 0===e&&void 0===a.backgroundUrl?(t.themeBackground||{})[o]:a.backgroundUrl||e),selectThemeKnockBackgroundUrl:Object(o.f)("selectOrganizationKnockBackgroundUrl","selectPersisted","selectRoom","selectRoomName",(e,t,a,o)=>{const n=a.knockPage&&a.knockPage.backgroundImageUrl;return void 0===e&&void 0===n?(t.themeKnockBackground||{})[o]:n||e}),selectThemeOrKnockBackgroundUrl:Object(o.f)("selectThemeBackgroundUrl","selectThemeKnockBackgroundUrl","selectPermissionsFetchedAt","selectShouldShowKnockPage",(e,t,a,o)=>o&&a&&t?t:e),selectThemeLogoUrl:Object(o.f)("selectOrganizationLogoUrl","selectPersisted","selectRoom","selectRoomName",(e,t,a,o)=>void 0===e&&void 0===a.logoUrl?(t.themeLogo||{})[o]:a.logoUrl||e),reactUpdateThemeBackground:Object(o.f)("selectHasOrganizationFetched","selectHasRoomFetched","selectThemeBackgroundUrl","selectRoomName","selectPersisted",(e,t,a,o,n)=>{if(e&&t){if(a!==(n.themeBackground||{})[o])return{actionCreator:"doPersist",args:[{themeBackground:{[o]:a}}]}}}),reactUpdateThemeKnockBackground:Object(o.f)("selectHasOrganizationFetched","selectHasRoomFetched","selectThemeKnockBackgroundUrl","selectRoomName","selectPersisted",(e,t,a,o,n)=>{if(e&&t){if(a!==(n.themeKnockBackground||{})[o])return{actionCreator:"doPersist",args:[{themeKnockBackground:{[o]:a}}]}}}),reactUpdateThemeLogo:Object(o.f)("selectHasOrganizationFetched","selectHasRoomFetched","selectThemeLogoUrl","selectRoomName","selectPersisted",(e,t,a,o,n)=>{if(e&&t){if(a!==(n.themeLogo||{})[o])return{actionCreator:"doPersist",args:[{themeLogo:{[o]:a}}]}}})};const zt={helpLink:null,message:null,timestamp:null};var Ht={name:"toast",reducer:(e=zt,{type:t,payload:a})=>{switch(t){case"TOAST_SET":return{...e,helpLink:a.helpLink,message:a.message,timestamp:a.timestamp}}return e},doSetToast:(e,{helpLink:t}={})=>({type:"TOAST_SET",payload:{helpLink:t,message:e,timestamp:Date.now()}}),selectToast:e=>e.toast};const Vt={hasRestoredMuteState:!1};var Wt={name:"townhall",reducer:(e=Vt,{type:t})=>{switch(t){case"TOWNHALL_MUTE_STATE_RESTORED":return{...e,hasRestoredMuteState:!0}}return e},doRestoreMuteState:()=>({store:e,dispatch:t})=>{t({type:"TOWNHALL_MUTE_STATE_RESTORED"});const a=e.selectIsTownhallPresenterLimitReached();e.doToggleAudioEnabled(!a&&e.selectIsAudioWanted()),e.doToggleVideoEnabled(!a&&e.selectIsVideoWanted())},selectTownhallRaw:e=>e.townhall,selectIsTownhallMode:Object(o.f)("selectRoomMode",e=>e===rt.d.TOWNHALL),selectTownhallHasRestoredMuteState:e=>e.townhall.hasRestoredMuteState,selectTownhallNumPresenters:Object(o.f)("selectRemoteClients",e=>e.filter(e=>e.isAudioEnabled||e.isVideoEnabled).length),selectIsTownhallPresenterLimitReached:Object(o.f)("selectTownhallNumPresenters",e=>e>=rt.f),reactUpdateTownhallMuteState:Object(o.f)("selectIsTownhallMode","selectRoomConnectionStatus","selectTownhallHasRestoredMuteState",(e,t,a)=>{if(e&&!a&&"joined"===t)return{actionCreator:"doRestoreMuteState"}})},Gt=a(55);const Kt={user:new Gt.a,hasFetched:!1,isFetching:!1,error:null,fetchedAt:null};var $t={name:"user",reducer:(e=Kt,{type:t,payload:a,error:o})=>{switch(t){case"USER_FETCH_STARTED":return{...e,isFetching:!0};case"USER_FETCH_FINISHED":return{...e,user:a?new Gt.a(a):new Gt.a,error:null,fetchedAt:Date.now(),hasFetched:!0,isFetching:!1};case"USER_FETCH_FAILED":return{...e,error:a||o,isFetching:!1}}return e},doFetchUser:()=>async({dispatch:e,userService:t})=>{e({type:"USER_FETCH_STARTED"});try{e({type:"USER_FETCH_FINISHED",payload:await t.getUser()})}catch(a){e({type:"USER_FETCH_FAILED",payload:a,error:!0})}},selectUserRaw:e=>e.user,selectUser:e=>e.user.user,selectUserFetchedAt:e=>e.user.fetchedAt,selectHasUserFetchError:e=>!!e.user.error,selectHasUserFetched:e=>e.user.hasFetched||!!e.user.error,selectIsFetchingUser:e=>e.user.isFetching,selectCanCancelSubscription:Object(o.f)("selectUser",e=>!!(e.permissions&&e.permissions.subscriptions&&e.permissions.subscriptions.cancel&&e.permissions.subscriptions.cancel.isAllowed)),selectUserId:Object(o.f)("selectUser",e=>e&&e.userId),selectIsRoomOwner:Object(o.f)("selectUser","selectRoomName",(e,t)=>(e.ownedRooms||[]).some(e=>e.roomName===t)),selectIsUserLoggedIn:Object(o.f)("selectUserId",e=>!!e),reactFetchUser:Object(o.f)("selectIsFetchingUser","selectLoginStatusChangedAt","selectUserFetchedAt",(e,t,a)=>{if(!e&&t>a)return{actionCreator:"doFetchUser"}})};var Yt=window.requestIdleCallback||window.requestAnimationFrame||(e=>setTimeout(e,0));const Zt={current:null,updated:[]};var Jt={name:"videoSizes",reducer:(e=Zt,{type:t,payload:a})=>{switch(t){case"VIDEO_SIZES_UPDATED":return{...e,current:{...e.current,...a},updated:Object.keys(a)}}return e},getMiddleware:()=>e=>{const t=Object(ke.a)(()=>Yt(e.doVideoSizesUpdate_,{timeout:1e3}),{delay:1e3,edges:!0});return a=>o=>{const n=e.selectClientViewsInGrid(),i=e.selectIsSidebarOpen(),r=e.selectResolution(),s=e.selectDocumentSize(),c=a(o);return!e.selectIsSimulcast()||!1!==e.selectFeatureSizeReportingOff()||n===e.selectClientViewsInGrid()&&r===e.selectResolution()&&s===e.selectDocumentSize()&&i===e.selectIsSidebarOpen()||t(),c}},doVideoSizesUpdate_:()=>({store:e})=>{const t=[(e.selectLocalScreenshareStream()||{}).id,(e.selectLocalStream()||{}).id],a=e.selectVideoSizes(),o={};[...window.document.querySelectorAll("[data-clientid] video")].forEach(e=>{const n=(e.srcObject||{}).id;if(!n||t.includes(n))return;const{width:i,height:r}=e.getBoundingClientRect(),s=a&&a[n];s&&s.width===i&&s.height===r||(o[n]={width:i,height:r})}),Object.keys(o).length&&e.dispatch({type:"VIDEO_SIZES_UPDATED",payload:o})},selectVideoSizesRaw:e=>e.videoSizes,selectVideoSizes:Object(o.f)("selectVideoSizesRaw",e=>e.current),selectUpdatedVideoSizes:Object(o.f)("selectVideoSizesRaw",e=>{const t=e.current||[];return e.updated.map(e=>[e,t[e].width,t[e].height])})},Qt=a(153);function Xt(){const e=function(){const e=new URL(rt.e),t=`${e.pathname.replace(/^\/$/,"")}/protocol/socket.io/v1`,a=e.origin,o={host:a,path:t,reconnectionDelay:5e3,reconnectionDelayMax:3e4,timeout:1e4};return new Qt.a(a,o)}();return[U,G,re,se.a,Oe(),Ae(),Object(K.b)(e),De,Me,xe,He,We,Ye,Je,Xe,tt,at.a,ot.a,it,dt,mt,gt,ht,bt,vt,Ot,Tt,Pt,Mt.c,Bt,Ut,Ht,Wt,$t,Jt,ge(e)]}var ea=a(147);let ta;function aa({initialState:e={},injectServices:t={},reactor:a=!0}={}){const n=[o.a,Object(o.d)({actionFilter:({type:e})=>"APP_IDLE"!==e}),...Xt(),Object(o.c)({cacheFn:ea.a.set}),{name:"services",getExtraArgs:()=>t}];return a&&n.push(Object(o.e)()),ta=Object(o.b)(...n)(e),ta}a.d(t,"b",(function(){return ta})),a.d(t,"a",(function(){return aa}))},function(e,t,a){"use strict";var o=a(1),n=a.n(o),i=a(0),r=a.n(i),s=a(8),c=(a(7),a(2)),l=a.n(c),d=a(94),u=a.n(d),m=a(148);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}let g=0;const h=[];function f(e,t){switch(t.type){case"ANIMATION_STARTED":return[...e.slice(0,-1),{...e[e.length-1],className:u.a.fadeIn}];case"BACKGROUND_STYLES_ADDED":return[...e,{bgImage:t.bgImage,key:g++}];case"ANIMATION_ENDED":return[...e.slice(0,-1).filter(e=>e.key===t.key),...e.slice(-1)];default:return e}}function b({bgImage:e,className:t,id:a,dispatch:o,windowSize:n}){const s=Object(i.useRef)();Object(i.useEffect)(()=>{const{current:e}=s,t=()=>setTimeout(()=>o({type:"ANIMATION_ENDED",key:a},5e3));return e.addEventListener("animationend",t),()=>e.removeEventListener("animationend",t)},[o,a]);const c=e.naturalWidth/e.naturalHeight>n.width/n.height?u.a.horizontallyCentered:u.a.verticallyCentered;return r.a.createElement("div",{ref:s,className:l()(u.a.wrapper,t,{[u.a.bottomShade]:!!e.src})},r.a.createElement("img",{className:c,src:e.src,alt:""}))}function E({src:e}){const[t,a]=Object(i.useReducer)(f,h),o=(e={})=>{a({type:"BACKGROUND_STYLES_ADDED",bgImage:e}),setTimeout(()=>a({type:"ANIMATION_STARTED"}),500)};Object(i.useEffect)(()=>{const t=new Image;let a=!1;function n(){const{naturalWidth:t,naturalHeight:n}=this;a||t+n===0||o({src:e,naturalWidth:t,naturalHeight:n})}return t.addEventListener("load",n),e?t.src=e:o(),()=>{a=!0,t.removeEventListener("load",n)}},[e]);const{windowSize:n}=Object(m.a)();return t.map(({key:e,...t})=>r.a.createElement(b,p({key:e,id:e,windowSize:n,dispatch:a},t)))}b.propTypes={bgImage:n.a.object,className:n.a.string,dispatch:n.a.func,id:n.a.number,windowSize:n.a.object},E.propTypes={src:n.a.string};var R=E;function S({children:e,themeOrKnockBackgroundUrl:t}){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{src:t}),e)}S.propTypes={children:n.a.element,themeOrKnockBackgroundUrl:n.a.string};t.a=Object(s.b)("selectThemeOrKnockBackgroundUrl",S)},,,,function(e,t,a){e.exports={ChatMessages:"ChatMessages-1ulV",emptyChatPlaceholder:"emptyChatPlaceholder-3Yet",emptyChatPlaceholderImage:"emptyChatPlaceholderImage-Gcyr"}},function(e,t,a){e.exports={ChatMessage:"ChatMessage-1E9N",content:"content-1YDU",link:"link-37Mw"}},function(e,t,a){e.exports={IntegrationTeaser:"IntegrationTeaser-1gL8",descriptionText:"descriptionText-jYHF",buttonWrapper:"buttonWrapper-1zWj"}},function(e,t,a){e.exports={editableTextWrapper:"editableTextWrapper-2Fq5",inputField:"inputField-2D3C",confirmBtn:"confirmBtn-12hC"}},function(e,t,a){e.exports={roomInviteSection:"roomInviteSection-2nCy",linkInput:"linkInput-23x2",linkDescription:"linkDescription-1D-N"}},function(e,t,a){e.exports={inlineButtonRow:"inlineButtonRow-1-Vo",inlineCallout:"inlineCallout-11b2",upsell:"upsell-2a61"}},function(e,t,a){e.exports={SegmentedControl:"SegmentedControl-3urC",segment:"segment-25Xv","segment--selected":"segment--selected-2_1q"}},function(e,t,a){e.exports={toastContainer:"toastContainer-3IQe","fade-in":"fade-in-3PSG",toastBody:"toastBody-3xtL",helpLink:"helpLink-rzmg"}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports={PrecallDialogLayout:"PrecallDialogLayout-36_n",fixedHeight:"fixedHeight-2ykj"}},function(e,t,a){e.exports={RotatingSpinner:"RotatingSpinner-31IG",spin:"spin-zHiW",RotatingSpinnerImage:"RotatingSpinnerImage-2fuf"}},function(e,t,a){e.exports={SupportedBrowsersList:"SupportedBrowsersList-mlED",OrSeparator:"OrSeparator-2RIe"}},function(e,t,a){e.exports={content:"content-17Gj",message:"message-1OJ_"}},function(e,t,a){e.exports={RoomHeader:"RoomHeader-1Jao",signupButton:"signupButton-3xsi"}},function(e,t,a){e.exports={avatarWrapper:"avatarWrapper-WuF2",avatar:"avatar-3URs"}},function(e,t,a){e.exports={toast:"toast-S5jk","fade-in-out":"fade-in-out-2HSs",recIcon:"recIcon-2pmf"}},function(e,t,a){e.exports={VideoStage:"VideoStage-39F2",emptyRoom:"emptyRoom-2Ed4"}},function(e,t,a){e.exports={Chevron:"Chevron-2qnd","Chevron--down":"Chevron--down-2oaE","Chevron--up":"Chevron--up-3hTb","Chevron--left":"Chevron--left-2Y0m","Chevron--right":"Chevron--right-2Qwj"}},function(e,t,a){e.exports={SpeakerSelector:"SpeakerSelector-2T2_",selectWithOverlay:"selectWithOverlay-2DGE",showTestButton:"showTestButton-3zdM",testButtonWrapper:"testButtonWrapper-2vrT",testButton:"testButton-139_"}},function(e,t,a){e.exports={SettingsSection:"SettingsSection-bk5h",chevronWrapper:"chevronWrapper-3M8G"}},function(e,t,a){e.exports={button:"button-21Xt",buttonContent:"buttonContent-2DEg"}},function(e,t,a){e.exports={backButton:"backButton-3c3f",loginButtonContainer:"loginButtonContainer-pMBp"}},function(e,t,a){e.exports={spinner:"spinner-2nnf",optOutButton:"optOutButton-35pv"}},function(e,t,a){e.exports={tosLink:"tosLink-CTx_",paragraph:"paragraph-3aor"}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";(function(e){var o=a(1),n=a.n(o),i=a(0),r=a.n(i),s=a(8),c=a(306),l=a(307),d=a(110),u=a(56),m=a(319),p=a(90),g=a(356),h=a(354),f=a(355),b=a(155);function E(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class R extends i.Component{constructor(t){super(t),E(this,"state",{roomName:null}),E(this,"handleApplicationUpdatedNotificationClick",()=>{e.location.reload(!0)});const a=Object(c.a)(window.location);a&&(this.state.roomName=a,this.props.doEnterRoom(a)),t.doSetFeatureContext({roomName:a})}componentDidMount(){e.addEventListener("application_updated",()=>{this.props.doApplicationUpdated()});const t=this.state.roomName;t&&this.props.doFetchRoom(t),this.props.doFetchUser(),this.props.doFetchCurrentOrganization()}render(){const{applicationState:e,isRoomFetching:t,isRoomUnclaimed:a,roomName:o}=this.props;let n=r.a.createElement(g.a,null);return"left"===e?n=r.a.createElement(h.a,null):"kicked"===e?n=r.a.createElement(p.a,{error:"kicked"}):o?t?n=r.a.createElement(u.a,null,"Fetching room..."):a&&(n=r.a.createElement(f.a,null)):n=r.a.createElement(d.a,null,"You need to be in a room"),r.a.createElement(m.a,null,r.a.createElement(l.a,null,Boolean(this.props.applicationUpdated)&&r.a.createElement(d.a,{onClick:this.handleApplicationUpdatedNotificationClick},"Application updated. Click here to reload."),r.a.createElement(b.a,null,n)))}}R.propTypes={applicationState:n.a.string.isRequired,applicationUpdated:n.a.bool.isRequired,doApplicationUpdated:n.a.func.isRequired,doEnterRoom:n.a.func.isRequired,doFetchCurrentOrganization:n.a.func.isRequired,doFetchRoom:n.a.func.isRequired,doFetchUser:n.a.func.isRequired,doSetFeatureContext:n.a.func.isRequired,isRoomFetching:n.a.bool.isRequired,isRoomUnclaimed:n.a.bool.isRequired,roomName:n.a.string.isRequired},t.a=Object(s.b)("doApplicationUpdated","doEnterRoom","doFetchCurrentOrganization","doFetchRoom","doFetchUser","doSetFeatureContext","selectApplicationState","selectApplicationUpdated","selectIsRoomFetching","selectIsRoomUnclaimed","selectRoomName",R)}).call(this,a(15))},function(e,t,a){"use strict";(function(e){function o(t){const a=t.pathname,o=function(e){const t=(e||"").match(/[?&]room-name=([^&]+)/);return t?t[1]:null}(t.search)||(a.length>1?a:null);return o&&e.decodeURIComponent(o)}a.d(t,"a",(function(){return o}))}).call(this,a(15))},function(e,t,a){"use strict";a(7);var o=a(8),n=a(0),i=a.n(n),r=a(1),s=a.n(r),c=a(90);class l extends n.PureComponent{constructor(...e){var t,a,o;super(...e),o={error:null},(a="state")in(t=this)?Object.defineProperty(t,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[a]=o}componentDidCatch(e,t){this.props.doCaptureException(e,{tags:{from:"ErrorBoundary"},extra:t}),this.setState({error:e})}render(){const e=this.state.error||this.props.fatalError;return e?i.a.createElement(c.a,{error:e}):this.props.children}}l.propTypes={children:s.a.node.isRequired,doCaptureException:s.a.func.isRequired,fatalError:s.a.object},t.a=Object(o.b)("doCaptureException","selectRoomName","selectFatalError",l)},,,,,,,,,,function(e,t,a){e.exports={precallHeader:"precallHeader-2de0"}},function(e,t,a){e.exports={HeadsUpNotification:"HeadsUpNotification-u4Kh"}},function(e,t,a){"use strict";var o=a(1),n=a.n(o),i=a(0),r=a.n(i),s=a(8),c=a(23),l=a(56),d=a(90);const u=({children:e,hasLocalizationFetched:t,localizationBundles:a,localizationError:o})=>o?r.a.createElement(d.a,{error:o}):t?r.a.createElement(c.LocalizationProvider,{bundles:a},e):r.a.createElement(l.a,null,"Loading localization ...");u.propTypes={children:n.a.element.isRequired,hasLocalizationFetched:n.a.bool.isRequired,localizationBundles:n.a.oneOfType([n.a.object,n.a.array]),localizationError:n.a.object},t.a=Object(s.b)("selectHasLocalizationFetched","selectLocalizationBundles","selectLocalizationError",u)},function(e,t,a){e.exports={ConnectedRoom:"ConnectedRoom-NfJF fullPage-2Bx8",videoStageWrapper:"videoStageWrapper-kaBj",videoControlsPaddedWrapper:"videoControlsPaddedWrapper-2H9A"}},function(e,t,a){e.exports={Chat:"Chat-3eGi",chatPreview:"chatPreview-Dqhn","fade-out":"fade-out-2-Te","chatPreview-body":"chatPreview-body-3v8q"}},function(e,t,a){"use strict";(function(e){a(7);var o=a(0),n=a(1),i=a.n(n),r=a(96),s=a.n(r),c=a(358),l=a(324),d=a(150),u=a(47),m=a(67);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const g=e=>e.reduce((e,t)=>e+=t.messages.length,0);class h extends o.PureComponent{constructor(...t){super(...t),p(this,"state",{numberOfUnreadMessages:0}),p(this,"componentDidMount",()=>{this._scrollToBottom()}),p(this,"_setupLegacyScrollListener",e=>{this._scrollArea=e,this._scrollListener=e.addEventListener("scroll",Object(m.a)(()=>{const t=e.clientHeight;this._isAtBottom=e.scrollHeight===e.scrollTop+t,this._isAtBottom&&this.setState({numberOfUnreadMessages:0})},{delay:500,edges:!0}))}),p(this,"_setupIntersectionObserver",(e,t)=>{this._intersectionObserver=new IntersectionObserver(e=>{const t=e[0];this._isAtBottom=!!t.intersectionRatio,this._isAtBottom&&this.setState({numberOfUnreadMessages:0})},{root:e}).observe(t)}),p(this,"_refScrollDetector",e=>{e&&(this._scrollDetector=e)}),p(this,"_refScrollArea",t=>{if(!t)return;if(!("IntersectionObserver"in e))return void this._setupLegacyScrollListener(t);if(!this._scrollDetector)throw new Error("Could not setup IntersectionObserver");const a=t,o=this._scrollDetector;this._setupIntersectionObserver(a,o)}),p(this,"_scrollToBottom",()=>{this._scrollDetector&&this._scrollDetector.scrollIntoView&&this._scrollDetector.scrollIntoView({behavior:"instant"}),this.setState(()=>({numberOfUnreadMessages:0}))}),p(this,"_handleMessageSubmit",t=>{this._scrollToBottom(),e.requestAnimationFrame(()=>{this.props.sendChatMessage(t)})}),p(this,"_handleChatMessageLoaded",()=>{this._isAtBottom&&this._scrollToBottom()})}componentDidUpdate(e){this._handleChatMessageLoaded();const{messageGroups:t}=this.props,[a]=t.slice(-1),[o]=e.messageGroups.slice(-1);a&&o&&a!==o&&t.length+g(t)!==e.messageGroups.length+g(e.messageGroups)&&this.setState(e=>({numberOfUnreadMessages:e.numberOfUnreadMessages+1}))}componentWillUnmount(){this._intersectionObserver&&this._intersectionObserver.disconnect(),this._mutationObserver&&this._mutationObserver.disconnect(),this._scrollArea&&this._scrollListener&&this._scrollArea.removeEventListener("scroll",this._scrollListener)}render(){const{messageGroups:e}=this.props;return o.createElement("div",{className:s.a.component},o.createElement("div",{className:s.a.chatMessages,ref:this._refScrollArea},o.createElement(c.a,{messageGroups:e}),o.createElement("div",{className:s.a.scrollDetector,ref:this._refScrollDetector})),this.state.numberOfUnreadMessages>0&&o.createElement("div",{className:s.a.unreadMessagesIndicator},o.createElement(l.a,{numberOfUnreadMessages:this.state.numberOfUnreadMessages,onClick:this._scrollToBottom})),o.createElement("div",{className:s.a.chatMessageInput},o.createElement(d.a,{autoFocus:this.props.autoFocusChatInput,onMessageSubmit:this._handleMessageSubmit})))}}h.propTypes={autoFocusChatInput:i.a.bool.isRequired,messageGroups:i.a.arrayOf(u.b).isRequired,sendChatMessage:i.a.func.isRequired},t.a=h}).call(this,a(15))},function(e,t,a){e.exports={IntegrationUpsell:"IntegrationUpsell-3NA8"}},function(e,t,a){"use strict";var o=a(0),n=a(1),i=a.n(n),r=a(2),s=a.n(r),c=a(325),l=a.n(c);function d({numberOfUnreadMessages:e,onClick:t}){const a=s()(l.a.ChatUnreadMessagesIndicator);return o.createElement("div",{className:a,onClick:t},e," unread messages")}d.propTypes={numberOfUnreadMessages:i.a.number.isRequired,onClick:i.a.func},t.a=o.memo(d)},function(e,t,a){e.exports={ChatUnreadMessagesIndicator:"ChatUnreadMessagesIndicator-3oKy"}},function(e,t,a){"use strict";(function(e){function o(){return e.HTMLMediaElement&&"sinkId"in e.HTMLMediaElement.prototype}a.d(t,"a",(function(){return o}))}).call(this,a(15))},function(e,t,a){e.exports={openChatButton:"openChatButton-2KkG"}},,function(e,t,a){e.exports={VideoElement:"VideoElement-2NB-"}},function(e,t,a){e.exports={Knockers:"Knockers-TnqR"}},function(e,t,a){e.exports={helpLink:"helpLink-13Jk"}},function(e,t,a){e.exports={helpLink:"helpLink-1ST0"}},,,,function(e,t,a){e.exports={CameraSelector:"CameraSelector-1Bsz"}},function(e,t,a){e.exports={MicSelector:"MicSelector-1P41"}},function(e,t,a){e.exports={switchBtn:"switchBtn-30GI"}},function(e,t,a){e.exports={header:"header-1vc0"}},function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return o}));a(268);class o{constructor(t,a=256){this._stream=t,this._audioCtx=new(e.AudioContext||e.webkitAudioContext),this._source=this._audioCtx.createMediaStreamSource(t),this._audioAnalyzer=function(t,a=256){let o,n=!1;const i=t.createAnalyser();return i.fftSize=a,i.smoothingTimeConstant=.65,{analyzer:i,subscribeFrequencyData:t=>{n=!1;const a=new Uint8Array(i.frequencyBinCount),r=()=>{n||(i.getByteFrequencyData(a),t(a),o=e.requestAnimationFrame(r))};o=e.requestAnimationFrame(r)},destroy:()=>{n=!0,void 0!==o&&(e.cancelAnimationFrame(o),o=void 0),i.disconnect()}}}(this._audioCtx,a),this._source.connect(this._audioAnalyzer.analyzer)}_clearAudioResources(){this._audioAnalyzer.destroy(),this._source.disconnect(),this._stream=void 0,this._audioCtx.close()}subscribeData(e){return this._audioAnalyzer.subscribeFrequencyData(e),()=>this._clearAudioResources()}}}).call(this,a(15))},,,,function(e,t,a){"use strict";(function(e){var o=a(5),n=a(10);t.a={name:"clientState",getReducer:()=>{const e={applicationState:"",applicationUpdated:!1,roomName:"",startTime:Date.now()};return(t=e,{type:a,payload:o})=>{switch(a){case n.a.ROOM_JOINED:return{...t,applicationState:"joined"};case n.a.CLIENT_KICKED:return{...t,applicationState:"kicked"};case"ROOM_ENTERED":return{...t,applicationState:"started",roomName:o.toLowerCase()};case"ROOM_LEFT":return{...t,applicationState:"left"};case"APPLICATION_UPDATED":return{...t,applicationUpdated:!0}}return t}},doApplicationUpdated:()=>({type:"APPLICATION_UPDATED"}),doEnterRoom:e=>({type:"ROOM_ENTERED",payload:e}),doLeaveRoom:()=>({type:"ROOM_LEFT"}),doReload:()=>(setTimeout(()=>e.location.reload(),0),{type:"RELOAD"}),selectClientStateRaw:e=>e.clientState,selectApplicationState:e=>e.clientState.applicationState,selectApplicationUpdated:e=>e.clientState.applicationUpdated,selectAppStartTime:e=>e.clientState.startTime,selectRoomName:e=>e.clientState.roomName,selectFatalError:Object(o.f)("selectRoomError","selectRoomConnectionError",(e,t)=>e||(t&&"room_locked"!==t?new Error(t):null))}}).call(this,a(15))},,,,,,function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return i}));var o=a(351);const n=()=>({canInstall:()=>{const t="undefined"!==typeof e.chrome,a=(()=>{const t=e.navigator.appVersion.match(/Chrome\/(.*?)[.]/);return t?parseInt(t[1]):null})()>=34;return t&&a},install:()=>{let t;t=e.navigator.userAgent.includes("OPR/")?"https://addons.opera.com/en/extensions/details/8f59860cf5a587d0edc7176b379248e40e9218f6-2/":"https://chrome.google.com/webstore/detail/bbpjcfkgapecndkanjcojnldopjlnmjk",e.open(t,"_blank","height=800,width=1100")}});class i{constructor(t=new o.a({name:"ScreenShare",installer:e.navigator.userAgent.includes("Chrome")?n():{canInstall:()=>!1,install:()=>{}}})){this._extension=t,this.available=new Promise(e=>{this._extension.init(e)})}_mutateTitle(){const e=window.document.title;return window.document.title='\u2981\u2981\u2981 SELECT THIS AND PRESS "SHARE" TO RECORD \u2981\u2981\u2981',location.pathname.includes("whereby-e2e")&&(window.document.title="e2e test title"),()=>window.document.title=e}isSupported(){return this._extension.canInstall}isAvailable(){return this._extension.hasExtension}install(){return this._extension.install()}shareTab(){const e=this._mutateTitle();return this._extension.sendAction("share-screen",["tab"]).then(t=>{if(e(),!t)throw new Error("No shared stream selected");return t},t=>{throw e(),t})}}}).call(this,a(15))},function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return i}));a(7);var o=a(6),n=a.n(o);class i{constructor({name:e,installer:t}){n()(e,"should have installable extension name"),n()(t,"should have extension installer"),this.canInstall=t.canInstall(),this.hasExtension=!1,this._onHaveExtension=null,this._actionCallbacks=new Map,this._installer=t,this._msgTypes=function(e){return{action:`${e}Action`,injected:`${e}Injected`,response:`${e}Response`}}(e),this._postInstallAction=void 0}_tryInstall(){return new Promise((t,a)=>{if(this.canInstall){this._installer.install();const o=e.setTimeout(()=>{if(!this.hasExtension&&this._postInstallAction){this._postInstallAction=void 0;const e=new Error("Timed out waiting for extension installation");e.ignore=!0,console.warn(e),a(e)}},6e4);this._postInstallAction=()=>{t(),e.clearTimeout(o)}}else a(new Error("Extension can not be installed on this platform"))})}_addActionCallback(e,t){this._actionCallbacks.set(e,e=>t(e))}_postActionMsg({action:t,callback:a,options:o}){return new Promise(n=>{this._addActionCallback(t,n);const i={type:this._msgTypes.action,action:t};a&&(i.callback=a),o&&(i.argument={options:o}),e.postMessage(i,"*")})}_checkForExtension(){return this._postActionMsg({action:"check-extension",callback:"check-extension"}).then(()=>{this.hasExtension=!0,this._postInstallAction&&this._postInstallAction(),this._onHaveExtension&&this._onHaveExtension()})}_subscribeExtensionMsg(){e.addEventListener("message",e=>{if(e.source!==window||void 0===e.data)return;const{callback:t,response:a,type:o}=e.data;if(o===this._msgTypes.injected)this._checkForExtension();else if(o===this._msgTypes.response&&this._actionCallbacks.has(t)){this._actionCallbacks.get(t)(a),this._actionCallbacks.delete(t)}})}init(e){this._onHaveExtension=e,this.canInstall&&(this._subscribeExtensionMsg(),this._checkForExtension())}install(){return this.hasExtension?Promise.resolve():this._tryInstall()}sendAction(e,t){return this.install().then(()=>this._postActionMsg({action:e,options:t}))}}}).call(this,a(15))},function(e,t,a){"use strict";(function(e){a(7);var o=a(5),n=a(17);t.a={name:"localStream",init:t=>{e.navigator.mediaDevices.addEventListener("devicechange",()=>t.doUpdateLocalDevices());const a=e.navigator.userAgent;a.includes("Linux")&&a.includes("Chrome")&&setInterval(()=>Object(n.b)(),4e3)},getReducer:()=>{const{outputId:e,audioId:t,videoId:a}=Object(n.f)(),o={busyDeviceIds:[],devices:null,error:null,hasRequestedDevices:!1,isSwitching:!1,stream:null,outputId:e,audioId:t,videoId:a};return(e=o,{type:t,payload:a})=>{switch(t){case"SWITCH_LOCAL_STREAM_STARTED":return{...e,isSwitching:!0};case"SWITCH_LOCAL_STREAM_FINISHED":return{...e,error:null,isSwitching:!1,...Object(n.d)(e.stream)};case"SWITCH_LOCAL_STREAM_FAILED":return{...e,error:a,isSwitching:!1};case"LOCAL_STREAM_DEVICE_BUSY":return{...e,busyDeviceIds:[...e.busyDeviceIds,a]};case"LOCAL_AUDIO_OUTPUT_UPDATED":return{...e,outputId:a};case"LOCAL_DEVICES_UPDATE_STARTED":return{...e,hasRequestedDevices:!0};case"LOCAL_DEVICES_UPDATE_FINISHED":return{...e,devices:a};case"LOCAL_STREAM_REQUEST_STARTED":return{...e,isSwitching:!0};case"LOCAL_STREAM_REQUEST_FAILED":return{...e,isSwitching:!1,error:a,...["NotReadableError","AbortError"].includes(a.name)&&{audioId:null,videoId:null}};case"LOCAL_STREAM_REQUEST_FINISHED":return{...e,error:null,isSwitching:!1,stream:e.stream||a,...Object(n.d)(a)};case"LOCAL_STREAM_STOPPED":return{...e,stream:null}}return e}},getMiddleware:()=>e=>t=>a=>{const o=e.selectLocalStream(),n=e.selectIsAudioEnabled(),i=e.selectIsVideoEnabled(),r=e.selectIsLocalStreamSwitching(),s=t(a),c=e.selectLocalStream();if(c){const t=o!==c||r&&!e.selectIsLocalStreamSwitching(),a=e.selectIsAudioEnabled();(n!==a||t)&&c.getAudioTracks().forEach(e=>e.enabled=a);const s=e.selectIsVideoEnabled();(i!==s||t)&&c.getVideoTracks().forEach(e=>e.enabled=s),t&&e.selectIsMissingDeviceLabels()&&e.doUpdateLocalDevices()}return s},doUpdateLocalDevices:()=>async({dispatch:e})=>{e({type:"LOCAL_DEVICES_UPDATE_STARTED"});try{e({type:"LOCAL_DEVICES_UPDATE_FINISHED",payload:await Object(n.b)()})}catch(t){e({type:"LOCAL_DEVICES_UPDATE_FAILED",payload:t,error:!0})}},doRequestDummyStream:()=>({dispatch:e})=>{e({type:"LOCAL_STREAM_REQUEST_STARTED"}),e({type:"LOCAL_STREAM_REQUEST_FINISHED",payload:new MediaStream([])})},doRequestLocalStream:()=>({dispatch:e,store:t})=>{e({type:"LOCAL_STREAM_REQUEST_STARTED"});let a=Object(n.c)(t.selectGetConstraintsOptions());return Object(n.g)(a).catch(e=>{if("OverconstrainedError"===e.name)return t.doCaptureMessage("OverconstrainedError: before retrying",{...e.constraint&&{tags:{constraint:e.constraint}},extra:{constraints:a}}),a=Object(n.c)({...t.selectGetConstraintsOptions(),videoId:null,audioId:null}),Object(n.g)(a);throw e}).then(t=>e({type:"LOCAL_STREAM_REQUEST_FINISHED",payload:t})).catch(o=>{["NotAllowedError","NotReadableError"].includes(o.name)||t.doCaptureException(o,{tags:{from:"GetUserMedia",...o.constraint&&{constraint:o.constraint}},extra:{constraints:a}}),e({type:"LOCAL_STREAM_REQUEST_FAILED",payload:o,error:!0})})},doSetAudioOutput:e=>({type:"LOCAL_AUDIO_OUTPUT_UPDATED",payload:e}),doSetLocalStreamDeviceBusy:e=>({type:"LOCAL_STREAM_DEVICE_BUSY",payload:e}),doStopLocalStream:()=>({dispatch:e,store:t})=>{const a=t.selectLocalStream();a&&Object(n.j)(a),e({type:"LOCAL_STREAM_STOPPED"})},doSwitchLocalStream:({videoId:e,audioId:t}={})=>({dispatch:a,store:o})=>{const i=o.selectLocalStream(),r=o.selectAudioId(),s=o.selectVideoId();a({type:"SWITCH_LOCAL_STREAM_STARTED",payload:{videoId:e,audioId:t}});const c=Object(n.c)({...o.selectGetConstraintsOptions(),...e&&{videoId:e},...t&&{audioId:t},type:"exact"});Object(n.k)(i,c).catch(a=>{if(["AbortError","NotReadableError"].includes(a.name)){const a=t&&t!==r;return o.doSetLocalStreamDeviceBusy(t&&t!==r?t:e),Object(n.k)(i,{...c,...a?{audioId:r}:{videoId:s}})}throw a}).then(()=>a({type:"SWITCH_LOCAL_STREAM_FINISHED"})).catch(e=>{o.doCaptureException(e,{tags:{from:"switchStream",...e.constraint&&{constraint:e.constraint}},extra:{constraints:c}}),a({type:"SWITCH_LOCAL_STREAM_FAILED",payload:e,error:!0})})},doSwitchNextCamera:()=>({store:e})=>{const t=e.selectVideoInputDevices(),a=e.selectVideoId(),o=a?t.findIndex(e=>e.videoId===a):0,n=(t[(o+1)%t.length]||{}).videoId;a!==n&&e.doSwitchLocalStream({videoId:n})},selectAudioId:e=>e.localStream.audioId,selectBusyDeviceIds:e=>e.localStream.busyDeviceIds,selectIsLocalStreamSwitching:e=>e.localStream.isSwitching,selectLocalStreamRaw:e=>e.localStream,selectLocalStream:e=>e.localStream.stream,selectLocalDevices:e=>e.localStream.devices,selectLocalOutputId:e=>e.localStream.outputId,selectLocalStreamIsDummy:e=>e.localStream.stream&&0===e.localStream.stream.getTracks().length,selectVideoId:e=>e.localStream.videoId,selectAudioInputDevices:Object(o.f)("selectLocalDevices","selectBusyDeviceIds",(e,t)=>Object(n.a)({busyDeviceIds:t,devices:e,kind:"audioinput"})),selectAudioOutputDevices:Object(o.f)("selectLocalDevices",e=>Object(n.a)({busyDeviceIds:[],devices:e,kind:"audiooutput"})),selectLocalStreamError:Object(o.f)("selectLocalStreamRaw","selectLocalDevices","selectLocalStream",(e,t,a)=>e.error?e.error:a||null===t||t.some(e=>"audioinput"===e.kind||"videoinput"===e.kind)?null:{name:"nodevices"}),selectVideoInputDevices:Object(o.f)("selectLocalDevices","selectBusyDeviceIds",(e,t)=>Object(n.a)({busyDeviceIds:t,devices:e,kind:"videoinput"})),selectShouldRequestMediaPermissions:Object(o.f)("selectLocalStream","selectMediaPermissionStatus",(e,t)=>!e||"granted"!==t),selectGetConstraintsOptions:Object(o.f)("selectAudioId","selectFeatureWidescreen","selectIsSimulcast","selectLocalDevices","selectPrefLowData","selectVideoId",(e,t,a,o,n,i)=>({devices:o||[],videoId:i,audioId:e,options:{usingAspectRatio16x9:a||t,simulcast:a,lowDataMode:n}})),selectIsMissingDeviceLabels:Object(o.f)("selectLocalDevices",e=>e&&e.length?e.every(e=>!e.label):null),selectIsSelfieCam:Object(o.f)("selectConfigNoMirror","selectIsLocalStreamSwitching","selectLocalScreenshareStream","selectLocalStream","selectRoomIsFree",(e,t,a,o,n)=>{if(e)return!1;if(a&&n)return!1;let i;try{i=o.getVideoTracks()[0]}catch{}if(!i)return!0;if(i.getCapabilities){const e=i.getCapabilities();if(e.facingMode&&e.facingMode.length)return"user"===e.facingMode[0]}return!/(back|environ)/i.test(i.label)}),selectMediaPermissionStatus:Object(o.f)("selectIsAndroidApp","selectLocalStream","selectLocalStreamError","selectLocalStreamIsDummy","selectIsMissingDeviceLabels","selectConfigSkipMediaPermissionPrompt",(e,t,a,o,n,i)=>o?"granted":null===n?"":!t&&a?"NotAllowedError"===a.name?"denied":"prompt":!n||e||i?"granted":"prompt"),reactUpdateLocalDevices:Object(o.f)("selectLocalStreamRaw",e=>{if(!e.hasRequestedDevices&&!e.devices)return{actionCreator:"doUpdateLocalDevices"}}),reactUpdateLocalStream:Object(o.f)("selectHasFeaturesFetched","selectHasRoomFetched","selectIsLocalStreamSwitching","selectLocalStream","selectLocalStreamError","selectMediaPermissionStatus","selectRoomConnectionStatus",(e,t,a,o,n,i,r)=>!t||!e||"granted"!==i||["kicked","left"].includes(r)||a||o||n?o&&["kicked","left"].includes(r)?{actionCreator:"doStopLocalStream"}:void 0:{actionCreator:"doRequestLocalStream"}),reactUpdatePreferredOutput:Object(o.f)("selectAudioId","selectBrowserFeatures","selectVideoId","selectLocalOutputId",(e,t,a,o)=>{!t.isIos&&Object(n.i)({audioId:e,videoId:a,outputId:o})})}}).call(this,a(15))},function(e,t,a){"use strict";(function(e){const a={loginStatusChangedAt:null};t.a={name:"login",init:t=>{e.addEventListener("message",e=>{e.origin===window.origin&&"login:succeeded"===e.data&&t.dispatch({type:"LOGIN_SUCCEEDED",payload:Date.now()})})},reducer:(e=a,{type:t,payload:o})=>{switch(t){case"LOGIN_SUCCEEDED":case"LOGOUT":return{...e,loginStatusChangedAt:o}}return e},doLogout:()=>async({dispatch:e,userService:t})=>{await t.logout(),e({type:"LOGOUT",payload:Date.now()})},selectLoginRaw:e=>e.login,selectLoginStatusChangedAt:e=>e.login.loginStatusChangedAt}}).call(this,a(15))},function(e,t,a){"use strict";var o=a(0),n=a.n(o),i=a(1),r=a.n(i),s=a(2),c=a.n(s),l=a(8),d=a(3),u=a(58),m=a.n(u);const p={linkText:"Learn more",linkUrl:"https://getstarted.whereby.com/information/pricing/"},g={businessLoggedIn:{subHeaderText:"That's a wrap. Have a good one!",buttonText:"Continue to dashboard",buttonUrl:"/org"},publicLoggedIn:{subHeaderText:"That's a wrap. Have a good one!",buttonText:"Continue to dashboard",buttonUrl:"/user"},business:{subHeaderText:"That's a wrap. Have a good one!",buttonText:"Continue to whereby.com",buttonUrl:"https://whereby.com"},public:{subHeaderText:"That's a wrap. Want to host your own flexible meetings?",buttonText:"Sign up for free",buttonUrl:"/user/signup",...p,upsellText:n.a.createElement("div",{className:m.a.upsellText},n.a.createElement("p",null,"Sign up today to:"),n.a.createElement("ul",null,n.a.createElement("li",null,"Host up to 4 participants"),n.a.createElement("li",null,"Invite guests with one click, no downloads or login"),n.a.createElement("li",null,"Easily collaborate with screen sharing"),n.a.createElement("li",null,"Lock your room for private meetings")))},find({isPublicOrganization:e,isUserLoggedIn:t}){const a=e?"public":"business";if(!t)return{content:this[a],contentKey:`visitor${a}`};const o=`${a}LoggedIn`;return{content:this[o],contentKey:`visitor${o}`}}},h={publicFree:{subHeaderText:"That's a wrap. Need more out of your video meetings?",buttonText:"Upgrade to Pro",buttonUrl:"/user/order/details?utm_source=whereby&utm_campaign=leave_room_upsell&utm_medium=web",...p,upsellText:n.a.createElement("div",{className:m.a.upsellText},n.a.createElement("p",null,"Consider the Pro plan:"),n.a.createElement("ul",null,n.a.createElement("li",null,"3 Meeting Rooms"),n.a.createElement("li",null,"Up to 12 Participants"),n.a.createElement("li",null,"Branded Rooms"),n.a.createElement("li",null,"Recording ($5 add-on)"),n.a.createElement("li",null,"Premium Support")))},publicPro:{subHeaderText:"That's a wrap. Have a good one!",buttonText:"Continue to dashboard",buttonUrl:"/user"},business:{subHeaderText:"That's a wrap. Is your entire team on board? Quickly invite the rest of your teammates:",buttonText:"Invite your team",buttonUrl:"/org/users",linkText:"Continue to dashboard",linkUrl:"/org"},find({isPublicOrganization:e,roomIsFree:t}){const a=e?"public":"business";if(!e)return{content:this[a],contentKey:`roomOwner${a}`};const o=`${a}${t?"Free":"Pro"}`;return{content:this[o],contentKey:`roomOwner${o}`}}};function f({isPhoneResolution:e,isPublicOrganization:t,isRoomOwner:a,isUserLoggedIn:o,roomIsFree:i}){const r=a?h:g,{content:s,contentKey:l}=r.find({isPublicOrganization:t,isUserLoggedIn:o,roomIsFree:i});return n.a.createElement(d.n,{className:c()(m.a.RoomLeft,"jstest-room-left",`jstest-room-left-${l}`),disableOverlay:!0,fullscreen:e},n.a.createElement(d.n.Body,{className:m.a.dialogBody},n.a.createElement("div",{className:m.a.illustration}),n.a.createElement("header",{className:m.a.header},n.a.createElement("div",null,"You\u2019ve left the room")),s.subHeaderText&&n.a.createElement("h2",{className:m.a.subHeaderText},s.subHeaderText),s.upsellText,s.buttonUrl&&n.a.createElement(d.a,{className:m.a.mainButton,href:s.buttonUrl,modifiers:["button","button-primary","button-full"]},s.buttonText),s.linkUrl&&n.a.createElement(d.a,{className:m.a.learnMoreButton,href:s.linkUrl,rel:"noopener",modifiers:["button","button-invisible","button-primary","button-full"]},s.linkText)))}f.propTypes={isPhoneResolution:r.a.bool.isRequired,isPublicOrganization:r.a.bool.isRequired,isRoomOwner:r.a.bool.isRequired,isUserLoggedIn:r.a.bool.isRequired,roomIsFree:r.a.bool.isRequired},t.a=Object(l.b)("selectIsPhoneResolution","selectIsPublicOrganization","selectIsRoomOwner","selectIsUserLoggedIn","selectRoomIsFree",f)},function(e,t,a){"use strict";var o=a(0),n=a.n(o),i=a(1),r=a.n(i),s=a(2),c=a.n(s),l=a(8),d=a(3),u=a(23),m=a(22),p=a.n(m);const g=({isEmbedded:e,isProUser:t,isPhoneResolution:a,isUserLoggedIn:o,roomName:i})=>n.a.createElement(d.n,{className:c()(p.a.RoomNotFound,"jstest-RoomNotFound"),disableOverlay:!0,fullscreen:a},n.a.createElement(d.n.Body,{className:p.a.body},n.a.createElement("span",{className:c()(p.a.illustration,{[p.a.isPhone]:a})}),n.a.createElement(u.Localized,{id:"RoomNotFound-public-title"},n.a.createElement("h1",{className:p.a.headerText},"Lost in the clouds?")),n.a.createElement(u.Localized,{id:"RoomNotFound-text",$roomName:i,strong:n.a.createElement("strong",null)},n.a.createElement("p",{className:p.a.largeText},"The room ",n.a.createElement("strong",null,i)," is nowhere to be found. Are you sure you\u2019ve entered the correct address?")),e?null:o?t?n.a.createElement(d.a,{className:p.a.button,href:"/user",modifiers:["button","button-outlined","button-primary","button-full"]},n.a.createElement(u.Localized,{id:"RoomNotFound-go-to-dashboard"},"Go to dashboard")):n.a.createElement(n.a.Fragment,null,n.a.createElement(u.Localized,{id:"RoomNotFound-public-room-limit-upsell",strong:n.a.createElement("strong",null)},n.a.createElement("p",null,"You are on the ",n.a.createElement("strong",null,"Free")," plan, this limits you to 1 room. Upgrade to ",n.a.createElement("strong",null,"Pro")," ","plan if you need more rooms"," ")),n.a.createElement(d.a,{className:p.a.button,href:"/user/order/details?utm_source=whereby&utm_campaign=room_not_found_upsell&utm_medium=web",modifiers:["button","button-primary","button-full"]},n.a.createElement(u.Localized,{id:"RoomNotFound-public-upgrade-pro"},"Upgrade to pro")),n.a.createElement(d.a,{className:p.a.button,href:"/user",modifiers:["button","button-invisible","button-primary","button-full"]},n.a.createElement(u.Localized,{id:"RoomNotFound-go-to-dashboard"},"Go to dashboard"))):(()=>{const e=n.a.createElement(d.u,{className:p.a.logoInSubHeader});return n.a.createElement(n.a.Fragment,null,n.a.createElement(u.Localized,{id:"RoomNotFound-public-have-account"},n.a.createElement("h2",{className:p.a.subHeaderText},"Have an account?")),n.a.createElement(u.Localized,{id:"RoomNotFound-public-login-dashboard"},n.a.createElement("p",null,"Log in to create this room from your dashboard")),n.a.createElement(d.a,{className:p.a.button,href:"/user",modifiers:["button","button-outlined","button-primary","button-full"]},n.a.createElement(u.Localized,{id:"RoomNotFound-log-in"},"Log in")),n.a.createElement(u.Localized,{id:"RoomNotFound-public-new-to",logo:e},n.a.createElement("h2",{className:p.a.subHeaderText},"New to ",e,"?")),n.a.createElement(u.Localized,{id:"RoomNotFound-public-sign-up-to-create-room"},n.a.createElement("p",null,"Sign up for free to create your own room")),n.a.createElement(d.a,{className:p.a.button,href:"/user/signup",modifiers:["button","button-primary","button-full"]},n.a.createElement(u.Localized,{id:"RoomNotFound-public-sign-up"},"Sign up")))})()));g.propTypes={isEmbedded:r.a.bool.isRequired,isPhoneResolution:r.a.bool.isRequired,isProUser:r.a.bool.isRequired,isUserLoggedIn:r.a.bool.isRequired,roomName:r.a.string.isRequired};const h=({isEmbedded:e,isPhoneResolution:t,isUserLoggedIn:a,organizationName:o,roomName:i})=>n.a.createElement(d.n,{className:c()(p.a.RoomNotFound,"jstest-RoomNotFound"),disableOverlay:!0,fullscreen:t},n.a.createElement(d.n.Body,{className:p.a.body},n.a.createElement(u.Localized,{id:"RoomNotFound-org-title"},n.a.createElement("h1",{className:p.a.headerTextSubdomain},"Sorry we can\u2019t find that room")),n.a.createElement(u.Localized,{id:"RoomNotFound-text",$roomName:i,strong:n.a.createElement("strong",null)},n.a.createElement("p",{className:p.a.largeText},"The room ",n.a.createElement("strong",null,i)," is nowhere to be found. Are you sure you\u2019ve entered the correct address?")),e?null:a?n.a.createElement(d.a,{className:p.a.button,href:"/org",modifiers:["button","button-outlined","button-primary","button-full"]},n.a.createElement(u.Localized,{id:"RoomNotFound-go-to-dashboard"},"Go to dashboard")):(e=>n.a.createElement(n.a.Fragment,null,n.a.createElement(u.Localized,{id:"RoomNotFound-org-can-log-in-create",$organizationName:e,strong:n.a.createElement("strong",null)},n.a.createElement("p",null,"Registered users of ",n.a.createElement("strong",null,e)," can log in and create this room.")),n.a.createElement(d.a,{className:p.a.button,href:"/org",modifiers:["button","button-outlined","button-primary","button-full"]},n.a.createElement(u.Localized,{id:"RoomNotFound-log-in"},"Log in"))))(o)));function f({canCancelSubscription:e,featureEmbed:t,isPhoneResolution:a,isPublicOrganization:o,isUserLoggedIn:i,organizationName:r,roomName:s}){return o?n.a.createElement(g,{isEmbedded:t,isProUser:e,isPhoneResolution:a,isUserLoggedIn:i,roomName:s}):n.a.createElement(h,{isEmbedded:t,isPhoneResolution:a,isUserLoggedIn:i,organizationName:r,roomName:s})}h.propTypes={isEmbedded:r.a.bool.isRequired,isPhoneResolution:r.a.bool.isRequired,isUserLoggedIn:r.a.bool.isRequired,organizationName:r.a.string.isRequired,roomName:r.a.string.isRequired},f.propTypes={canCancelSubscription:r.a.bool.isRequired,featureEmbed:r.a.bool.isRequired,isPhoneResolution:r.a.bool.isRequired,isPublicOrganization:r.a.bool.isRequired,isUserLoggedIn:r.a.bool.isRequired,organizationName:r.a.string,roomName:r.a.string.isRequired},t.a=Object(l.b)("selectCanCancelSubscription","selectFeatureEmbed","selectIsPhoneResolution","selectIsPublicOrganization","selectIsUserLoggedIn","selectOrganizationName","selectRoomName",f)},function(e,t,a){"use strict";var o=a(1),n=a.n(o),i=a(0),r=a.n(i),s=a(8),c=a(110),l=a(56),d=a(3),u=a(2),m=a.n(u),p=a(33),g=a(118),h=a.n(g);const{subdomain:f}=p.a,b=({canJoinUsingIosBrowser:e,doTrackIosPlatformSelected:t,onAccept:a,roomName:o})=>r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:h.a.chooseAppButtons},r.a.createElement(d.d,{className:h.a.chooseAppButton,onClick:function(){t({openInApp:!0}),window.location.href="https://appear.app.link/?roomName="+encodeURIComponent(o)+(f?"&subdomain="+encodeURIComponent(f):"")},modifiers:["full","small"]},"Open Whereby app"),e&&r.a.createElement(d.d,{className:m()("jstest-continue-in-browser",h.a.chooseAppButton),onClick:function(){t({openInApp:!1}),a()},modifiers:["full","small","outlined"]},r.a.createElement("span",null,"Continue in browser ",r.a.createElement("span",{className:h.a.betaLabel},"(beta)")))));b.propTypes={canJoinUsingIosBrowser:n.a.bool.isRequired,doTrackIosPlatformSelected:n.a.func.isRequired,onAccept:n.a.func.isRequired,roomName:n.a.string.isRequired};var E=b,R=a(218),S=a.n(R);function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}const v=[{name:"Chrome",url:"https://chrome.google.com",iconUrl:a(466)},{name:"Firefox",url:"https://www.mozilla.org/firefox/all",iconUrl:a(467)},{name:"Opera",url:"https://www.opera.com",iconUrl:a(468)}],C=({name:e,url:t,iconUrl:a})=>r.a.createElement("a",{href:t},r.a.createElement("img",{width:64,height:64,src:a,alt:e}));C.propTypes={iconUrl:n.a.string.isRequired,name:n.a.string.isRequired,url:n.a.string.isRequired};const y=({text:e})=>r.a.createElement("div",{className:S.a.SupportedBrowsersList},e&&r.a.createElement("p",null,e),v.map(e=>r.a.createElement(C,I({key:e.name},e))));y.propTypes={text:n.a.string};const O=({isSafari:e})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(d.e,{modifiers:["warning"]},r.a.createElement("h1",null,"Your browser doesn\u2019t support larger rooms"),e&&r.a.createElement("p",null,"Your Safari version is older than version 13 and doesn\u2019t support Whereby rooms with 5+ participants"),r.a.createElement(y,{text:"To join larger rooms, try one of these browsers:"})));O.propTypes={isSafari:n.a.bool.isRequired};var w=O;var N=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(d.e,{modifiers:["warning"]},r.a.createElement("h1",null,"Your browser doesn\u2019t support Whereby meetings"),r.a.createElement(y,{text:"To join the meeting, try one of these browsers:"})));const T=({isRoomOwner:e})=>{const t=e?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Heads up: Your browser doesn\u2019t support recording or screen sharing"),r.a.createElement("p",null,"If you join using this browser you can\u2019t use the recording feature or share your screen with other participants (but you can still see screen sharing done by others)")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Heads up: Your browser doesn\u2019t support screen sharing"),r.a.createElement("p",null,"If you join using this browser you can\u2019t share your screen with other participants (but you can still see screen sharing done by others)"));return r.a.createElement(d.e,{modifiers:["warning"]},t,r.a.createElement(y,{text:"For the full experience try one of these fully supported browsers:"}))};T.propTypes={isRoomOwner:n.a.bool.isRequired};var A=T,k=a(40),_=a(39);function L({browserFeatures:e,canJoinUsingIosBrowser:t,doBrowserSupportAcceptPartial:a,doPrecallEnteredAnalytics:o,doTrackIosPlatformSelected:n,isPhoneResolution:s,isRoomOwner:c,roomMode:l,roomName:u}){const{isIos:m,isSafari:p,isSFUSupported:g,isWebRTCSupported:h}=e;let f,b;return Object(i.useEffect)(()=>{o("browser support")},[o]),m?f=r.a.createElement(E,{doTrackIosPlatformSelected:n,roomName:u,canJoinUsingIosBrowser:t,onAccept:a}):h?"group"!==l||g?(f=r.a.createElement(A,{isRoomOwner:c}),b=r.a.createElement(d.d,{onClick:a,modifiers:["full","small"]},"Continue anyway")):f=r.a.createElement(w,{isSafari:p}):f=r.a.createElement(N,null),r.a.createElement(_.a,{isFullscreen:s,footer:b},r.a.createElement(k.a,null),f)}L.propTypes={browserFeatures:n.a.object.isRequired,canJoinUsingIosBrowser:n.a.bool.isRequired,doBrowserSupportAcceptPartial:n.a.func.isRequired,doPrecallEnteredAnalytics:n.a.func.isRequired,doTrackIosPlatformSelected:n.a.func.isRequired,isPhoneResolution:n.a.bool.isRequired,isRoomOwner:n.a.bool.isRequired,roomMode:n.a.string.isRequired,roomName:n.a.string.isRequired};var D=Object(s.b)("doBrowserSupportAcceptPartial","doPrecallEnteredAnalytics","doTrackIosPlatformSelected","selectBrowserFeatures","selectCanJoinUsingIosBrowser","selectIsPhoneResolution","selectIsRoomOwner","selectRoomMode","selectRoomName",L),P=a(30),M=a.n(P),j=a(320),F=a.n(j),x=a(219),q=a.n(x),B=a(34);function U({onClose:e}){return r.a.createElement(d.n,{onClickClose:e,hideCloseButton:!0},r.a.createElement(d.n.Body,null,r.a.createElement("aside",{className:q.a.content},r.a.createElement("h1",null,"Sorry, only ",B.f," people can present at a time"),r.a.createElement("p",{className:q.a.message},"You can\u2019t present at the moment, try unmuting when less people are active."),r.a.createElement(d.d,{modifiers:["small","full"],onClick:e},"Close"))))}U.propTypes={onClose:n.a.func.isRequired};var z=U,H=a(321),V=a.n(H),W=a(322);function G({chatMessageGroups:e,doSendChatMessage:t,isTouchOnlyDevice:a}){return r.a.createElement("div",{className:m()("jstest-chat",V.a.Chat)},r.a.createElement(W.a,{autoFocusChatInput:!a,messageGroups:e,sendChatMessage:t}))}G.propTypes={chatMessageGroups:n.a.array.isRequired,doSendChatMessage:n.a.func.isRequired,isTouchOnlyDevice:n.a.bool.isRequired};var K=Object(s.b)("doSendChatMessage","selectChatMessageGroups","selectIsTouchOnlyDevice",G),$=(a(7),a(152));const Y=()=>{};var Z=Object(i.forwardRef)((function({audioContextWrapper:e=Object($.a)(),doCaptureException:t=Y,src:a,outputId:o="default",children:n=(()=>null),onEnded:r=Y,onReady:s=Y},c){const[l,d]=Object(i.useState)(),[u,m]=Object(i.useState)(),[p,g]=Object(i.useState)(!1),[h,f]=Object(i.useState)();async function b(){if(l)return void console.error(`Cannot play ${a}`,l);const t=await e.play({audioBuffer:u,outputId:o});return f(t),t.onEnded(()=>{g(!1),r()}),g(t.isPlaying),t}function E(){h&&(g(!1),h.stop())}return Object(i.useEffect)(()=>{u||l||(async()=>{try{const t=await e.loadAudio(a);m(t),s()}catch(n){d(n),t(n,{tags:{from:"AudioPlayer"},extra:{src:a,outputId:o}})}})()},[e,u,s,a,o,t,l]),Object(i.useImperativeHandle)(c,()=>({play:b,stop:E})),n({startPlaying:b,stopPlaying:E,isPlaying:p,isReady:!!u})})),J=a.p+"assets/media/conversation-started-sound.cebd74a7.mp3",Q=a.p+"assets/media/knock-sound.805a3812.mp3";function X(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const ee=e=>e&&e.catch(e=>{console.warn("Couldn't play sound",e)});class te extends i.PureComponent{constructor(...e){super(...e),X(this,"conversationStartedRef",r.a.createRef()),X(this,"incomingKnockerRef",r.a.createRef())}componentDidUpdate(e){e.numClients<=1&&this.props.numClients>1&&ee(this.conversationStartedRef.current.play()),this.props.knockers.length>e.knockers.length&&ee(this.incomingKnockerRef.current.play())}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{ref:this.conversationStartedRef,src:J,outputId:this.props.localOutputId,doCaptureException:this.props.doCaptureException}),r.a.createElement(Z,{ref:this.incomingKnockerRef,src:Q,outputId:this.props.localOutputId,doCaptureException:this.props.doCaptureException}))}}X(te,"propTypes",{doCaptureException:n.a.func.isRequired,knockers:n.a.array.isRequired,localOutputId:n.a.string.isRequired,numClients:n.a.number.isRequired});var ae=Object(s.b)("doCaptureException","selectKnockers","selectLocalOutputId","selectNumClients",te),oe=a(220),ne=a.n(oe),ie=a(221),re=a.n(ie),se=a(42),ce=a.n(se);function le(){return(le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function de({children:e,className:t,containerClassName:a,light:o,onClick:n,...i}){return r.a.createElement("button",le({className:m()(ce.a.NavButton,a,{[ce.a.light]:o}),onClick:n},i),r.a.createElement("div",{className:m()(ce.a.shell,t)},e))}function ue({icon:e,className:t,light:a,onClick:o,...n}){return r.a.createElement("button",le({className:m()(ce.a.NavButton,ce.a.IconButton,t,{[ce.a.light]:a}),onClick:o},n),r.a.createElement("div",{className:m()(ce.a.shell)},e))}de.propTypes={children:n.a.node,className:n.a.string,containerClassName:n.a.string,light:n.a.bool,onClick:n.a.func},n.a.string,n.a.string,n.a.bool,n.a.func,n.a.string,ue.propTypes={className:n.a.string,icon:n.a.element,light:n.a.bool,onClick:n.a.func};var me=a(55);function pe({className:e,isCollapsed:t,onLogout:a,user:o,light:n}){const[s,c]=Object(i.useState)(!1),[l,u]=Object(i.useState)(!1),p=o&&o.userId,g=Object(i.useCallback)(()=>c(!1),[]),h=Object(i.useCallback)(()=>c(!0),[]),f=Object(i.useCallback)(()=>u(!1),[]),b=Object(i.useCallback)(e=>{e.stopPropagation(),u(!l)},[l]),E=r.a.createElement(d.B,{modifiers:["sized",n?"dark":"light"]}),R=p||t?r.a.createElement(M.a,{align:"end",containerStyle:{overflow:"visible"},position:"bottom",content:r.a.createElement(d.v,{onClick:f},p?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.w,{href:"/user/profile",target:"_blank"},"Edit profile"),r.a.createElement(d.w,{onClick:a},"Log out")):r.a.createElement(r.a.Fragment,null,r.a.createElement(d.w,{onClick:h},r.a.createElement("span",{className:"jstest-log-in"},"Log in")),r.a.createElement(d.w,{"data-test-class":"jstest-sign-up",href:"/user/signup",target:"_blank"},"Sign up"))),disableReposition:!0,isOpen:l,onClickOutside:f,transitionDuration:.01,padding:8},p?r.a.createElement("div",{onClick:b,className:re.a.avatarWrapper},r.a.createElement(d.b,{className:m()("jstest-avatar",re.a.avatar),avatarUrl:o&&o.avatarUrl,name:o&&o.displayName,modifiers:["square"],size:40})):r.a.createElement(ue,{icon:E,className:"jstest-login-button-constrained",light:n,onClick:b})):r.a.createElement(d.d,{className:m()("jstest-login-button",e),onClick:h,modifiers:["grey","extraSmall"]},"Log in");return r.a.createElement(r.a.Fragment,null,R,s&&!p&&r.a.createElement(d.q,{src:"/user/login?iframe",onClickClose:g,iframeHeight:"660px",iframeWidth:"500px"}))}pe.propTypes={className:n.a.string,isCollapsed:n.a.bool,light:n.a.bool,onLogout:n.a.func.isRequired,user:n.a.instanceOf(me.a)};var ge=pe;function he({className:e,onClick:t}){const a=r.a.createElement(d.E,{modifiers:["sized","light"]});return r.a.createElement(ue,{icon:a,className:m()("jstest-room-settings-button",e),alt:"Settings",onClick:t})}he.propTypes={className:n.a.string,onClick:n.a.func.isRequired};var fe=he,be=a(25),Ee=a.n(be),Re=a(222),Se=a.n(Re);function Ie({isAnyoneRecording:e}){return e?r.a.createElement("div",{className:Se.a.toast},r.a.createElement("span",{className:Se.a.recIcon}),"Recording..."):null}Ie.propTypes={isAnyoneRecording:n.a.bool.isRequired};var ve=Ie;function Ce({numClients:e,roomParticipantLimit:t}){return r.a.createElement("div",{className:m()(Ee.a.participantsIconWrapper,Ee.a.item)},r.a.createElement("div",{className:Ee.a.participantCounter},e,"/",t),r.a.createElement(d.A,{className:Ee.a.peopleIcon,modifiers:["sized","light"]}))}function ye({isLocked:e}){return r.a.createElement("div",{className:m()(Ee.a.lockWrapper,Ee.a.item)},e&&r.a.createElement(d.t,{modifiers:["sized","light"]}),!e&&r.a.createElement(d.K,{modifiers:["sized","light"]}))}function Oe({roomName:e}){return r.a.createElement("div",{className:m()(Ee.a.roomNameWrapper,Ee.a.item)},r.a.createElement("span",{className:m()("jstest-room-header",Ee.a.roomName)},e))}function we(){return r.a.createElement("div",{className:m()(Ee.a.recWrapper,Ee.a.item)},r.a.createElement("span",{className:Ee.a.recIcon}))}function Ne({isAnyoneRecording:e,isCollapsed:t,isLocked:a,numClients:o,onClick:n,roomLogoSrc:i,roomName:s,roomParticipantLimit:c}){return r.a.createElement("div",{className:Ee.a.RoomStatusBar},r.a.createElement("div",{className:Ee.a.roomLogo},r.a.createElement("a",{href:"/"},i?!t&&r.a.createElement("img",{src:i,className:Ee.a.roomLogoImg,alt:"Room logo"}):r.a.createElement("div",{className:m()(Ee.a.newLogoWrapper,{[Ee.a.isCollapsed]:t})},r.a.createElement(d.u,{monogram:t,modifiers:["light"]})))),r.a.createElement(de,{className:m()(Ee.a.statusButton,"jstest-room-statusbar"),onClick:n},e&&r.a.createElement(we,null),r.a.createElement(Oe,{roomName:s}),r.a.createElement(ye,{className:Ee.a.item,isLocked:a}),r.a.createElement(Ce,{numClients:o,roomParticipantLimit:c}),r.a.createElement(ve,{isAnyoneRecording:e})))}Ce.propTypes={numClients:n.a.number,roomParticipantLimit:n.a.number},ye.propTypes={isLocked:n.a.bool},Oe.propTypes={roomName:n.a.string},Ne.propTypes={isAnyoneRecording:n.a.bool.isRequired,isCollapsed:n.a.bool,isLocked:n.a.bool,numClients:n.a.number.isRequired,onClick:n.a.func,roomLogoSrc:n.a.string,roomName:n.a.string.isRequired,roomParticipantLimit:n.a.number};var Te=Ne;function Ae({doLogout:e,isAnyoneRecording:t,isCollapsed:a,numClients:o,onSettingsClick:n,onStatusClick:i,roomIsLocked:s,roomName:c,roomParticipantLimit:l,themeLogoUrl:u,user:m}){return r.a.createElement("header",{className:ne.a.RoomHeader},r.a.createElement(Te,{isAnyoneRecording:t,isCollapsed:a,isLocked:s,numClients:o,onClick:i,roomLogoSrc:u,roomName:c,roomParticipantLimit:l}),r.a.createElement(fe,{onClick:n}),r.a.createElement(ge,{isCollapsed:a,onLogout:e,user:m,key:m&&m.userId}),(!m||!m.userId)&&!a&&r.a.createElement(d.a,{className:ne.a.signupButton,href:"/user/signup",target:"_blank",modifiers:["button","button-grey","button-extraSmall"]},"Sign up"))}Ae.propTypes={doLogout:n.a.func.isRequired,isAnyoneRecording:n.a.bool.isRequired,isCollapsed:n.a.bool,numClients:n.a.number,onSettingsClick:n.a.func,onStatusClick:n.a.func,roomIsLocked:n.a.bool,roomName:n.a.string.isRequired,roomParticipantLimit:n.a.number.isRequired,themeLogoUrl:n.a.string,user:n.a.instanceOf(me.a)};var ke=Object(s.b)("doLogout","selectIsAnyoneRecording","selectRoomParticipantLimit","selectNumClients","selectRoomIsLocked","selectRoomName","selectThemeLogoUrl","selectUser",Ae),_e=a(20);function Le(){return(Le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function De({layout:e,...t}){return r.a.createElement(ke,Le({isCollapsed:e.isPhone},t))}function Pe(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}De.propTypes={layout:_e.c};class Me extends i.Component{constructor(...e){super(...e),Pe(this,"handleKeyPress",e=>{const{onToggleChatOpen:t}=this.props;if("INPUT"===event.target.tagName||"TEXTAREA"===event.target.tagName||event.repeat||e.metaKey)return;let a=!0;switch((e.key||"").toLowerCase()){case"m":this.toggleAudioEnabled();break;case"v":this.toggleVideoEnabled();break;case"c":t();break;default:a=!1}a&&(e.stopPropagation(),e.preventDefault())}),Pe(this,"toggleAudioEnabled",()=>{const{onBeforeSetAudioEnabled:e,isAudioEnabled:t,doToggleAudioEnabled:a}=this.props;e&&!e(!t)||a(!t)}),Pe(this,"toggleVideoEnabled",()=>{const{doToggleVideoEnabled:e,isVideoEnabled:t}=this.props;e(!t)})}componentDidMount(){document.addEventListener("keypress",this.handleKeyPress)}componentWillUnmount(){document.removeEventListener("keypress",this.handleKeyPress)}render(){const{children:e,className:t}=this.props;return r.a.createElement("div",{className:t},e)}}Me.propTypes={children:n.a.node.isRequired,className:n.a.string,doToggleAudioEnabled:n.a.func.isRequired,doToggleVideoEnabled:n.a.func.isRequired,isAudioEnabled:n.a.bool.isRequired,isVideoEnabled:n.a.bool.isRequired,onBeforeSetAudioEnabled:n.a.func,onToggleChatOpen:n.a.func.isRequired};var je=Object(s.b)("doToggleAudioEnabled","doToggleVideoEnabled","selectIsAudioEnabled","selectIsVideoEnabled",Me),Fe=a(12),xe=a.n(Fe);function qe({className:e,onToggle:t,isButtonDisabled:a,isEnabled:o,hideLegend:n}){return r.a.createElement("button",{className:m()(xe.a.button,e),onClick:()=>t(),disabled:a},r.a.createElement("figure",{className:xe.a.buttonFigure},r.a.createElement("div",{className:m()("jstest-button-icon-wrapper",xe.a.buttonIconWrapper,{[xe.a.isOff]:!o})},o&&r.a.createElement(d.g,{modifiers:["light","sized"]}),!o&&r.a.createElement(d.f,{modifiers:["light","sized"]})),!n&&r.a.createElement("figcaption",{className:xe.a.buttonLegend},"Cam")))}qe.propTypes={className:n.a.string,hideLegend:n.a.bool,isButtonDisabled:n.a.bool,isEnabled:n.a.bool.isRequired,onToggle:n.a.func.isRequired};var Be=a(327),Ue=a.n(Be),ze=a(151),He=a(150);function Ve({onClick:e,onToggle:t,classNames:a}){return r.a.createElement("button",{type:"button",className:m()("jstest-emoji-footer-open-chat-button",Ue.a.openChatButton,a),onClick:()=>{e(),t()}},"Open Chat")}function We({chatUnreadMessageCount:e,doSendChatMessage:t,isTouchOnlyDevice:a,onClick:o}){const n=a?r.a.createElement(Ve,{onClick:o}):r.a.createElement(He.a,{autoFocus:!0,onMessageSubmit:t,hideEmojiPicker:!0});return r.a.createElement(ze.a,{onSelect:t,footer:n},({onButtonBlur:t,onButtonHover:n,onToggle:i,isMenuVisible:s})=>r.a.createElement("button",{className:m()("jstest-open-chat-button",xe.a.button),onClick:a?s?e=>{i(),o(e)}:n:o,onMouseEnter:a?void 0:n,onMouseLeave:a?void 0:t},r.a.createElement("figure",{className:xe.a.buttonFigure},e>0&&r.a.createElement("div",{className:m()("jstest-chat-unread-count-badge",xe.a.buttonIconBadge)},e),r.a.createElement("div",{className:xe.a.buttonIconWrapper},r.a.createElement(d.j,{modifiers:["sized","light"]})),r.a.createElement("figcaption",{className:xe.a.buttonLegend},"Chat"))))}Ve.propTypes={classNames:n.a.string.isRequired,onClick:n.a.func.isRequired,onToggle:n.a.func.isRequired},We.propTypes={chatUnreadMessageCount:n.a.number,doSendChatMessage:n.a.func.isRequired,isTouchOnlyDevice:n.a.bool.isRequired,onClick:n.a.func.isRequired};var Ge=We;function Ke({onClick:e}){return r.a.createElement("button",{onClick:e,className:m()("jstest-leave-room-button",xe.a.button)},r.a.createElement("figure",{className:xe.a.buttonFigure},r.a.createElement("div",{className:xe.a.buttonIconWrapper},r.a.createElement(d.s,{modifiers:["sized","meetingRed"]})),r.a.createElement("figcaption",{className:xe.a.buttonLegend},"Leave")))}Ke.propTypes={onClick:n.a.func};var $e=Ke;function Ye({className:e,isButtonDisabled:t,isEnabled:a,onToggle:o,audioMeterStyles:n={},hideLegend:i}){return r.a.createElement("button",{className:m()(xe.a.button,e),onClick:()=>o(),disabled:t},r.a.createElement("figure",{className:xe.a.buttonFigure},r.a.createElement("div",{className:m()(xe.a.buttonIconWrapper,{[xe.a.isOff]:!a}),style:n},a&&r.a.createElement(d.y,{modifiers:["light","sized"]}),!a&&r.a.createElement(d.x,{modifiers:["light","sized"]})),!i&&r.a.createElement("figcaption",{className:xe.a.buttonLegend},"Mic")))}function Ze({knockersCount:e,shouldShowRoomFullWarning:t,onClick:a}){return r.a.createElement("button",{className:m()("jstest-open-people-button",xe.a.button),onClick:a},r.a.createElement("figure",{className:xe.a.buttonFigure},(e>0||t)&&r.a.createElement("div",{className:m()("jstest-incoming-knock-badge",xe.a.buttonIconBadge)},e||"!"),r.a.createElement("div",{className:xe.a.buttonIconWrapper},r.a.createElement(d.A,{modifiers:["sized","light"]})),r.a.createElement("figcaption",{className:xe.a.buttonLegend},"People")))}Ye.propTypes={audioMeterStyles:n.a.object,className:n.a.string,hideLegend:n.a.bool,isButtonDisabled:n.a.bool,isEnabled:n.a.bool.isRequired,onToggle:n.a.func.isRequired},Ze.propTypes={knockersCount:n.a.number,onClick:n.a.func.isRequired,shouldShowRoomFullWarning:n.a.bool};var Je=Ze,Qe=a(92);function Xe({isRecording:e,isTouchOnlyDevice:t,numRecordings:a,onButtonBlur:o,onButtonHover:n,onClick:i}){const s=e?"Stop":"Rec",c=!!a&&!e;return r.a.createElement("button",{className:m()("jstest-start-recording-button",xe.a.button),onClick:t?n:i,onMouseEnter:t?void 0:n,onMouseLeave:t?void 0:o,accessKey:"r"},r.a.createElement("figure",{className:xe.a.buttonFigure},c&&r.a.createElement("div",{className:xe.a.buttonIconBadge},a),r.a.createElement("div",{className:xe.a.buttonIconWrapper},r.a.createElement(d.C,{modifiers:["sized",e?"meetingRed":"light"]})),r.a.createElement("figcaption",{className:xe.a.buttonLegend},s)))}function et({disableMenu:e,doRequestRecording:t,doStopRecording:a,isRecording:o,isTouchOnlyDevice:n,numRecordings:i}){const{isMenuVisible:s,onButtonBlur:c,onButtonHover:l,onCloseMenu:u,onMenuHover:p,onMenuBlur:g}=Object(Qe.a)();if(o)return r.a.createElement(Xe,{isRecording:o,onClick:a,isTouchOnlyDevice:n});const h=()=>{t(),u()};return r.a.createElement(M.a,{containerClassName:m()("jstest-recordingpicker-popover",M.a.defaultProps.containerClassName),containerStyle:{overflow:"visible"},content:e?null:r.a.createElement(d.v,{onMouseEnter:p,onMouseLeave:g},r.a.createElement(d.w,{href:"/user/get-recording",target:"_blank"},"Get recordings"),r.a.createElement("div",{className:xe.a.menuDivider}),r.a.createElement(d.w,{onClick:h},"Start recording")),disableReposition:!0,isOpen:s,onClickOutside:e=>(e.stopPropagation(),u(),!1),padding:8,transitionDuration:.01},r.a.createElement(Xe,{isRecording:o,isTouchOnlyDevice:n,numRecordings:i,onClick:h,onButtonBlur:c,onButtonHover:l}))}Xe.propTypes={isRecording:n.a.bool.isRequired,isTouchOnlyDevice:n.a.bool.isRequired,numRecordings:n.a.number,onButtonBlur:n.a.func.isRequired,onButtonHover:n.a.func.isRequired,onClick:n.a.func.isRequired},et.propTypes={disableMenu:n.a.bool,doRequestRecording:n.a.func.isRequired,doStopRecording:n.a.func.isRequired,isRecording:n.a.bool.isRequired,isTouchOnlyDevice:n.a.bool.isRequired,numRecordings:n.a.number};var tt=et,at=a.p+"assets/media/errorIcon.cf20122c.svg",ot=a(80),nt=a.n(ot);const it=n.a.shape({avatarUrl:n.a.string,displayName:n.a.string,id:n.a.string.isRequired,isAudioEnabled:n.a.bool,isLocalClient:n.a.bool,isVideoEnabled:n.a.bool,roleName:n.a.string,stream:n.a.instanceOf(MediaStream)}),rt=n.a.shape({roomIntegrationId:n.a.string.isRequired,name:n.a.string.isRequired,icons:n.a.shape({small:n.a.string.isRequired,large:n.a.string.isRequired}),link:n.a.shape({text:n.a.string.isRequired,href:n.a.string.isRequired}),entrypoint:n.a.string.isRequired,webview:n.a.string.isRequired,title:n.a.string.isRequired,description:n.a.string.isRequired,matcher:n.a.instanceOf(RegExp),isRunning:n.a.bool.isRequired,isConfigured:n.a.bool,tagName:n.a.string.isRequired}),st=n.a.shape({roomIntegrationId:n.a.string.isRequired,state:n.a.shape({tagName:n.a.string.isRequired,props:n.a.object,entrypoint:n.a.string.isRequired})}),ct=n.a.exact({audioId:n.a.string.isRequired,label:n.a.string.isRequired}),lt=n.a.exact({outputId:n.a.string.isRequired,label:n.a.string.isRequired}),dt=n.a.exact({videoId:n.a.string.isRequired,label:n.a.string.isRequired});function ut({canChangeRoomIntegrations:e,canScreenshare:t,children:a,doBootstrapRoomIntegration:o,doToggleRoomIntegrationSettings:n,doToggleScreenshare:i,doStopRoomIntegration:s,isScreensharing:c,isRoomIntegrationRunning:l,isRoomIntegrationsAvailable:u,roomIntegrations:p}){const{isMenuVisible:g,onButtonBlur:h,onButtonHover:f,onCloseMenu:b,onMenuHover:E,onMenuBlur:R,onToggle:S}=Object(Qe.a)(),I=l||c?nt.a.unavailable:"";return r.a.createElement(M.a,{containerClassName:m()("jstest-sharepicker-popover",M.a.defaultProps.containerClassName),containerStyle:{overflow:"visible"},content:r.a.createElement(d.v,{onMouseEnter:E,onMouseLeave:R},p.map(({name:e,icons:t,roomIntegrationId:a,title:n,isRunning:i})=>{let u;return r.a.createElement(d.w,{key:e,onClick:()=>{c||l||i||(o({roomIntegrationId:a,config:"",featureSource:"toolbar"}),b()),i&&(s({roomIntegrationId:a}),b())}},r.a.createElement("div",{className:m()("jstest-room-integration-button",nt.a.menuItem,I,{[nt.a.isRunning]:i})},r.a.createElement("span",null,i&&"Stop ",n),r.a.createElement("img",{alt:"",className:nt.a.integrationIcon,ref:e=>u=e,src:t.small,onError:()=>u.src=at})))}),e&&r.a.createElement(d.w,{onClick:()=>n(!0)},r.a.createElement("div",{className:"jstest-configure-room-integration"},"Configure integrations")),t&&r.a.createElement(r.a.Fragment,null,u&&r.a.createElement("div",{className:nt.a.menuDivider}),r.a.createElement(d.w,{onClick:()=>{l||(S(),i())}},r.a.createElement("div",{className:m()("jstest-screenshare",I,{[nt.a.isRunning]:c})},c?"Stop screen sharing":"Share screen")))),disableReposition:!0,isOpen:g,onClickOutside:e=>(e.stopPropagation(),b(),!1),padding:8,transitionDuration:.01},a({onButtonBlur:h,onButtonHover:f,onToggle:S}))}ut.propTypes={canChangeRoomIntegrations:n.a.bool.isRequired,canScreenshare:n.a.bool.isRequired,children:n.a.func.isRequired,doBootstrapRoomIntegration:n.a.func.isRequired,doStopRoomIntegration:n.a.func.isRequired,doToggleRoomIntegrationSettings:n.a.func.isRequired,doToggleScreenshare:n.a.func.isRequired,isRoomIntegrationRunning:n.a.bool.isRequired,isRoomIntegrationsAvailable:n.a.bool.isRequired,isScreensharing:n.a.bool.isRequired,roomIntegrations:n.a.arrayOf(rt).isRequired};var mt=ut;function pt({className:e,onClick:t,onMouseEnter:a,onMouseLeave:o,isActive:n}){return r.a.createElement("button",{className:m()(e,xe.a.button),onClick:t,onMouseEnter:a,onMouseLeave:o,accessKey:"s"},r.a.createElement("figure",{className:xe.a.buttonFigure},r.a.createElement("div",{className:xe.a.buttonIconWrapper},r.a.createElement(d.F,{modifiers:["sized",n?"meetingRed":"light"]})),r.a.createElement("figcaption",{className:xe.a.buttonLegend},n?"Stop":"Share")))}function gt({canChangeRoomIntegrations:e,canScreenshare:t,className:a,doBootstrapRoomIntegration:o,doStopRoomIntegration:n,doToggleRoomIntegrationSettings:i,doToggleScreenshare:s,enabledRoomIntegrations:c,isRoomIntegrationRunning:l,isRoomIntegrationsAvailable:d,isScreensharing:u,isTouchOnlyDevice:m,runningRoomIntegrations:p}){if(t&&!d||u||l){const e=u||!d?()=>s():()=>n({roomIntegrationId:p[0].roomIntegrationId});return r.a.createElement(pt,{onClick:e,className:a,isActive:u||l})}return r.a.createElement(mt,{canScreenshare:t,doBootstrapRoomIntegration:o,doStopRoomIntegration:n,doToggleRoomIntegrationSettings:i,isScreensharing:u,isRoomIntegrationRunning:l,isRoomIntegrationsAvailable:d,canChangeRoomIntegrations:e,roomIntegrations:c,doToggleScreenshare:s},({onButtonBlur:e,onButtonHover:o,onToggle:n})=>r.a.createElement(pt,{onMouseEnter:m?void 0:o,onMouseLeave:m?void 0:e,onClick:m?o:()=>{n(),t&&s()},className:a,isActive:u}))}pt.propTypes={className:n.a.string.isRequired,isActive:n.a.bool,onClick:n.a.func.isRequired,onMouseEnter:n.a.func,onMouseLeave:n.a.func},gt.propTypes={canChangeRoomIntegrations:n.a.bool.isRequired,canScreenshare:n.a.bool.isRequired,className:n.a.string,doBootstrapRoomIntegration:n.a.func.isRequired,doStopRoomIntegration:n.a.func.isRequired,doToggleRoomIntegrationSettings:n.a.func.isRequired,doToggleScreenshare:n.a.func.isRequired,enabledRoomIntegrations:n.a.arrayOf(rt).isRequired,isRoomIntegrationRunning:n.a.bool.isRequired,isRoomIntegrationsAvailable:n.a.bool.isRequired,isScreensharing:n.a.bool.isRequired,isTouchOnlyDevice:n.a.bool.isRequired,runningRoomIntegrations:n.a.arrayOf(st).isRequired};var ht=Object(s.b)("doBootstrapRoomIntegration","doStopRoomIntegration","doToggleRoomIntegrationSettings","doToggleScreenshare","selectCanChangeRoomIntegrations","selectCanScreenshare","selectEnabledRoomIntegrations","selectIsScreensharing","selectIsTouchOnlyDevice","selectIsRoomIntegrationRunning","selectIsRoomIntegrationsAvailable","selectRunningRoomIntegrations",gt),ft=a(69),bt=a.n(ft);function Et({onAccept:e,onDismiss:t}){return r.a.createElement(d.n,{onClickClose:t},r.a.createElement(d.n.Body,{className:bt.a.body},r.a.createElement("header",{className:bt.a.title},r.a.createElement("div",{className:bt.a.recIcon})," ",r.a.createElement("div",null,"Recording")),r.a.createElement("div",{className:bt.a.copy},r.a.createElement("h1",null,"Want to record this meeting?"),r.a.createElement("p",null,"Get unlimited recording with a Pro plan add-on"))),r.a.createElement(d.n.Footer,{className:bt.a.footer},r.a.createElement(d.d,{className:bt.a.acceptButton,modifiers:["full","small","primary"],onClick:e},"Upgrade"),r.a.createElement(d.d,{className:bt.a.dismissButton,modifiers:["full","small","outlined"],onClick:t},"Later")))}Et.propTypes={onAccept:n.a.func.isRequired,onDismiss:n.a.func.isRequired};var Rt=Et;function St({audioId:e,canRecord:t,canScreenshare:a,chatUnreadMessageCount:o,configNoChat:n,configNoLeaveButton:s,doRequestRecording:c,doSendChatMessage:l,doStopRecording:d,doToggleAudioEnabled:u,doToggleVideoEnabled:p,isAudioEnabled:g,isParticipantsButtonVisible:h,isRecording:f,isRoomIntegrationsAvailable:b,isTouchOnlyDevice:E,isVideoEnabled:R,knockers:S=[],layout:I,numRecordings:v,onBeforeSetMediaEnabled:C,onLeaveRoom:y,onToggleChatOpen:O,onToggleParticipantList:w,shouldShowRecordingUpsell:N,shouldShowRoomFullWarning:T,videoId:A}){const[k,_]=Object(i.useState)(!1),L=S.length;return r.a.createElement("div",{className:m()("jstest-video-controls",xe.a.VideoControls,{[xe.a.isPhone]:I.isPhone})},r.a.createElement("div",{className:xe.a.buttonCenterWrapper},r.a.createElement(qe,{className:"jstest-toggle-video",isButtonDisabled:!A,isEnabled:R,onToggle:function(){C(!g&&!R)&&p(!R)}}),r.a.createElement(Ye,{className:"jstest-mute-button",isButtonDisabled:!e,isEnabled:g,onToggle:function(){C(!g&&!R)&&u(!g)}}),(a||b)&&r.a.createElement(ht,{className:"jstest-share-screen-button"}),t&&r.a.createElement(tt,{numRecordings:v,isRecording:f,isTouchOnlyDevice:E,doRequestRecording:c,doStopRecording:d}),N&&!t&&r.a.createElement(tt,{disableMenu:!v&&!t,isRecording:!1,doRequestRecording:()=>!k&&_(!0)}),!n&&r.a.createElement(Ge,{chatUnreadMessageCount:o,doSendChatMessage:l,isTouchOnlyDevice:E,onClick:O}),h&&r.a.createElement(Je,{onClick:w,knockersCount:L,shouldShowRoomFullWarning:T}),!s&&r.a.createElement($e,{onClick:y})),k&&r.a.createElement(Rt,{onAccept:function(){_(!1),window.open("/user/order/details?utm_source=appearin&utm_campaign=recording_upsell_room_toolbar&utm_medium=web","_blank","noopener")},onDismiss:()=>_(!1)}))}St.propTypes={audioId:n.a.string.isRequired,canRecord:n.a.bool.isRequired,canScreenshare:n.a.bool.isRequired,chatUnreadMessageCount:n.a.number.isRequired,configNoChat:n.a.bool,configNoLeaveButton:n.a.bool,doRequestRecording:n.a.func.isRequired,doSendChatMessage:n.a.func.isRequired,doStopRecording:n.a.func.isRequired,doToggleAudioEnabled:n.a.func.isRequired,doToggleVideoEnabled:n.a.func.isRequired,isAudioEnabled:n.a.bool.isRequired,isParticipantsButtonVisible:n.a.bool,isRecording:n.a.bool.isRequired,isRoomIntegrationsAvailable:n.a.bool.isRequired,isTouchOnlyDevice:n.a.bool.isRequired,isVideoEnabled:n.a.bool.isRequired,knockers:n.a.array,layout:_e.c,numRecordings:n.a.number,onBeforeSetMediaEnabled:n.a.func,onLeaveRoom:n.a.func.isRequired,onToggleChatOpen:n.a.func.isRequired,onToggleParticipantList:n.a.func,shouldShowRecordingUpsell:n.a.bool,shouldShowRoomFullWarning:n.a.bool,videoId:n.a.string.isRequired};var It=Object(s.b)("doRequestRecording","doSendChatMessage","doStopRecording","doToggleAudioEnabled","doToggleVideoEnabled","selectAudioId","selectCanRecord","selectCanScreenshare","selectChatUnreadMessageCount","selectConfigNoChat","selectConfigNoLeaveButton","selectIsAudioEnabled","selectIsRecording","selectIsRoomIntegrationsAvailable","selectIsRoomOwner","selectIsTouchOnlyDevice","selectIsVideoEnabled","selectKnockers","selectNumRecordings","selectShouldShowRecordingUpsell","selectShouldShowRoomFullWarning","selectVideoId",St),vt=a(223),Ct=a.n(vt),yt=a(98),Ot=a.n(yt),wt=a(328);function Nt(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class Tt extends i.PureComponent{constructor(...e){super(...e),Nt(this,"state",{hasShareApiFailed:!1}),Nt(this,"onShareButtonClick",()=>{const{roomName:e}=this.props,t=location.origin+e;this.isShareSupported()&&!this.state.hasShareApiFailed?this.useShareApi(t).catch(()=>{this.setState({hasShareApiFailed:!0}),this.useClipboard(t)}):this.useClipboard(t)})}isShareSupported(){return!!navigator.share&&!navigator.userAgent.includes("Whereby")&&!navigator.userAgent.includes("Appearin")&&!navigator.userAgent.includes("wv")}useClipboard(e){try{Object(wt.a)(e),this.props.doSetToast("Link copied! Paste and send anywhere to invite someone to this room"),this.props.doRoomLinkCopiedAnalytics()}catch(t){console.error("Couldn't copy link to clipboard",t),this.props.doSetToast("Copying failed: "+e)}}useShareApi(e){return navigator.share({title:"You've been invited to a Whereby conversation.",text:"Join our video conference on Whereby\n\n",url:e}).catch(e=>{if("AbortError"!==e.name||!e.message.includes("cancel"))throw e})}render(){return r.a.createElement(d.d,{className:this.props.className,onClick:this.onShareButtonClick,modifiers:["full","small","primary"]},this.isShareSupported()?"Share link":"Copy link")}}Tt.propTypes={className:n.a.string,doRoomLinkCopiedAnalytics:n.a.func.isRequired,doSetToast:n.a.func.isRequired,roomName:n.a.string.isRequired};var At=Object(s.b)("doRoomLinkCopiedAnalytics","doSetToast",Tt);function kt({roomName:e,className:t}){const a=location.origin+e,o=r.a.useCallback(e=>{e.stopPropagation(),e.target.setSelectionRange(0,e.target.value.length)},[]);return r.a.createElement("div",{className:m()(Ot.a.EmptyRoomInvitation,t)},r.a.createElement("div",{className:Ot.a.content},r.a.createElement("div",{className:Ot.a.title},"Share link to start a meeting"),r.a.createElement("input",{value:a,className:Ot.a.linkInput,onClick:o,readOnly:!0}),r.a.createElement(At,{className:Ot.a.shareButton,roomName:e})))}kt.propTypes={className:n.a.string,roomName:n.a.string.isRequired};var _t=a(49),Lt=a.n(_t),Dt=a(11);function Pt(e,t){const{width:a,height:o}=t,n=o,i=n*e,r=Math.min(a/i,o/n);return{width:i*r,height:n*r}}function Mt({contentAspectRatio:e,containerFrame:t}){const a=Pt(e,{width:t.bounds.width,height:t.bounds.height}),o=(t.bounds.height-a.height)/2,n=(t.bounds.width-a.width)/2;return Object(Dt.d)({...a,top:t.origin.top+o,left:t.origin.left+n})}const jt=({vertical:e,width:t,height:a,count:o,aspectRatio:n})=>{const i=[1,2,3].map(i=>(({width:e,height:t,rows:a,cols:o,aspectRatio:n})=>{const i=Pt(n,{width:e/o,height:t/a});return Math.round(i.width*i.height)})({width:t,height:a,rows:e?Math.ceil(o/i):i,cols:e?i:Math.ceil(o/i),aspectRatio:n})),r=Math.max(...i);return{splits:i.indexOf(r)+1,weight:r}};function Ft({count:e,width:t,height:a,aspectRatio:o}){if(e<=1)return{rows:1,cols:1};const{splits:n,vertical:i}=(({width:e,height:t,count:a,aspectRatio:o})=>{const n=jt({vertical:!0,width:e,height:t,count:a,aspectRatio:o}),i=jt({vertical:!1,width:e,height:t,count:a,aspectRatio:o});return n.weight>i.weight?{splits:n.splits,vertical:!0}:{splits:i.splits,vertical:!1}})({width:t,height:a,count:e,aspectRatio:o});return i?{rows:Math.ceil(e/n),cols:n}:{rows:n,cols:Math.ceil(e/n)}}const xt=({value:e,min:t,max:a})=>Math.min(Math.max(e,t),a);function qt({choices:e=[]}){const t=Math.min(...e),a=Math.max(...e);let o=null;if(t===a)o=t;else{const t=(n=e,new Set(n).size!==n.length?(e=>e.sort((t,a)=>e.filter(e=>e===t).length-e.filter(e=>e===a).length).pop())(e):a);o=xt({value:t,min:4/3,max:16/9})}var n;return{minAr:t,maxAr:a,chosenAr:o}}function Bt({width:e,height:t,cellCount:a,gridGap:o,horizontalPadding:n=0,verticalPadding:i=0,cellAspectRatios:r=[4/3]}){const s=e-2*n,c=t-2*i,l=qt({choices:r});let d=l.chosenAr;const{rows:u,cols:m}=Ft({count:a,width:s,height:c,aspectRatio:d});1===u?d=xt({value:s/m/c,min:l.minAr,max:l.maxAr}):1===m&&(d=xt({value:s/(c/u),min:l.minAr,max:l.maxAr}));const{cellWidth:p,cellHeight:g,extraHorizontalPadding:h,extraVerticalPadding:f}=function({width:e,height:t,rows:a,cols:o,gridGap:n,aspectRatio:i}){const r=(e-(o-1)*n)/o,s=(t-(a-1)*n)/a,c=r/s;let l=0,d=0;return i<c?l=r-s*i:i>c&&(d=s-r/i),{cellWidth:r-l,cellHeight:s-d,extraHorizontalPadding:l*o/2,extraVerticalPadding:d*a/2}}({width:s,height:c,rows:u,cols:m,gridGap:o,aspectRatio:d});return{cellWidth:p,cellHeight:g,rows:u,cols:m,horizontalPadding:n+h,verticalPadding:i+f,cellCount:a,gridGap:o}}function Ut({index:e,layout:t}){const{cellWidth:a,cellHeight:o,rows:n,cols:i,cellCount:r,gridGap:s}=t,c=Math.floor(e/i),l=Math.floor(e%i);return{top:c*o+c*s,left:l*a+l*s+function({rows:e,cols:t,cellWidth:a,index:o,cellCount:n,gridGap:i}){const r=e*t,s=r-n;if(!s)return 0;const c=r-s-1;return o>=c-(t-s)+1&&o<=c?s*a/2+i:0}({rows:n,cols:i,cellWidth:a,index:e,cellCount:r,gridGap:s}),width:a,height:o}}const zt="rows",Ht="columns";function Vt({layoutGrid:e,dim:t,secDim:a,index:o,count:n,gridGap:i}){const r=(t-i*(n-1))*(e.fractions?e.fractions[o]:1/n),s=e.lines[o];return[r,(a-i*(s-1))/s]}function Wt({isHorizontal:e,layoutGrid:t,width:a,height:o,gridGap:n}){const i=[],r=0,s=0,c={x:0,y:0},l=t.lines.length,d=e?o:a,u=e?a:o;for(let m=0;m<l;m++){const a=Vt({layoutGrid:t,dim:d,secDim:u,index:m,count:l,gridGap:n}),o={width:e?a[1]:a[0],height:e?a[0]:a[1]},p=t.lines[m];for(let t=0;t<p;t++)i.push({origin:{...c},size:o}),e?c.x+=o.width+n:c.y+=o.height+n;e?(c.y+=o.height+n,c.x=r):(c.x+=o.width+n,c.y=s)}return i}function Gt({layoutGrid:e,width:t,height:a,gridGap:o}){switch(e.type){case zt:return function({layoutGrid:e,width:t,height:a,gridGap:o}){return Wt({isHorizontal:!0,layoutGrid:e,width:t,height:a,gridGap:o})}({layoutGrid:e,width:t,height:a,gridGap:o});case Ht:return function({layoutGrid:e,width:t,height:a,gridGap:o}){return Wt({isHorizontal:!1,layoutGrid:e,width:t,height:a,gridGap:o})}({layoutGrid:e,width:t,height:a,gridGap:o})}}function Kt({width:e,height:t,cellCount:a,gridGap:o=0,horizontalPadding:n=0,verticalPadding:i=0}){const r=e-2*n,s=t-2*i;return{cellRects:Gt({layoutGrid:Math.round(r/s*10)/10<=1?{1:{type:zt,lines:[1]},2:{type:zt,lines:[1,1]},3:{type:zt,lines:[2,1]},4:{type:zt,lines:[2,2]},5:{type:zt,lines:[2,2,1]},6:{type:zt,lines:[2,2,2]},7:{type:zt,lines:[3,2,2]},8:{type:zt,lines:[2,2,2,2]},9:{type:zt,lines:[3,2,2,2]},10:{type:zt,lines:[3,3,2,2]},11:{type:zt,lines:[3,3,3,2]},12:{type:zt,lines:[3,3,3,3]},13:{type:zt,lines:[4,3,3,3]},14:{type:zt,lines:[4,4,3,3]},15:{type:zt,lines:[3,3,3,3,3]},16:{type:zt,lines:[4,3,3,3,3]},17:{type:zt,lines:[4,4,3,3,3]},18:{type:zt,lines:[4,4,4,3,3]},19:{type:zt,lines:[4,4,4,4,3]},20:{type:zt,lines:[4,4,4,4,4]}}[a]||{type:zt,lines:[5,5,5,5,5]}:function(e){return{1:{type:Ht,lines:[1]},2:{type:Ht,lines:[1,1]},3:{type:Ht,lines:[2,1]},4:{type:Ht,lines:[2,2]},5:{type:zt,lines:[3,2],fractions:[.45,.55]},6:{type:Ht,lines:[2,2,2]},7:{type:zt,lines:[4,3],fractions:[.45,.55]},8:{type:Ht,lines:[2,2,2,2]},9:{type:Ht,lines:[3,2,2,2]},10:{type:Ht,lines:[3,3,2,2]},11:{type:Ht,lines:[3,3,3,2]},12:{type:Ht,lines:[3,3,3,3]},13:{type:Ht,lines:[4,3,3,3]},14:{type:Ht,lines:[4,4,3,3]},15:{type:Ht,lines:[3,3,3,3,3]},16:{type:Ht,lines:[4,3,3,3,3]},17:{type:Ht,lines:[4,4,3,3,3]},18:{type:Ht,lines:[4,4,4,3,3]},19:{type:Ht,lines:[4,4,4,4,3]},20:{type:Ht,lines:[4,4,4,4,4]}}[e]||{type:Ht,lines:[5,5,5,5,5]}}(a),width:r,height:s,gridGap:o}),horizontalPadding:n,verticalPadding:i,cellCount:a,gridGap:o}}function $t({index:e,layout:t}){const{cellRects:a}=t,o=a[e];return{top:o.origin.y,left:o.origin.x,width:o.size.width,height:o.size.height}}function Yt({containerBounds:e,isPortrait:t,cellCount:a,cellSize:o}){const n=function({containerBounds:e,isPortrait:t,cellCount:a,cellSize:o}){let n=0,i=0,r=0,s=0,c=0,l=0;return a&&(t?(s=Math.floor(e.width/o),r=Math.ceil(a/s),n=e.width,i=r*o,c=(e.width-s*o)/2):(r=Math.floor(e.height/o),s=Math.ceil(a/r),n=s*o,i=e.height,l=(e.height-r*o)/2)),{isPortrait:t,width:n,height:i,cellSize:o,cellCount:a,rows:r,cols:s,horizontalPadding:c,verticalPadding:l}}({containerBounds:e,isPortrait:t,cellCount:a,cellSize:o}),i=Object(Dt.c)({width:n.width,height:n.height});return 0===a?{bounds:i,videoCells:[]}:{bounds:i,videoCells:[...Array(a)].map((e,t)=>{const{top:a,left:o,width:i,height:r}=function({index:e,layout:t}){const{isPortrait:a,rows:o,cols:n,cellCount:i,cellSize:r,horizontalPadding:s,verticalPadding:c}=t,l=a?Math.floor(e/n):Math.floor(e%o),d=a?Math.floor(e%n):Math.floor(e/o),u=function({index:e,isPortrait:t,rows:a,cols:o,cellSize:n,cellCount:i}){const r=a*o,s=r-i;if(!s)return 0;const c=r-s-1;return e<c-((t?o:a)-s)+1||e>c?0:s*n/2}({index:e,isPortrait:a,rows:o,cols:n,cellSize:r,cellCount:i});return{top:c+l*r+(a?0:u),left:s+d*r+(a?u:0),width:r,height:r}}({index:t,layout:n});return{origin:Object(Dt.e)({top:a,left:o}),bounds:Object(Dt.c)({width:i,height:r})}})}}function Zt({containerBounds:e,containerOrigin:t,gridGap:a,supersizedContentAspectRatio:o,hasSupersizedContent:n,hasVideoGridContent:i,minGridBounds:r}){const{width:s,height:c}=e;let l=s<=c,d=Object(Dt.c)(),u=Object(Dt.e)(),m=i?{...e}:Object(Dt.c)(),p=i?{...t}:Object(Dt.e)();if(n){const n=function({bounds:e,aspectRatio:t,minGridContainerBounds:a}){const{width:o,height:n}=e;let i=o<=n;if(!(a.width>0))return{isPortrait:i,supersizedContentBounds:e};const r=Math.round(o/2),s=Math.round(n/2),c=Math.max(o-a.width,0),l=Math.max(n-a.height,0);let d=0,u=0;if(t){const e=Pt(t,{width:c,height:n}),a=Pt(t,{width:o,height:l});if(i=t<=1?a.height>e.height:a.width>e.width,i){const e=l-Math.max(a.height,s);u=Math.max(e,0)}else{const t=c-Math.max(e.width,r);d=Math.max(t,0)}}return{isPortrait:i,supersizedContentBounds:{width:i?o:c-d,height:i?l-u:n}}}({bounds:e,aspectRatio:o,minGridContainerBounds:Object(Dt.c)({width:i?r.width+a:0,height:i?r.height+a:0})});l=n.isPortrait,d=n.supersizedContentBounds,u={...t},i&&(m=Object(Dt.c)({width:l?e.width:e.width-d.width-a,height:l?e.height-d.height-a:e.height}),p=Object(Dt.e)({top:l?t.top+d.height+a:t.top,left:l?t.left:t.left+d.width+a}))}return{isPortrait:l,supersizedContent:Object(Dt.d)({...d,...u}),videoGrid:Object(Dt.d)({...m,...p})}}function Jt({containerBounds:e,containerPaddings:t,gridGap:a,hasSupersizedContent:o,hasVideoGridContent:n,minGridWidth:i=300,minGridHeight:r=200,numOverflowItems:s=0,overflowItemSize:c=68,isConstrained:l,videos:d=[],supersizedVideo:u}){const m=e.width-2*t.horizontal,p=e.height-2*t.vertical,g=Object(Dt.c)({width:m,height:p}),h=Object(Dt.e)({top:t.vertical,left:t.horizontal}),f=Object(Dt.c)({width:i,height:r}),b=function({containerBounds:e,containerOrigin:t,gridGap:a,numOverflowItems:o,overflowItemSize:n,hasSupersizedContent:i,hasVideoGridContent:r}){const{width:s,height:c}=e,l=s<=c,d=o>0,u=i||r;if(!d&&!u)return{isPortrait:l,videosContainer:Object(Dt.d)(),overflowGrid:{...Object(Dt.d)(),cells:[]}};if(d&&!u)return{isPortrait:l,videosContainer:Object(Dt.d)(),overflowGrid:{...Object(Dt.d)({...e,...t}),cells:[]}};if(!d)return{isPortrait:l,videosContainer:Object(Dt.d)({...e,...t}),overflowGrid:{...Object(Dt.d)(),cells:[]}};const m=Yt({containerBounds:e,isPortrait:l,cellCount:o,cellSize:n}),p=m.bounds,g=Object(Dt.e)({top:l?Math.max(t.top+c-p.height,0):t.top,left:l?t.left:Math.max(t.left+s-p.width,0)}),h=Object(Dt.b)({bounds:l?Object(Dt.c)({width:0,height:p.height+a}):Object(Dt.c)({width:p.width+a,height:0}),fromBounds:e}),f={...t};return{isPortrait:l,videosContainer:Object(Dt.d)({...h,...f}),overflowGrid:{...Object(Dt.d)({...p,...g}),cells:m.videoCells}}}({containerBounds:g,containerOrigin:h,gridGap:a,numOverflowItems:s,overflowItemSize:c,hasSupersizedContent:o,hasVideoGridContent:n}),E=Zt({containerBounds:b.videosContainer.bounds,containerOrigin:b.videosContainer.origin,gridGap:a,supersizedContentAspectRatio:u?u.aspectRatio:null,hasSupersizedContent:o,hasVideoGridContent:n,minGridBounds:f}),R=function({containerBounds:e,horizontalPadding:t=0,verticalPadding:a=0,videos:o,isConstrained:n}){const{width:i,height:r}=e,s=o.length;let c=null,l=null;const d=n?4:8;if(n){c=Kt({width:i,height:r,cellCount:s,horizontalPadding:t,verticalPadding:a,gridGap:d});const e=s>4;l=o.map((t,a)=>{const o=$t({index:a,layout:c});return{clientId:t.clientId,draggable:t.draggable,origin:Object(Dt.e)({top:o.top,left:o.left}),bounds:Object(Dt.c)({width:o.width,height:o.height}),aspectRatio:o.width/o.height,isSmallCell:e}})}else{const e=o.map(e=>e.aspectRatio);c=Bt({width:i,height:r,cellCount:s,horizontalPadding:t,verticalPadding:a,gridGap:d,cellAspectRatios:e}),l=o.map((e,t)=>{const a=Ut({index:t,layout:c}),o=c.cellWidth<240,i=n||o?c.cellWidth/c.cellHeight:e.aspectRatio;return{clientId:e.clientId,draggable:e.draggable,origin:Object(Dt.e)({top:a.top,left:a.left}),bounds:Object(Dt.c)({width:a.width,height:a.height}),aspectRatio:i,isSmallCell:o}})}return{videoCells:l,horizontalPadding:c.horizontalPadding,verticalPadding:c.verticalPadding}}({containerBounds:E.videoGrid.bounds,videos:d,isConstrained:l});return{isPortrait:b.isPortrait,gridGap:a,supersizedContent:{...E.supersizedContent,...u},videoGrid:{...E.videoGrid,cells:R.videoCells,horizontalPadding:R.horizontalPadding,verticalPadding:R.verticalPadding},overflowGrid:b.overflowGrid}}function Qt({origin:e,containerOrigin:t,horizontalPadding:a=0,verticalPadding:o=0}){return Object(Dt.e)({top:t.top+o+e.top,left:t.left+a+e.left})}function Xt({cell:e,containerFrame:t,containerHorizontalPadding:a=0,containerVerticalPadding:o=0}){const n=Qt({origin:e.origin,containerOrigin:t.origin,horizontalPadding:a,verticalPadding:o});return{...e,origin:n}}function ea({cell:e,draggedClientId:t,xy:a,delta:o,hitBuffer:n}){let i=null,r=null;return e.clientId===t?i=function({cell:e,delta:[t,a]}){const o=Object(Dt.e)({top:e.origin.top-a,left:e.origin.left-t});return{cell:e,frame:Mt({contentAspectRatio:e.aspectRatio,containerFrame:{origin:o,bounds:e.bounds}})}}({cell:e,delta:o}):function({cell:e,xy:[t,a],hitBuffer:o=0}){return t>=e.origin.left-o&&t<=e.origin.left+e.bounds.width+o&&a>=e.origin.top-o&&a<=e.origin.top+e.bounds.height+o}({cell:e,xy:a,hitBuffer:n})&&(r=function({cell:e}){return{cell:e,frame:Mt({contentAspectRatio:e.aspectRatio,containerFrame:{origin:e.origin,bounds:e.bounds}})}}({cell:e})),{dragIndicator:i,dropIndicator:r}}function ta({stageOrigin:e,stageLayout:t,xy:a,delta:o,draggedClientId:n}){const i=t.videoGrid.cells.filter(e=>e.draggable),r=t.supersizedContent&&t.supersizedContent.aspectRatio&&t.supersizedContent.draggable;let s=null,c=null,l=!1,d=!1;const u=Math.round(t.gridGap/2);for(let m=0;m<i.length;m++){const r=i[m],d=Qt({origin:t.videoGrid.origin,containerOrigin:e}),p=ea({cell:Xt({cell:r,containerFrame:{bounds:t.videoGrid.bounds,origin:d},containerHorizontalPadding:t.videoGrid.horizontalPadding,containerVerticalPadding:t.videoGrid.verticalPadding}),draggedClientId:n,xy:a,delta:o,hitBuffer:u});if(p.dragIndicator?s=p.dragIndicator:p.dropIndicator&&(c=p.dropIndicator),l=s&&c,l)break}if(!l&&r){const i=ea({cell:Xt({cell:{clientId:t.supersizedContent.clientId,aspectRatio:t.supersizedContent.aspectRatio,origin:t.supersizedContent.origin,bounds:t.supersizedContent.bounds},containerFrame:{...t.supersizedContent.bounds,origin:e}}),draggedClientId:n,xy:a,delta:o});i.dragIndicator?s=i.dragIndicator:i.dropIndicator&&(c=i.dropIndicator),l=s&&c,d=l}return l&&d&&(s=function({indicator:e,xy:[t,a],targetBounds:o}){const n=(e.frame.origin.left-t)/e.frame.bounds.width,i=(e.frame.origin.top-a)/e.frame.bounds.height,r=Pt(e.cell.aspectRatio,o),s=Object(Dt.e)({top:a+r.height*i,left:t+r.width*n});return{...e,frame:{origin:s,bounds:r}}}({indicator:s,xy:a,targetBounds:c.cell.bounds})),{dragIndicator:s,dropIndicator:c}}const aa=()=>{};class oa{constructor(e=aa){this.callback=e,this._isActive=!1,this._xy=[0,0],this._startXy=[0,0],this._isDown=!1,this._pointerId=null,this._hasCapture=!1}onDragStart(e){this._isPrimaryButton(e)&&!this._isDown&&this._isGestureEvent(e)&&(this._pointerId=e.pointerId,this._isDown=!0,this._xy=[e.clientX,e.clientY],this._startXy=[e.clientX,e.clientY])}onDragChange(e,t){this._isDown&&this._isGestureEvent(t)&&(this._xy=[t.clientX,t.clientY],this._isActive?this._update(!1,t,e):this._isDragging()&&!this._isInputAcceptingTarget(t)&&(this._hasCapture||t.currentTarget.setPointerCapture(t.pointerId),this._start(t,e)))}onDragEnd(e,t){if(!this._isDown||!this._isGestureEvent(t))return;const a=this._isActive;this._cancel(),a&&this._update(!1,t,e)}onGotPointerCapture(e){this._isGestureEvent(e)&&(this._hasCapture=!0)}onLostPointerCapture(e){this._isGestureEvent(e)&&(this._hasCapture=!1,this._pointerId=null)}_start(e,t){this._isActive=!0,this._update(!0,e,t)}_cancel(){this._isDown=!1,this._isActive=!1}_update(e=!1,t,a){this.callback&&this.callback({isFirstEvent:e,xy:this._xy,delta:[this._startXy[0]-this._xy[0],this._startXy[1]-this._xy[1]],isActive:this._isActive,event:t,args:a,cancelDrag:this._cancel.bind(this)})}_isDragging(){return Math.abs(this._startXy[0]-this._xy[0])+Math.abs(this._startXy[1]-this._xy[1])>=5}_isGestureEvent(e){return!this._pointerId||e.pointerId===this._pointerId}_isPrimaryButton(e){return e&&0===e.button&&1===e.buttons}_isInputAcceptingTarget(e){if(e.target.isContentEditable)return!0;const t=(e.target||e.srcElement).tagName;return"INPUT"===t||"SELECT"===t||"TEXTAREA"===t}}var na=a(120),ia=a.n(na);class ra extends r.a.Component{static update(e){ra.__singletonRef&&ra.__singletonRef._update(e)}constructor(e){super(e),ra.__singletonRef=this,this.dragIndicatorRef=r.a.createRef(),this.dropTargetIndicatorRef=r.a.createRef(),this._rafId=null}componentWillUnmount(){this._rafId&&cancelAnimationFrame(this._rafId)}_setStyles({el:e,frame:t,visible:a}){e&&Object.assign(e.style,{display:a?"block":"none",transform:`translate3d(${Math.round(t.origin.left)}px, ${Math.round(t.origin.top)}px, 0)`,width:`${Math.round(t.bounds.width)}px`,height:`${Math.round(t.bounds.height)}px`})}_setMoveCursor(e){document.body.style.cursor=e?"move":"auto"}_update({dragIndicatorFrame:e,dropIndicatorFrame:t}={}){this._rafId&&cancelAnimationFrame(this._rafId),this._rafId=requestAnimationFrame(()=>{const a=Object(Dt.a)(e&&e.bounds);this._setStyles({el:this.dragIndicatorRef.current,frame:e||Object(Dt.d)(),visible:a}),this._setMoveCursor(a);const o=Object(Dt.a)(t&&t.bounds);this._setStyles({el:this.dropTargetIndicatorRef.current,frame:t||Object(Dt.d)(),visible:o}),this._rafId=null})}render(){return r.a.createElement("div",{className:m()(ia.a.DragOverlay,{[ia.a.withRoundedCorners]:this.props.withRoundedCorners})},r.a.createElement("div",{ref:this.dropTargetIndicatorRef,className:ia.a.dropTargetIndicator}),r.a.createElement("div",{ref:this.dragIndicatorRef,className:ia.a.dragIndicator}))}}ra.propTypes={withRoundedCorners:n.a.bool};var sa=ra,ca=a(99),la=a.n(ca);function da(){return(da=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function ua({style:e,width:t,height:a,aspectRatio:o,children:n,withRoundedCorners:i=!1,withShadow:s=!0,isConstrained:c,className:l,...d}){let u={};if(o&&t&&a){const{width:e,height:n}=Pt(o,{width:t,height:a}),i=(t-e)/2,r=(a-n)/2;u={width:`${Math.round(e)}px`,height:`${Math.round(n)}px`,transform:`translate3d(${Math.round(i)}px, ${Math.round(r)}px, 0)`}}return r.a.createElement("div",{className:m()(la.a.VideoCell,l),style:e},r.a.createElement("div",da({className:m()(la.a.VideoCellContent,{[la.a.withRoundedCorners]:i,[la.a.withShadow]:s,[la.a.isConstrained]:c}),style:u},d),n))}ua.propTypes={aspectRatio:n.a.number,children:n.a.node.isRequired,className:n.a.string,height:n.a.number,isConstrained:n.a.bool,style:n.a.object,width:n.a.number,withRoundedCorners:n.a.bool,withShadow:n.a.bool};var ma=ua;const pa=(e,t,a)=>t.reduce((e,t)=>(e&&"undefined"!==e[t]?e[t]:void 0)||a,e);function ga(){return(ga=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function ha({origin:e,bounds:t}){return{top:Math.round(e.top),left:Math.round(e.left),height:Math.round(t.height),width:Math.round(t.width)}}function fa({children:e,debug:t,featureRoundedCornersOff:a,overflowContent:o=[],isConstrained:n,layout:i,supersizedContent:s,doReorderClients:c=(()=>{})}){const l=r.a.Children.toArray(e).filter(e=>e),d=!!s,u=d&&s.props.client?s.props.client.id:null,p=u?s.props.aspectRatio:null,g=!d&&!l.length,h=function({isPhoneSizedDevice:e}){const t={vertical:8,horizontal:8};return e&&(t.vertical=4,t.horizontal=4),t}({isPhoneSizedDevice:n}),f=n?4:8,b=!a&&!n,E=l.map(e=>({clientId:e.props.client.id,aspectRatio:e.props.aspectRatio,draggable:e.props.draggable})),R=p?{clientId:u,aspectRatio:p,draggable:s.props.draggable}:null,S=o.length,I=Jt({hasSupersizedContent:d,hasVideoGridContent:l.length,containerBounds:i.bounds,containerPaddings:h,gridGap:f,numOverflowItems:S,isConstrained:n,videos:E,supersizedVideo:R}),v=ha(I.supersizedContent),C=Object(_e.b)(Object(Dt.d)({...I.supersizedContent.bounds})),y=function(e=aa){const t=r.a.useRef(new oa);return t.current.callback=e,(e={})=>({onPointerDown:t.current.onDragStart.bind(t.current),onPointerMove:t.current.onDragChange.bind(t.current,e),onPointerUp:t.current.onDragEnd.bind(t.current,e),onPointerCancel:t.current.onDragEnd.bind(t.current,e),onGotPointerCapture:t.current.onGotPointerCapture.bind(t.current),onLostPointerCapture:t.current.onLostPointerCapture.bind(t.current)})}(({isFirstEvent:e,isActive:t,xy:a,delta:o,args:{clientId:n},cancelDrag:r})=>{if(e&&!n)return void r();const s=ta({stageOrigin:i.origin,stageLayout:I,xy:a,delta:o,draggedClientId:n});if(t)sa.update({dragIndicatorFrame:s.dragIndicator&&s.dragIndicator.frame,dropIndicatorFrame:s.dropIndicator&&s.dropIndicator.frame});else{if(s.dropIndicator){const e=s.dropIndicator.cell.clientId;c({id:n,withId:e})}sa.update()}}),O=l.map((e,t)=>{const a=pa(I,["videoGrid","cells",t]),o={top:I.videoGrid.origin.top+I.videoGrid.verticalPadding+a.origin.top,left:I.videoGrid.origin.left+I.videoGrid.horizontalPadding+a.origin.left},i={width:Math.round(a.bounds.width),height:Math.round(a.bounds.height),transform:`translate3d(${Math.round(o.left)}px, ${Math.round(o.top)}px, 0)`},s=e.props.client.id;return r.a.createElement(ma,ga({width:a.bounds.width,height:a.bounds.height,aspectRatio:a.aspectRatio,style:i,withRoundedCorners:b,key:s,className:m()({[Lt.a.hidden]:!Object(Dt.a)(a.bounds)})},e.props.draggable?y({clientId:s}):{}),r.a.cloneElement(e,{isSmallCell:a.isSmallCell,isZoomedByDefault:!!n,canZoom:!!n,key:s}))});if(d&&p){const e=r.a.createElement(ma,ga({width:I.supersizedContent.bounds.width,height:I.supersizedContent.bounds.height,aspectRatio:p,withRoundedCorners:b,isConstrained:n,className:Lt.a.supersizedContent,style:v,key:u},s.props.draggable?y({clientId:u}):{}),r.a.cloneElement(s,{isZoomedByDefault:!1,canZoom:!1,key:u}));O.push(e)}const w=o.map((e,t)=>{const a=pa(I,["overflowGrid","cells",t]),o={},n=e.props.client.id,s=I.isPortrait||g?"up":"left";let c="center";if(a){o.width=Math.round(a.bounds.width),o.height=Math.round(a.bounds.height);const e={top:I.overflowGrid.origin.top+a.origin.top,left:I.overflowGrid.origin.left+a.origin.left};o.transform=`translate3d(${Math.round(e.left)}px, ${Math.round(e.top)}px, 0)`,c=function({cellFrame:e,stageBounds:t,reactionDirection:a}){if("up"===a){const a=300,o=Math.floor(a/2-e.bounds.width),n=Math.floor(t.width-o-e.bounds.width),i=e.origin.left;if(i<o)return"start";if(i>n)return"end"}else if("left"===a){const a=200,o=Math.floor(a/2-e.bounds.height),n=Math.floor(t.height-o-e.bounds.height),i=e.origin.top;if(i<o)return"start";if(i>n)return"end"}return"center"}({cellFrame:Object(Dt.d)({...e,...a.bounds}),stageBounds:i.bounds,reactionDirection:s})}else{if(!g)throw new Error("VideoStageLayout: unexpected missing overflow cell layout for client ID:"+n);o.position="relative"}return r.a.createElement(ma,{width:a?a.bounds.width:void 0,height:a?a.bounds.height:void 0,withShadow:!1,style:o,key:n},r.a.cloneElement(e,{style:o,canZoom:!1,overflowReactionDirection:s,overflowReactionAlignment:c}))});return r.a.createElement("div",{className:m()(Lt.a.VideoStageLayout,{[Lt.a.noneOnStage]:g}),key:"video-stage-layout"},r.a.createElement("div",{className:Lt.a.gridCellsWrapper},d&&!u&&r.a.createElement("div",{className:Lt.a.supersizedContent,style:v,key:"room-integration"},r.a.cloneElement(s,{layout:C})),O,w),g?r.a.createElement("div",{className:Lt.a.noneOnStageMessage},r.a.createElement("h1",null,S<=1?"You're muted":"Everyone is muted"),r.a.createElement("p",null,"Turn on your mic to say something")):null,t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Lt.a.debugShape,style:ha(I.supersizedContent)}),r.a.createElement("div",{className:Lt.a.debugShape,style:ha(I.videoGrid)}),r.a.createElement("div",{className:Lt.a.debugShape,style:ha(I.overflowGrid)})),r.a.createElement(sa,{key:"drag-overlay",withRoundedCorners:b}))}fa.propTypes={children:n.a.node,debug:n.a.bool,doReorderClients:n.a.func,featureRoundedCornersOff:n.a.bool,isConstrained:n.a.bool,layout:_e.c,numOverflowItems:n.a.number,overflowContent:n.a.arrayOf(n.a.element),supersizedContent:n.a.element};var ba=fa,Ea=a(19),Ra=a.n(Ea),Sa=a(81),Ia=a.n(Sa),va=a(162),Ca=a.n(va);const ya=({value:e,displayValue:t="",placeholder:a,onEdit:o,confirmBtnClassName:n})=>{const[s,c]=Object(i.useState)(e||""),[l,d]=Object(i.useState)(!1),u=Object(i.useRef)(null),p=Object(i.useCallback)(e=>{const t=e.target.value;c(t)},[c]),g=Object(i.useCallback)(()=>{const t=s?s.trim():"";t!==e?o(t):c(e||""),d(!1)},[s,e,o,c,d]),h=Object(i.useCallback)(e=>{"Enter"===e.key&&g()},[g]),f=Object(i.useCallback)(()=>d(!0),[d]),b=Object(i.useCallback)(e=>e.stopPropagation(),[]);Object(i.useEffect)(()=>{l&&u.current&&u.current.select()},[l,u]);const E=l?r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{ref:u,className:m()("jstest-editable-text-input",Ca.a.inputField),value:s,size:(s||a).length+1,onChange:p,onBlur:g,onKeyPress:h,type:"text"}),r.a.createElement("button",{className:m()("jstest-editable-text-btn",Ca.a.confirmBtn,n),onClick:g},"Done")):r.a.createElement("span",{className:m()("jstest-editable-text-span"),onClick:f},t||e||a);return r.a.createElement("span",{className:m()(Ca.a.editableTextWrapper),onClick:b},E)};ya.propTypes={confirmBtnClassName:n.a.string,displayValue:n.a.string,onEdit:n.a.func.isRequired,placeholder:n.a.string,value:n.a.string};var Oa=ya,wa=a(121),Na=a.n(wa);const Ta=({displayName:e,isLocalClient:t,isScreenshare:a,avatarUrl:o,className:n,onClick:i,...s})=>{e||(e="Guest");const c=t?`${e} (you)`:e,l=function({canFullscreen:e,canKick:t,canSupersize:a,canSwitch:o,canZoom:n,onSwitch:i,isFullscreen:s,isLocalClient:c,isMutedLocally:l,isOnStage:u,isScreenshare:m,isSupersized:p,isZoomed:g,onKick:h,onToggleFullscreen:f,onToggleLocalMute:b,onToggleSupersize:E,onToggleZoomState:R}){const S=[];return u&&c&&o&&S.push(r.a.createElement(d.w,{key:"switch-cam",onClick:i},"Switch camera")),u&&n&&S.push(r.a.createElement(d.w,{key:"zoom",onClick:R},g?"Zoom out":"Zoom in")),c||m||S.push(r.a.createElement(d.w,{key:"local-mute",onClick:b},l?"Unmute":"Mute")),u&&a&&!s&&S.push(r.a.createElement(d.w,{key:"supersize",onClick:E},p?"Minimize":"Maximize")),t&&S.push(r.a.createElement(d.w,{key:"kick",onClick:()=>h()},"Remove")),u&&e&&S.push(r.a.createElement(d.w,{key:"exit-fullscreen",onClick:f},s?"Exit fullscreen":"Fullscreen")),S.length?S:null}({isLocalClient:t,isScreenshare:a,...s});return r.a.createElement(d.v,{onClick:i,className:n},!a&&r.a.createElement("div",{className:m()(Na.a.menuHeader,{[Na.a["menuHeader--withDivider"]]:Boolean(l)})},r.a.createElement(d.b,{modifiers:["square"],className:Na.a.menuAvatar,avatarUrl:o,name:e,size:40}),r.a.createElement("span",{className:Na.a.menuName},c)),l)};Ta.propTypes={avatarUrl:n.a.string,canFullscreen:n.a.bool.isRequired,canKick:n.a.bool.isRequired,canSupersize:n.a.bool.isRequired,canSwitch:n.a.bool.isRequired,canZoom:n.a.bool.isRequired,className:n.a.string,displayName:n.a.string,isFullscreen:n.a.bool.isRequired,isLocalClient:n.a.bool.isRequired,isMutedLocally:n.a.bool.isRequired,isOnStage:n.a.bool.isRequired,isScreenshare:n.a.bool.isRequired,isSupersized:n.a.bool.isRequired,isZoomed:n.a.bool.isRequired,onClick:n.a.func.isRequired,onKick:n.a.func.isRequired,onSwitch:n.a.func.isRequired,onToggleFullscreen:n.a.func.isRequired,onToggleLocalMute:n.a.func.isRequired,onToggleSupersize:n.a.func.isRequired,onToggleZoomState:n.a.func.isRequired};var Aa=Ta;function ka(){return(ka=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function _a({avatarUrl:e,displayName:t}){return r.a.createElement("div",{className:m()(Ra.a.videoOffIndicator,"jstest-video-muted-avatar")},r.a.createElement(d.b,{modifiers:["square"],avatarUrl:e,name:t,size:60,className:Ra.a.avatar}))}function La({canSwitch:e,onSwitch:t,isLocalClient:a,isMuted:o,isMutedLocally:n,isScreenshare:i,name:s,onNameChange:c}){const l=a?"Guest (you)":"Guest",u=r.a.createElement(Oa,{value:s,displayValue:s?`${s} (you)`:null,placeholder:l,onEdit:c,confirmBtnClassName:Ra.a.nameChangeConfirmBtn}),p=a?u:s||l;return r.a.createElement("div",{className:Ra.a.controls},r.a.createElement("div",{className:Ra.a.controlsContent},o&&!n&&!i&&r.a.createElement("div",{className:m()("jstest-mute-icon",Ra.a.muteIcon)},r.a.createElement(d.x,{modifiers:["sizedSmall","light"]})),n&&!i&&r.a.createElement("div",{className:Ra.a.mutedLocallyIconWrapper},r.a.createElement(d.H,{modifiers:["sizedSmall","light"]})),r.a.createElement("div",{className:Ra.a.nameBanner},p),e&&r.a.createElement("button",{onClick:t,className:m()("jstest-switch-icon",Ra.a.switchButton)},r.a.createElement(d.h,{modifiers:["sizedSmall","light"]}))))}_a.propTypes={avatarUrl:n.a.string,displayName:n.a.string},La.propTypes={canSwitch:n.a.bool,isLocalClient:n.a.bool,isMuted:n.a.bool,isMutedLocally:n.a.bool,isScreenshare:n.a.bool,name:n.a.string,onNameChange:n.a.func,onSwitch:n.a.func};const Da=({isOpen:e,isOverflow:t,isSmallCell:a,content:o,onClickOutside:n,contentDestination:i,triggerButton:s})=>e?r.a.createElement(M.a,{content:o,isOpen:!0,onClickOutside:n,padding:t?-60:a?-34:-40,position:["bottom","left"],align:"end",transitionDuration:.01,containerStyle:{overflow:"visible"},contentDestination:i},s):s;Da.propTypes={content:n.a.element.isRequired,contentDestination:n.a.instanceOf(Element),isOpen:n.a.bool,isOverflow:n.a.bool,isSmallCell:n.a.bool,onClickOutside:n.a.func.isRequired,triggerButton:n.a.element.isRequired};const Pa=r.a.forwardRef((e,t)=>{const{avatarUrl:a,canFullscreen:o,canKick:n,canSupersize:i,canSwitch:s,canZoom:c,chatNotification:l,children:u,className:p,clientConnectionStatus:g,clientId:h,clientStats:f,displayName:b,draggable:E,isAudioMuted:R,isFullscreen:S,isLocalClient:I,isMutedLocally:v,isOverflow:C,isRecording:y,isScreenshare:O,isSelfieCam:w,isSmallCell:N,isSupersized:T,isVideoLoaded:A,isVideoMuted:k,isVideoSwitching:_,isZoomed:L,onDoubleClick:D,onKick:P,onSetLocalDisplayName:M,onSwitch:j,onToggleFullscreen:F,onToggleLocalMute:x,onToggleSupersize:q,onToggleZoomState:B}=e,U=r.a.useRef(null);function z(e){t&&t(e),U.current=e}const[H,V]=r.a.useState(!1),W=r.a.useCallback(()=>V(e=>!e),[]),G=r.a.createElement("button",{className:m()("jstest-video-cell-more-button",C?Ia.a.menuButton:Ra.a.menuButton),onClick:W},r.a.createElement(d.o,{modifiers:["sized","light","vertical"]})),K=r.a.createElement(Aa,ka({avatarUrl:a,canFullscreen:o,canKick:n,canSupersize:i,canSwitch:s,canZoom:c,displayName:b,isFullscreen:S,isLocalClient:I,isMutedLocally:v,isScreenshare:O,isSupersized:T,isZoomed:L,onClick:W,onKick:P,onSwitch:j,onToggleFullscreen:F,onToggleLocalMute:x,onToggleSupersize:q,onToggleZoomState:B},{className:"jstest-video-cell-menu",isOnStage:!C}));if(C){const e=r.a.createElement(r.a.Fragment,null,r.a.createElement(Da,{isOpen:H,content:K,onClickOutside:W,triggerButton:G,contentDestination:S?U.current:document.body,isSmallCell:N,isOverflow:!0}),r.a.createElement(d.b,{modifiers:["square"],className:Ia.a.avatar,avatarUrl:a,name:b,size:60})),t=l?r.a.cloneElement(l,{className:Ia.a.avatarWrapper},e):e;return r.a.createElement("div",{ref:z,key:"wrapper",className:m()(Ia.a.WebRtcOverflowVideo,p),"data-clientid":h,title:b},r.a.createElement("div",{key:"content",className:Ia.a.hiddenContent},u),r.a.createElement("div",{className:Ia.a.content},t))}return r.a.createElement("div",{ref:z,key:"wrapper",className:m()(Ra.a.WebRtcVideo,p,"WebRtcVideo","jstest-client-video",{"jstest-local-client-video":I},{[Ra.a.mirror]:w},{[Ra.a.videoLoading]:!I&&!k&&!A},{[Ra.a.switching]:_},{[Ra.a["WebRtcVideo--fullscreen"]]:S},{[Ra.a["WebRtcVideo--supersized"]]:T||O},{[Ra.a["WebRtcVideo--zoomed"]]:L||!c&&!S},{[Ra.a["WebRtcVideo--fixedAspectRatio"]]:!c},{[Ra.a["WebRtcVideo--small"]]:N},{[Ra.a["WebRtcVideo--draggable"]]:E}),"data-clientid":h,onDoubleClick:D},r.a.createElement("div",{key:"content",className:Ra.a.content},u,k&&r.a.createElement(_a,{isAudioMuted:R,avatarUrl:a,displayName:b}),["connection_disconnected","connection_failed"].includes(g)&&r.a.createElement("div",{className:Ra.a.connectionInterrupted},r.a.createElement("p",null,r.a.createElement("strong",null,"Connection interrupted")),r.a.createElement("p",null,"Trying to reconnect...")),l,f,y&&r.a.createElement("div",{className:Ra.a.topControls},r.a.createElement("div",{className:Ra.a.recIcon})),r.a.createElement(La,{canSwitch:s,onSwitch:j,isLocalClient:I,isMuted:R,isMutedLocally:v,isScreenshare:O,name:b,onNameChange:M}),r.a.createElement(Da,{isOpen:H,content:K,onClickOutside:W,triggerButton:G,contentDestination:S?U.current:document.body,isSmallCell:N})))});Pa.propTypes={avatarUrl:n.a.string,canFullscreen:n.a.bool.isRequired,canKick:n.a.bool.isRequired,canSupersize:n.a.bool.isRequired,canSwitch:n.a.bool.isRequired,canZoom:n.a.bool.isRequired,chatNotification:n.a.element,children:n.a.node.isRequired,className:n.a.string,clientConnectionStatus:n.a.string,clientId:n.a.string.isRequired,clientStats:n.a.element,displayName:n.a.string,draggable:n.a.bool,isAudioMuted:n.a.bool.isRequired,isFullscreen:n.a.bool.isRequired,isLocalClient:n.a.bool.isRequired,isMutedLocally:n.a.bool.isRequired,isOverflow:n.a.bool.isRequired,isRecording:n.a.bool.isRequired,isScreenshare:n.a.bool.isRequired,isSelfieCam:n.a.bool.isRequired,isSmallCell:n.a.bool,isSupersized:n.a.bool.isRequired,isVideoLoaded:n.a.bool.isRequired,isVideoMuted:n.a.bool.isRequired,isVideoSwitching:n.a.bool.isRequired,isZoomed:n.a.bool.isRequired,onDoubleClick:n.a.func.isRequired,onKick:n.a.func.isRequired,onSetLocalDisplayName:n.a.func.isRequired,onSwitch:n.a.func.isRequired,onToggleFullscreen:n.a.func.isRequired,onToggleLocalMute:n.a.func.isRequired,onToggleSupersize:n.a.func.isRequired,onToggleZoomState:n.a.func.isRequired};var Ma=Pa,ja=a(82),Fa=a.n(ja),xa=a(70),qa=a.n(xa);function Ba({chatMessage:e,localClientId:t,isSmallCell:a,onClick:o,className:n=""}){return r.a.createElement("div",{key:e.localId,className:m()(qa.a.ChatNotification,n,{[qa.a.reaction]:e.isReaction,[qa.a.mine]:e.senderId===t,[qa.a.smallCell]:a,[qa.a.shortText]:!a&&!e.isReaction&&(i=e.text,i.length<=30),"jstest-isreaction":e.isReaction})},r.a.createElement("div",{className:m()("jstest-chat-preview",qa.a.content,{[qa.a.reactionContent]:e.isReaction}),onClick:o,role:e.isReaction?"img":"figure"},function(e,t=200){return e.length>t?e.substring(0,t)+"...":e}(e.text)));var i}Ba.propTypes={chatMessage:n.a.object.isRequired,className:n.a.string,isSmallCell:n.a.bool,localClientId:n.a.string.isRequired,onClick:n.a.func};var Ua=Ba;function za({chatMessage:e,localClientId:t,isSmallCell:a,onClick:o,className:n=""}){const[s,c]=Object(i.useState)([]),l=Date.now();let d;s.find(t=>t.localId===e.localId)||l-e.timestamp<6e3&&(d=e);const u=s.filter(e=>l-e.timestamp<6e3),p=[...u,...d?[d]:[]];return Object(i.useEffect)(()=>{let e;return u.length!==s.length||d?e=setTimeout(()=>c(p),0):p.length&&(e=setTimeout(()=>c(p),1e3)),()=>{clearTimeout(e)}}),p.map((e,i)=>r.a.createElement("div",{key:e.localId,className:m()(Fa.a.ChatNotificationInVideo,n,{[Fa.a.new]:e===d,[Fa.a.replaced]:i<p.length-1,[Fa.a.expired]:l-e.timestamp>4e3,[Fa.a.reaction]:e.isReaction})},r.a.createElement(Ua,{chatMessage:e,localClientId:t,isSmallCell:a,onClick:o,className:Fa.a.ChatNotification})))}za.propTypes={chatMessage:n.a.object.isRequired,className:n.a.string,isSmallCell:n.a.bool.isRequired,localClientId:n.a.string.isRequired,onClick:n.a.func.isRequired};var Ha=za,Va=a(31),Wa=a.n(Va);const Ga=["up","left"],Ka=["center","start","end"],$a=()=>{};function Ya({latestMessage:e,reactionAlignment:t,reactionDirection:a,localClientId:o,onClick:n}){return e.isReaction?r.a.createElement(Ua,{chatMessage:e,localClientId:o,onClick:n,key:e.text,className:Wa.a.emoji}):r.a.createElement("span",{className:m()(Wa.a.textWidthWrapper,Wa.a[`textWidthWrapper-${a}`],Wa.a[`textWidthWrapper-align-${t}`])},r.a.createElement(Ua,{chatMessage:e,localClientId:o,onClick:n,key:e.text,className:m()(Wa.a.text,Wa.a[`text-${a}`])}))}function Za({children:e,className:t,latestMessage:a,localClientId:o,onNotificationClick:n=$a,reactionDirection:s=Ga[0],reactionAlignment:c=Ka[0],style:l}){const d=Object(i.useMemo)(()=>(e=>{if(!e)return 0;const t=3e3-(Date.now()-e.timestamp);return t<0?0:t})(a),[a,s]),[u,p]=Object(i.useState)(()=>m()({[Wa.a.visible]:!!d}));return Object(i.useEffect)(()=>{let e;return a&&d&&(p(m()("jstest-rosteritem-reaction-new",Wa.a.new,Wa.a[`new-${s}`])),e=setTimeout(()=>{p(m()("jstest-rosteritem-reaction-expired",Wa.a.expired,Wa.a[`expired-${s}`]))},d)),()=>{p(""),clearTimeout(e)}},[d,a,s]),r.a.createElement("div",{className:m()(t,Wa.a.avatarReactionWrapper),style:l},r.a.createElement("div",{className:m()(Wa.a.avatarWrapper,u)},e),a&&r.a.createElement("div",{className:m()(Wa.a.reaction,u)},r.a.createElement(Ya,{latestMessage:a,reactionDirection:s,reactionAlignment:c,localClientId:o,onClick:n})))}Ya.propTypes={latestMessage:n.a.object,localClientId:n.a.string.isRequired,onClick:n.a.func.isRequired,reactionAlignment:n.a.oneOf(Ka).isRequired,reactionDirection:n.a.oneOf(Ga).isRequired},Za.propTypes={children:n.a.node,className:n.a.string,latestMessage:n.a.object,localClientId:n.a.string.isRequired,onNotificationClick:n.a.func.isRequired,reactionAlignment:n.a.oneOf(Ka),reactionDirection:n.a.oneOf(Ga),style:n.a.object};var Ja=Za,Qa=a(6),Xa=a.n(Qa);class eo extends i.PureComponent{constructor(...e){var t,a,o;super(...e),o=e=>{this._wrapper=e,this._attachAudioElement()},(a="refWrapper")in(t=this)?Object.defineProperty(t,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[a]=o}componentDidMount(){this._createAudioElement(),this.props.stream&&this._attachStream(this.props.stream)}componentDidUpdate(){const e=this.props.stream;this.props.volumeMute?this._audioElement.volume=this.props.muted?1e-4:1:this._audioElement.muted=Boolean(this.props.muted),void 0!==e&&e!==this._audioElement.srcObject&&this._attachStream(e)}componentWillUnmount(){delete this._audioElement}_createAudioElement(){const e=document.createElement("audio");e.class=this.props.className,this.props.volumeMute?e.volume=this.props.muted?1e-4:1:e.muted=Boolean(this.props.muted),e.setAttribute("autoplay","true"),this._audioElement=e,this._attachAudioElement()}_attachAudioElement(){this._wrapper&&this._audioElement&&this._wrapper.appendChild(this._audioElement)}_attachStream(e){Xa()(this._audioElement,"no audio element registered"),Xa()(void 0!==e,"stream is required"),this._audioElement.srcObject=e}setSinkId(e){this._audioElement.setSinkId&&this._audioElement.setSinkId(e)}render(){return r.a.createElement("div",{ref:this.refWrapper})}}eo.propTypes={className:n.a.string,muted:n.a.bool,stream:n.a.object,volumeMute:n.a.bool};var to=eo,ao=a(329),oo=a.n(ao);function no(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class io extends i.PureComponent{constructor(...e){super(...e),no(this,"_handleLoadedMetadata",()=>{this.props.onVideoLoaded&&this.props.onVideoLoaded()}),no(this,"_handleResize",()=>{this.props.onVideoResized&&this.props.onVideoResized()}),no(this,"refWrapper",e=>{this._wrapper=e,this._attachVideoElement()})}componentDidMount(){this._createVideoElement(),this.props.stream&&this._attachStream(this.props.stream)}componentDidUpdate(){const e=this.props.stream;void 0!==e&&e!==this._videoElement.srcObject&&this._attachStream(e)}componentWillUnmount(){this._videoElement.removeEventListener("loadedmetadata",this._handleLoadedMetadata),this._videoElement.removeEventListener("resize",this._handleResize),delete this._videoElement}_createVideoElement(){const e=document.createElement("video"),{className:t}=this.props;t&&(e.className=t);const a=navigator.userAgent.match(/Chrom(e|ium)\/(\d+)./);window.webkitRTCPeerConnection&&navigator.userAgent.match(/Android \d+./)&&a&&a[2]&&61===parseInt(a[2],10)&&e.classList.add("VideoElement-bugfixChromeAndroid"),e.addEventListener("loadedmetadata",this._handleLoadedMetadata),e.addEventListener("resize",this._handleResize),e.muted=!0,e.setAttribute("autoplay",!0),e.setAttribute("playsinline",!0),this._videoElement=e,this._attachVideoElement()}_attachVideoElement(){this._wrapper&&this._videoElement&&this._wrapper.appendChild(this._videoElement)}_attachStream(e){Xa()(this._videoElement,"no video element registered"),Xa()(void 0!==e,"stream is required"),this._videoElement.srcObject=e}refreshStream(){this._videoElement.srcObject=this._videoElement.srcObject}captureAspectRatio(){return this._videoElement?this._videoElement.videoWidth/this._videoElement.videoHeight:null}render(){return r.a.createElement("div",{className:oo.a.VideoElement,ref:this.refWrapper})}}io.propTypes={className:n.a.string,onVideoLoaded:n.a.func,onVideoResized:n.a.func,stream:n.a.object};var ro=io,so=a(43),co=a.n(so);function lo(){return(lo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}const uo=({audio:e,direction:t,video:a})=>r.a.createElement("div",{className:co.a.direction},r.a.createElement("header",null,t),e&&e.map(e=>r.a.createElement("div",{key:e.rtp.id},r.a.createElement("div",null,"Audio:"," ",e.codec&&r.a.createElement(r.a.Fragment,null,e.codec.clockRate/1e3,"kHz ",e.codec.mimeType.replace(/audio\//,"")," "),Math.round(e.diff.kbps)," kbps"),"inbound"===t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:co.a.inset},"jitterBufferDelay:",Math.round(100*e.diff.jittterBufferDelayPerSecond)/100,"/s"),r.a.createElement("div",{className:co.a.inset},"packetsLost:",Math.round(e.diff.packetsLostPerSecond),"/s")))),a&&a.map(e=>r.a.createElement("div",{key:e.rtp.id},r.a.createElement("div",null,"Video:"," ",e.track&&r.a.createElement(r.a.Fragment,null,e.track.frameWidth,"x",e.track.frameHeight,"@"),Math.round(e.diff.fps||e.diff.fpsEncoding),"fps ",e.codec&&r.a.createElement(r.a.Fragment,null,e.codec.mimeType.replace(/video\//,"")," "),Math.round(e.diff.kbps)," kbps"),r.a.createElement("div",{className:co.a.inset},"fir:",e.rtp.firCount," pli:",e.rtp.pliCount," nack:",e.rtp.nackCount," qpSum:",Math.round(e.diff.qpSumPerSecond),"/s"),"inbound"===t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:co.a.inset},"jitterBufferDelay:",Math.round(100*e.diff.jittterBufferDelayPerSecond)/100,"/s framesDropped:",Math.round(e.diff.framesDroppedPerSecond),"/s"),r.a.createElement("div",{className:co.a.inset},"packetsLost:",Math.round(e.diff.packetsLostPerSecond),"/s framesDecoded:",e.rtp.framesDecoded,"(",e.rtp.keyFramesDecoded,")")),"outbound"===t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:co.a.inset},"totalPacketSendDelay:",e.rtp.totalPacketSendDelay," qualityLimitationReason:",e.rtp.qualityLimitationReason),r.a.createElement("div",{className:co.a.inset},"retransmittedPacketsSent:",e.rtp.retransmittedPacketsSent," framesEncoded:",e.rtp.framesEncoded,"(",e.rtp.keyFramesEncoded,")",e.track&&r.a.createElement(r.a.Fragment,null," hugeFrames: ",e.track.hugeFramesSent))))));uo.propTypes={audio:n.a.array,direction:n.a.string,video:n.a.array};const mo=(e,t)=>t?t.map((t,a)=>r.a.createElement("div",{key:a,className:co.a.inset},e,": ",JSON.stringify(t))):null;function po({senders:e}){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,"Senders"),e.map((e,t)=>{const a=e.parameters;return a&&r.a.createElement("div",{key:t,className:co.a.senders},r.a.createElement("div",null,e.kind," - ",JSON.stringify(a.rtcp||{})),mo("codec",a.codecs),mo("hext",a.headerExtensions),mo("encoding",a.encodings))}))}function go({rtc:e}){const{inbound:t,outbound:a,senders:o}=e||{};return r.a.createElement("div",{className:co.a.ClientStats},t&&r.a.createElement(uo,lo({direction:"inbound"},t)),a&&r.a.createElement(uo,lo({direction:"outbound"},a)),a&&o&&r.a.createElement(po,{senders:o}))}po.propTypes={senders:n.a.array},go.propTypes={rtc:n.a.object};var ho=go,fo=a(62);function bo(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const Eo=()=>{};class Ro extends i.Component{constructor(e){super(e),bo(this,"handleFullscreenChangeEvent",e=>{const t="webkitfullscreenchange"===e.type?window.document.webkitFullscreenElement:window.document.fullscreenElement;this.setState({isFullscreen:Boolean(t)})}),bo(this,"handleVideoLoaded",()=>{this.setState({videoLoaded:!0,isSwitching:!1})}),bo(this,"handleVideoResized",()=>{const e=this._videoElement&&this._videoElement.captureAspectRatio();e!==this.props.aspectRatio&&this.props.onAspectRatioChange&&this.props.onAspectRatioChange(e)}),bo(this,"setAudioElement",e=>{this._audioElement=e}),bo(this,"setElement",e=>{this._element=e}),bo(this,"setVideoElement",e=>{this._videoElement=e}),bo(this,"handleSwitch",()=>{this.canSwitch()&&!this.state.isSwitching&&this.props.doSwitchNextCamera()}),bo(this,"toggleLocalMute",()=>{this.props.doSetRemoteClientLocalMute({clientId:this.props.client.id,isMutedLocally:!this.props.client.isMutedLocally})}),bo(this,"toggleFullscreen",()=>{if(this.state.isFullscreen){const e=window.document.exitFullscreen||window.document.webkitExitFullscreen;e&&e.call(window.document)}else{const e=this._element.requestFullscreen||this._element.webkitRequestFullscreen;e&&e.call(this._element)}}),bo(this,"toggleSupersize",()=>{this.isSupersized()?this.props.doUnsetSupersizedClient():this.props.doSetSupersizedClient({id:this.props.client.id})}),bo(this,"toggleZoomState",()=>{this.setState(e=>({isZoomed:!e.isZoomed}))}),bo(this,"kickClient",()=>{this.props.doKickClient(this.props.client.id)}),bo(this,"openSidebar",e=>{e.stopPropagation(),this.props.doOpenSidebar(fo.a)}),this.state={isFullscreen:!1,isSwitching:Boolean(e.isLocalStreamSwitching),isZoomed:!e.client.isPresentation&&Boolean(e.isZoomedByDefault),videoLoaded:!1},this._activeOutputId=""}componentDidMount(){window.addEventListener("fullscreenchange",this.handleFullscreenChangeEvent),window.addEventListener("webkitfullscreenchange",this.handleFullscreenChangeEvent)}componentDidUpdate(){const{localOutputId:e,isLocalStreamSwitching:t,client:a}=this.props;a.isLocalClient?(!this.state.isSwitching&&t&&this.setState({isSwitching:!0}),this.state.isSwitching&&!t&&this._videoElement.refreshStream()):e!==this._activeOutputId&&this._audioElement&&(this._audioElement.setSinkId(e),this._activeOutputId=e)}componentWillUnmount(){window.removeEventListener("fullscreenchange",this.handleFullscreenChangeEvent),window.removeEventListener("webkitfullscreenchange",this.handleFullscreenChangeEvent)}canSwitch(){const{client:e,localDevices:t=[]}=this.props;return Boolean(e.isLocalClient&&t.filter(e=>"videoinput"===e.kind).length>1)}canKick(){const e=this.props.client.isLocalClient,t=this.props.client.role&&"visitor"===this.props.client.role.roleName;return Boolean(!e&&t&&this.props.canKickVisitor)}isSupersized(){return Boolean(this.props.supersizedClientView&&this.props.supersizedClientView.id===this.props.client.id)}getChatNotification({recentChatMessage:e}){return!this.props.configNoChat&&e&&(!this.props.isChatOpen||e.isReaction)?this.props.isOverflow?r.a.createElement(Ja,{latestMessage:e,localClientId:this.props.localClientId,onNotificationClick:this.openSidebar,reactionDirection:this.props.overflowReactionDirection,reactionAlignment:this.props.overflowReactionAlignment,title:this.props.client.displayName}):r.a.createElement(Ha,{chatMessage:e,localClientId:this.props.localClientId,isSmallCell:this.props.isSmallCell,onClick:this.openSidebar}):null}render(){const{client:e,isPhoneResolution:t,isSupersizedButtonDisabled:a,isOverflow:o,recentChatMessagesByClientId:n,stats:i,statsIsRunning:s}=this.props,c=!e.isVideoEnabled,l=Boolean(e.isLocalClient),d=n[e.id],u=s&&i&&i[e.id],m=t||a?Eo:this.toggleSupersize,p=this.getChatNotification({recentChatMessage:d}),g=this.state.isFullscreen,h=g&&e.isPresentation,f=this.state.isZoomed&&!h,b=this.props.canZoom||!h&&g&&!c;return r.a.createElement(Ma,{avatarUrl:e.avatarUrl,canFullscreen:this.props.canFullscreen,canSupersize:!a,canKick:this.canKick(),canSwitch:this.canSwitch(),canZoom:b,chatNotification:p,className:this.props.className,clientConnectionStatus:e.connectionStatus,clientId:e.id,clientStats:u?r.a.createElement(ho,u):void 0,displayName:e.displayName,draggable:this.props.draggable,isAudioMuted:!e.isAudioEnabled,isFullscreen:g,isLocalClient:l,isMutedLocally:Boolean(e.isMutedLocally),isOverflow:o,isPresentation:Boolean(e.isPresentation),isRecording:Boolean(e.isRecording),isScreenshare:Boolean(e.isPresentation),isSelfieCam:Boolean(e.isSelfieCam),isSmallCell:this.props.isSmallCell,isSupersized:this.isSupersized(),isVideoLoaded:this.state.videoLoaded,isVideoMuted:c,isVideoSwitching:this.state.isSwitching,isZoomed:f,onDoubleClick:m,onKick:this.kickClient,onSetLocalDisplayName:this.props.doSetLocalDisplayName,onSwitch:this.handleSwitch,onToggleFullscreen:this.toggleFullscreen,onToggleLocalMute:this.toggleLocalMute,onToggleSupersize:this.toggleSupersize,onToggleZoomState:this.toggleZoomState,ref:this.setElement},!e.isPresentation&&r.a.createElement(to,{ref:this.setAudioElement,muted:l||e.isMutedLocally,stream:e.audioOnlyStream||e.stream,volumeMute:this.props.featureVolumeMuteOn}),r.a.createElement(ro,{ref:this.setVideoElement,stream:e.stream,onVideoLoaded:this.handleVideoLoaded,onVideoResized:this.handleVideoResized}))}}Ro.propTypes={aspectRatio:n.a.number,canFullscreen:n.a.bool.isRequired,canKickVisitor:n.a.bool,canZoom:n.a.bool.isRequired,className:n.a.string,client:n.a.object.isRequired,configNoChat:n.a.bool,doKickClient:n.a.func.isRequired,doOpenSidebar:n.a.func.isRequired,doSetLocalDisplayName:n.a.func.isRequired,doSetRemoteClientLocalMute:n.a.func.isRequired,doSetSupersizedClient:n.a.func.isRequired,doSwitchNextCamera:n.a.func.isRequired,doUnsetSupersizedClient:n.a.func.isRequired,draggable:n.a.bool,featureVolumeMuteOn:n.a.bool,isChatOpen:n.a.bool.isRequired,isLocalStreamSwitching:n.a.bool,isOverflow:n.a.bool,isPhoneResolution:n.a.bool.isRequired,isSmallCell:n.a.bool,isSupersizedButtonDisabled:n.a.bool,isZoomedByDefault:n.a.bool,localClientId:n.a.string,localDevices:n.a.array,localOutputId:n.a.string,onAspectRatioChange:n.a.func,overflowReactionAlignment:n.a.oneOf(Ka),overflowReactionDirection:n.a.oneOf(Ga),recentChatMessagesByClientId:n.a.object.isRequired,stats:n.a.object,statsIsRunning:n.a.bool,supersizedClientView:n.a.object};var So=Object(s.b)("doKickClient","doOpenSidebar","doSetLocalDisplayName","doSetRemoteClientLocalMute","doSetSupersizedClient","doSwitchNextCamera","doUnsetSupersizedClient","selectCanFullscreen","selectCanKickVisitor","selectConfigNoChat","selectFeatureVolumeMuteOn","selectIsChatOpen","selectIsLocalStreamSwitching","selectIsPhoneResolution","selectLocalClientId","selectLocalDevices","selectLocalOutputId","selectRecentChatMessagesByClientId","selectStats","selectStatsIsRunning","selectSupersizedClientView",Ro);function Io(){return(Io=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function vo({className:e,client:t,isSupersizedButtonDisabled:a=!1,onAspectRatioChange:o,clientViewState:n,isOverflow:i=!1}){const s=t.isLocalClient?"local-client":t.id;return r.a.createElement(So,{className:e,client:t,isSupersizedButtonDisabled:a,key:s,aspectRatio:n&&n[s]||4/3,onAspectRatioChange:e=>{o({id:s,aspectRatio:e})},isOverflow:i,draggable:!0})}function Co({runningRoomIntegrations:e=[]}){return e.map(({state:{tagName:e,props:t},roomIntegrationId:a})=>r.a.createElement(e,{key:a,...t}))}const yo=(e,t)=>{switch(t.type){case"set_aspect_ratio":{const a={...e};return a[t.id]=t.aspectRatio,a}}return e};function Oo({clientViewsInGrid:e,clientViewsInSubgrid:t,doReorderClients:a,enabledRoomIntegrations:o,featureJsGridMobileLayoutOff:n,featureRoundedCornersOff:i,isPhoneResolution:s,isRoomIntegrationRunning:c,isTownhallMode:l,layout:d,roomName:u,runningRoomIntegrations:m,shouldShowRoomInvitation:p,supersizedClientView:g}){const[h,f]=r.a.useReducer(yo,{}),b=({id:e,aspectRatio:t})=>{f({type:"set_aspect_ratio",id:e,aspectRatio:t})},E=c;let R=null;c?R=r.a.createElement(Co,Io({runningRoomIntegrations:m},"video"===m[0].type&&{aspectRatio:16/9,client:{id:"room-integration"}},{draggable:!1})):g&&(R=vo({client:g,isSupersizedButtonDisabled:E,onAspectRatioChange:b,clientViewState:h}));const S=t.map(e=>vo({client:e,isSupersizedButtonDisabled:E,onAspectRatioChange:b,clientViewState:h,isOverflow:!0}));return r.a.createElement("div",{className:Ct.a.VideoStage},o.map(({bootstrap:e,tagName:t})=>r.a.createElement(t,{key:t,featuresource:e&&e.featureSource,config:e&&e.config,isopen:e&&""===e.config})),l&&!c&&0===e.length&&!g&&0===t.length&&r.a.createElement("div",{className:Ct.a.emptyRoom},r.a.createElement("p",null,r.a.createElement("strong",null,"All participants have their microphones off"),r.a.createElement("br",null),"Turn on your mic to say something.")),(e.length>0||t.length>0||g)&&r.a.createElement(ba,{supersizedContent:R,layout:d,isConstrained:!n&&s,featureRoundedCornersOff:i,overflowContent:S,doReorderClients:a},e.map(e=>vo({client:e,isSupersizedButtonDisabled:E,onAspectRatioChange:b,clientViewState:h})),p&&(e.length>0||g)&&r.a.createElement(kt,{aspectRatio:4/3,client:{id:"empty-room-invitation"},draggable:!1,roomName:u})))}Oo.propTypes={clientViewsInGrid:n.a.array.isRequired,clientViewsInSubgrid:n.a.array.isRequired,doReorderClients:n.a.func,enabledRoomIntegrations:n.a.arrayOf(rt).isRequired,featureJsGridMobileLayoutOff:n.a.bool,featureRoundedCornersOff:n.a.bool,isPhoneResolution:n.a.bool.isRequired,isRoomIntegrationRunning:n.a.bool.isRequired,isTownhallMode:n.a.bool,layout:_e.c,roomName:n.a.string.isRequired,runningRoomIntegrations:n.a.arrayOf(st).isRequired,shouldShowRoomInvitation:n.a.bool.isRequired,supersizedClientView:n.a.object};var wo=Object(s.b)("doReorderClients","selectClientViewsInGrid","selectClientViewsInSubgrid","selectEnabledRoomIntegrations","selectFeatureJsGridMobileLayoutOff","selectFeatureRoundedCornersOff","selectIsPhoneResolution","selectIsRoomIntegrationRunning","selectIsTownhallMode","selectRoomName","selectRunningRoomIntegrations","selectShouldShowRoomInvitation","selectSupersizedClientView",Oo),No=a(63),To=a.n(No);const Ao=({canSetLargerRoomMode:e,canUpgradeRoom:t,doDismissRoomFullWarning:a,doSetRoomMode:o})=>r.a.createElement(d.e,{modifiers:["warning"],className:To.a.roomFullWarning},r.a.createElement(d.l,{modifiers:["small"],className:To.a.dismissButton,onClick:a}),r.a.createElement("header",null,"Someone is trying to join"),e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"The room is full. To allow additional guests, please upgrade the room size:"),r.a.createElement(d.d,{onClick:()=>o("group"),modifiers:["extraSmall","full"]},"Upgrade room size")),!e&&t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"The room is full. Larger rooms are available in the"," ",r.a.createElement(d.a,{className:To.a.link,href:"/user/order/details?utm_source=whereby&utm_campaign=room_full_upsell&utm_medium=web",target:"_blank"},"paid plans")),r.a.createElement(d.a,{href:"/user/order/details?utm_source=whereby&utm_campaign=room_full_upsell&utm_medium=web",target:"_blank",modifiers:["button","button-extraSmall","button-full"]},"Upgrade")));Ao.propTypes={canSetLargerRoomMode:n.a.bool.isRequired,canUpgradeRoom:n.a.bool.isRequired,doDismissRoomFullWarning:n.a.func.isRequired,doSetRoomMode:n.a.func.isRequired};var ko=Object(s.b)("doDismissRoomFullWarning","doSetRoomMode","selectCanSetLargerRoomMode","selectCanUpgradeRoom",Ao);var _o=a(122),Lo=a.n(_o),Do=a(44),Po=a.n(Do);const Mo=["sized","dark"],jo=r.a.createElement(d.g,{modifiers:Mo,className:Po.a.statusIcon}),Fo=r.a.createElement(d.f,{modifiers:Mo,className:Po.a.statusIcon}),xo=r.a.createElement(d.y,{modifiers:Mo,className:Po.a.statusIcon}),qo=r.a.createElement(d.x,{modifiers:Mo,className:Po.a.statusIcon});function Bo({avatarUrl:e,className:t,isAudioEnabled:a,isCurrentUser:o,isVideoEnabled:n,userName:i}){return r.a.createElement("article",{className:m()(t,Po.a.RosterListItem)},r.a.createElement("div",{className:Po.a.avatarWrapper},r.a.createElement(d.b,{modifiers:["square"],className:Po.a.avatar,avatarUrl:e,name:i,size:40})),r.a.createElement("div",{className:Po.a.userNameWrapper},r.a.createElement("span",{className:m()(Po.a.userName,{[Po.a["userName--current"]]:o})},i||"Guest"),o&&r.a.createElement("span",{className:Po.a.currentUserBadge},"(you)")),n?jo:Fo,a?xo:qo)}Bo.propTypes={avatarUrl:n.a.string,className:n.a.string,isAudioEnabled:n.a.bool.isRequired,isCurrentUser:n.a.bool,isVideoEnabled:n.a.bool.isRequired,userName:n.a.string};var Uo=Bo;function zo({className:e,localClient:t,remoteClients:a}){return r.a.createElement("article",{className:m()(Lo.a.RosterList,e)},r.a.createElement("section",{className:Lo.a.itemsWrapper},r.a.createElement(Uo,{avatarUrl:t.avatarUrl,className:Lo.a.rosterListItem,isAudioEnabled:t.isAudioEnabled,isCurrentUser:!0,isVideoEnabled:t.isVideoEnabled,key:t.id,userName:t.displayName}),(o=a,Xa.a.ok(Array.isArray(o),"clients<Array> is required"),o.slice().sort((e,t)=>e.displayName===t.displayName?0:e.displayName?t.displayName?e.displayName<t.displayName?-1:1:-1:1)).map(e=>r.a.createElement(Uo,{avatarUrl:e.avatarUrl,className:Lo.a.rosterListItem,isAudioEnabled:e.isAudioEnabled,isCurrentUser:!1,isVideoEnabled:e.isVideoEnabled,key:e.id,userName:e.displayName}))));var o}zo.propTypes={className:n.a.string,localClient:it.isRequired,remoteClients:n.a.arrayOf(it).isRequired};var Ho=r.a.memo(zo),Vo=a(330),Wo=a.n(Vo),Go=a(26),Ko=a.n(Go),$o=a(224),Yo=a.n($o);function Zo(e){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:m()(Yo.a.Chevron,{[Yo.a[`Chevron--${e.direction}`]]:!0})},r.a.createElement("polyline",{points:"6 9 12 15 18 9"}))}Zo.propTypes={direction:n.a.string};var Jo=Zo;function Qo({imageUrl:e,onAcceptButtonClick:t,onRejectButtonClick:a,onHoldButtonClick:o,knockerIsOnHold:n=!1}){const[s,c]=Object(i.useState)(!1);function l(){c(!s)}return r.a.createElement("div",{className:m()("jstest-incoming-knocker-page",Ko.a.IncomingKnocker)},r.a.createElement("div",{className:m()(Ko.a.knockerImageWrapper,{[Ko.a.knockerNoImage]:!e})},e&&r.a.createElement("img",{className:Ko.a.knockerImage,src:e}),!e&&r.a.createElement("div",{className:Ko.a.knockerNoImageIconWrapper},r.a.createElement(d.f,{modifiers:["light"]})),n&&r.a.createElement("div",{className:Ko.a.holdIcon},r.a.createElement(d.p,{modifiers:["sized","light"]})),r.a.createElement("div",{className:Ko.a.buttonGroup},r.a.createElement(d.d,{className:m()("jstest-knocker-accept-button",Ko.a.buttonGroupButton),onClick:t,modifiers:["small","secondary"]},r.a.createElement("span",null,"Let in")),r.a.createElement(d.d,{className:m()("jstest-knocker-options-button",Ko.a.respondButton,Ko.a.buttonGroupButton),modifiers:["small"],onClick:l},r.a.createElement("div",{className:Ko.a.respondLabelWrapper},r.a.createElement("span",null,"Respond"),r.a.createElement(Jo,{direction:s?"up":"down"}))))),s&&r.a.createElement("ul",{className:Ko.a.respondOptions},r.a.createElement("li",{className:m()(Ko.a.respondOptionsItem,"jstest-knocker-hold-button"),onClick:function(){l(),o()}},r.a.createElement(d.p,{modifiers:["sized","secondary"],className:Ko.a.respondOptionsIcon}),n?"Re-acknowledge hold":"Put on hold"),r.a.createElement("li",{className:m()(Ko.a.respondOptionsItem,Ko.a.isDestructive,"jstest-knocker-reject-button"),onClick:a},r.a.createElement(d.m,{modifiers:["sized","negative"],className:Ko.a.respondOptionsIcon}),"Reject")))}Qo.propTypes={imageUrl:n.a.string,knockerIsOnHold:n.a.bool,onAcceptButtonClick:n.a.func.isRequired,onHoldButtonClick:n.a.func.isRequired,onRejectButtonClick:n.a.func.isRequired};var Xo=Qo;function en({knockers:e,onAcceptKnocker:t,onHoldKnocker:a,onRejectKnocker:o}){const n=e=>()=>a({clientId:e}),i=e=>()=>o({clientId:e}),s=e.map(e=>{return r.a.createElement(Xo,{key:e.clientId,imageUrl:e.imageUrl,knockerIsOnHold:e.held||!1,onAcceptButtonClick:(a=e.clientId,()=>t({clientId:a})),onHoldButtonClick:n(e.clientId),onRejectButtonClick:i(e.clientId)});var a});return r.a.createElement("div",{className:Wo.a.Knockers},s)}en.propTypes={knockers:n.a.array.isRequired,onAcceptKnocker:n.a.func.isRequired,onHoldKnocker:n.a.func.isRequired,onRejectKnocker:n.a.func.isRequired};var tn=en;function an({label:e,children:t}){return r.a.createElement("div",{className:To.a.GroupWrapper},r.a.createElement("p",{className:To.a.GroupWrapperLabel},e),t)}function on({children:e,...t}){return r.a.createElement(an,t,r.a.createElement("div",{className:To.a.BoxedGroupWrapperContent},e))}function nn({doKnockerAccept:e,doKnockerHold:t,doKnockerReject:a,knockers:o,localClient:n,remoteClients:i,shouldShowRoomFullWarning:s}){const c=o.length?`Waiting to enter (${o.length})`:"Waiting to enter",l=`In the room (${i.length+1})`;return r.a.createElement("div",{className:To.a.People},(Boolean(o.length)||s)&&r.a.createElement(an,{label:c},s&&r.a.createElement(ko,null),r.a.createElement(tn,{knockers:o,onAcceptKnocker:e,onHoldKnocker:t,onRejectKnocker:a})),r.a.createElement(on,{label:l},r.a.createElement(Ho,{localClient:n,remoteClients:i})))}nn.propTypes={doKnockerAccept:n.a.func.isRequired,doKnockerHold:n.a.func.isRequired,doKnockerReject:n.a.func.isRequired,knockers:n.a.array.isRequired,localClient:it.isRequired,remoteClients:n.a.arrayOf(it).isRequired,shouldShowRoomFullWarning:n.a.bool.isRequired};var rn=Object(s.b)("doKnockerAccept","doKnockerHold","doKnockerReject","selectApplicationState","selectIsTownhallMode","selectIsTownhallPresenterLimitReached","selectKnockers","selectLocalClient","selectRemoteClients","selectShouldShowRoomFullWarning",nn),sn=a(123),cn=a.n(sn),ln=a(100),dn=a.n(ln),un=a(331),mn=a.n(un),pn=a(124),gn=a.n(pn);function hn({isActive:e,isDisabled:t,onToggle:a,className:o}){return r.a.createElement("button",{className:m()(o,gn.a.ToggleSwitch,{[gn.a["ToggleSwitch--active"]]:e,[gn.a["ToggleSwitch--disabled"]]:t}),onClick:a},r.a.createElement("div",{className:gn.a.ball}))}hn.propTypes={className:n.a.string,isActive:n.a.bool,isDisabled:n.a.bool,onToggle:n.a.func.isRequired};var fn=hn,bn=a(101),En=a.n(bn);const Rn=({children:e,icon:t,right:a,isLabel:o=!0,className:n,onClick:i})=>{const s=r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("div",{className:En.a.settingsSectionIcon},t),r.a.createElement("div",{className:En.a.settingsSectionBody},e),a&&r.a.createElement("div",{className:En.a.settingsSectionRight},a));return o?r.a.createElement("label",{className:m()(En.a.settingsSection,n)},s):r.a.createElement("div",{className:m()(En.a.settingsSection,n),onClick:i},s)};Rn.propTypes={children:n.a.node,className:n.a.string,icon:n.a.node,isLabel:n.a.bool,onClick:n.a.func,right:n.a.node};var Sn=Rn,In=a(332),vn=a.n(In);function Cn({className:e,href:t="https://whereby.helpscoutdocs.com/article/314-quickstart-guide"}){return r.a.createElement(d.a,{className:m()(vn.a.helpLink,e),href:t,rel:"noopener noreferrer",target:"_blank"},"Need help?")}Cn.propTypes={className:n.a.string,href:n.a.string};const yn=({doToggleNotifications:e,isNotificationsBlocked:t,isNotificationsEnabled:a})=>{let o="Enable desktop notifications to know when guests enter or knock";return a?o="Desktop notifications let you know when guests enter or knock":t&&(o=r.a.createElement(r.a.Fragment,null,"You\u2019ve opted out of desktop notifications.",r.a.createElement(Cn,{className:mn.a.helpLink,href:"https://whereby.helpscoutdocs.com/article/316-notifications"}))),r.a.createElement(Sn,{right:r.a.createElement(fn,{className:"jstest-toggle-room-locked",onToggle:e,isActive:a,isDisabled:t})},r.a.createElement("header",null,"Notifications"),o)};yn.propTypes={doToggleNotifications:n.a.func.isRequired,isNotificationsBlocked:n.a.bool.isRequired,isNotificationsEnabled:n.a.bool.isRequired};var On=yn;const wn=({canToggleNotifications:e,configNoPrecallReview:t,doSetPrecallReviewWanted:a,doToggleNotifications:o,isNotificationsBlocked:n,isNotificationsEnabled:i,isPrecallReviewWanted:s})=>r.a.createElement("div",{className:dn.a.roomInviteSection},r.a.createElement("h3",{className:dn.a.title},"Advanced device settings"),r.a.createElement("p",{className:dn.a.helpText},"Preferences will be saved on this device only for meetings on ",r.a.createElement("strong",null,p.a.organizationDomain)),e&&r.a.createElement("div",{className:dn.a.deviceSettingsWrapper},r.a.createElement(On,{doToggleNotifications:o,isNotificationsBlocked:n,isNotificationsEnabled:i})),!t&&r.a.createElement("div",{className:dn.a.deviceSettingsWrapper},r.a.createElement(Sn,{icon:null,right:r.a.createElement(fn,{className:"jstest-toggle-room-locked",onToggle:()=>a(!s),isActive:s})},r.a.createElement("header",null,"Pre-call review"),"Always confirm your device settings before joining meetings")));wn.propTypes={canToggleNotifications:n.a.bool,configNoPrecallReview:n.a.bool,doSetPrecallReviewWanted:n.a.func.isRequired,doToggleNotifications:n.a.func.isRequired,isNotificationsBlocked:n.a.bool,isNotificationsEnabled:n.a.bool,isPrecallReviewWanted:n.a.bool};var Nn=Object(s.b)("doSetPrecallReviewWanted","doToggleNotifications","selectCanToggleNotifications","selectConfigNoPrecallReview","selectIsNotificationsBlocked","selectIsNotificationsEnabled","selectIsPrecallReviewWanted",wn),Tn=a(71),An=a.n(Tn),kn=a(17),_n=a(27),Ln=a.n(_n);function Dn({bgModifier:e,caption:t,captionDark:a,captionTop:o,className:n}){return r.a.createElement("div",{className:m()(Ln.a.noVideoContainer,Ln.a.fixedAspectRatioContainer,n)},r.a.createElement("div",{className:m()(Ln.a.videoPlaceholder,Ln.a.fixedAspectRatioVideo,{[Ln.a[`videoPlaceholder--${e}`]]:!0})},r.a.createElement("div",{className:Ln.a.cameraNotEnabled},r.a.createElement(d.f,{modifiers:["light"],className:Ln.a.camOffIcon}),r.a.createElement("div",{className:m()([Ln.a.captionOverlay,{[Ln.a["captionOverlay--top"]]:o,[Ln.a["captionOverlay--dark"]]:a}])},t))))}function Pn({audioId:e,className:t,isBlocked:a,mediaPermissionStatus:o,localStream:n,videoId:s,caption:c,captionDark:l,captionTop:d,withRoundedCorners:u}){const p=Object(i.useRef)(null);return Object(i.useEffect)(()=>{p&&p.current&&p.current.refreshStream()},[p,s,e]),a?r.a.createElement(Dn,{bgModifier:"error",caption:"Cam and mic are blocked",captionTop:!0,captionDark:!0}):a||"prompt"!==o?r.a.createElement("div",{className:m()(Ln.a.videoContainer,Ln.a.fixedAspectRatioContainer,t,{[Ln.a.withRoundedCorners]:u})},r.a.createElement(ro,{key:s,ref:p,stream:n,className:Ln.a.fixedAspectRatioVideo}),c&&r.a.createElement("div",{className:m()(Ln.a.captionOverlay,{[Ln.a["captionOverlay--top"]]:d,[Ln.a["captionOverlay--dark"]]:l})},c)):r.a.createElement(Dn,{bgModifier:"light",caption:"Cam and mic are not active",captionTop:!0,captionDark:!0})}Dn.propTypes={bgModifier:n.a.string,caption:n.a.oneOfType([n.a.string,n.a.node]),captionDark:n.a.bool,captionTop:n.a.bool,className:n.a.string},Pn.propTypes={audioId:n.a.string.isRequired,caption:n.a.node,captionDark:n.a.bool,captionTop:n.a.bool,className:n.a.string,isBlocked:n.a.bool.isRequired,localStream:n.a.object,mediaPermissionStatus:n.a.string.isRequired,videoId:n.a.string.isRequired,withRoundedCorners:n.a.bool};var Mn=Pn,jn=a(336),Fn=a.n(jn),xn=a(41),qn=a.n(xn);function Bn(){return r.a.createElement("div",{className:qn.a.SelectOverlay},r.a.createElement(d.g,{modifiers:["sized","dark"],className:qn.a.icon}))}function Un({modifiers:e=[],onChangeCamera:t,videoInputDevices:a,videoId:o}){const n=Object(i.useMemo)(()=>a.map(({videoId:e,label:t})=>({key:t,value:e})),[a]);return r.a.createElement(d.D,{className:Fn.a.CameraSelector,selectClassName:qn.a.selectWithOverlay,items:n,modifiers:e.concat(["small"]),onChange:t,value:o,overlay:r.a.createElement(Bn,null)})}Un.propTypes={modifiers:n.a.arrayOf(n.a.string),onChangeCamera:n.a.func,videoId:n.a.string.isRequired,videoInputDevices:n.a.arrayOf(dt).isRequired};var zn=Un,Hn=a(337),Vn=a.n(Hn);function Wn(){return r.a.createElement("div",{className:qn.a.SelectOverlay},r.a.createElement(d.y,{modifiers:["sized","dark"],className:qn.a.icon}))}const Gn=({audioId:e,audioInputDevices:t,modifiers:a=[],onChangeMic:o})=>{const n=Object(i.useMemo)(()=>t.map(({audioId:e,label:t})=>({key:t,value:e})),[t]);return r.a.createElement(d.D,{className:Vn.a.MicSelector,selectClassName:qn.a.selectWithOverlay,items:n,modifiers:a.concat(["small"]),onChange:o,value:e,overlay:r.a.createElement(Wn,null)})};Gn.propTypes={audioId:n.a.string.isRequired,audioInputDevices:n.a.arrayOf(ct).isRequired,modifiers:n.a.arrayOf(n.a.string),onChangeMic:n.a.func.isRequired};var Kn=Gn,$n=a(225),Yn=a.n($n);function Zn(){return r.a.createElement("div",{className:m()(qn.a.SelectOverlay,Yn.a.SelectOverlay)},r.a.createElement(d.I,{modifiers:["sized","dark"],className:qn.a.icon}))}function Jn({audioOutputDevices:e,modifiers:t=[],onChangeSpeaker:a,outputId:o}){const n=Object(i.useMemo)(()=>e.map(({outputId:e,label:t})=>({key:t,value:e})),[e]);return r.a.createElement(d.D,{className:Yn.a.SpeakerSelector,selectClassName:qn.a.selectWithOverlay,items:n,modifiers:t.concat(["small"]),onChange:a,value:o,overlay:r.a.createElement(Zn,null)})}Jn.propTypes={audioOutputDevices:n.a.arrayOf(lt).isRequired,modifiers:n.a.arrayOf(n.a.string),onChangeSpeaker:n.a.func,outputId:n.a.string.isRequired};var Qn=Jn;function Xn(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class ei extends i.Component{constructor(...e){super(...e),Xn(this,"state",{currentVideoId:void 0,currentAudioId:void 0,selectedAudioId:void 0,selectedOutputId:void 0,selectedVideoId:void 0,videoStream:void 0,previewStreamError:void 0}),Xn(this,"changeDevices",()=>{const{currentAudioId:e,currentVideoId:t,selectedVideoId:a,selectedAudioId:o,selectedOutputId:n,videoStream:i}=this.state;n&&this.props.doSetAudioOutput(n),o===e&&a===t||(i&&i.getTracks().forEach(e=>e.stop()),this.props.doSwitchLocalStream({videoId:a,audioId:o}),this.setPreviewStream(a))}),Xn(this,"handleSelectCamera",e=>{this.setState({selectedVideoId:e}),this.setPreviewStream(e)}),Xn(this,"handleSelectAudio",e=>{this.setState({selectedAudioId:e})}),Xn(this,"handleSelectOutput",e=>{this.setState({selectedOutputId:e})})}static getDerivedStateFromProps(e,t){return e.audioId!==t.currentAudioId||e.videoId!==t.currentVideoId?{currentAudioId:e.audioId,currentVideoId:e.videoId,selectedVideoId:e.videoId,selectedAudioId:e.audioId,selectedOutputId:e.localOutputId}:null}componentDidMount(){const{selectedVideoId:e}=this.state;this.setPreviewStream(e)}componentWillUnmount(){const{videoStream:e}=this.state;e&&e.getTracks().forEach(e=>e.stop())}isOutputEnabled(){return Boolean(HTMLVideoElement.prototype.setSinkId)}setPreviewStream(e){if(this.props.isPreviewEnabled)return kn.g(kn.c({devices:this.props.localDevices,videoId:e,noAudio:!0,type:"exact"})).then(e=>{const{videoStream:t}=this.state;t&&t.getTracks().forEach(e=>e.stop()),this.setState({videoStream:e,previewStreamError:null})}).catch(t=>{if(["AbortError","NotReadableError"].includes(t.name))return this.props.doSetLocalStreamDeviceBusy(e),this.setState({previewStreamError:t});throw t})}render(){const{audioId:e,audioInputDevices:t,audioOutputDevices:a,isPreviewEnabled:o,localDevices:n,localOutputId:i,localStreamError:s,mediaPermissionStatus:c,onAdvancedSettingsClicked:l,videoId:u,videoInputDevices:p}=this.props;if(!n.length)return null;const{videoStream:g,selectedVideoId:h,selectedAudioId:f,selectedOutputId:b}=this.state,E=h!==u||f!==e||b!==i,R=!!s||!!this.state.previewStreamError;return r.a.createElement("div",{className:An.a.MediaSettings},r.a.createElement("div",{className:An.a.content},o&&r.a.createElement(Mn,{audioId:e,className:m()("jstest-camerapreview",An.a.cameraPreview),isBlocked:R,mediaPermissionStatus:c,localStream:g,videoId:u,withRoundedCorners:!this.props.featureRoundedCornersOff}),r.a.createElement("div",{className:An.a.inputSelectorsWrapper},h&&r.a.createElement(zn,{onChangeCamera:this.handleSelectCamera,videoInputDevices:p,videoId:h}),f&&h&&r.a.createElement(Kn,{onChangeMic:this.handleSelectAudio,stream:g,audioId:f,videoId:h,audioInputDevices:t}),this.isOutputEnabled()&&b&&r.a.createElement(Qn,{audioOutputDevices:a,outputId:b,onChangeSpeaker:this.handleSelectOutput})),r.a.createElement("div",{className:An.a.buttons},r.a.createElement(d.d,{className:"jstest-apply-device-selection",onClick:this.changeDevices,disabled:!E||!!this.state.previewStreamError,modifiers:["full","small"]},"Apply"),r.a.createElement(d.d,{className:An.a.advancedButton,onClick:l,modifiers:["full","outlined","small"]},r.a.createElement(r.a.Fragment,null,"Advanced",r.a.createElement("span",{className:An.a.advancedButtonChevron},r.a.createElement(Jo,{direction:"right"})))))))}}ei.propTypes={audioId:n.a.string.isRequired,audioInputDevices:n.a.arrayOf(ct).isRequired,audioOutputDevices:n.a.arrayOf(lt).isRequired,doSetAudioOutput:n.a.func.isRequired,doSetLocalStreamDeviceBusy:n.a.func.isRequired,doSwitchLocalStream:n.a.func.isRequired,featureRoundedCornersOff:n.a.bool,isPreviewEnabled:n.a.bool.isRequired,localDevices:n.a.array.isRequired,localOutputId:n.a.string.isRequired,localStreamError:n.a.object,mediaPermissionStatus:n.a.string.isRequired,onAdvancedSettingsClicked:n.a.func.isRequired,videoId:n.a.string,videoInputDevices:n.a.arrayOf(dt).isRequired};var ti=Object(s.b)("doSetAudioOutput","doSetLocalStreamDeviceBusy","doSwitchLocalStream","selectAudioId","selectAudioInputDevices","selectAudioOutputDevices","selectFeatureRoundedCornersOff","selectIsPreviewEnabled","selectLocalDevices","selectLocalOutputId","selectLocalStream","selectLocalStreamError","selectMediaPermissionStatus","selectVideoId","selectVideoInputDevices",ei),ai=a(65),oi=a.n(ai);const ni=({roomMembers:e,doFetchRoomMembers:t,doInviteRoomMember:a,doRemoveRoomMember:o})=>{const[n,s]=Object(i.useState)(null),[c,l]=Object(i.useState)(!1),[u,m]=Object(i.useState)(null);Object(i.useEffect)(()=>{t()},[t]);return r.a.createElement(r.a.Fragment,null,e&&e.map(e=>r.a.createElement("div",{className:oi.a.memberRow,key:e.userId},r.a.createElement(d.b,{className:oi.a.avatar,avatarUrl:e.user.avatarUrl,name:e.user.displayName}),r.a.createElement("span",{className:oi.a.displayname},e.user.displayName),r.a.createElement(d.d,{disabled:"owner"===e.roleName,onClick:()=>s(e.user),modifiers:["extraSmall","primary","outlined"]},"Remove..."))),r.a.createElement("form",{className:oi.a.spacingDouble,onSubmit:async e=>{if(u)return;e.preventDefault();const t=e.target.email,o=t.value.trim().toLowerCase();if(o.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){l(!0);try{await a(o),t.value="",m(`Invitation sent to ${o}`)}catch(n){m("Failed to send invitation")}l(!1)}else m("Please provide a valid email address")}},r.a.createElement(d.J,{autoFocus:!0,name:"email",disabled:c,maxLength:100,modifiers:["small"],label:"Invite by email"}),r.a.createElement(d.d,{className:oi.a.spacingDouble,disabled:c,type:"submit",modifiers:["primary","extraSmall","full"]},"Send invitation")),n&&r.a.createElement(d.n,null,r.a.createElement(d.n.Body,null,r.a.createElement("div",null,"Are you sure you want to remove ",n.displayName," as member?"),r.a.createElement("div",{className:oi.a.spacingDouble},r.a.createElement(d.d,{disabled:c,className:oi.a.spacingRight,onClick:async()=>{l(!0);try{await o(n.userId),s(null)}catch(e){m("Failed to remove member")}l(!1)},modifiers:["negative","extraSmall"]},"Yes, remove"),r.a.createElement(d.d,{modifiers:["extraSmall","grey"],onClick:()=>s(null)},"Cancel")))),u&&r.a.createElement(d.n,null,r.a.createElement(d.n.Body,null,r.a.createElement("div",null,u),r.a.createElement("div",{className:oi.a.spacingDouble},r.a.createElement(d.d,{onClick:()=>m(null),modifiers:["negative","small"]},"Ok, close dialog")))))};ni.propTypes={doFetchRoomMembers:n.a.func.isRequired,doInviteRoomMember:n.a.func.isRequired,doRemoveRoomMember:n.a.func.isRequired,roomMembers:n.a.array};var ii=Object(s.b)("selectRoomMembers","doFetchRoomMembers","doInviteRoomMember","doRemoveRoomMember",ni),ri=a(338),si=a.n(ri);const ci=({optOut:e})=>r.a.createElement(Sn,{isLabel:!1},r.a.createElement("header",null,"Room version"),r.a.createElement("div",null,"You are using the new version of Whereby. Revert back to the old version for this session?"),r.a.createElement(d.d,{className:si.a.switchBtn,onClick:e,modifiers:["extraSmall","outlined","full"]},"Switch back to old version for this session"));ci.propTypes={optOut:n.a.func.isRequired};var li=ci,di=a(226),ui=a.n(di);var mi=()=>r.a.createElement(Sn,{onClick:function(){window.open("/org/customize-branding","_blank")},icon:r.a.createElement(d.z,{modifiers:["primary","sized"]}),right:r.a.createElement("div",{className:ui.a.chevronWrapper},r.a.createElement(Jo,{direction:"right"})),className:ui.a.SettingsSection,isLabel:!1},r.a.createElement("header",null,"Branding"),"Customize logo and background"),pi=a(163),gi=a.n(pi);const hi=({roomName:e})=>{const t=location.origin+e;return r.a.createElement("div",{className:gi.a.roomInviteSection},r.a.createElement(d.J,{value:t,className:gi.a.linkInput,onClick:function(e){e.stopPropagation(),e.target.setSelectionRange(0,e.target.value.length)},modifiers:["small"],readOnly:!0}),r.a.createElement(At,{roomName:e}),r.a.createElement("div",{className:gi.a.linkDescription},"Use this link to invite anyone to this room"))};hi.propTypes={roomName:n.a.string.isRequired};var fi=hi;const bi=({canSetLock:e,isLocked:t,setLock:a})=>{const o=t?d.t:d.K,n=t?"Locked room":"Unlocked room";let i=t?"Guests need to knock to enter locked rooms":"Anyone can enter unlocked rooms";t&&!e&&(i+=". Only the room owner can unlock the room");const s=r.a.createElement(o,{modifiers:["primary","sized"]});return r.a.createElement(Sn,{icon:s,right:e?r.a.createElement(fn,{className:"jstest-toggle-room-locked",onToggle:function(){a(!t)},isActive:t}):void 0},r.a.createElement("header",null,n),i)};bi.propTypes={canSetLock:n.a.bool.isRequired,isLocked:n.a.bool.isRequired,setLock:n.a.func.isRequired};var Ei=bi,Ri=a(164),Si=a.n(Ri);const Ii={normal:{text:"Small (1 - 4 people)",name:"small",selectable:!0},group:{text:"Large (up to 12 people)",name:"large",selectable:!0},townhall:{text:"Townhall (up to 50 people)",name:"townhall"}},vi=({canSetMode:e,displayRoomUpsell:t,mode:a,numClients:o,setMode:n})=>{const[i,s]=r.a.useState(null),c=o-1;const l=e||t,u=r.a.createElement(d.A,{modifiers:["primary","sized"]});return r.a.createElement(Sn,{icon:u,isLabel:!i},i?r.a.createElement(d.e,{modifiers:["warning"],className:Si.a.inlineCallout},r.a.createElement("header",null,"Are you sure you want to switch to a ",(Ii[i]||{}).name," room?"),"You and ",c," other participant",1!==c?"s":""," will be reconnected.",r.a.createElement("div",{className:Si.a.inlineButtonRow},r.a.createElement(d.d,{className:"jstest-confirm",onClick:function(){n(i)},modifiers:["extraSmall"]},"Yes, switch"),r.a.createElement(d.d,{onClick:function(){s(null)},modifiers:["extraSmall","outlined"]},"Cancel"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,"Room size"),l?r.a.createElement(d.D,{disabled:!e,items:Object.keys(Ii).filter(e=>Ii[e].selectable).map(e=>({key:Ii[e].text,value:e})),modifiers:["small"],value:a,onChange:function(e){c>0?s(e):n(e)}}):(Ii[a]||{text:a}).text,t&&r.a.createElement("div",{className:Si.a.upsell},"Larger rooms are available in the"," ",r.a.createElement(d.a,{href:"/user/order/details?utm_source=whereby&utm_campaign=room_settings_upsell&utm_medium=web",target:"_blank"},"paid plans"))))};vi.propTypes={canSetMode:n.a.bool.isRequired,displayRoomUpsell:n.a.bool.isRequired,mode:n.a.string.isRequired,numClients:n.a.number.isRequired,setMode:n.a.func.isRequired};var Ci=vi;const yi=({canSetLock:e,canSetRoomBackground:t,canSetRoomMode:a,doOptOutPwa:o,doSetRoomLock:n,doSetRoomMode:i,isPhoneResolution:s,localClientRole:c,numClients:l,roomIsLocked:d,roomMode:u,roomName:m})=>{const p=!a&&"owner"===c&&"townhall"!==u;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ci,{canSetMode:a,displayRoomUpsell:p,mode:u||"normal",numClients:l,setMode:i}),r.a.createElement(Ei,{canSetLock:e,isLocked:d,setLock:n}),t&&r.a.createElement(mi,null),!s&&r.a.createElement(li,{optOut:o}),r.a.createElement(fi,{roomName:m}))};yi.propTypes={canSetLock:n.a.bool.isRequired,canSetRoomBackground:n.a.bool.isRequired,canSetRoomMode:n.a.bool.isRequired,doOptOutPwa:n.a.func.isRequired,doSetRoomLock:n.a.func.isRequired,doSetRoomMode:n.a.func.isRequired,isPhoneResolution:n.a.bool.isRequired,localClientRole:n.a.string.isRequired,numClients:n.a.number.isRequired,roomIsLocked:n.a.bool.isRequired,roomMode:n.a.string.isRequired,roomName:n.a.string.isRequired};var Oi=Object(s.b)("doOptOutPwa","doSetRoomLock","doSetRoomMode","selectCanSetLock","selectCanSetRoomBackground","selectCanSetRoomMode","selectIsPhoneResolution","selectLocalClientRole","selectNumClients","selectRoomIsLocked","selectRoomMode","selectRoomName",yi),wi=a(165),Ni=a.n(wi);function Ti(){return(Ti=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}const Ai=()=>{};function ki({items:e,selectedIndex:t=0,onChange:a=Ai,className:o,...n}){const i=r.a.useCallback(e=>()=>a(e),[a]);return e.length<1?null:r.a.createElement("ul",Ti({className:m()(Ni.a.SegmentedControl,o)},n),e.map((e,a)=>r.a.createElement("li",{key:`${e}`,onClick:i(a),className:m()(Ni.a.segment,{[Ni.a["segment--selected"]]:t===a})},e)))}ki.propTypes={className:n.a.string,items:n.a.arrayOf(n.a.string),onChange:n.a.func,selectedIndex:n.a.number};var _i=ki;const Li=({canListRoomMembers:e,featureLegacyRoomMembersOn:t,initialPane:a,onClose:o})=>{const n=["room",e&&t?"members":void 0,"device"].filter(Boolean),[s,c]=Object(i.useState)("room"===a?n.indexOf("room"):n.indexOf("device")),[l,u]=Object(i.useState)();return r.a.createElement(d.n,{className:m()(cn.a.settingsPopover,"jstest-room-settings-container"),onClickClose:o,hideCloseButton:!0},r.a.createElement(d.n.Header,null,r.a.createElement("div",{className:cn.a.header},l?r.a.createElement(d.c,{onClick:()=>u(null)}):r.a.createElement("div",null),r.a.createElement(_i,{className:m()(cn.a.segmentedControl,{[cn.a.hidden]:!!l}),items:n.map(e=>e.charAt(0).toUpperCase()+e.substring(1)),selectedIndex:s,onChange:function(e){c(e)}}),r.a.createElement(d.l,{className:"jstest-room-settings-close-button",onClick:o}))),r.a.createElement(d.n.Body,null,!l&&"room"===n[s]&&r.a.createElement(Oi,null),!l&&"device"===n[s]&&r.a.createElement(ti,{onAdvancedSettingsClicked:()=>u("advanced")}),!l&&"members"===n[s]&&r.a.createElement(ii,null),"advanced"===l&&r.a.createElement(Nn,null)))};Li.propTypes={canListRoomMembers:n.a.bool,featureLegacyRoomMembersOn:n.a.bool,initialPane:n.a.string.isRequired,onClose:n.a.func};var Di=Object(s.b)("selectCanListRoomMembers","selectFeatureLegacyRoomMembersOn",Li),Pi=a(54),Mi=a(166),ji=a.n(Mi);function Fi(){return(Fi=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function xi({helpLink:e,message:t}){const[a,o]=Object(i.useState)(!1);return Object(i.useEffect)(()=>{const e=setTimeout(()=>{o(!0)},5e3);return()=>{clearTimeout(e)}}),a?null:r.a.createElement("div",{className:ji.a.toastContainer},r.a.createElement("div",{className:ji.a.toastBody},t,e&&r.a.createElement(d.a,Fi({className:ji.a.helpLink},e),"Help")))}xi.propTypes={helpLink:n.a.object,message:n.a.string.isRequired};var qi=xi;function Bi({toast:e}){const{helpLink:t,message:a,timestamp:o}=e;return a?Object(Pi.createPortal)(r.a.createElement(qi,{helpLink:t,message:a,key:o}),document.body):null}Bi.propTypes={toast:n.a.object.isRequired};var Ui=Object(s.b)("selectToast",Bi),zi=a(72),Hi=a.n(zi);function Vi({layout:e,sidebar:t,isSidebarVisible:a=!1,content:o,className:n}){const i=e.isPhone,s=!i&&e.bounds.width-375<=375,c={width:!a||s||i?e.bounds.width:e.bounds.width-375,height:e.bounds.height},l=m()(Hi.a.wrapper,n,{[Hi.a.isCollapsed]:s}),d=m()(Hi.a.sidebarContainer,"jstest-sidebar",{[Hi.a.isCollapsed]:i,[Hi.a.isCollapsedPortrait]:i&&e.isPortrait,[Hi.a.isFloating]:s}),u=r.a.cloneElement(o,{layout:Object(_e.b)(Object(Dt.d)({...c}))}),p={width:e.bounds.width},g={width:i||s?"100%":375,paddingLeft:s?e.bounds.width-375:0};return r.a.createElement("div",{className:l,style:p},r.a.createElement("div",{className:Hi.a.content},u),a&&r.a.createElement("div",{className:d,style:g},t))}Vi.propTypes={className:n.a.string,content:n.a.node,isSidebarVisible:n.a.bool,layout:_e.c,sidebar:n.a.element};var Wi=Vi,Gi=a(148);function Ki(){return(Ki=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}const $i=()=>{},Yi=({topToolbar:e,videoStage:t,bottomToolbar:a,isBottomToolbarHidden:o,isTopToolbarHidden:n,layout:i,style:s={},onClick:c=$i})=>{const l=r.a.cloneElement(e,{layout:Object(_e.b)(Object(Dt.d)({width:i.bounds.width,height:56}))}),d={height:56,...n&&{display:"none"}},u=r.a.cloneElement(a,{layout:Object(_e.b)(Object(Dt.d)({width:i.bounds.width,height:82}))}),m={height:82,...o&&{display:"none"}},p=i.bounds.height-(n?0:56)-(o?0:82),g=Object(_e.b)(Object(Dt.d)({width:i.bounds.width,height:p,top:n?0:56,left:0})),h=r.a.cloneElement(t,{layout:g}),f={height:p};return r.a.createElement("div",{style:s,onClick:c},r.a.createElement("div",{style:d},l),r.a.createElement("div",{style:f},h),r.a.createElement("div",{style:m},u))};Yi.propTypes={bottomToolbar:n.a.element.isRequired,isBottomToolbarHidden:n.a.bool,isTopToolbarHidden:n.a.bool,layout:_e.c,onClick:n.a.func,style:n.a.object,topToolbar:n.a.element.isRequired,videoStage:n.a.element.isRequired};const Zi=function({topToolbar:e,videoStage:t,bottomToolbar:a,sidebar:o,isBottomToolbarHidden:n,isTopToolbarHidden:i,isTouchOnlyDevice:s,isSidebarVisible:c=!1,areToolbarsHidden:l=!1,onRoomClick:d,...u}){const{windowSize:m,safeAreaInsets:p}=Object(Gi.a)(s),g=Object(_e.b)(Object(Dt.d)({width:m.width-p.left-p.right,height:m.height-p.top-p.bottom})),h=g.bounds.width<320||g.bounds.height<320,f=r.a.createElement(Yi,{topToolbar:e,videoStage:t,bottomToolbar:a,isBottomToolbarHidden:l||h||n,isTopToolbarHidden:l||h||i,onClick:d,style:{paddingLeft:p.left,paddingRight:p.right,paddingTop:p.top,paddingBottom:p.bottom}});return r.a.createElement(Wi,Ki({layout:g},u,{sidebar:o,content:f,isSidebarVisible:c}))};Zi.propTypes={areToolbarsHidden:n.a.bool,bottomToolbar:n.a.element.isRequired,isBottomToolbarHidden:n.a.bool,isSidebarVisible:n.a.bool,isTopToolbarHidden:n.a.bool,isTouchOnlyDevice:n.a.bool,onRoomClick:n.a.func,sidebar:n.a.element.isRequired,topToolbar:n.a.element.isRequired,videoStage:n.a.element.isRequired};var Ji=Zi,Qi=a(339),Xi=a.n(Qi);var er=function(){return Object(i.useEffect)(()=>{const e=setTimeout(()=>window.location.reload(!0),3e3);return()=>clearTimeout(e)},[]),r.a.createElement(d.n,null,r.a.createElement(d.n.Body,null,r.a.createElement("h1",{className:Xi.a.header},"Updating room size..."),r.a.createElement("p",null,"This page will refresh in ",3," seconds")))},tr=a(83),ar=a.n(tr);const or=()=>{};function nr({panes:e,onClose:t,onToggle:a=or}){const o=Object(i.useCallback)(t=>{a(e[t])},[a,e]),n=r.a.createElement("div",null),s=e.find(e=>e.isActive);return r.a.createElement("div",{className:ar.a.Sidebar},r.a.createElement("div",{className:ar.a.header},n,r.a.createElement("div",{className:ar.a.segmentedControlWrapper},r.a.createElement(_i,{className:ar.a.segmentedControl,items:e.map(e=>e.label),selectedIndex:e.indexOf(s),onChange:o})),r.a.createElement(d.l,{onClick:t,className:m()("jstest-close-sidebar-button",ar.a.sidebarButton)})),r.a.createElement("div",{className:ar.a.content},s&&s.content))}nr.propTypes={onClose:n.a.func.isRequired,onToggle:n.a.func,panes:n.a.arrayOf(n.a.exact({label:n.a.string.isRequired,content:n.a.node.isRequired,isActive:n.a.bool.isRequired})).isRequired};var ir=nr;function rr(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class sr extends i.Component{constructor(e){super(e),rr(this,"handleLayoutClick",e=>{if(!this.props.isPhoneResolution)return;const t=["a","button","button *"].filter(Boolean).join(",");e.target.matches(t)||function(){const e=document.getElementsByClassName(M.a.defaultProps.containerClassName)[0];return!(!e||!e.childElementCount)}()||d.n.hasMountedDialogs()||this.setState(e=>({isToolbarsVisible:!e.isToolbarsVisible}))}),rr(this,"goToFrontPageViaExitButton",()=>{this.props.doLeaveRoom(!0)}),rr(this,"handleRoomStatusClick",()=>{this.setState({isSettingsOpen:!0,settingsPane:"room"})}),rr(this,"handleSettingsButtonClick",()=>{this.setState({isSettingsOpen:!0,settingsPane:"devices"})}),rr(this,"handleSettingsClose",()=>{this.setState({isSettingsOpen:!1})}),rr(this,"handleToggleChat",()=>{const{doCloseSidebar:e,doOpenSidebar:t,isChatOpen:a}=this.props;a?e():t(fo.a)}),rr(this,"handleToggleParticipantList",()=>{const{doCloseSidebar:e,doOpenSidebar:t,isParticipantListOpen:a}=this.props;a?e():t(fo.b)}),rr(this,"handleToggleSidebarPane",e=>{const{doToggleSidebarPane:t}=this.props;t(e.label)}),rr(this,"onBeforeSetMediaEnabled",e=>!(e&&this.props.isTownhallMode&&this.props.isTownhallPresenterLimitReached)||(this.setState({isPresenterLimitModalOpen:!0}),!1)),rr(this,"handleClosePresenterLimitModal",()=>{this.setState({isPresenterLimitModalOpen:!1})}),this.state={isToolbarsVisible:!0,isSettingsOpen:!1,isPresenterLimitModalOpen:!1}}render(){const{configNoChat:e,configNoTopToolbar:t,doCloseSidebar:a,isChatOpen:o,isParticipantListOpen:n,isSidebarOpen:i,isTouchOnlyDevice:s,isTownhallMode:c}=this.props,l=r.a.createElement(De,{onSettingsClick:this.handleSettingsButtonClick,onStatusClick:this.handleRoomStatusClick}),d=r.a.createElement(It,{isParticipantsButtonVisible:!0,onBeforeSetMediaEnabled:this.onBeforeSetMediaEnabled,onLeaveRoom:this.goToFrontPageViaExitButton,onToggleChatOpen:this.handleToggleChat,onToggleParticipantList:this.handleToggleParticipantList}),u=i,m=r.a.createElement(ir,{panes:[e?null:{label:fo.a,content:r.a.createElement(K,null),isActive:o},{label:fo.b,content:r.a.createElement(rn,null),isActive:n}].filter(Boolean),onToggle:this.handleToggleSidebarPane,onClose:a});return r.a.createElement(je,{onToggleChatOpen:this.handleToggleChat,className:F.a.ConnectedRoom},r.a.createElement(Ji,{topToolbar:l,videoStage:r.a.createElement(wo,null),bottomToolbar:d,sidebar:m,isSidebarVisible:u,isBottomToolbarHidden:!this.state.isToolbarsVisible,isTopToolbarHidden:t||!this.state.isToolbarsVisible,isTouchOnlyDevice:s,areToolbarsHidden:!this.state.isToolbarsVisible,onRoomClick:this.handleLayoutClick}),this.state.isSettingsOpen&&r.a.createElement(Di,{initialPane:this.state.settingsPane,onClose:this.handleSettingsClose}),this.props.roomRefreshing&&r.a.createElement(er,null),c&&this.state.isPresenterLimitModalOpen&&r.a.createElement(z,{onClose:this.handleClosePresenterLimitModal}),r.a.createElement(Ui,null),r.a.createElement(ae,null))}}sr.propTypes={configNoChat:n.a.bool,configNoTopToolbar:n.a.bool,doCloseSidebar:n.a.func.isRequired,doLeaveRoom:n.a.func.isRequired,doOpenSidebar:n.a.func.isRequired,doToggleSidebarPane:n.a.func.isRequired,isChatOpen:n.a.bool.isRequired,isParticipantListOpen:n.a.bool.isRequired,isPhoneResolution:n.a.bool.isRequired,isSidebarOpen:n.a.bool.isRequired,isTouchOnlyDevice:n.a.bool.isRequired,isTownhallMode:n.a.bool.isRequired,isTownhallPresenterLimitReached:n.a.bool.isRequired,roomRefreshing:n.a.bool.isRequired};var cr=Object(s.b)("doLeaveRoom","doCloseSidebar","doOpenSidebar","doToggleSidebarPane","selectConfigNoChat","selectConfigNoTopToolbar","selectIsChatOpen","selectIsSidebarOpen","selectIsParticipantListOpen","selectIsPhoneResolution","selectIsTouchOnlyDevice","selectIsTownhallMode","selectIsTownhallPresenterLimitReached","selectRoomRefreshing",sr),lr=a(227),dr=a.n(lr);function ur({doToggleHelpMenu:e,shouldShowHelpButton:t}){return t?r.a.createElement(de,{containerClassName:dr.a.button,onClick:e},r.a.createElement("span",{className:dr.a.buttonContent},"?")):null}ur.propTypes={doToggleHelpMenu:n.a.func.isRequired,shouldShowHelpButton:n.a.bool};var mr=Object(s.b)("doToggleHelpMenu","selectShouldShowHelpButton",ur),pr=a(45),gr=a.n(pr),hr=a(149);function fr(){return(fr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function br({icons:e,title:t,description:a,link:o,children:n}){return r.a.createElement("li",{className:gr.a.roomIntegration},r.a.createElement(Sn,{className:gr.a.settingsSection,icon:r.a.createElement(d.a,{href:o.href,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{title:o.text,src:e.large,alt:"",className:gr.a.icon})),right:n},r.a.createElement("div",{className:gr.a.integrationCopy},r.a.createElement("h2",{className:gr.a.subTitle},t),r.a.createElement("div",{className:gr.a.description},a))))}function Er({availableRoomIntegrations:e,doDisableRoomIntegration:t,doEnableRoomIntegration:a,doToggleRoomIntegrationSettings:o,isRoomIntegrationDialogOpen:n,unavailableRoomIntegrations:i}){return n?r.a.createElement(d.n,{className:gr.a.integrationsPopover,onClickClose:()=>o(!1)},r.a.createElement(d.n.Body,{className:gr.a.Integrations},r.a.createElement("h1",{className:gr.a.title},"Integrations"),r.a.createElement("p",{className:gr.a.paragraph},"Share and collaborate together in-room with your favorite services."),r.a.createElement("ul",{className:gr.a.roomIntegrations},e.map(({isEnabled:e,roomIntegrationId:o,...n})=>r.a.createElement(br,fr({key:o},n),r.a.createElement(fn,{className:"jstest-room-integrations-toggle",onToggle:()=>e?t(o):a(o),isActive:e}))),i.map(({roomIntegrationId:e,...t})=>r.a.createElement(br,fr({key:e,roomIntegrationId:e},t),r.a.createElement(hr.a,null)))))):null}br.propTypes={children:n.a.node,description:n.a.string.isRequired,icons:n.a.shape({large:n.a.string.isRequired}),link:n.a.shape({text:n.a.string.isRequired,href:n.a.string.isRequired}),title:n.a.string.isRequired},Er.propTypes={availableRoomIntegrations:n.a.array.isRequired,doDisableRoomIntegration:n.a.func.isRequired,doEnableRoomIntegration:n.a.func.isRequired,doToggleRoomIntegrationSettings:n.a.func.isRequired,isRoomIntegrationDialogOpen:n.a.bool.isRequired,unavailableRoomIntegrations:n.a.array.isRequired};var Rr=Object(s.b)("doDisableRoomIntegration","doEnableRoomIntegration","doToggleRoomIntegrationSettings","selectAvailableRoomIntegrations","selectIsRoomIntegrationDialogOpen","selectUnavailableRoomIntegrations",Er);function Sr({knockStatus:e}){switch(e){case"rejected":return r.a.createElement(d.a,{className:"jstest-knocker-rejected-footer",modifiers:["button","button-small","button-full","button-negative"],href:p.a.service},"Leave Room");default:return r.a.createElement("footer",{className:"jstest-knocker-waiting-footer"},r.a.createElement(d.d,{modifiers:["small","full"],disabled:!0},"Knock"))}}Sr.propTypes={knockStatus:n.a.string.isRequired};var Ir=Sr;var vr=function(e){switch(e){case"waiting":return r.a.createElement("span",{className:"jstest-waiting-for-reply-text"},"Waiting for reply\u2026");case"on_hold":return r.a.createElement("span",{className:"jstest-on-hold-knocker-notification"},"Your knock has been noticed and you\u2019ve been ",r.a.createElement("strong",null,"put on hold"),". Please wait to be let in");case"rejected":return r.a.createElement("span",{className:"jstest-knocker-rejected-notification"},r.a.createElement("strong",null,"You\u2019ve not been granted access"),". If you were invited to this room, please contact the person who invited you")}return r.a.createElement("span",null,"Unknown knock status ",e)},Cr=a(228),yr=a.n(Cr);function Or({doLogout:e,onClickPrev:t,user:a}){return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(d.c,{className:yr.a.backButton,onClick:t}),r.a.createElement("div",{className:yr.a.loginButtonContainer},r.a.createElement(ge,{isCollapsed:!0,light:!0,onLogout:e,user:a,key:a&&a.userId})))}Or.propTypes={doLogout:n.a.func.isRequired,onClickPrev:n.a.func,user:n.a.instanceOf(me.a)};var wr=Object(s.b)("doLogout","selectUser",Or);function Nr({audioId:e,doPrecallEnteredAnalytics:t,featureRoundedCornersOff:a,isPhoneResolution:o,knockStatus:n,localStream:s,localStreamError:c,mediaPermissionStatus:l,videoId:d}){Object(i.useEffect)(()=>t("knock screen"),[t]);const u=!!c,m=r.a.createElement(Ir,{knockStatus:n});return r.a.createElement(_.a,{isFullscreen:o,footer:m},r.a.createElement(wr,null),r.a.createElement(k.a,null),r.a.createElement(Mn,{audioId:e,isBlocked:u,mediaPermissionStatus:l,localStream:s,videoId:d,caption:vr(n),withRoundedCorners:!a}))}Nr.propTypes={audioId:n.a.string.isRequired,doPrecallEnteredAnalytics:n.a.func.isRequired,featureRoundedCornersOff:n.a.bool,isPhoneResolution:n.a.bool.isRequired,knockStatus:n.a.string.isRequired,localStream:n.a.object.isRequired,localStreamError:n.a.object,mediaPermissionStatus:n.a.string.isRequired,videoId:n.a.string.isRequired};var Tr=Object(s.b)("doPrecallEnteredAnalytics","selectAudioId","selectFeatureRoundedCornersOff","selectIsPhoneResolution","selectKnockStatus","selectLocalStream","selectLocalStreamError","selectMediaPermissionStatus","selectVideoId",Nr),Ar=a(229),kr=a.n(Ar),_r=a(91);function Lr({state:e}){let t,a,o;switch(e){case"granted":return r.a.createElement(_r.a,{classNames:kr.a.spinner});case"nodevices":t="No camera or microphone found",a="error",o=r.a.createElement(r.a.Fragment,null,"You at least need one media device attached when joining a meeting."," ",r.a.createElement("strong",null,"Please attach a camera or microphone and try again"));break;case"requestingPermission":case"requestedPermission":t="Cam and mic are not active",a="light",o=r.a.createElement(r.a.Fragment,null,r.a.createElement("strong",null,"For others to see and hear you, your browser will request access to your cam and mic."),r.a.createElement("br",null),"You can still turn them back off at any time.");break;case"NotAllowedError":t="Cam and mic are blocked",a="error",o=r.a.createElement(r.a.Fragment,null,"You need to allow access to your cam and mic to join."," ",r.a.createElement("strong",null,'Try again, and select "Allow" when prompted'));break;case"AbortError":case"NotFoundError":case"NotReadableError":t="Cam and mic are blocked",a="error",o=r.a.createElement(r.a.Fragment,null,"Your browser is not able to access the cam and mic."," ",r.a.createElement("strong",null,"Is some other app actively using them?"));break;default:o=e}return r.a.createElement(r.a.Fragment,null,r.a.createElement(Dn,{bgModifier:a,caption:t,captionDark:!0}),r.a.createElement("p",{className:`jstest-avpermissions-${e}-paragraph`},o),r.a.createElement(Cn,null))}function Dr({state:e,onEnterWithoutDevices:t,onTryAgain:a,onRequestPermissions:o}){switch(e){case"requestedPermission":case"requestingPermission":return r.a.createElement(d.d,{className:`jstest-avpermissions-${e}-button`,onClick:o,modifiers:["full","small"],disabled:"requestedPermission"===e},"Request permissions");case"nodevices":case"NotAllowedError":case"AbortError":case"NoDevicesError":case"NotReadableError":return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.d,{className:`jstest-avpermissions-${e}-button`,onClick:a,modifiers:["full","small"]},"Try again"),r.a.createElement(d.d,{className:kr.a.optOutButton,onClick:t,modifiers:["full","extraSmall","invisible"]},"Continue without devices"))}return null}function Pr({doPrecallEnteredAnalytics:e,doReload:t,doRequestDummyStream:a,doRequestLocalStream:o,localStream:n,localStreamError:s,mediaPermissionStatus:c,isPhoneResolution:d}){Object(i.useEffect)(()=>e("device permissions"),[e]);const[u,m]=Object(i.useState)(""),p=Object(i.useCallback)(()=>{const{unlockSafari:e}=Object($.a)();e(),o(),m("requestedPermission")},[o]);return Object(i.useEffect)(()=>{s?m(s.name):"prompt"===c&&m("requestingPermission")},[n,s,c]),u?r.a.createElement(_.a,{isFullscreen:d,footer:r.a.createElement(Dr,{state:u,onEnterWithoutDevices:a,onTryAgain:t,onRequestPermissions:p})},r.a.createElement(wr,null),r.a.createElement(k.a,null),r.a.createElement(Lr,{state:u})):r.a.createElement(l.a,null,"Loading camera and audio...")}Lr.propTypes={state:n.a.string.isRequired},Dr.propTypes={onEnterWithoutDevices:n.a.func.isRequired,onRequestPermissions:n.a.func.isRequired,onTryAgain:n.a.func.isRequired,state:n.a.string.isRequired},Pr.propTypes={doPrecallEnteredAnalytics:n.a.func.isRequired,doReload:n.a.func.isRequired,doRequestDummyStream:n.a.func.isRequired,doRequestLocalStream:n.a.func.isRequired,isPhoneResolution:n.a.bool.isRequired,localStream:n.a.object,localStreamError:n.a.object,mediaPermissionStatus:n.a.string.isRequired};var Mr=Object(s.b)("doPrecallEnteredAnalytics","doReload","doRequestDummyStream","doRequestLocalStream","doSetPrecallReviewDone","selectIsPhoneResolution","selectLocalStream","selectLocalStreamError","selectMediaPermissionStatus","selectShouldShowKnockPage",Pr),jr=a(230),Fr=a.n(jr);function xr({doPrecallEnteredAnalytics:e,doSetPrecallNamePrompt:t,displayName:a,isPhoneResolution:o,isTouchOnlyDevice:n}){Object(i.useEffect)(()=>e("name prompt"),[e]);const[s,c]=Object(i.useState)(a);function l(e){t(s&&s.trim()),e.preventDefault()}const u=r.a.createElement(d.d,{className:"jstest-nameprompt-continue",onClick:l,modifiers:["full","small"]},"Continue");return r.a.createElement(_.a,{isFullscreen:o,footer:u},r.a.createElement(wr,null),r.a.createElement(k.a,null),r.a.createElement("form",{onSubmit:l,autoComplete:"off",className:"jstest-nameprompt"},r.a.createElement(d.J,{autoCapitalize:"words",autoComplete:"off",autoCorrect:"off",autoFocus:!n,defaultValue:s,label:"Your name",maxLength:40,onChange:c,name:"displayName",placeholder:"Enter your name",spellCheck:!1})),r.a.createElement("p",{className:Fr.a.paragraph},"By using this service you agree to our",r.a.createElement(d.a,{className:Fr.a.tosLink,href:"https://whereby.com/information/tos/",rel:"noopener noreferrer",target:"_blank"},"Terms of Service")))}xr.propTypes={displayName:n.a.string,doPrecallEnteredAnalytics:n.a.func.isRequired,doSetPrecallNamePrompt:n.a.func.isRequired,isPhoneResolution:n.a.bool.isRequired,isTouchOnlyDevice:n.a.bool.isRequired};var qr=Object(s.b)("doPrecallEnteredAnalytics","doSetPrecallNamePrompt","selectDisplayName","selectIsPhoneResolution","selectIsTouchOnlyDevice",xr),Br=a(73),Ur=a.n(Br);function zr(e){return new Promise(t=>{const a=new FileReader,o=()=>{a.removeEventListener("load",o),t(a.result)};a.addEventListener("load",o),a.readAsDataURL(e)})}function Hr(e){const t=document.createElement("canvas"),a=t.getContext("2d"),{width:o,height:n}=function(e){const{videoWidth:t,videoHeight:a}=e,o=t/a,n=Math.floor(320/o);if(n>2e3)throw new Error("Invalid image dimension");return{width:320,height:n}}(e);return t.width=o,t.height=n,a.drawImage(e,0,0,o,n),t}function Vr(e){return new Promise((t,a)=>{const o=new MediaStream;o.addTrack(e);const n=document.createElement("video");n.srcObject=o;let i=null;const r=async()=>{clearTimeout(i),n.removeEventListener("playing",r),n.pause();try{const a=await async function(e){const t=Hr(e);for(let n=1;n>0;a=n,o=.1,n=Number.parseFloat(Number.parseFloat(a-o).toFixed(1))){const e=await new Promise(e=>{t.toBlob(t=>e(zr(t)),"image/jpeg",n)});if(e.length<6e4)return e}var a,o;throw new Error("Unable to create image from stream")}(n);t(a)}catch(s){a(s)}finally{n.srcObject=null,o.removeTrack(e)}};n.addEventListener("playing",r),n.setAttribute("playsinline",!0),n.play(),i=setTimeout(()=>{n.removeEventListener("playing",r),a(new Error("Camera stream unavailable"))},3e3)})}var Wr=a(340),Gr=a(154);const Kr=e=>100-100*e/255;function $r({stream:e,audioId:t,videoId:a,isAudioWanted:o}){const n=function({stream:e,sampleCount:t,audioId:a,videoId:o,fftSize:n=32}){const[r,s]=Object(i.useState)(()=>new Array(t).fill(0));return Object(i.useEffect)(()=>{if(!a)return;let t;try{t=new Wr.a(e,n)}catch(c){const t=e=>["id","kind","enabled","label","muted","readyState"].reduce((t,a)=>({...t,[a]:e[a]}),{});return void Gr.b.doCaptureException(c,{tags:{from:"useAudioInputLevelData"},extra:{audioId:a,videoId:o,stream:e,streamId:e.id,tracks:e.getTracks().map(t),MediaDevicesStore:window.localStorage.MediaDevicesStore,inputLevelData:r}})}const i=n/2;return t.subscribeData(e=>{const t=e.reduce((e,t)=>e+t,0)/i;s(e=>[...e.slice(1),t])})},[e,a,o,n]),r}({stream:e,sampleCount:1,audioId:t,videoId:a}),[r,s]=Object(i.useState)(0),[c]=n.slice(-1);return c>r&&s(c),Object(i.useEffect)(()=>{const e=setTimeout(()=>{s(0)},2e3);return()=>clearTimeout(e)},[r]),function({currentLevel:e,peakLevel:t,isAudioWanted:a}){const o=Kr(e),n=Kr(t),i=`var(${a?"--color-green-dark":"--color-red"})`;return{backgroundImage:`linear-gradient(to bottom, transparent 0%, transparent ${n}%, ${i} ${n}%, ${i} ${o}%, ${`var(${a?"--color-illustration-green":"--color-red-extra-dark"})`} ${o}%)`}}({currentLevel:c,peakLevel:r,isAudioWanted:o})}function Yr(){return(Yr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function Zr({isExpanded:e,...t}){const a=e?r.a.createElement(d.m,{modifiers:["light","sized"]}):r.a.createElement(d.E,{modifiers:["light","sized"]});return r.a.createElement(ue,Yr({icon:a},t))}function Jr({audioId:e,audioInputDevices:t,audioOutputDevices:a,doKnock:o,doPrecallEnteredAnalytics:n,doReload:s,doRequestLocalStream:c,doSetAudioOutput:l,doSetPrecallReviewDone:u,doSetPrecallReviewWanted:g,doSwitchLocalStream:h,doToggleAudioEnabled:f,doToggleVideoEnabled:b,featureRoundedCornersOff:E,isAudioWanted:R,isPhoneResolution:S,isPrecallReviewWanted:I,isVideoWanted:v,localClient:C,localOutputId:y,localStream:O,localStreamError:w,mediaPermissionStatus:N,shouldShowKnockPage:T,videoId:A,videoInputDevices:L}){Object(i.useEffect)(()=>n("review"),[n]);const[D,P]=Object(i.useState)(!1),[M,j]=Object(i.useState)(),F=$r({stream:O,audioId:e,videoId:A,isAudioWanted:R}),x=Object(i.useCallback)(()=>{if(T)return(A?async function(e){const t=e.getVideoTracks()[0];if(!t)throw new Error("Camera stream unavailable");return await Vr(t)}(O):Promise.resolve()).then(o).then(u).catch(j);u()},[T,O,o,u,A]);Object(i.useEffect)(()=>{O||"granted"!==N||c()},[O,N,c]);const q=Object(i.useCallback)(e=>{h({videoId:e}),j()},[h]),B=Object(i.useCallback)(e=>h({audioId:e}),[h]),U=Object(i.useCallback)(e=>l(e),[l]),z=!!w,H=M&&M.message||(R&&v?void 0:`Join with ${R||v?R?"cam":"mic":"cam and mic"} off`),V=r.a.createElement(r.a.Fragment,null,z&&r.a.createElement(d.d,{autoFocus:!0,onClick:s,modifiers:["full","small"],className:"jstest-device-blocked-reload-button"},"Cam / mic blocked. Try again"),!z&&"prompt"===N&&r.a.createElement(d.d,{autoFocus:!0,onClick:c,modifiers:["full","small"]},"Allow"),!z&&"granted"===N&&r.a.createElement(d.d,{autoFocus:!0,onClick:x,modifiers:["full","small"],className:m()({"jstest-knock-button":T,"jstest-join-room-button":!T})},T?"Knock":"Join meeting"));return r.a.createElement(_.a,{isFullscreen:S,footer:V},r.a.createElement(wr,null),r.a.createElement(k.a,null),r.a.createElement("div",{className:Ur.a.cameraPreviewContainer},r.a.createElement(Mn,{audioId:e,isBlocked:z,mediaPermissionStatus:N,localStream:O,videoId:A,caption:H,captionTop:!0,captionDark:!0,withRoundedCorners:!E}),r.a.createElement("div",{className:Ur.a.videoControlsContainer},r.a.createElement(qe,{isButtonDisabled:!A,onToggle:b,isEnabled:v,hideLegend:!0}),r.a.createElement(Ye,{audioMeterStyles:F,onToggle:f,isButtonDisabled:!e,isEnabled:R,hideLegend:!0})),(e||A)&&r.a.createElement(Zr,{isExpanded:D,className:Ur.a.settingsButton,onClick:()=>P(!D)})),D&&!z&&C&&C.stream&&r.a.createElement("div",{className:Ur.a.inputSelectorsWrapper},r.a.createElement(zn,{onChangeCamera:q,videoInputDevices:L,videoId:A}),r.a.createElement(Kn,{onChangeMic:B,audioId:e,videoId:A,audioInputDevices:t,stream:O}),r.a.createElement(Qn,{onChangeSpeaker:U,audioOutputDevices:a,outputId:y})),!z&&"granted"===N&&!T&&!D&&r.a.createElement("div",{className:Ur.a.skipReviewOption},r.a.createElement(d.k,{checked:!I,modifiers:["small"],onChange:()=>{g(!I)},label:r.a.createElement("span",{className:Ur.a.skipReviewLabel},"Skip this review next time you join a meeting on"," ",r.a.createElement("strong",null,p.a.organizationDomain))})),!z&&"granted"===N&&T&&!D&&r.a.createElement("div",{className:Ur.a.knockInstructions},"This room is ",r.a.createElement("strong",null,"currently locked"),". To join you need to knock to request access. The host will see your picture when you knock"))}Jr.propTypes={audioId:n.a.string.isRequired,audioInputDevices:n.a.arrayOf(ct).isRequired,audioOutputDevices:n.a.arrayOf(lt).isRequired,doKnock:n.a.func.isRequired,doPrecallEnteredAnalytics:n.a.func.isRequired,doReload:n.a.func.isRequired,doRequestLocalStream:n.a.func.isRequired,doSetAudioOutput:n.a.func.isRequired,doSetPrecallReviewDone:n.a.func.isRequired,doSetPrecallReviewWanted:n.a.func.isRequired,doSwitchLocalStream:n.a.func.isRequired,doToggleAudioEnabled:n.a.func.isRequired,doToggleVideoEnabled:n.a.func.isRequired,featureRoundedCornersOff:n.a.bool,isAudioWanted:n.a.bool.isRequired,isPhoneResolution:n.a.bool.isRequired,isPrecallReviewWanted:n.a.bool.isRequired,isVideoWanted:n.a.bool.isRequired,localClient:n.a.object.isRequired,localOutputId:n.a.string,localStream:n.a.object.isRequired,localStreamError:n.a.object,mediaPermissionStatus:n.a.string.isRequired,shouldShowKnockPage:n.a.bool.isRequired,videoId:n.a.string.isRequired,videoInputDevices:n.a.arrayOf(dt).isRequired};var Qr=Object(s.b)("doKnock","doPrecallEnteredAnalytics","doReload","doRequestLocalStream","doSetAudioOutput","doSetPrecallReviewDone","doSetPrecallReviewWanted","doSwitchLocalStream","doToggleAudioEnabled","doToggleVideoEnabled","selectAudioId","selectAudioInputDevices","selectAudioOutputDevices","selectFeatureRoundedCornersOff","selectIsAudioWanted","selectIsPhoneResolution","selectIsPrecallReviewWanted","selectIsVideoWanted","selectLocalClient","selectLocalOutputId","selectLocalStream","selectLocalStreamError","selectMediaPermissionStatus","selectShouldShowKnockPage","selectVideoId","selectVideoInputDevices",Jr),Xr=a(24),es=a.n(Xr);function ts({doRecordingConsent:e,doRecordingDialogsDismiss:t}){return r.a.createElement(d.n,{onClickClose:t},r.a.createElement(d.n.Body,{className:es.a.body},r.a.createElement("h1",{className:es.a.title},"You\u2019re about to start recording"),r.a.createElement("ul",{className:es.a.list},r.a.createElement("li",{className:es.a.listItem},"Make sure all participants consent to being recorded"),r.a.createElement("li",{className:es.a.listItem},"You are responsible for storing the recordings securely and acknowledge that the recording may contain personal information of others"))),r.a.createElement(d.n.Footer,{className:es.a.footer},r.a.createElement(d.d,{modifiers:["meetingRed","full","small"],onClick:e},"Start recording")))}ts.propTypes={doRecordingConsent:n.a.func.isRequired,doRecordingDialogsDismiss:n.a.func.isRequired};var as=ts;function os({doRecordingConsent:e,doRecordingDialogsDismiss:t,doRecordingIgnoreExtension:a,doRecordingInstall:o,recordingDialog:n,recordingExtensionStatus:i}){switch(n){case"consent":return r.a.createElement(as,{doRecordingConsent:e,doRecordingDialogsDismiss:t});case"extension":return r.a.createElement(ns,{doRecordingInstall:o,doRecordingDialogsDismiss:t,doRecordingIgnoreExtension:a,recordingExtensionStatus:i});default:return null}}function ns({doRecordingDialogsDismiss:e,doRecordingIgnoreExtension:t,doRecordingInstall:a,recordingExtensionStatus:o}){const[n,s]=Object(i.useState)(!1),c=Object(i.useCallback)(()=>s(!n),[n,s]);switch(o){case"missing":return r.a.createElement(is,{onAccept:a,onCancel:e});case"installing":return n?r.a.createElement(ss,{onAccept:t,onCancel:e}):r.a.createElement(rs,{onAccept:c,onCancel:e});default:return null}}function is({onAccept:e,onCancel:t}){return r.a.createElement(d.n,{onClickClose:t},r.a.createElement(d.n.Body,{className:m()(es.a.body,es.a.bodyInstallPrimer)},r.a.createElement("h1",{className:es.a.title},"Let\u2019s get you set up to start recording"),r.a.createElement("p",null,"To start recording you\u2019ll need to install the Whereby recording extension from the Chrome Web Store")),r.a.createElement(d.n.Footer,{className:es.a.footer},r.a.createElement(d.d,{modifiers:["full","small"],onClick:e},"Open popup to install")))}function rs({onAccept:e,onCancel:t}){return r.a.createElement(d.n,null,r.a.createElement(d.n.Body,{className:m()(es.a.body,es.a.bodyFlex)},r.a.createElement("h1",{className:es.a.title},"Waiting for extension..."),r.a.createElement(_r.a,{classNames:es.a.spinner}),r.a.createElement(d.d,{modifiers:["small","outlined","full"],onClick:t},"Cancel")),r.a.createElement(d.n.Footer,{className:es.a.footer},r.a.createElement(d.d,{modifiers:["invisible","small","full"],onClick:e},"Continue without extension")))}function ss({onAccept:e,onCancel:t}){return r.a.createElement(d.n,{onClickClose:t},r.a.createElement(d.n.Body,{className:es.a.body},r.a.createElement("h1",{className:es.a.title},"No extension?"),r.a.createElement("p",null,"This will have some confusing UI and is not recommended. When prompted you\u2019ll need to choose to share ",r.a.createElement("strong",null,"this")," tab, for recording to work."),r.a.createElement("p",null,"Do not share your full screen, this window, another window or another tab. Only this tab."),r.a.createElement("p",null,"Only this tab.")),r.a.createElement(d.n.Footer,{className:es.a.footer},r.a.createElement(d.d,{onClick:e,modifiers:["full","small"]},"This tab only, got it")))}os.propTypes={doRecordingConsent:n.a.func.isRequired,doRecordingDialogsDismiss:n.a.func.isRequired,doRecordingIgnoreExtension:n.a.func.isRequired,doRecordingInstall:n.a.func.isRequired,recordingDialog:n.a.string.isRequired,recordingExtensionStatus:n.a.string.isRequired},ns.propTypes={doRecordingDialogsDismiss:n.a.func.isRequired,doRecordingIgnoreExtension:n.a.func.isRequired,doRecordingInstall:n.a.func.isRequired,recordingExtensionStatus:n.a.string.isRequired},is.propTypes={onAccept:n.a.func.isRequired,onCancel:n.a.func.isRequired},rs.propTypes={onAccept:n.a.func.isRequired,onCancel:n.a.func.isRequired},ss.propTypes={onAccept:n.a.func.isRequired,onCancel:n.a.func.isRequired};var cs=Object(s.b)("doRecordingConsent","doRecordingDialogsDismiss","doRecordingIgnoreExtension","doRecordingInstall","selectRecordingDialog","selectRecordingExtensionStatus",os);class ls extends i.PureComponent{render(){const{hasSignalTrouble:e,isRtcConnectionMissing:t,localStream:a,organizationId:o,permissions:n,shouldRequestMediaPermissions:i,shouldShowBrowserSupport:s,shouldShowKnockPage:d,shouldShowNamePrompt:u,shouldShowReviewPage:m}=this.props;return o&&n?s?r.a.createElement(D,null):u?r.a.createElement(qr,null):i?r.a.createElement(Mr,null):m?r.a.createElement(Qr,null):d?r.a.createElement(Tr,null):a?t?r.a.createElement(l.a,null,"Connecting to participants..."):r.a.createElement(r.a.Fragment,null,e&&r.a.createElement(c.a,null,r.a.createElement("p",null,"Difficulties connecting to server."),r.a.createElement("p",null,"Attempting to reconnect...")),r.a.createElement(cr,null),r.a.createElement(cs,null),r.a.createElement(Rr,null),r.a.createElement(mr,null)):r.a.createElement(l.a,null,"Getting camera and microphone..."):r.a.createElement(l.a,null,"Loading ...")}}ls.propTypes={hasSignalTrouble:n.a.bool.isRequired,isRtcConnectionMissing:n.a.bool.isRequired,localStream:n.a.object,organizationId:n.a.string,permissions:n.a.object,shouldRequestMediaPermissions:n.a.bool.isRequired,shouldShowBrowserSupport:n.a.bool.isRequired,shouldShowKnockPage:n.a.bool.isRequired,shouldShowNamePrompt:n.a.bool.isRequired,shouldShowReviewPage:n.a.bool.isRequired};t.a=Object(s.b)("selectHasSignalTrouble","selectIsRtcConnectionMissing","selectLocalStream","selectOrganizationId","selectPermissions","selectShouldRequestMediaPermissions","selectShouldShowBrowserSupport","selectShouldShowKnockPage","selectShouldShowNamePrompt","selectShouldShowReviewPage",ls)},,function(e,t,a){"use strict";var o=a(0),n=a.n(o),i=a(1),r=a.n(i),s=a(2),c=a.n(s),l=a(159),d=a.n(l),u=a(3),m=a(79),p=a.n(m),g=a(47);function h({children:e,displayName:t,avatarUrl:a,fromSelf:n,firstTimestamp:i}){const r=new Date(i),s=`${`${r.getHours()}`.padStart(2,"0")}:${`${r.getMinutes()}`.padStart(2,"0")}`;return o.createElement("div",{className:c()(p.a.ChatMessageGroup,{[p.a.fromSelf]:n})},o.createElement("div",{className:c()(p.a.timestamp)},s),o.createElement("div",{className:c()(p.a.displayName)},t||"Guest"),o.createElement(u.b,{modifiers:["square"],className:p.a.avatarImage,avatarUrl:a,name:t,size:32}),o.createElement("div",{className:c()(p.a.content)},e))}h.propTypes={...g.a,children:r.a.node.isRequired,firstTimestamp:r.a.number.isRequired};var f=o.memo(h),b=a(160),E=a.n(b),R=a(37),S=a.n(R);function I({urlMetadata:e}){if(!e||"failed"===e.status)return null;if("started"===e.status)return o.createElement("div",{className:c()(S.a.spinner)},o.createElement(u.r,null));const{url:t}=e,{image:a,title:n,publisher:i,logo:r}=e.metadata;return o.createElement("div",{className:S.a.ChatExpandedUrlMessage},o.createElement("div",{className:S.a.content},o.createElement(u.a,{href:t,target:"_blank",className:S.a.linkWrapper},o.createElement(o.Fragment,null,a&&o.createElement("img",{className:S.a.headerImage,src:a}),n&&o.createElement("span",{className:S.a.titleWrapper},o.createElement("span",{className:c()(S.a.titleText,S.a.clippedText)},n)))),o.createElement("div",{className:S.a.bottomRow},r&&o.createElement("img",{className:S.a.favicon,src:r}),o.createElement("span",{className:S.a.urlWrapper},o.createElement("span",{className:S.a.clippedText},i||t)))))}I.propTypes={urlMetadata:g.d};var v=o.memo(I),C=(a(7),a(8)),y=a(161),O=a.n(y),w=a(149);function N({canChangeRoomIntegrations:e,config:t,doBootstrapRoomIntegration:a,isEnabled:i,requiredProducts:r,roomIntegrationId:s}){const[c,l]=Object(o.useState)(!1),d=()=>l(!0);if(c||!i&&!e)return null;const m=0!==r.length;return n.a.createElement("div",{className:O.a.IntegrationTeaser},n.a.createElement("div",{className:O.a.descriptionText},"Would you like to open this link inside the room for everyone?"," ",m&&n.a.createElement("span",null,"An integration is available in the paid plans")),n.a.createElement("div",{className:O.a.buttonWrapper},!m&&n.a.createElement(u.d,{modifiers:["extraSmall","primary"],className:"jstest-integrationTeaser-button",onClick:()=>{d(),a({roomIntegrationId:s,config:t,featureSource:"chat"})}},"Open")||e&&n.a.createElement(w.a,null),n.a.createElement(u.d,{modifiers:["extraSmall","secondary"],onClick:d},"Dismiss")))}N.propTypes={canChangeRoomIntegrations:r.a.bool.isRequired,config:r.a.string.isRequired,doBootstrapRoomIntegration:r.a.func.isRequired,isEnabled:r.a.bool.isRequired,requiredProducts:r.a.arrayOf(r.a.string).isRequired,roomIntegrationId:r.a.string.isRequired};var T=Object(C.b)("selectCanChangeRoomIntegrations","doBootstrapRoomIntegration",N);function A({fromSelf:e,urlMetadata:t,tokenizedText:a,integration:n}){return o.createElement(o.Fragment,null,o.createElement("div",{className:E.a.ChatMessage},o.createElement("div",{className:E.a.content},a.map(e=>e.url?o.createElement(u.a,{key:e.id,className:E.a.link,href:e.url,target:"_blank"},e.text):o.createElement("span",{key:e.id},e.text)))),o.createElement(v,{urlMetadata:t}),n&&e&&o.createElement(T,{config:n.config,isEnabled:n.roomIntegration.isEnabled,requiredProducts:n.roomIntegration.productCategories,roomIntegrationId:n.roomIntegration.roomIntegrationId}))}A.propTypes={fromSelf:r.a.bool,integration:r.a.shape({roomIntegration:r.a.shape({roomIntegrationId:r.a.string.isRequired,isEnabled:r.a.bool.isRequired,productCategories:r.a.arrayOf(r.a.string).isRequired}),config:r.a.string}),tokenizedText:g.c.isRequired,urlMetadata:g.d};var k=o.memo(A);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function L({messageGroups:e}){return e?0===e.length?o.createElement("div",{className:c()("jstest-empty-chat",d.a.ChatMessages)},o.createElement("div",{className:d.a.emptyChatPlaceholder},o.createElement("div",null,"Chat messages are cleared when the room is empty"))):o.createElement("div",{className:d.a.ChatMessages},e.map(e=>o.createElement(f,_({},e,{firstTimestamp:e.messages[0].timestamp,key:e.localId}),e.messages.map(t=>o.createElement(k,{key:t.localId,tokenizedText:t.tokenizedText,urlMetadata:t.urlMetadata,integration:t.integration,fromSelf:e.fromSelf}))))):null}L.propTypes={messageGroups:r.a.arrayOf(g.b).isRequired};t.a=o.memo(L)},,function(e,t,a){e.exports=a(587)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"assets/media/chrome_128x128.7d81f51a.png"},function(e,t,a){e.exports=a.p+"assets/media/firefox_128x128.7b9e6fe7.png"},function(e,t,a){e.exports=a.p+"assets/media/opera-logo.8ed61db1.png"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},,,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(54),r=a(8),s=a(38),c=a(33),l=a(147),d=a(207);var u=a(305),m=a(34),p=a(154);a(585),a(586);const g=s.b.create({baseUrl:m.a}),h=new s.a({fetchDeviceCredentials:g.getCredentials.bind(g),baseUrl:m.a}),f=new s.f({apiClient:h}),b=new s.g({organizationService:f,subdomain:c.a.subdomain}),E=new s.e({apiClient:h,fetchOrganization:b.fetchOrganization.bind(b)}),R=new s.d({apiClient:h,extraSupportedFeatures:{audio:{},chat:{},displayName:{},dualPlanSignaling:{server:!0},iosVersionCheckOff:{server:!0},jsGridMobileLayoutOff:{server:!0},embed:{},emptyRoomInvitation:{},help:{},helpOff:{server:!0},intercom:{},leaveButton:{},legacyRoomMembersOn:{server:!0},lowDataOff:{server:!0},mirror:{},namePromptOff:{server:!0},newStart:{server:!0},opusDtx:{server:!0},precallReview:{},preview:{},pwaOff:{server:!0},recording:{},roomIntegrations:{},roundedCornersOff:{server:!0},screenshare:{},sfuP2P:{server:!0},sizeReportingOff:{server:!0},skipMediaPermissionPrompt:{},stats:{},subgridOn:{server:!0},topToolbar:{},turn:{},unifiedPlanPwaOn:{server:!0},video:{},volumeMuteOn:{server:!0}}}),S=new s.h({organizationApiClient:E}),I=new s.j({organizationApiClient:E}),v=new s.k({apiClient:h,organizationApiClient:E}),C=new s.i({apiClient:h,organizationApiClient:E}),y=new s.l({apiClient:h}),O=new s.c({apiClient:h}),w=new class{constructor({baseUrl:e}){this._baseUrl=e}async _fetchResource(e){const t=await fetch(`${this._baseUrl}/assets/locales/${e}/app.ftl`);let a=await t.text();return a=new d.FluentResource(a),{[e]:a}}async createResourcesBundle(e){const t=await this._fetchResource(e),a=new d.FluentBundle(e);return a.addResource(t[e]),a}}({baseUrl:"https://dd0qbd4bsh2i0.cloudfront.net"});l.a.getAll().then(e=>{const t=Object(p.a)({initialState:e,injectServices:{roleService:S,roomService:I,featureService:R,userService:v,organizationServiceCache:b,credentialsService:g,roomIntegrationService:C,utilsService:y,deviceContactPointService:O,fluentService:w}});Object(i.render)(n.a.createElement(r.a,{store:t},n.a.createElement(u.a,null)),document.getElementById("app"))})}],[[360,1,2]]]);
    //# sourceMappingURL=main.2260b4e3.chunk.js.map