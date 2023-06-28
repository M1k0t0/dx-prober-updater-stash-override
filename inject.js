// https://github.com/Diving-Fish/maimaidx-prober
// https://github.com/huajip/dx-prober-updater
// https://prober.jinale.com/js/score_upload_new.min.js

inject_html=`
<script>
    window.alert('注入成功！');
    function tc(t) {
        btn_upload_img.setAttribute('src', t ? 'data:image/png;base64,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' : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAAB4CAMAAADVAWzCAAABcVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADX50b///+woRgAAAC2trbS3Du9tSLW40KzpBm5sCD8/PnLzzPIyS+2pya2qhzP1znDwCri7njP1DSrnBgKCgrx8fEUEgLT09Ph4eG7u7uYmJjDw8Pc1ZY/Pz/GxCyIfBL8/e/w7dMjIyPj3aqmpqZHR0e+uij29vbx97vg7W/Jv2AqKipoXg759+z0+MdWVla9sT7M0zmnmBehkxV3bRBGPwkvKwYhHgT6/OX4+9/MzMzIyMju9a3r86Tq8peSkpLd6l739ebm5ubd3d3Z2dnn47mfn5/n8Izl8IaDg4NkZGTFu1NNTU2WiRRYUAw7NQjk74DRx3be7Gfb6ldeVgz08d73+tatra3VzYJra2tdXV3BtEc3Nze6rTTNw2zs6MjS1lchqRGyAAAAGnRSTlMATYqWOCIcDelBSPJY1s6n3mwWCMWeLLb4dloAFscAAAndSURBVGjerFf9bxJBEFWKlEqFqqh198jdcYUCpYrRpIWfmtY0JAIVMW3TxEQwhrZpG6MxJv717s7u3dzH7rFWX9IEkrt5ffPmizumeLqaKZXX8oVKIb9WLGVWn975n8hmypUkypns/wl/v1So6FAo3f/X8LmlfCUd+aXcP8S/V6qYoHTvlvEfReKPL85H3flwYA2G8+7o5mIc4Xh0G4IMBugcjQZWHIPRUQcfyfx9+RSDl4+6lg7do+CpYvaWAjqH2xbAa9Xbtuu6hP3Z7VrLswDbh53byMiVY/GdtkvicNtOjKNo7PjKmnzlfFuEJzoIku1z+fzaihnB3fUK4P0c4tskDTZwzN9XAOt3jQgqAjcY34DjUL5115igwwuo0SYmaDd4WXWQwoRgPNQI0MsYjo0oVtaFBdziGjFHmxsuzFhPtTsnquiCEVRRgJGMKqO4EBWVNgrLgYIGEhhSNAIV5UWdPGYEno7gTE/hMYpxendnRRUNUxTMttJVDEVF6WaUGHbdFA+OKWdwU7zoivmhJlgKGk1DcDChwNDUqmDv3kCUJeXCES6zhzR9dkqpYLBTi1a4rVpJYqPNWaMRFa73KTJo4bAZJbaeYieLaapzeesDRYZ0t8WkvaeW0GGFqszyCZW4IulospLtKEXkgPhQnaOrb9THlCyA48/ZnKKQQIIiBdMNGmB/YW+DCEU55fUSwGKkmBmKyMdORxA2AAkJi+PoTfqnW2kiBhAtenA+gbOFzaNkE2gwOdWZzuYTHDlPkknqJprtrE/12Di51rVdN5GmLPjMGpJEcNmjqehdKilYnE58/mVkkpzYnFuIY43XkKZMfPOMZJJwzhmgr07TKL6JwHu2F9yUGjKncNmegIixmTSOV9K+GcWJsprG0dm0Cuvfslp+SdvYy4uRbI2WZcFRsBo1+hzvF69aw3m0EB8SDDW5iNDqUsxoK5BzYkIx01ldwgUt+83GPFqNZtxwcxG27LkidrQcSi7uEYY67rYwer2FTrhyNOWj620TGYi7B4e3qxhNl7xVpvsRmuMkw2Zk0T3nX3aqkXaoVxmFNPzgm6I2L/uhKZhkqO7woM/DHf2ZRYzd02j4sSohWwFxTzGZPoe6ehkEvUQNWNX+eYkz8EA1uDaSDNWXEHUZfzLsUN8HxLuw4X3U4Hz9fSaLGRncWJYopGkVV/SXMIPacGTg2n4jhYphk37BZf2Af/xIN1VXQJ1TNKThk4ABifsqBpszvOJhHwQ2vKCcoam+2dFwZPAtOoCWi51pTc5AX/hGZMEGxoBzSWv4rAc3X7MOJB5MYHnihN+tAcOOv+ce8g8/KGW1tEtUqIUMPwMG/sct4lGncjC1CGKXO01/8MAPfaPfAINDlHDhP95zg8z5xB7nZDbwyvIIwgGGN77Vz/iH15Ra2HIaw98hg5heVcLQo6c89Y1ow1mUvuaBnzEG+Pn5CTRYtvbgBcN35ZfAUP78ZOOKJ8YJlxJo+AQ/TBlDAToanJbJJnrDXZ4ergWwBxpmELQeVgxOQ1cX/CuA2fWLJ4IA9IZXHVZGAYMNRxsEDcvnD/5iEeU18Fi2A/1pYZp0hgM4A2J6DfnyokmyflLZEI+DhqNvoVFJGnaBIDpcYBR6WOiyId/6DMuo4Tu+rUWzwcs2QdAKS3AhzvdAA/rwpxmz+0kjiKI4Fxb5tK0YaJvZnVLEEkkj4UtNVCyJhEhf9YHUjyYqLz4YW2vb/76zd2Y8bLTLYn3o75GWe/bcc+fO4q7rzv5zyfvP9c+PzXJ9+kD77CIHrVAVYtv1qcDETCAwbaHCdbaFqCJpRV99UIOJOQXsyoSFmnrkvs7BJN1Qpi5dN2ScwtL/MD1IzKWq10DSipb6ZMNlylFrr66pWNQCRAjY7BuqXsubTrqpPrl2NR+jCajamk/Btz3mWtVr2qRzevMpRm7EPmEo4QA9UoyEom23RprfZQS3CZdXZA9bwQsRTRL8PpO2L63nftTDijtPFPUVtaYwegjBrQz9oM/51dXeDxcnQvHLZfBg848V80soTr7z/WDvuL0jIeyhw50578GwbAvF0R7fcfae3pFVodiHxD8I7PMbjtyx93Sej5xssYmKixGZj7prqbCFlly3L33E1+iY2ySuXE30v0njPRopcJPGfImSUshy1AeyLxTDmotnWYsssFbB12pDoejLAw46qxQycR3EqRBmhyOMaIv2PSLgve1zqmOIZ5SCQx6fOSkYhI0fc0z4tTQVMyO/clVylEKJFvlEGBPDn+40K9AIec8BP4fGwgW/GFNJKSxQQrfJ302YJ2iEbcKPqI85UrR1kxK04L97U54NdWRTIIppKlvvHh+gLTwMQvBpyg7XzBP/CCLi1bQpeZywAQOUV9cCv0HerWI+wYZg+lJu8lIiivlkKM6CPXkoIAHASrlcr9fL5RU8O4CAOJQ9rhinDCuUiNK8m6RsQWJuINCScsKbm6jECgWihDHR7guTRcWdl8qu0PTbxkKCqBBjiChnkjgSht+1OQVqv4XhyKSQIxWDxrEmOpLniflyOZfA5RdhaErZsRYco5Akk8RASnkiDNWNWnQDG1VhOFE1BiYFShqFZSIzThOJtJWN/YgC+8oAUpYTM0hEyzG0Sa8ObyylPBb3nI3c2YzO8IVj9f2xpxcGmuQvDqIl/nznJihRPfvhhvPjrBoU0PvCWyLilWHIkA37TupGge2rv+dRuzJ7CC2SdzZmc9yQNfeJz52dKBi5QrfA6Mo8PqZIsWd7xDmDrN+nN56+7RSH5rtIfffb/qhiD9fo8tuuThdUD6XigGu88XuUtcVhIu4xt1LRbQiAKsPr7esh1KdodKXi1mPisIAkIMEuYCMcGGAHEEAKGCdOG1nI9qmIymlbIgM/ZQwScMin6DF3NxKtCgENwhR5RSKchSlSNC2xM5ZaoyVm0TL1OwMIKFIojT6hURyGoRlmpMETigi4RegRQJ84bmbQkYZ28xipg+pxU7UfBhAyehQklTUSbzzNZk/e0222Gn0Ub7SaXfxjb9MLCmTRowAF0iwteoYJa4B2t3vU7fKTg97EMywuEWOvtsejQBjMXkeG09EjiggQAgBJgg3LzkVP/o3ehV6kMIDDPEuC4mnvnsHtWD5kfDvAf0nHKYIAJJhizgPrg72L844+iDed8++TwboHckWaLQAJkLAaYH3dVga5BEUTQNwg/sKbxQv0ByGHU8jSFPkiQn/IYjFPkQVAyqEg8devvIe8eh2nIA4OWtROgfzbxMsXaZ1LLr34OvEWDx9iILoNKOVR+WkGYCND85CBgegksxSVLGb0eTVQ/+ksODQLB/15GsvJMBEnuRx7DgolxA4ypULsOUktlJyMziWbcUrJVOy/4Q9QTwOqUHhdJAAAAABJRU5ErkJggg==');
    }
    ;var newHtml = '<img src="data:image/png;base64,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" class="title m_15"><div class="m_15 p_10 t_c" style="background-color:rgba(255, 255, 255, 0.6);box-shadow:1px 3px 0 rgb(0 0 0 / 40%);border:2px solid black;border-radius:5px;"><form id="upload_form"><div class="black m_10 f_13 l_h_12"><input type="text" id="user" placeholder="璐﹀彿ID" value><input type="password" id="pwd" placeholder="瀵嗙爜" value></div><button type="button" class="f_0"><img src="data:image/png;base64,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" id="upload_submit" class="w_120 m_15 m_t_5"></button></form></div><footer class="footer_marquee"><div class="footer w_480"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 480 50" preserveAspectRatio="none" style="height:50px"><path d="M0,0 v25 q5,5 10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 v-25 Z" fill="#7cbc29"></path></svg><div class="m_15 m_t_0 f_13"><div class="m_5"><a href="https://www.diving-fish.com/maimaidx/prober/" target="_blank" class="white">鏌ュ垎鍣ㄧ綉椤�</a></div></div></footer>';
    var btn_upload = document.createElement('button');
    btn_upload.setAttribute('type', 'button');
    btn_upload.setAttribute('name', 'score_upload');
    btn_upload.setAttribute('class', 'setting');
    btn_upload.setAttribute('style', 'margin:-5px 40px 0;');
    var btn_upload_img = document.createElement('img');
    btn_upload_img.setAttribute('class', 'w_120 m_t_5');
    btn_upload_img.setAttribute('style', 'margin-bottom: -10px;');
    tc(1);
    btn_upload.appendChild(btn_upload_img);
    document.getElementsByClassName('setting')[0].parentNode.append(btn_upload);
    var p = 0;
    var o = 0;
    btn_upload.onclick = ()=>{
        if (p)
            return window.location.reload();
        p = 1;
        tc(0);
        document.getElementsByClassName('wrapper')[1].innerHTML = newHtml;
        document.getElementById('upload_submit').onclick = ()=>{
            if (o)
                return;
            o = 1;
            document.getElementById('upload_submit').src = 'data:image/png;base64,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';
            var user = document.getElementById('user').value;
            var pwd = document.getElementById('pwd').value;
            if (user && pwd) {
                var te = 0;
                [0, 1, 2, 3, 4].forEach((diff)=>{
                    $.ajax({
                        url: 'https://maimai.wahlap.com/maimai-mobile/record/musicGenre/search/?genre=99&diff=' + diff,
                        type: 'GET',
                        async: false,
                        success: (res)=>{
                            console.log(res.match("閿欒"));
                            $.ajax({
                                url: 'https://www.diving-fish.com/api/pageparser/page',
                                type: 'POST',
                                data: "<login><u>" + user + "</u><p>" + pwd + "</p></login>" + res.match(/<html.*>([\s\S]*)<\/html>/)[1].replace(/\s+/g, ' '),
                                contentType: 'text/plain',
                                success: (res)=>{
                                    te++;
                                    if (te == 5) {
                                        window.alert('鍒嗘暟涓婁紶瀹屾瘯!');
                                        window.location.reload();
                                    }
                                }
                            });
                        },
                        error: ()=>{
                            window.alert('鍑虹幇鏈煡閿欒! diff:' + diff);
                        }
                    });
                }
                );
            } else {
                window.alert((!user ? '璐︽埛ID' : '瀵嗙爜') + '涓嶈兘涓虹┖');
            }
        }
    }
</script>
`

// console.log($request.url)
// console.log($response.body)

new_body=$response.body.replaceAll('</body>', inject_html+'</body>');
console.log(new_body);

$done({status: $response.status, headers: $response.headers, body: new_body});


