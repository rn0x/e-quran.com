export default async function readers() {

    let readers = document.getElementById('readers');

    if (readers) {

        let Search_readers = document.getElementById('Search_readers');

        Search_readers.onkeyup = () => {
            let filter = Search_readers.value.toUpperCase();
            let tr = readers.getElementsByTagName("tr");

            for (let i = 0; i < tr.length; i++) {
                let td = tr[i].getElementsByTagName("td")[1];
                if (td) {
                    let txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }

    }
}