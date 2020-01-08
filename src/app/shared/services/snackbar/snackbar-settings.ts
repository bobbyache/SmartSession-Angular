export class SnackBarSettings {
    static defaultErrorMessage() {
        return 'An unexpected error occurred and we are not able to process your request.';
    }

    static defaultConfig() {
        return {
            duration: 5000
        };
    }

    static errorConfig() {
        return {
            duration: 5000,
            panelClass: 'snackbar-error'
        };
    }

    static actionConfig() {
        return {
            duration: 10000,
            panelClass: 'snackbar-action'
        };
    }
}
