var APP_DATA = {
  "scenes": [
    {
      "id": "0-sciezka",
      "name": "sciezka",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "1-sciezka-blizej"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sciezka-blizej",
      "name": "sciezka blizej",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "2-przed-wejsciem"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-przed-wejsciem",
      "name": "przed wejsciem",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.101833644508126,
          "pitch": -0.010035489555644261,
          "rotation": 1.5707963267948966,
          "target": "3-sciezka-po-prawej"
        },
        {
          "yaw": -0.5943411657701425,
          "pitch": 0.09446521828828125,
          "rotation": 4.71238898038469,
          "target": "27-sciezka-lewa"
        },
        {
          "yaw": 0.11071939995886027,
          "pitch": 0.15282220358617238,
          "rotation": 0,
          "target": "29-srodek-budynku"
        },
        {
          "yaw": 0.7479764878236548,
          "pitch": 0.2361019290183748,
          "rotation": 0.7853981633974483,
          "target": "7-wejscie-na-spirale-prawe"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-sciezka-po-prawej",
      "name": "sciezka po prawej",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2961612538787186,
          "pitch": 0.09072302711816249,
          "rotation": 0,
          "target": "4-sciezka-po-prawej-2"
        },
        {
          "yaw": -2.2932855298697525,
          "pitch": 0.28281990297521276,
          "rotation": 0,
          "target": "2-przed-wejsciem"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-sciezka-po-prawej-2",
      "name": "sciezka po prawej 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0080809333594285,
          "pitch": 0.051134056025087915,
          "rotation": 0,
          "target": "5-sciezka-po-prawej-3"
        },
        {
          "yaw": -2.4527008244066693,
          "pitch": 0.2650902379744746,
          "rotation": 0,
          "target": "3-sciezka-po-prawej"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-sciezka-po-prawej-3",
      "name": "sciezka po prawej 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.13235876194010388,
          "pitch": 0.12353590309540863,
          "rotation": 0,
          "target": "6-tyl-budynku"
        },
        {
          "yaw": -2.4561888762886355,
          "pitch": 0.16297864691950714,
          "rotation": 0,
          "target": "4-sciezka-po-prawej-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-tyl-budynku",
      "name": "tyl budynku",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0735022386380884,
          "pitch": 0.12541448354968665,
          "rotation": 0,
          "target": "5-sciezka-po-prawej-3"
        },
        {
          "yaw": 0.8557333014899697,
          "pitch": 0.12581451597974258,
          "rotation": 0,
          "target": "27-sciezka-lewa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-wejscie-na-spirale-prawe",
      "name": "wejscie na spirale prawe",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10467054602234072,
          "pitch": 0.19054505129894572,
          "rotation": 0,
          "target": "8-wejscie-na-spirale-2"
        },
        {
          "yaw": -2.8450013946624004,
          "pitch": 0.4988710334023452,
          "rotation": 0,
          "target": "2-przed-wejsciem"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-wejscie-na-spirale-2",
      "name": "wejscie na spirale 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.05650755519968165,
          "pitch": 0.2170567534532033,
          "rotation": 0,
          "target": "9-wejscie-na-spirale-3"
        },
        {
          "yaw": -2.7149422753487773,
          "pitch": 0.4905333671724801,
          "rotation": 0,
          "target": "8-wejscie-na-spirale-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-wejscie-na-spirale-3",
      "name": "wejscie na spirale 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.013467700816271133,
          "pitch": 0.17070365012408395,
          "rotation": 0,
          "target": "10-wejscie-na-spirale-4"
        },
        {
          "yaw": -2.405187650493822,
          "pitch": 0.24896336188515988,
          "rotation": 0,
          "target": "8-wejscie-na-spirale-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-wejscie-na-spirale-4",
      "name": "wejscie na spirale 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.010774394785943997,
          "pitch": 0.1628512263987787,
          "rotation": 0,
          "target": "11-wejscie-na-spirale-5"
        },
        {
          "yaw": -2.854352923653435,
          "pitch": 0.5052764951416364,
          "rotation": 0,
          "target": "9-wejscie-na-spirale-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-wejscie-na-spirale-5",
      "name": "wejscie na spirale 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06724106283826181,
          "pitch": 0.13093967116846095,
          "rotation": 0,
          "target": "12-wejscie-na-spirale-6"
        },
        {
          "yaw": -2.471899838614842,
          "pitch": 0.38238105354935925,
          "rotation": 0,
          "target": "10-wejscie-na-spirale-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-wejscie-na-spirale-6",
      "name": "wejscie na spirale 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5309749894434468,
          "pitch": 0.1316348858651395,
          "rotation": 0,
          "target": "13-wejscie-na-spirale-7"
        },
        {
          "yaw": -2.8554917617145694,
          "pitch": 0.5332646940950312,
          "rotation": 0,
          "target": "11-wejscie-na-spirale-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-wejscie-na-spirale-7",
      "name": "wejscie na spirale 7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.28558763878872284,
          "pitch": 0.05679997294762096,
          "rotation": 0,
          "target": "14-wejscie-na-spirale-8"
        },
        {
          "yaw": -2.446283122910952,
          "pitch": 0.4112754950897184,
          "rotation": 0,
          "target": "12-wejscie-na-spirale-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-wejscie-na-spirale-8",
      "name": "wejscie na spirale 8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7432385572140952,
          "pitch": -0.09071548833087739,
          "rotation": 0,
          "target": "15-wejscie-na-spirale-9"
        },
        {
          "yaw": 3.1189834281923563,
          "pitch": 0.510275462200017,
          "rotation": 0,
          "target": "13-wejscie-na-spirale-7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-wejscie-na-spirale-9",
      "name": "wejscie na spirale 9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "16-wejscie-na-spirale-10"
        },
        {
          "yaw": -2.5328550266863807,
          "pitch": 0.5468417156186689,
          "rotation": 0,
          "target": "14-wejscie-na-spirale-8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-wejscie-na-spirale-10",
      "name": "wejscie na spirale 10",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.44270706437625584,
          "pitch": -0.014603058227340426,
          "rotation": 0,
          "target": "17-wejscie-na-spirale-11"
        },
        {
          "yaw": -2.9384077654097958,
          "pitch": 0.6076053560695485,
          "rotation": 0,
          "target": "15-wejscie-na-spirale-9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-wejscie-na-spirale-11",
      "name": "wejscie na spirale 11",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2378445475737916,
          "pitch": 0.11726365345896639,
          "rotation": 0,
          "target": "18-gora-spirala"
        },
        {
          "yaw": -2.4252642596747798,
          "pitch": 0.4841093633384208,
          "rotation": 0,
          "target": "16-wejscie-na-spirale-10"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-gora-spirala",
      "name": "gora spirala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7283507830705229,
          "pitch": 0.23023680270638636,
          "rotation": 0,
          "target": "19-zejscie-ze-spirali"
        },
        {
          "yaw": -2.0250583995054505,
          "pitch": 0.48503679046828196,
          "rotation": 0,
          "target": "17-wejscie-na-spirale-11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-zejscie-ze-spirali",
      "name": "zejscie ze spirali",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9959178441748868,
          "pitch": 0.5025439103086189,
          "rotation": 6.283185307179586,
          "target": "20-zejscie-ze-spirali-1"
        },
        {
          "yaw": -1.514018136809776,
          "pitch": 0.16087612856827604,
          "rotation": 0,
          "target": "18-gora-spirala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-zejscie-ze-spirali-1",
      "name": "zejscie ze spirali 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5314477190772635,
          "pitch": 0.4074929854689451,
          "rotation": 0,
          "target": "21-zejscie-ze-spirali-2"
        },
        {
          "yaw": -3.0841003330870134,
          "pitch": 0.15251651662132915,
          "rotation": 0,
          "target": "19-zejscie-ze-spirali"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-zejscie-ze-spirali-2",
      "name": "zejscie ze spirali 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5316263424460317,
          "pitch": 0.0758927148801245,
          "rotation": 0,
          "target": "20-zejscie-ze-spirali-1"
        },
        {
          "yaw": 1.7641535559555575,
          "pitch": 0.49555859742755715,
          "rotation": 0,
          "target": "22-zejscie-ze-spirali-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-zejscie-ze-spirali-3",
      "name": "zejscie ze spirali 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.446080567422415,
          "pitch": 0.021914798951243597,
          "rotation": 0,
          "target": "21-zejscie-ze-spirali-2"
        },
        {
          "yaw": 1.757721352553693,
          "pitch": 0.5334536525749982,
          "rotation": 0,
          "target": "23-zejscie-ze-spirali-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-zejscie-ze-spirali-4",
      "name": "zejscie ze spirali 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.017409998853587,
          "pitch": 0.1351778675651918,
          "rotation": 0,
          "target": "22-zejscie-ze-spirali-3"
        },
        {
          "yaw": 1.6450074959005372,
          "pitch": 0.7288049539703643,
          "rotation": 0,
          "target": "24-zejscie-ze-spirali-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-zejscie-ze-spirali-5",
      "name": "zejscie ze spirali 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8393514857268922,
          "pitch": 0.05349642665624188,
          "rotation": 0,
          "target": "23-zejscie-ze-spirali-4"
        },
        {
          "yaw": 0.8160800312961225,
          "pitch": 0.49968000960844705,
          "rotation": 0,
          "target": "25-zejscie-ze-spirali-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-zejscie-ze-spirali-6",
      "name": "zejscie ze spirali 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0891363274192187,
          "pitch": 0.11620766660677262,
          "rotation": 0,
          "target": "11-wejscie-na-spirale-5"
        },
        {
          "yaw": 0.9051783987907704,
          "pitch": 0.501693925967988,
          "rotation": 0,
          "target": "26-zejscie-ze-spirali-7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-zejscie-ze-spirali-7",
      "name": "zejscie ze spirali 7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.20451525166641815,
          "pitch": 0.2003672656616864,
          "rotation": 0,
          "target": "27-sciezka-lewa"
        },
        {
          "yaw": -2.7544182593262505,
          "pitch": 0.051474275752795506,
          "rotation": 0,
          "target": "25-zejscie-ze-spirali-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-sciezka-lewa",
      "name": "sciezka lewa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07065268902221966,
          "pitch": 0.29310853537138293,
          "rotation": 6.283185307179586,
          "target": "28-wejscie-do-budynku"
        },
        {
          "yaw": 3.0584997767018303,
          "pitch": 0.24102539015724211,
          "rotation": 0.7853981633974483,
          "target": "26-zejscie-ze-spirali-7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-wejscie-do-budynku",
      "name": "wejscie do budynku",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8692150198239936,
          "pitch": 0.15018498662549362,
          "rotation": 0.7853981633974483,
          "target": "3-sciezka-po-prawej"
        },
        {
          "yaw": 0.01868593166856769,
          "pitch": 0.18634730247491937,
          "rotation": 0,
          "target": "29-srodek-budynku"
        },
        {
          "yaw": -0.925404138939399,
          "pitch": 0.21146535255411436,
          "rotation": 5.497787143782138,
          "target": "27-sciezka-lewa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-srodek-budynku",
      "name": "srodek budynku",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.035003846374110026,
          "pitch": 0.018842131873434198,
          "rotation": 0,
          "target": "30-srodek-budynku-2"
        },
        {
          "yaw": 3.1026437443729575,
          "pitch": 0.24397268623079427,
          "rotation": 0,
          "target": "28-wejscie-do-budynku"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-srodek-budynku-2",
      "name": "srodek budynku 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.029880205630554713,
          "pitch": 0.05344631405735356,
          "rotation": 0,
          "target": "31-srodek-rzezby"
        },
        {
          "yaw": -3.1078548488814306,
          "pitch": 0.08783326389674784,
          "rotation": 0,
          "target": "29-srodek-budynku"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-srodek-rzezby",
      "name": "srodek rzezby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "32-srodek-tyl-budynku"
        },
        {
          "yaw": 3.00772153762521,
          "pitch": -0.019439033213760837,
          "rotation": 0,
          "target": "30-srodek-budynku-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-srodek-tyl-budynku",
      "name": "srodek tyl budynku",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.41147006371252104,
          "pitch": 0.14706265659397388,
          "rotation": 1.5707963267948966,
          "target": "33-srodek-tyl-budynku-2"
        },
        {
          "yaw": -3.1046833982866993,
          "pitch": 0.3254355669324802,
          "rotation": 0,
          "target": "31-srodek-rzezby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-srodek-tyl-budynku-2",
      "name": "srodek tyl budynku 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2250851660312101,
          "pitch": 0.18177367317287718,
          "rotation": 0,
          "target": "31-srodek-rzezby"
        },
        {
          "yaw": -0.8928413055251632,
          "pitch": 0.2242456574911671,
          "rotation": 6.283185307179586,
          "target": "34-srodek-tyl-budynku-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-srodek-tyl-budynku-3",
      "name": "srodek tyl budynku 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0870787016905421,
          "pitch": 0.12321821955632473,
          "rotation": 0,
          "target": "31-srodek-rzezby"
        },
        {
          "yaw": -0.5437635440526236,
          "pitch": 0.15581254618501816,
          "rotation": 0,
          "target": "29-srodek-budynku"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Rzezba_Dagmara_Szpiech_WAW_ASP",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
