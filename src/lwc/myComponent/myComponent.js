import {LightningElement, track, api} from 'lwc';

export default class MyComponent extends LightningElement {
    @track dialogConfig = {
        header: 'Sales Script Manager',
        negativeButtonTitle: 'Cancel',
        positiveButtonTitle: 'OK',
        message: '',
        onConfirm: null,
        isVisible: false,
        onCancel: () => {
            this.dialogConfig.isVisible = false;
        },
    };

    selectedScriptScreen = null;

    getDefaultConfig() {
        return {
            header: 'Sales Script Manager',
            negativeButtonTitle: 'Cancel',
            positiveButtonTitle: 'OK',
            message: '',
            onConfirm: null,
            isVisible: false,
        };
    }

    showAlert(message) {
        let alertConfig = this.getDefaultConfig();
        alertConfig.negativeButtonTitle = null;
        alertConfig.onConfirm = () => {
            this.dialogConfig.isVisible = false;
        };
        alertConfig.message = message;
        alertConfig.isVisible = true;
        this.dialogConfig = alertConfig;
    }

    isNullOrEmpty(variable) {
        return (variable === undefined || variable === null || variable.length === 0);
    }

    onClick(){
        const self = this;

        this.dialogConfig = this.getDefaultConfig();
        this.dialogConfig.message = 'Are you sure?';
        this.dialogConfig.onConfirm =  () => {
            console.log(self.selectedScriptScreenId);
            this.selectedScriptScreenId = 22;
            this.dialogConfig.isVisible = false;
        };
        this.dialogConfig.isVisible = true;
    }

    connectedCallback() {
        this.selectedScriptScreenId = 12;
    }
}