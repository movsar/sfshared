/* ServiceComponentController.js */
({
    handleSum: function (component, event, helper) {
        const params = event.getParam('arguments');
        return (params.a + params.b);
    }
})