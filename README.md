<<<<<<< HEAD
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Kalkulator</p>
<form name="Kalkulator" onsubmit="return false">
    <pre>
    <input type="text" id="nilai1">
    <input type="text" id="nilai2">

    <select name="operator">
        <option value="*">kali</option>
        <option value="+">tambah</option>
        <option value="-">kurang</option>
        <option value="/">bagi</option>
    </select>
    </pre>
    <i id="output"></i>
        <p>
            <input type="button" value="jumlahkan" onclick="proseshiutng()">
    </p>
</form>
<script>
    function proseshiutng () {
        let Nilai1 = parseFloat(document.getElementById("nilai1").value);
        let Nilai2 = parseFloat(document.getElementById("nilai2").value);

        let operator = document.Kalkulator.operator.value;
        let hasil;

        switch(operator) {
            case '*':
                hasil = Nilai1 * Nilai2;
                break;
            case '+':
                hasil = Nilai1 + Nilai2;
                break
            case '-':
                hasil = Nilai1 - Nilai2;
                break
            case '/':
                if (Nilai2 === 0) {
                    hasil = "tidak bisa di nol";
                } else {
                    hasil = Nilai1 / Nilai2;
                }                   
                break;
                default:
                    hasil = "pilih operator dulu";
        }
        document.getElementById("output").innerHTML = "hasil" + hasil;       
    }
</script> 
</body>
</html>
=======
"# Belajar-Laravel" 
>>>>>>> a942035 (first commit)
"# Portfolio" 
"# Belajar-Laravel" 
"# Project_1_bt-" 
"# project_game" 
