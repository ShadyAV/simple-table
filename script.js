const cells = document.querySelectorAll('.cell');
const block = document.querySelector('#block');

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        block.textContent = cell.textContent;
    });
});

//------------------------------------------------

const data = {
    a0: {
        aa: [3, 9],
        bb: 2,
        cc: { aaa: 4, bbb: -5 },
    },
    a1: {
        aa: [0, 8],
        bb: -7,
        cc: { aaa: 8, bbb: 7 },
    },
    a2: {
        aa: [9, -4],
        bb: 1,
        cc: { aaa: -1, bbb: 8 },
    },
    a3: {
        aa: [8, -1],
        bb: 7,
        cc: { aaa: 3, bbb: 0 },
    },
    a4: {
        aa: [-4, -2],
        bb: -2,
        cc: { aaa: 8, bbb: 9 },
    },
};

//разворачиваем значения каждого из пяти объектов
let values = Object.values(data).map(i => [...i.aa, i.bb, ...Object.values(i.cc)]);
//получаем массив, содержащий пять массивов
console.log(values);
//получаем макс. и мин. значения из объединенного массива
const min = Math.min(...values.flat());
const max = Math.max(...values.flat());
console.log(min);
console.log(max);