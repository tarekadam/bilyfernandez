function tagAppEventListener(m) {
    let message;
    try {
        message = JSON.parse(m.data)
    } catch (e) {
        return;
    }
    if (typeof message.app == 'undefined' || message.app != 'tagApp') {
        return;
    }
    console.log(message)

    /**
     * HANDLERS
     * You can respond to tagApp events here.
     */

}