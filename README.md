<<<<<<< HEAD
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
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> a97d130 (first commit)
