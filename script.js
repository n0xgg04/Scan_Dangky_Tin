//@n0xgg04
//script

const switchTo = (maMonHoc) => {
    var selector = document.getElementById("selectMonHoc").value = maMonHoc
    selectMonHoc_changed()
    return;
}

const DelayTime = (sec) => {
    return new Promise((res) => {
        setTimeout(() => {
            res();
        }, sec)
    })
}

const luu = (monhoc) => { toDKSelectedChange(monhoc) }

//CONFIG ---------------------------------------------------
const tuDongLuu = true;
const luaChon = ['33', '26', '13', '14', '03']
var monIdSet = 'chk_BAS115126    ';

function getIDmon(idTiet) {
    return `chk_BAS1151${idTiet}    `;
}
//----------------------------------------------------------

var doneTask = 0;
const task = async () => {
    switchTo('BAS1224')
    await DelayTime(1500)
    switchTo('BAS1151')
    await DelayTime(1500)
    for (let i = 0; i < luaChon.length; i++) {
        monIdSet = getIDmon(luaChon[i]);
        var selectedSub = document.getElementById(monIdSet)
        try {
            selectedSub.disabled
        } catch (err) {
            selectedSub.disabled = false;
            console.log(`%cFailed! Chua co slot ${monIdSet}!`, 'color:red')
        }
        if (!selectedSub.disabled) {
            selectedSub.checked = 1;
            luu(selectedSub)
            await DelayTime(1000)
            console.log(`%cSuccess! Da dang ky thanh cong!`, 'color: green;');
            await DelayTime(1500)
            if (tuDongLuu) LuuDanhSachDangKy()
            doneTask = 1;
            break;
        } else {
            console.log(`%cFailed! Chua co slot ${monIdSet}!`, 'color:red')
        }
    }
}

const RunAuto = async (delay = 5000) => {
    while (doneTask == 0) { await task(); await DelayTime(delay); }
}
