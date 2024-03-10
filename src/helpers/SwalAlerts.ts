import Swal from 'sweetalert2'

export function swalConfirm() {
    return Swal.fire({
        title: "Estás seguro?",
        text: "Eliminarás este Curriculum",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar"
    });
}

export function swalSuccess(message: string) {
    return Swal.fire({
        position: "top-end",
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 2500
    });
} 