let container = document.getElementById("flex");
const divOpen = "<div class=\"item\">";
const divClose = "</div>";
let RndNums;
function Create() {
    RndNums = [];
    container.innerHTML = null;
    let n = document.getElementById("input").value;
    let ex = Array("Планка на прямых руках с захлестами голеней",
        "Бёрпи с отжиманиями", "Бёрпи с выносом руки и ноги в планке",
        "Прыжки в планке с касанием плеч и разведением ног",
        "Подъем колена из выпада с прыжком", "Приседания с прыжком звездочкой",
        "Колено-локоть в боковой планке ", "Вверх-вниз из планки", "Скалолаз",
        "Прыжки звездочкой", "Бег с высоким подниманием бедра",
        "Прыжки в планке с разведением ног", "Прыжки в планке из стороны в сторону",
        "Скалолаз накрест", "Прыжки с поворотом таза", "Выпады назад из полуприседа",
        "Планка с вращением таза", "Поднимания из планки на кулаках", "Отжимания",
        "Ходьба в планку + прыжок", "Обратная планка с подносом колен", "Бёрпи с выпадами",
        "Отжимания лучник");

    let descr = Array(
        "Планка на прямых руках, стопы на небольшое удаление друг от друга, ладони четко под плечами, спина прямая из такого положения делать поочередные захлестывания голеней",
"Глубокий присед, прыжок в упор лежа, отжимание, возврат прыжком в присед, выпрыгивание вверх",
"Присед, прыжок в упор лежа, вытягивание противоположных конечностей тела возврат прыжком в присед, выпрыгивание вверх",
"В положении планки на вытянутых руках совершать прыжки расставляя и сводя ноги На каждое разведение ног касаться плеча свободной рукой, чередуя между собой правую и левую руку",
"Выпад вперед, и из нижней точки с усилием выпрыгивать, одновременно поднимая к груди колено отведенной назад ноги",
"Из положения приседа совершать прыжки с разведением ног и подниманием рук вверх",
"Корпус опирается на локоть, ноги стоят на боковой части стопы Свободное колено поднимать к груди, одновременно касаясь его свободным локтем",
"В планке на вытянутых руках, не меняя положение тела в пространстве, поочередно сгибать руки и переходить в планку на локтях, и обратно",
"В упоре лежа, попеременно сгибать правую ногу и левую ногу в колене и приводить их к груди",
"Из положения сведенных стоп и опущенных рук совершать прыжки с разведением ног и подниманием рук вверх",
"Бег на месте с высоким подъемом коленей",
"В положении планки на вытянутых руках совершать прыжки расставляя и сводя ноги",
"Планка на прямых руках, прыжок вынося ноги вперед и в сторону, прыжком возврат обратно",
"В упоре лежа, попеременно сгибать правую ногу и левую ногу в колене и приводить их к противоположному плечу",
"Прыжки на носках, поворачивая таз вправо и влево поочередно. Торс остается неподвижным, а руки двигаются в противоположном от нижней части направлении",
"Из состояния полуприседа совершить выпад назад",
"Планка на локтях, переносить вес с одного бедра на другое попутно касаясь пола",
"Совершать подъем из планки на локтях, используя вертикально стоящие кулаки",
"Классические отжимания",
"Из положения стоя идти в планку до упора, после чего вернуться и совершить прыжок",
"Встать в планку грудью вверх, используя в качестве опоры руки поочередно подносить к груди колени",
"Присед, отжимание, присед с подъемом и поочередные выпады на обе ноги",
"Принять упор на разведенных в разные стороны руки, попеременно переносить вес с одной руки на другую, совершая одно отжимание"
    )
    if (n > 23 || n < 1) return;

    for (let i = 0; i < n; i++) {
        let item = divOpen;
        let j = rnd(23);
        item += `<h2>${ex[j]}</h2>`;
        item+=`<p>${descr[j]}</p>`;
        item += divClose;
        container.innerHTML += item;
    }
}
function rnd(max) {
    let num = Math.floor(Math.random() * max);
    for (let i = 0; i < RndNums.length; i++) {
        if (RndNums[i] == num)
            return rnd(max);
    }
    RndNums.push(num);
    return num;
}
