/*
-	Clone-3 "Whatsapp"
-	Developed by Mayank
-	CopyRight by Whatsapp
-	JavaScript : ./js/script.js
*/
try
{
    let header = document.getElementById('header')

    let footer = document.getElementById('footer')
    
    header.innerHTML = primary_Header_Layout()

    footer.innerHTML = contentLayout()

    let chats = document.getElementById('chats')

    let chatBox = document.getElementsByClassName('chatBox')
    
    /*
        [ primary header layout ]------------------------------
    */ 
    function primary_Header_Layout()
    {
        {
            return (`
                <!-- ( brand name ) -->
                <div class="" id="brand_name"> Whatsapp </div>
                
                <!-- ( tools ) -->
                <div class="" id="tools">
                    
                    <a href="#" class="tool">
                        <span class="bi bi-camera-fill"></span>
                    </a>
                    <a href="https://mastermayank.w3spaces.com" target="_blank" class="tool">
                        <span class="bi bi-search"></span>
                    </a>
                    <button href="#" class="tool" id="dot_menu">
                        <span class="bi bi-three-dots-vertical"></span>
                    </button>

                </div>
                
                <!-- ( float menu ) -->
                <div class="" id="flt_menu">
                    <a herf="#" class="link"> New group </a>
                    <a herf="#" class="link"> New broadcast </a>
                    <a herf="#" class="link"> Linked device </a>
                    <a herf="#" class="link"> Started  messages </a>
                    <a herf="#" class="link"> Payments </a>
                    <a herf="#" class="link"> Settings </a>
                </div>
            `)
        }
    }

    /*
        [ secondary header layout ]-------------------------------------------
    */ 
    function secondary_Header_Layout()
    {
        {
            return (`
                <!-- ( person identiry detail ) -->
                <div class="" id="person">

                    <div id="person_dp">
                        <span class="bi bi-person-circle"></span>
                    </div>

                    <div id="person_name"> Mayank </div>

                </div>
                <!-- ( feature ) -->
                <div class="" id="features">
                    
                    <a href="#" class="feature">
                        <span class="bi bi-camera-video-fill"></span>
                    </a>
                    <a href="#" class="feature">
                        <span class="bi bi-telephone-fill"></span>
                    </a>
                    <a href="#" class="feature">
                        <span class="bi bi-three-dots-vertical"></span>
                    </a>

                </div>
            `)
        }
    }

    /*
        [ content inside layout ]------------------------------
    */ 
    function contentLayout()
    {
        {
            return (`
                <!--
                    ---------------
                    [ nav section ]------------------------------------
                    ---------------
                -->
                <nav id="navbar">
                    
                    <span class="bi bi-people-fill" id="group_icon"></span>
                    
                    <div id="nav">
                        <a href="#" class="active"> CHATS </a>
                        <a href="#status"> STATUS </a>
                        <a href="#call"> CALLS </a>
                    </div>
                    
                </nav>
                <!--
                    ----------------
                    [ chat section ]------------------------------------
                    ----------------
                -->
                <section id="chats"></section>
                <!--
                    ------------------
                    [ message button ]-----------------------------------
                    ------------------
                -->
                <div id="msg_btn">
                    <span class="bi bi-chat-right-text-fill"></span>
                </div>
                
                <!-- <span class="bi bi-collection"></span> -->
            `)
        }
    }

    /*
        [ message layout ]-----------------------------------------------------
    */
    function message_Layout()
    {
        {
            return (`
                <!--
                    ------------------
                    [ message section ]------------------------------------
                    ------------------
                -->
                <section class="" id="messages"></section>
                <!--
                    --------------------
                    [ type pad section ]------------------------------------
                    --------------------
                -->
                <section class="" id="type_pad">
                    
                    <div id="input_form">

                        <span class="bi bi-emoji-smile"></span>

                        <input type="text" id="text_fld" placeholder="Type a message">

                        <span class="bi bi-paperclip"></span>
                        <spn class="bi bi-ruppes"> &#8377; </spn>
                        <span class="bi bi-camera-fill"></span>

                    </div>

                    <div id="mic">
                        <span class="bi bi-mic-fill"></span>
                    </div>

                </section>
            `)
        }
    }

    function about()
   {
        let dot_menu = document.getElementById('dot_menu')

        let flt_menu = document.getElemetById('flt_menu')

        dot_menu.onclick = () => {
        
            alert('done')
            flt_menu.style.display = `block`
        }
   }

    /*
        -------------------------------------------------------------------------------
        [ chat box layout ] get chat data argument and return layout
        -------------------------------------------------------------------------------
    */ 
    function chat_Box_Layout(data)
    {
        if (data.person_dp == null)
        {
            return (`
                <div class="chatBox">

                    <div class="chat_dp">
                        <span class="bi bi-person-circle"></span>
                    </div>
                    
                    <div class="chat_detail">
                        <div>
                            <div class="person_name"> ${data.person_name} </div>
                            <time> ${data.chat[data.chat.length - 1].time} </time>
                        </div>
                        <div>
                            <div class="short_message"> ${data.chat[0].data} </div>
                            <div class="notice"> 1 </div>
                        </div>
                    </div>

                </div>
            `)
        }
        else
        {
            return (`
                <div class="chatBox">

                    <!-- ( chating box display picture ) -->
                    <div class="chat_dp">
                        <img src='${data.person_dp }' class='image_dp'>
                    </div>
                    
                    <!-- ( chat detail ) -->
                    <div class="chat_detail">
                        <div>
                            <div class="person_name"> ${data.person_name} </div>
                            <time> ${data.chat[data.chat.length - 1].time} </time>
                        </div>
                        <div>
                            <div class="short_message"> ${data.chat[0].data} </div>
                        </div>
                    </div>

                </div>
            `)
        }
    }


    /*
        -----------------------------------------------------------------------------------------
        | message section function | return message in section by take index number in argument
        -----------------------------------------------------------------------------------------
    */ 
    function message_Section(index)
    {
        let messages = document.getElementById('messages')

        let person_name = document.getElementById('person_name')

        let person_dp = document.getElementById('person_dp')

        messages.innerHTML = "" // clear message section

        person_name.innerHTML = `${chatData[index].person_name}` // set name of person
        
        /*
            [ set person dp  if not null ]-------------------------------------------------------  
        */

        if (chatData[index].person_dp != null)
        {
            person_dp.innerHTML = `<img src='${chatData[index].person_dp}' class='image_dp'>`
        }
        else
        {
            person_dp.innerHTML = `<span class="bi bi-person-circle"></span>`
        }

        messages.insertAdjacentHTML("beforeend",`<span class='date'> ${chatData[index].date} </span>`)

        /*
            [ return as loop until to chat length ]----------------------------------------------
        */ 
        for (let i = 0; i < chatData[index].chat.length; i++)
        {
            if (chatData[index].chat[i].read == 1)
            {
                messages.insertAdjacentHTML("beforeend",`<div class='left'>${chatData[index].chat[i].data} <time> ${chatData[index].chat[i].time} </time> <d/iv>`)
            }
            else
            {
                messages.insertAdjacentHTML("beforeend",`<div class='right'>${chatData[index].chat[i].data} <time> ${chatData[index].chat[i].time} </time> <d/iv>`)
            }    
        }
    }

    /*
        [ return as loop until to chat length ]----------------------------------------------
    */ 
    for (let i = 0; i < chatData.length; i++)
    {
        chats.insertAdjacentHTML("beforeend",`${ chat_Box_Layout(chatData[i]) }`)

        chatBox[i].onclick = () => {

            header.innerHTML = secondary_Header_Layout()

            footer.innerHTML = message_Layout()
            
            message_Section(i)

        }    
    }
    about()
}
catch(error)
{
    console.log(error)
}
// the end ===
