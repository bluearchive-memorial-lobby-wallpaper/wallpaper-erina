import {
  assertWallpaperDefinition,
  createDialogueLineResolver,
  defineWallpaper,
} from "ba-memorial-lobby-wallpaper-runtime";

export type VoiceLocale = "ja" | "zh-cn" | "ko";
export type SubtitleLocale = "zh-cn" | "ja" | "ko" | "en";

// ---------------------------------------------------------------------------
// Project identity.
//
// This file is the single source of truth for character-specific content.
// Replace every placeholder value with the actual character data before
// building a wallpaper from this template. See docs/CREATING-A-PROJECT.md.
// ---------------------------------------------------------------------------
export const PROJECT = {
  id: "blue-archive-erina",
  slug: "erina",
  title: "Erina",
  editionLabel: `PUBLIC EDITION · ${__WALLPAPER_VERSION__}`,
} as const;

export const VOICE_LOCALES: readonly VoiceLocale[] = ["ja"];
export const SUBTITLE_LOCALES: readonly SubtitleLocale[] = ["ja","ko"];

export const BGM = {
  title: "Daily Routine 247",
  path: `./assets/${PROJECT.slug}/bgm/my-character-bgm.flac`,
} as const;

export interface DialogueLine {
  id: string;
  text: Record<SubtitleLocale, string>;
}

export interface DialogueDefinition {
  index: number;
  motionAnimation: string;
  attachmentAnimation: string;
  duration: number;
  lines: readonly DialogueLine[];
}

// Replace the placeholder model/animation/bone values below with values
// obtained from `npm run inspect:spine` after placing the real model in
// local-assets/original/model/.
export const MODEL = {
  binary: `./assets/${PROJECT.slug}/model/my-character.skel`,
  atlases: {
    "2k": `./assets/${PROJECT.slug}/model/my-character.atlas`,
    "4k": `./assets/${PROJECT.slug}/model-4k/my-character.atlas`,
    "8k": `./assets/${PROJECT.slug}/model-8k/my-character.atlas`,
  },
  spineVersion: "4.2.33",
  introAnimation: "Start_Idle_01",
  idleAnimation: "Idle_01",
  designViewport: {
    width: 2560,
    height: 1600,
    centerX: 0,
    centerY: 900,
  },
  tracks: {
    base: 0,
    motion: 1,
    attachment: 2,
  },
  interaction: {
    eyeBone: "Touch_Eye",
    headControlBone: "Touch_Point",
    headAnchorBone: "Touch_Point_key",
    lookAnimation: "Look_01_M",
    lookEndMotionAnimation: "LookEnd_01_M",
    lookEndAttachmentAnimation: "LookEnd_01_A",
    patMotionAnimation: "Pat_01_M",
    patAttachmentAnimation: "Pat_01_A",
    patEndMotionAnimation: "PatEnd_01_M",
    patEndAttachmentAnimation: "PatEnd_01_A",
    headRadius: { x: 270, y: 230 },
    bodyFromHead: { x: -70, y: -610, radiusX: 620, radiusY: 900 },
    eyeClamp: { x: 112.5, y: 200 },
    patClamp: 34,
    dragThresholdPixels: 9,
    cooldownSeconds: 0.55,
    dialogueGraceSeconds: 0.75,
  },
} as const;

