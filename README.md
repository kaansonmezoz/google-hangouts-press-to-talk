## Press-To-Talk
- A bookmarklet to enable Hold-to-talk feature on Google Hangouts.
- Language-free (not dependendent on language)

## Setup
- Copy the bookmarklet in the below:
    ```javascript:let element=document.querySelector('[aria-label][data-is-muted="false"]');element.click(),element.style.pointerEvents="none",document.addEventListener("keydown",e=>{if(32===e.keyCode){let e=document.querySelector('[aria-label][data-is-muted="true"]');e&&e.click()}}),document.addEventListener("keyup",e=>{if(32===e.keyCode){let e=document.querySelector('[aria-label][data-is-muted="false"]');e&&e.click()}});```

- Go to bookmark manager on Chrome.
- Add new bookmark page.
- Name : Pick whatever title you'd like. Any name, you think it's suitable for the bookmarklet.
- URL : Paste the bookmarklet you have just copied

## How to use it ?
- Once you have started the Hangouts webcam session, click the bookmark you created. It will automatically disable the clickable feature of mic button. From now on, you have to press and hold space for talking. 

- This works only for per session. It means once you have closed your Hangouts session or tab etc, you have to press click the bookmark you have created to enable bookmarklet.