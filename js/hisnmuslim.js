export default async function hisnmuslim() {

    let hisnmuslim_pages_home = document.getElementById('hisnmuslim_pages_home');

    if (hisnmuslim_pages_home) {

        let hisnmuslim_index = document.getElementById('hisnmuslim_index');
        let Search_hisnmuslim = document.getElementById('Search_hisnmuslim');

        Search_hisnmuslim.onkeyup = () => {
            let filter = Search_hisnmuslim.value.toUpperCase();
            let tr = hisnmuslim_index.getElementsByTagName("tr");

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