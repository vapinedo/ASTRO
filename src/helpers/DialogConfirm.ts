import Swal from 'sweetalert2'

export default function dialogConfirm() {
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
