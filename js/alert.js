$(function(){$('#submit').click(function(){$('body').append('<div class="alert alert-success alert-dismissible fade show" role="alert" id="success">User Added Successfully.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span> </button></div><div class="alert alert-danger alert-dismissible fade show" role="alert" id="danger"> Please Checkout The Fields Maybe They"re Left Empty!  <button type="button" class="close" data-dismiss="alert" aria-label="Close">    <span aria-hidden="fl">&times;</span>  </button></div>');});$('#seeTable').click(function(event){$('body').append('<div class="alert alert-warning alert-dismissible fade show" role="alert" id="warning">Table Is Empty, Please Add Some Data.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');if (document.getElementById('table').children.length != 1){$(".table-container").show();event.preventDefault();$('html, body').animate({scrollTop: $('body').height()}, 50);}});

    $("#persian").click(function(){
        $('body').attr('style', 'font-family: IranSans-Light!important');
        $('input').css({
            'direction' : 'rtl'
        });
        $('div.row').addClass('text-right');
        $('div.row').css({
            'direction' : 'rtl'
        });

        document.getElementsByTagName('LINK')[3].setAttribute('href' , 'file:///C:/Users/Amir/Desktop/Project-Class/css/bootstrap.rtl.min.css');

        $("div.border-bottom").addClass('text-right');

        $("div.form-group label").css({
            'right' : '20px'
        });
        
        let lang = 
        {
            'Name' : 'نام',
            'Last Name' : 'نام خانوادگی',
            'Email' : 'ایمیل',
            'Password': 'گذرواژه',
            'Age' : 'سن',
            'Job Title': 'عنوان شغلی',
            'Location' : 'محل اقامت'
        };

        let labels = document.getElementsByTagName('LABEL');
        let i = 0;
        for (var key in lang) {
            labels[i].textContent = lang[key];
            i++;
        }

        let cellDiv = $(".dataTableHeader").children();
        $(cellDiv[0]).text(lang['Name'] + " و " + lang['Last Name']);
        $(cellDiv[1]).text(lang['Age']);
        $(cellDiv[2]).text(lang['Email']);
        $(cellDiv[3]).text(lang['Job Title']);
        $(cellDiv[4]).text(lang['Location']);
        $("#submit").text('ثبت کن');
        $("#seeTable").text('مشاهده جدول');
        document.getElementsByTagName('H3')[0].textContent = 'لطفا فرم را پر کنید';
        document.getElementsByTagName('H3')[1].textContent = 'جدول داده ها';   

    });

    $("#english").click(function(){
        $('body').attr('style', 'font-family: Poppins-Regular!important');
        $('input').css({
            'direction' : 'ltr'
        });

        $('div.row').removeClass('text-right');
        $('div.row').addClass('text-left');
        $('div.row').attr('style' , 'direction :ltr');

        document.getElementsByTagName('LINK')[3].setAttribute('href' , 'file:///C:/Users/Amir/Desktop/Project-Class/css/bootstrap.min.css');

        $("div.border-bottom").removeClass('text-right');
        $("div.border-bottom").addClass('text-left');

        $("div.form-group label").css({
            'right' : ''
        });
        
        let lang = 
        {
            'Name' : 'نام',
            'Last Name' : 'نام خانوادگی',
            'Email' : 'ایمیل',
            'Password': 'گذرواژه',
            'Age' : 'سن',
            'Job Title': 'عنوان شغلی',
            'Location' : 'محل اقامت'
        };

        let labels = document.getElementsByTagName('LABEL');
        let i = 0;
        for (var key in lang) {
            labels[i].textContent = key;
            i++;
        }

        let cellDiv = $(".dataTableHeader").children();
        $(cellDiv[0]).text('Full Name');
        $(cellDiv[1]).text('Age');
        $(cellDiv[2]).text('Email');
        $(cellDiv[3]).text('Job Title');
        $(cellDiv[4]).text('Location');

        $("#submit").text('Submit');
        $("#seeTable").text('See Table');

        document.getElementsByTagName('H3')[0].textContent = 'Fill The Form';
        document.getElementsByTagName('H3')[1].textContent = 'Project Data';
       
    });



    $("#table").on('mouseenter' , 'div.row:not(:first-child)' , function(){
        let child = $(this).children()[4];
        if (document.getElementById('nameText').style.direction == 'rtl'){
            $(child).addClass('closeRowFa');
        }else {
            $(child).addClass('closeRow');
        }
        
        $("#table").on('click' , '.closeRow' , function(){ 
            let parent = $(this).parents()[0];
            $(parent).remove();
        });
        $("#table").on('click' , '.closeRowFa' , function(){ 
            let parent = $(this).parents()[0];
            $(parent).remove();
        });
        
    });
    $("#table").on('mouseleave' , 'div.row:not(:first-child)' , function(){
        let child = $(this).children()[4];
        if (document.getElementById('nameText').style.direction == 'rtl'){
            $(child).removeClass('closeRowFa');
        }else {
            $(child).removeClass('closeRow');
        }
    });
    

});