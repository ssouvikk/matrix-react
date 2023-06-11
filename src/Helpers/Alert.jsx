import Swal from 'sweetalert2'

export class ToastService {
    title;
    icon;
    toast;

    constructor() {
        this.toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
    }

    showAlert() {
        this.toast.fire({
            icon: this.icon,
            title: this.title
        })
    }

    static success(msg) {
        const vm = new ToastService();
        vm.icon = 'success';
        vm.title = '<p class="text-success">' + msg + '</p>';;
        vm.showAlert();
    }

    static error(msg) {
        const vm = new ToastService();
        vm.icon = 'error';
        vm.title = '<p class="text-danger">' + msg + '</p>';
        vm.showAlert();
    }
}
