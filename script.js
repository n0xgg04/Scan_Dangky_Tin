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
const monIdSet = 'chk_BAS115126    ';
const tuDongLuu = false;
//----------------------------------------------------------


const task = async () => {
    switchTo('BAS1224')
    await DelayTime(3000)
    switchTo('BAS1151')
    await DelayTime(2000)
    var selectedSub = document.getElementById(monIdSet)
    if (!selectedSub.disabled) {
        selectedSub.checked = 1;
        luu(selectedSub)
        await DelayTime(1000)
        console.log(`%cSuccess! Da dang ky thanh cong !`, 'color: green;');
        await DelayTime(4000)
        if(tuDongLuu) LuuDanhSachDangKy()
    } else {
        console.log('%cFailed! Chua co slot !', 'color:green')
    }
}

const RunAuto = async (delay = 5000) => {
    while (true) { await task(); await DelayTime(delay); }
}
