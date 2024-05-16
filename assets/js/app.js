function same_check() {
    const ord_name = document.getElementById("ord_name");
    const ord_email = document.getElementById("ord_email");
    const ord_hp = document.getElementById("ord_hp");
    const ord_zipcode = document.getElementById("ord_zipcode");
    const ord_roadAddr1 = document.getElementById("ord_roadAddr1");
    const ord_roadAddr2 = document.getElementById("ord_roadAddr2");

    const rcv_name = document.getElementById("rcv_name");
    const rcv_email = document.getElementById("rcv_email");
    const rcv_hp = document.getElementById("rcv_hp");
    const rcv_zipcode = document.getElementById("rcv_zipcode");
    const rcv_addr1 = document.getElementById("rcv_addr1");
    const rcv_addr2 = document.getElementById("rcv_addr2");

    const same = document.getElementById("same");

    same.addEventListener("change", () => {
        if (same.checked === true) {
            rcv_name.value = ord_name.value ?? "";
            rcv_email.value = ord_email.value ?? "";
            rcv_hp.value = ord_hp.value ?? "";
            rcv_zipcode.value = ord_zipcode.value ?? "";
            rcv_addr1.value = ord_roadAddr1.value ?? "";
            rcv_addr2.value = ord_roadAddr2.value ?? "";
            if (rcv_name.value === ord_name.value) {
                ord_name.readOnly = true;
            }
            if (rcv_email.value === ord_email.value) {
                ord_email.readOnly = true;
            }
            if (rcv_hp.value === ord_hp.value) {
                ord_hp.readOnly = true;
            }
        } else {
            ord_name.readOnly = false;
            ord_email.readOnly = false;
            ord_hp.readOnly = false;
            rcv_name.value = "";
            rcv_email.value = "";
            rcv_hp.value = "";
            rcv_zipcode.value = "";
            rcv_addr1.value = "";
            rcv_addr2.value = "";
        }
    });
}

function checkedAll(selectAll, name) {
    const checkboxes = document.getElementsByName(name + "[]");
    checkboxes.forEach((checkbox) => {
        if (!checkbox.disabled) checkbox.checked = selectAll.checked;
    });
}

const base_loading_show = () => {
    let loading = document.getElementById("base-loading");
    if (loading !== null) loading.classList.remove("hide");
};

const base_loading_hide = () => {
    let loading = document.getElementById("base-loading");
    if (loading !== null) loading.classList.add("hide");
};

// 쿠키 입력
function set_cookie(name, value, expirehours, domain) {
    var today = new Date();
    today.setTime(today.getTime() + 60 * 60 * 1000 * expirehours);
    document.cookie =
        name +
        "=" +
        encodeURIComponent(value) +
        "; path=/; expires=" +
        today.toGMTString() +
        ";";
    if (domain) {
        document.cookie += "domain=" + domain + ";";
    }
}

// 쿠키 얻음
function get_cookie(name) {
    var find_sw = false;
    var start, end;
    var i = 0;

    for (i = 0; i <= document.cookie.length; i++) {
        start = i;
        end = start + name.length;

        if (document.cookie.substring(start, end) == name) {
            find_sw = true;
            break;
        }
    }

    if (find_sw == true) {
        start = end + 1;
        end = document.cookie.indexOf(";", start);

        if (end < start) end = document.cookie.length;

        return decodeURIComponent(document.cookie.substring(start, end));
    }
    return "";
}

// 쿠키 지움
function delete_cookie(name) {
    var today = new Date();

    today.setTime(today.getTime() - 1);
    var value = get_cookie(name);
    if (value != "")
        document.cookie =
            name + "=" + value + "; path=/; expires=" + today.toGMTString();
}

async function summernoteUploadUser(files, editor, url) {
    let formData = new FormData();
    let fileArr = Array.prototype.slice.call(files);
    fileArr.forEach(function (f) {
        if (!f.type.match("image.*")) {
            alert("이미지 파일만 업로드 가능합니다.");
            return false;
        }
    });
    for (let i = 0; i < files.length; i++) {
        formData.append("img[]", files[i]);
    }

    base_loading_show();
    await axios({
        url: url,
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        data: formData,
    })
        .then((response) => {
            // console.log(response.data)
            if (response.data.status == "ok") {
                let data = response.data.list;
                for (let i = 0; i < data.length; i++) {
                    $(editor).summernote(
                        "pasteHTML",
                        "<img src='" +
                            data[i].url +
                            "' style='width:" +
                            data[i].width +
                            ";' />"
                    );
                }
            }
        })
        .catch((error) => {
            // console.error(error)
            if (error.response.data.status == "fail") {
                alert(error.response.data.message);
            }
        })
        .finally(function () {
            base_loading_hide();
            // location.reload();
        });
}
