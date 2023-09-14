const testList = {

    a: // อณุกรมเลขคณิต
    [
        { // 1
            id:"2 3 5 8 12 ...",
            ans: 4, // 17
            choice: generateChoice(14,16,15,17)
        },
        { // 2
            id:"119 120 122 123 126 127 ...",
            ans: 2, // 131
            choice: generateChoice(130,131,140,141)
        },
        { // 3
            id:"4 11 30 67 128 ...",
            ans: 4, // 219
            choice: generateChoice(147,186,195,219)
        },
        { // 4
            id:"3H8 5I9 7J11 9K14 ...",
            ans: 1, // 11L14
            choice: generateChoice("11L14","11L19","15M17","17O19")
        },
        { // 5
            id:"จากอนุกรม 2 ชุด ที่กำหนดให้ จงพิจารณาว่า ตัวเลขที่ผิดในอนุกรมชุดที่ 1 และ 2 คือข้อใด อนุกรมชุดที่ 1 คือ 2 3 5 8 11 17 อนุกรมชุดที่ 2 คือ 10 15 16 20 22 27",
            ans: 1, // 11,20
            choice: generateChoice("11,20","5,16","27,8","11,16")
        },
        { // 6
            id:"จงหา ค.ร.น. ของจำนวน 21 84 และ 105",
            ans: 3, // 420
            choice: generateChoice(3,275,420,565)
        },
        { // 7
            id:"5 % ของจำนวนหนึ่ง มีค่าเท่ากับ 200 อยากทราบว่าจำนวนนั้นมีค่าเท่าใด",
            ans: 1, // 400
            choice: generateChoice("4,000","3,500","4,600","12,500")
        },
        { // 8
            id:"นางสาวพอใจได้รับเงินเดือนๆ 14,775 เพราะถูกหักเข้ากองทุนประกันสังคม หาก อัตราเงินเดือนนางสาวพอใจคือ 15,000 บาท อยากทราบว่า นางสาวพอใจถูกหัก ค่าประกันสังคมกี่เปอร์เซ็นต์",
            ans: 1, // 1.5%
            choice: generateChoice("1.5%","1.7%","2.5%","3%")
        },
        { // 9
            id:"แรงงาน 15 คน สร้างบ้านหนึ่งหลังเสร็จในเวลา 20 วัน ถ้ามีแรงงานเพียง 10 คน จะสร้างบ้านให้เสร็จต้องเพิ่มเวลาในการสร้างบ้านอีกกี่เปอร์เซ็นต",
            ans: 4, // 50%
            choice: generateChoice("20%","35%","40%","50%")
        },
        { // 10
            id:"นงนุชมองนาฬิกาบนผนังห้อง พบว่าขณะนี้เป็นเวลา 08.00 น. อยากทราบว่าเข็ม สั้นจะทำมุมกับเข็มยาวกี่องศา",
            ans: 2, // 120
            choice: generateChoice(6,120,90,45)
        },
    ],

    b: // ตรีโกณมิติ
    [
        { // 1
            id:"",
            ans: 4,
            choice: generateChoice(0.751,0.2381,0.546,0.3640)
        },
        { // 2
            id:"119 120 122 123 126 127 ...",
            ans: 2, // 131
            choice: generateChoice(130,131,140,141)
        },
        { // 3
            id:"4 11 30 67 128 ...",
            ans: 4, // 219
            choice: generateChoice(147,186,195,219)
        },
        { // 4
            id:"3H8 5I9 7J11 9K14 ...",
            ans: 1, // 11L14
            choice: generateChoice("11L14","11L19","15M17","17O19")
        },
        { // 5
            id:"จากอนุกรม 2 ชุด ที่กำหนดให้ จงพิจารณาว่า ตัวเลขที่ผิดในอนุกรมชุดที่ 1 และ 2 คือข้อใด อนุกรมชุดที่ 1 คือ 2 3 5 8 11 17 อนุกรมชุดที่ 2 คือ 10 15 16 20 22 27",
            ans: 1, // 11,20
            choice: generateChoice("11,20","5,16","27,8","11,16")
        },
        { // 6
            id:"จงหา ค.ร.น. ของจำนวน 21 84 และ 105",
            ans: 3, // 420
            choice: generateChoice(3,275,420,565)
        },
        { // 7
            id:"5 % ของจำนวนหนึ่ง มีค่าเท่ากับ 200 อยากทราบว่าจำนวนนั้นมีค่าเท่าใด",
            ans: 1, // 400
            choice: generateChoice("4,000","3,500","4,600","12,500")
        },
        { // 8
            id:"นางสาวพอใจได้รับเงินเดือนๆ 14,775 เพราะถูกหักเข้ากองทุนประกันสังคม หาก อัตราเงินเดือนนางสาวพอใจคือ 15,000 บาท อยากทราบว่า นางสาวพอใจถูกหัก ค่าประกันสังคมกี่เปอร์เซ็นต์",
            ans: 1, // 1.5%
            choice: generateChoice("1.5%","1.7%","2.5%","3%")
        },
        { // 9
            id:"แรงงาน 15 คน สร้างบ้านหนึ่งหลังเสร็จในเวลา 20 วัน ถ้ามีแรงงานเพียง 10 คน จะสร้างบ้านให้เสร็จต้องเพิ่มเวลาในการสร้างบ้านอีกกี่เปอร์เซ็นต",
            ans: 4, // 50%
            choice: generateChoice("20%","35%","40%","50%")
        },
        { // 10
            id:"นงนุชมองนาฬิกาบนผนังห้อง พบว่าขณะนี้เป็นเวลา 08.00 น. อยากทราบว่าเข็ม สั้นจะทำมุมกับเข็มยาวกี่องศา",
            ans: 2, // 120
            choice: generateChoice(6,120,90,45)
        },

    ],

    c: // อณุกรมเรขาคณิต
    [
        { // 1
            id:"อนุกรมเรขาคณิตชุดหนึ่งมีผลบวก 3 พจน์แรก เป็น 9 และผลบวก 6 พจน์แรก เป็น -63 จงหาผลบวก 9 พจน์แรก",
            ans: "513",
            choice: generateChoice(205,306,102,513)
        },

    ]
};

function generateChoice(a,b,c,d){
    return [undefined,a,b,c,d]
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min
}

function pickRandom(arr){
    if (arr.length === 0) {
        return undefined
      }
    
      const randomIndex = Math.floor(Math.random() * arr.length)
      const randomValue = arr.splice(randomIndex, 1)[0]
    
      return randomValue
}

function getTest(test, maxpage=10){
    let result = []
    let allPage = Array.from(Array(maxpage), (_, index) => index + 1);
    console.log(allPage)
    test = testList[test]
    if (test == undefined) {
        return console.log("Test not found")
    }
    for (let index = 0; index < test.length; index++) {
        let randomPage = pickRandom(allPage) 
        result[randomPage] = test[index]
    }
    console.log(result)
    return result
}

export {getTest}