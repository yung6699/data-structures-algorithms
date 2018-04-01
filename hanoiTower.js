function hanoiTowerMove(num, from, by, to) {
    if (num == 1) {
        console.log(`원반1을 ${from}에서 ${to}로 이동`);
    } else {
        hanoiTowerMove(num - 1, from, to, by)
        console.log(`원반${num}을 ${from}에서 ${to}로 이동`);
        hanoiTowerMove(num - 1, by, from, to)
    }
}


// 원반 갯수, 기둥 A,B,C
hanoiTowerMove(5, 'A', 'B', 'C');
