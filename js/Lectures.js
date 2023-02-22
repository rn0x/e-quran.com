export default async function Lectures() {

    let Lectures_index = document.getElementById('Lectures_index');

    if (Lectures_index) {

        let Lectures_index = document.getElementById('Lectures_index');
        let Search_Lectures = document.getElementById('Search_Lectures');

        Search_Lectures.onkeyup = () => {
            let filter = Search_Lectures.value.toUpperCase();
            let tr = Lectures_index.getElementsByTagName("tr");

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