// Example dialogue placeholders. Replace the ids with the real event ids used
// by the voice files and fill in the localized subtitle text.
export const DIALOGUES: readonly DialogueDefinition[] = [
  {
    "index": 1,
    "motionAnimation": "Talk_01_M",
    "attachmentAnimation": "Talk_01_A",
    "duration": 21.33333396911621,
    "lines": [
      {
        "id": "ch0321_memoriallobby_1_1",
        "text": {
          "zh-cn": "",
          "ja": "へへっ、綺麗ですよね？\nゲホゲホ。",
          "ko": "히힛, 예쁘죠? \n콜록콜록.",
          "en": ""
        }
      },
      {
        "id": "ch0321_memoriallobby_1_2",
        "text": {
          "zh-cn": "",
          "ja": "雪の結晶を\nポリビニルアセタールで\n固めたものです。",
          "ko": "눈송이를\n폴리비닐아세탈수지용액으로\n보존한 거예요.",
          "en": ""
        }
      },
      {
        "id": "ch0321_memoriallobby_1_3",
        "text": {
          "zh-cn": "",
          "ja": "時間が経ったとしても、\n温かい場所でも溶けません。",
          "ko": "시간이 지나도, \n따듯한 곳에서도\n영원히 녹지 않아요.",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 2,
    "motionAnimation": "Talk_02_M",
    "attachmentAnimation": "Talk_02_A",
    "duration": 30.666667938232422,
    "lines": [
      {
        "id": "ch0321_memoriallobby_2_1",
        "text": {
          "zh-cn": "",
          "ja": "せっかくなので一番大きくて\n綺麗なものを探そうとしたら……\nこんな時間になってしまって。",
          "ko": "제일 크고 예쁜 눈송이를\n고르다 보니……\n시간 가는 줄 몰랐어요.",
          "en": ""
        }
      },
      {
        "id": "ch0321_memoriallobby_2_2",
        "text": {
          "zh-cn": "",
          "ja": "ズビズビ……\nせっかくなので、\n永久に光る\n雪結晶にしてみました。",
          "ko": "훌-쩍……\n기왕 만드는 거,\n영구 야광 눈송이로\n만들어봤어요.",
          "en": ""
        }
      },
      {
        "id": "ch0321_memoriallobby_2_3",
        "text": {
          "zh-cn": "",
          "ja": "どうでしょう？\nこれを見るたびに、\n私のことを\n思い出してくれますか？",
          "ko": "어때요? 이걸 볼 때마다,\n저를 떠올려 주시겠어요?",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 3,
    "motionAnimation": "Talk_03_M",
    "attachmentAnimation": "Talk_03_A",
    "duration": 28.000001907348633,
    "lines": [
      {
        "id": "ch0321_memoriallobby_3_1",
        "text": {
          "zh-cn": "",
          "ja": "ふふっ！やったぁ！\n喜んでもらえてよかったです。",
          "ko": "후훗! 아싸아!\n좋아해주셔서 다행이에요.",
          "en": ""
        }
      },
      {
        "id": "ch0321_memoriallobby_3_2",
        "text": {
          "zh-cn": "",
          "ja": "すごいですよね……\nこれも、あれも、\nぜーんぶ化学なんです。",
          "ko": "대단하죠……\n이것도, 저것도,\n모든 게 다 화학이에요.",
          "en": ""
        }
      },
      {
        "id": "ch0321_memoriallobby_3_3",
        "text": {
          "zh-cn": "",
          "ja": "先生と、私も……\n化学で説明できるわけです。",
          "ko": "선생님도, 저도……\n화학으로 설명할 수 있어요.",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 4,
    "motionAnimation": "Talk_04_M",
    "attachmentAnimation": "Talk_04_A",
    "duration": 31.666667938232422,
    "lines": [
      {
        "id": "ch0321_memoriallobby_4_1",
        "text": {
          "zh-cn": "",
          "ja": "見えているものも、情報処理も、\n電気信号でしかありません。\nなのに反応しあうんです。",
          "ko": "보이는 것도, 정보의 처리도,\n전기신호일 뿐이에요.\n그런데도 서로 반응하는거에요.",
          "en": ""
        }
      },
      {
        "id": "ch0321_memoriallobby_4_2",
        "text": {
          "zh-cn": "",
          "ja": "どれもただの\n電気信号でしかないのに、\n感情なんて名前が\n付いてしまいました。",
          "ko": "다 그저 전기신호, 반응인데,\n감정이란 이름을 붙여버렸어요.",
          "en": ""
        }
      },
      {
        "id": "ch0321_memoriallobby_4_3",
        "text": {
          "zh-cn": "",
          "ja": "いえ、それが\n嫌というわけではなく……。",
          "ko": "아뇨, 그게 싫다는건\n아니에요. 그냥……",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 5,
    "motionAnimation": "Talk_05_M",
    "attachmentAnimation": "Talk_05_A",
    "duration": 26.33333396911621,
    "lines": [
      {
        "id": "ch0321_memoriallobby_5_1",
        "text": {
          "zh-cn": "",
          "ja": "こんな風に反応が起こるなら、\n同じがいいな、と思って。",
          "ko": "일어나는 반응이,\n서로 같으면 좋겠다,\n라고 생각해서요.",
          "en": ""
        }
      },
      {
        "id": "ch0321_memoriallobby_5_2",
        "text": {
          "zh-cn": "",
          "ja": "なーんて！ゲホゲホ！\n私、風邪でおかしく\nなっちゃったのかもしれません！",
          "ko": "콜록, 내가 뭐래!\n저, 감기 걸려서\n제정신이 아니네요!",
          "en": ""
        }
      },
      {
        "id": "ch0321_memoriallobby_5_3",
        "text": {
          "zh-cn": "",
          "ja": "あははっ……！\nははっ……。",
          "ko": "아하하……!\n하하…….",
          "en": ""
        }
      }
    ]
  }
] as const;

export function voicePath(eventId: string, locale: VoiceLocale): string {
  return `./assets/${PROJECT.slug}/audio/${locale}/${eventId.toLowerCase()}.ogg`;
}

export const WALLPAPER_DEFINITION = defineWallpaper({
  schemaVersion: 1,
  id: PROJECT.id,
  model: {
    binary: MODEL.binary,
    atlases: MODEL.atlases,
    spineVersion: MODEL.spineVersion,
    designViewport: MODEL.designViewport,
  },
  animations: {
    intro: MODEL.introAnimation,
    idle: MODEL.idleAnimation,
    tracks: MODEL.tracks,
  },
  interactions: {
    eyeBone: MODEL.interaction.eyeBone,
    headControlBone: MODEL.interaction.headControlBone,
    headAnchorBone: MODEL.interaction.headAnchorBone,
    look: {
      animation: MODEL.interaction.lookAnimation,
      endMotionAnimation: MODEL.interaction.lookEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.lookEndAttachmentAnimation,
    },
    pat: {
      motionAnimation: MODEL.interaction.patMotionAnimation,
      attachmentAnimation: MODEL.interaction.patAttachmentAnimation,
      endMotionAnimation: MODEL.interaction.patEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.patEndAttachmentAnimation,
    },
    headRadius: MODEL.interaction.headRadius,
    bodyFromHead: MODEL.interaction.bodyFromHead,
    eyeClamp: MODEL.interaction.eyeClamp,
    patClamp: MODEL.interaction.patClamp,
    dragThresholdPixels: MODEL.interaction.dragThresholdPixels,
    cooldownSeconds: MODEL.interaction.cooldownSeconds,
    dialogueGraceSeconds: MODEL.interaction.dialogueGraceSeconds,
  },
  dialogues: DIALOGUES.map((dialogue) => ({
    index: dialogue.index,
    motionAnimation: dialogue.motionAnimation,
    attachmentAnimation: dialogue.attachmentAnimation,
    durationSeconds: dialogue.duration,
    lines: dialogue.lines,
  })),
  audio: {
    bgm: BGM,
    voicePath,
    voiceLocales: VOICE_LOCALES,
    subtitleLocales: SUBTITLE_LOCALES,
  },
});

assertWallpaperDefinition(WALLPAPER_DEFINITION);

export const findDialogueLine = createDialogueLineResolver(
  WALLPAPER_DEFINITION.dialogues,
);
