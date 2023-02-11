export default async function history() {

    let history_index_page = document.getElementById('history_index_page');

    if (history_index_page) {

        let history = document.getElementById('history');
        let Search = document.getElementById('Search');

        Search.onkeyup = () => {
            let filter = Search.value.toUpperCase();
            let tr = history.getElementsByTagName("tr");

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