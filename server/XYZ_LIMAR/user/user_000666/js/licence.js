const referrer = document.referrer;

// Проверяем, что реферер начинается с нужного адреса
if (!referrer || !referrer.startsWith('https://backup.bn-team.xyz/server/XYZ_LIMAR/user/')) {
    // Если не соответствует, перенаправляем на главную страницу
    window.location.href = '/';
}
// if (!referrer || !referrer.startsWith('http://127.0.0.1/git/server/XYZ_LIMAR/user/')) {
//     // Если не соответствует, перенаправляем на главную страницу
//     window.location.href = '/';
// }