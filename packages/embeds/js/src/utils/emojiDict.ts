// Duplicated from Kwik frontend/src/utils/emojiDict.js (card 13696).
// Keep this dictionary synchronized with the Kwik frontend source.

const emojiReg = /:(\S+?):/g

export const EmojiDict: Readonly<Record<string, string>> = {
  ':grinning_face:': 'grinning-face_1f600',
  ':grinning_face_with_big_eyes:': 'grinning-face-with-big-eyes_1f603',
  ':grinning_face_with_smiling_eyes:': 'grinning-face-with-smiling-eyes_1f604',
  ':beaming_face_with_smiling_eyes:': 'beaming-face-with-smiling-eyes_1f601',
  ':grinning_squinting_face:': 'grinning-squinting-face_1f606',
  ':grinning_face_with_sweat:': 'grinning-face-with-sweat_1f605',
  ':rolling_on_the_floor_laughing:': 'rolling-on-the-floor-laughing_1f923',
  ':face_with_tears_of_joy:': 'face-with-tears-of-joy_1f602',
  ':slightly_smiling_face:': 'slightly-smiling-face_1f642',
  ':upside-down_face:': 'upside-down-face_1f643',
  ':melting_face:': 'melting-face_1fae0',
  ':winking_face:': 'winking-face_1f609',
  ':smiling_face_with_smiling_eyes:': 'smiling-face-with-smiling-eyes_1f60a',
  ':smiling_face_with_halo:': 'smiling-face-with-halo_1f607',
  ':smiling_face_with_hearts:': 'smiling-face-with-hearts_1f970',
  ':smiling_face_with_heart-eyes:': 'smiling-face-with-heart-eyes_1f60d',
  ':star-struck:': 'star-struck_1f929',
  ':face_blowing_a_kiss:': 'face-blowing-a-kiss_1f618',
  ':kissing_face:': 'kissing-face_1f617',
  ':smiling_face:': 'smiling-face_263a-fe0f',
  ':kissing_face_with_closed_eyes:': 'kissing-face-with-closed-eyes_1f61a',
  ':kissing_face_with_smiling_eyes:': 'kissing-face-with-smiling-eyes_1f619',
  ':smiling_face_with_tear:': 'smiling-face-with-tear_1f972',
  ':face_savoring_food:': 'face-savoring-food_1f60b',
  ':face_with_tongue:': 'face-with-tongue_1f61b',
  ':winking_face_with_tongue:': 'winking-face-with-tongue_1f61c',
  ':zany_face:': 'zany-face_1f92a',
  ':squinting_face_with_tongue:': 'squinting-face-with-tongue_1f61d',
  ':money-mouth_face:': 'money-mouth-face_1f911',
  ':smiling_face_with_open_hands:': 'hugging-face_1f917',
  ':face_with_hand_over_mouth:': 'face-with-hand-over-mouth_1f92d',
  ':face_with_open_eyes_and_hand_over_mouth:':
    'face-with-open-eyes-and-hand-over-mouth_1fae2',
  ':face_with_peeking_eye:': 'face-with-peeking-eye_1fae3',
  ':shushing_face:': 'shushing-face_1f92b',
  ':thinking_face:': 'thinking-face_1f914',
  ':saluting_face:': 'saluting-face_1fae1',
  ':zipper-mouth_face:': 'zipper-mouth-face_1f910',
  ':face_with_raised_eyebrow:': 'face-with-raised-eyebrow_1f928',
  ':neutral_face:': 'neutral-face_1f610',
  ':expressionless_face:': 'expressionless-face_1f611',
  ':face_without_mouth:': 'face-without-mouth_1f636',
  ':dotted_line_face:': 'dotted-line-face_1fae5',
  ':face_in_clouds:': 'face-in-clouds_1f636-200d-1f32b-fe0f',
  ':smirking_face:': 'smirking-face_1f60f',
  ':unamused_face:': 'unamused-face_1f612',
  ':face_with_rolling_eyes:': 'face-with-rolling-eyes_1f644',
  ':grimacing_face:': 'grimacing-face_1f62c',
  ':face_exhaling:': 'face-exhaling_1f62e-200d-1f4a8',
  ':lying_face:': 'lying-face_1f925',
  ':relieved_face:': 'relieved-face_1f60c',
  ':pensive_face:': 'pensive-face_1f614',
  ':sleepy_face:': 'sleepy-face_1f62a',
  ':drooling_face:': 'drooling-face_1f924',
  ':sleeping_face:': 'sleeping-face_1f634',
  ':face_with_medical_mask:': 'face-with-medical-mask_1f637',
  ':face_with_thermometer:': 'face-with-thermometer_1f912',
  ':face_with_head-bandage:': 'face-with-head-bandage_1f915',
  ':nauseated_face:': 'nauseated-face_1f922',
  ':face_vomiting:': 'face-vomiting_1f92e',
  ':sneezing_face:': 'sneezing-face_1f927',
  ':hot_face:': 'hot-face_1f975',
  ':cold_face:': 'cold-face_1f976',
  ':woozy_face:': 'woozy-face_1f974',
  ':face_with_crossed-out_eyes:': 'dizzy-face_1f635',
  ':face_with_spiral_eyes:': 'face-with-spiral-eyes_1f635-200d-1f4ab',
  ':exploding_head:': 'exploding-head_1f92f',
  ':cowboy_hat_face:': 'cowboy-hat-face_1f920',
  ':partying_face:': 'partying-face_1f973',
  ':disguised_face:': 'disguised-face_1f978',
  ':smiling_face_with_sunglasses:': 'smiling-face-with-sunglasses_1f60e',
  ':nerd_face:': 'nerd-face_1f913',
  ':face_with_monocle:': 'face-with-monocle_1f9d0',
  ':confused_face:': 'confused-face_1f615',
  ':face_with_diagonal_mouth:': 'face-with-diagonal-mouth_1fae4',
  ':worried_face:': 'worried-face_1f61f',
  ':slightly_frowning_face:': 'slightly-frowning-face_1f641',
  ':frowning_face:': 'frowning-face_2639-fe0f',
  ':face_with_open_mouth:': 'face-with-open-mouth_1f62e',
  ':hushed_face:': 'hushed-face_1f62f',
  ':astonished_face:': 'astonished-face_1f632',
  ':flushed_face:': 'flushed-face_1f633',
  ':pleading_face:': 'pleading-face_1f97a',
  ':face_holding_back_tears:': 'face-holding-back-tears_1f979',
  ':frowning_face_with_open_mouth:': 'frowning-face-with-open-mouth_1f626',
  ':anguished_face:': 'anguished-face_1f627',
  ':fearful_face:': 'fearful-face_1f628',
  ':anxious_face_with_sweat:': 'anxious-face-with-sweat_1f630',
  ':sad_but_relieved_face:': 'sad-but-relieved-face_1f625',
  ':crying_face:': 'crying-face_1f622',
  ':loudly_crying_face:': 'loudly-crying-face_1f62d',
  ':face_screaming_in_fear:': 'face-screaming-in-fear_1f631',
  ':confounded_face:': 'confounded-face_1f616',
  ':persevering_face:': 'persevering-face_1f623',
  ':disappointed_face:': 'disappointed-face_1f61e',
  ':downcast_face_with_sweat:': 'downcast-face-with-sweat_1f613',
  ':weary_face:': 'weary-face_1f629',
  ':tired_face:': 'tired-face_1f62b',
  ':yawning_face:': 'yawning-face_1f971',
  ':face_with_steam_from_nose:': 'face-with-steam-from-nose_1f624',
  ':enraged_face:': 'pouting-face_1f621',
  ':angry_face:': 'angry-face_1f620',
  ':face_with_symbols_on_mouth:': 'face-with-symbols-on-mouth_1f92c',
  ':smiling_face_with_horns:': 'smiling-face-with-horns_1f608',
  ':angry_face_with_horns:': 'angry-face-with-horns_1f47f',
  ':skull:': 'skull_1f480',
  ':skull_and_crossbones:': 'skull-and-crossbones_2620-fe0f',
  ':pile_of_poo:': 'pile-of-poo_1f4a9',
  ':clown_face:': 'clown-face_1f921',
  ':ogre:': 'ogre_1f479',
  ':goblin:': 'goblin_1f47a',
  ':ghost:': 'ghost_1f47b',
  ':alien:': 'alien_1f47d',
  ':alien_monster:': 'alien-monster_1f47e',
  ':robot:': 'robot_1f916',
  ':grinning_cat:': 'grinning-cat_1f63a',
  ':grinning_cat_with_smiling_eyes:': 'grinning-cat-with-smiling-eyes_1f638',
  ':cat_with_tears_of_joy:': 'cat-with-tears-of-joy_1f639',
  ':smiling_cat_with_heart-eyes:': 'smiling-cat-with-heart-eyes_1f63b',
  ':cat_with_wry_smile:': 'cat-with-wry-smile_1f63c',
  ':kissing_cat:': 'kissing-cat_1f63d',
  ':weary_cat:': 'weary-cat_1f640',
  ':crying_cat:': 'crying-cat_1f63f',
  ':pouting_cat:': 'pouting-cat_1f63e',
  ':see-no-evil_monkey:': 'see-no-evil-monkey_1f648',
  ':hear-no-evil_monkey:': 'hear-no-evil-monkey_1f649',
  ':speak-no-evil_monkey:': 'speak-no-evil-monkey_1f64a',
  ':love_letter:': 'love-letter_1f48c',
  ':heart_with_arrow:': 'heart-with-arrow_1f498',
  ':heart_with_ribbon:': 'heart-with-ribbon_1f49d',
  ':sparkling_heart:': 'sparkling-heart_1f496',
  ':growing_heart:': 'growing-heart_1f497',
  ':beating_heart:': 'beating-heart_1f493',
  ':revolving_hearts:': 'revolving-hearts_1f49e',
  ':two_hearts:': 'two-hearts_1f495',
  ':heart_decoration:': 'heart-decoration_1f49f',
  ':heart_exclamation:': 'heart-exclamation_2763-fe0f',
  ':broken_heart:': 'broken-heart_1f494',
  ':heart_on_fire:': 'heart-on-fire_2764-fe0f-200d-1f525',
  ':mending_heart:': 'mending-heart_2764-fe0f-200d-1fa79',
  ':red_heart:': 'red-heart_2764-fe0f',
  ':orange_heart:': 'orange-heart_1f9e1',
  ':yellow_heart:': 'yellow-heart_1f49b',
  ':green_heart:': 'green-heart_1f49a',
  ':blue_heart:': 'blue-heart_1f499',
  ':purple_heart:': 'purple-heart_1f49c',
  ':brown_heart:': 'brown-heart_1f90e',
  ':black_heart:': 'black-heart_1f5a4',
  ':white_heart:': 'white-heart_1f90d',
  ':kiss_mark:': 'kiss-mark_1f48b',
  ':hundred_points:': 'hundred-points_1f4af',
  ':anger_symbol:': 'anger-symbol_1f4a2',
  ':collision:': 'collision_1f4a5',
  ':dizzy:': 'dizzy_1f4ab',
  ':sweat_droplets:': 'sweat-droplets_1f4a6',
  ':dashing_away:': 'dashing-away_1f4a8',
  ':hole:': 'hole_1f573-fe0f',
  ':speech_balloon:': 'speech-balloon_1f4ac',
  ':eye_in_speech_bubble:': 'eye-in-speech-bubble_1f441-fe0f-200d-1f5e8-fe0f',
  ':left_speech_bubble:': 'left-speech-bubble_1f5e8-fe0f',
  ':right_anger_bubble:': 'right-anger-bubble_1f5ef-fe0f',
  ':thought_balloon:': 'thought-balloon_1f4ad',
  ':ZZZ:': 'zzz_1f4a4',
  ':waving_hand:': 'waving-hand_1f44b',
  ':waving_hand_light_skin_tone:': 'waving-hand-light-skin-tone_1f44b-1f3fb',
  ':waving_hand_medium-light_skin_tone:':
    'waving-hand-medium-light-skin-tone_1f44b-1f3fc',
  ':waving_hand_medium_skin_tone:': 'waving-hand-medium-skin-tone_1f44b-1f3fd',
  ':waving_hand_medium-dark_skin_tone:':
    'waving-hand-medium-dark-skin-tone_1f44b-1f3fe',
  ':waving_hand_dark_skin_tone:': 'waving-hand-dark-skin-tone_1f44b-1f3ff',
  ':raised_back_of_hand:': 'raised-back-of-hand_1f91a',
  ':raised_back_of_hand_light_skin_tone:':
    'raised-back-of-hand-light-skin-tone_1f91a-1f3fb',
  ':raised_back_of_hand_medium-light_skin_tone:':
    'raised-back-of-hand-medium-light-skin-tone_1f91a-1f3fc',
  ':raised_back_of_hand_medium_skin_tone:':
    'raised-back-of-hand-medium-skin-tone_1f91a-1f3fd',
  ':raised_back_of_hand_medium-dark_skin_tone:':
    'raised-back-of-hand-medium-dark-skin-tone_1f91a-1f3fe',
  ':raised_back_of_hand_dark_skin_tone:':
    'raised-back-of-hand-dark-skin-tone_1f91a-1f3ff',
  ':hand_with_fingers_splayed:': 'hand-with-fingers-splayed_1f590-fe0f',
  ':hand_with_fingers_splayed_light_skin_tone:':
    'hand-with-fingers-splayed-light-skin-tone_1f590-1f3fb',
  ':hand_with_fingers_splayed_medium-light_skin_tone:':
    'hand-with-fingers-splayed-medium-light-skin-tone_1f590-1f3fc',
  ':hand_with_fingers_splayed_medium_skin_tone:':
    'hand-with-fingers-splayed-medium-skin-tone_1f590-1f3fd',
  ':hand_with_fingers_splayed_medium-dark_skin_tone:':
    'hand-with-fingers-splayed-medium-dark-skin-tone_1f590-1f3fe',
  ':hand_with_fingers_splayed_dark_skin_tone:':
    'hand-with-fingers-splayed-dark-skin-tone_1f590-1f3ff',
  ':raised_hand:': 'raised-hand_270b',
  ':raised_hand_light_skin_tone:': 'raised-hand-light-skin-tone_270b-1f3fb',
  ':raised_hand_medium-light_skin_tone:':
    'raised-hand-medium-light-skin-tone_270b-1f3fc',
  ':raised_hand_medium_skin_tone:': 'raised-hand-medium-skin-tone_270b-1f3fd',
  ':raised_hand_medium-dark_skin_tone:':
    'raised-hand-medium-dark-skin-tone_270b-1f3fe',
  ':raised_hand_dark_skin_tone:': 'raised-hand-dark-skin-tone_270b-1f3ff',
  ':vulcan_salute:': 'vulcan-salute_1f596',
  ':vulcan_salute_light_skin_tone:':
    'vulcan-salute-light-skin-tone_1f596-1f3fb',
  ':vulcan_salute_medium-light_skin_tone:':
    'vulcan-salute-medium-light-skin-tone_1f596-1f3fc',
  ':vulcan_salute_medium_skin_tone:':
    'vulcan-salute-medium-skin-tone_1f596-1f3fd',
  ':vulcan_salute_medium-dark_skin_tone:':
    'vulcan-salute-medium-dark-skin-tone_1f596-1f3fe',
  ':vulcan_salute_dark_skin_tone:': 'vulcan-salute-dark-skin-tone_1f596-1f3ff',
  ':rightwards_hand:': 'rightwards-hand_1faf1',
  ':rightwards_hand_light_skin_tone:':
    'rightwards-hand-light-skin-tone_1faf1-1f3fb',
  ':rightwards_hand_medium-light_skin_tone:':
    'rightwards-hand-medium-light-skin-tone_1faf1-1f3fc',
  ':rightwards_hand_medium_skin_tone:':
    'rightwards-hand-medium-skin-tone_1faf1-1f3fd',
  ':rightwards_hand_medium-dark_skin_tone:':
    'rightwards-hand-medium-dark-skin-tone_1faf1-1f3fe',
  ':rightwards_hand_dark_skin_tone:':
    'rightwards-hand-dark-skin-tone_1faf1-1f3ff',
  ':leftwards_hand:': 'leftwards-hand_1faf2',
  ':leftwards_hand_light_skin_tone:':
    'leftwards-hand-light-skin-tone_1faf2-1f3fb',
  ':leftwards_hand_medium-light_skin_tone:':
    'leftwards-hand-medium-light-skin-tone_1faf2-1f3fc',
  ':leftwards_hand_medium_skin_tone:':
    'leftwards-hand-medium-skin-tone_1faf2-1f3fd',
  ':leftwards_hand_medium-dark_skin_tone:':
    'leftwards-hand-medium-dark-skin-tone_1faf2-1f3fe',
  ':leftwards_hand_dark_skin_tone:':
    'leftwards-hand-dark-skin-tone_1faf2-1f3ff',
  ':palm_down_hand:': 'palm-down-hand_1faf3',
  ':palm_down_hand_light_skin_tone:':
    'palm-down-hand-light-skin-tone_1faf3-1f3fb',
  ':palm_down_hand_medium-light_skin_tone:':
    'palm-down-hand-medium-light-skin-tone_1faf3-1f3fc',
  ':palm_down_hand_medium_skin_tone:':
    'palm-down-hand-medium-skin-tone_1faf3-1f3fd',
  ':palm_down_hand_medium-dark_skin_tone:':
    'palm-down-hand-medium-dark-skin-tone_1faf3-1f3fe',
  ':palm_down_hand_dark_skin_tone:':
    'palm-down-hand-dark-skin-tone_1faf3-1f3ff',
  ':palm_up_hand:': 'palm-up-hand_1faf4',
  ':palm_up_hand_light_skin_tone:': 'palm-up-hand-light-skin-tone_1faf4-1f3fb',
  ':OK_hand:': 'ok-hand_1f44c',
  ':OK_hand_light_skin_tone:': 'ok-hand-light-skin-tone_1f44c-1f3fb',
  ':OK_hand_medium-light_skin_tone:':
    'ok-hand-medium-light-skin-tone_1f44c-1f3fc',
  ':OK_hand_medium_skin_tone:': 'ok-hand-medium-skin-tone_1f44c-1f3fd',
  ':OK_hand_medium-dark_skin_tone:':
    'ok-hand-medium-dark-skin-tone_1f44c-1f3fe',
  ':OK_hand_dark_skin_tone:': 'ok-hand-dark-skin-tone_1f44c-1f3ff',
  ':pinched_fingers:': 'pinched-fingers_1f90c',
  ':pinched_fingers_light_skin_tone:':
    'pinched-fingers-light-skin-tone_1f90c-1f3fb',
  ':pinched_fingers_medium-light_skin_tone:':
    'pinched-fingers-medium-light-skin-tone_1f90c-1f3fc',
  ':pinched_fingers_medium_skin_tone:':
    'pinched-fingers-medium-skin-tone_1f90c-1f3fd',
  ':pinched_fingers_medium-dark_skin_tone:':
    'pinched-fingers-medium-dark-skin-tone_1f90c-1f3fe',
  ':pinched_fingers_dark_skin_tone:':
    'pinched-fingers-dark-skin-tone_1f90c-1f3ff',
  ':pinching_hand:': 'pinching-hand_1f90f',
  ':pinching_hand_light_skin_tone:':
    'pinching-hand-light-skin-tone_1f90f-1f3fb',
  ':pinching_hand_medium-light_skin_tone:':
    'pinching-hand-medium-light-skin-tone_1f90f-1f3fc',
  ':pinching_hand_medium_skin_tone:':
    'pinching-hand-medium-skin-tone_1f90f-1f3fd',
  ':pinching_hand_medium-dark_skin_tone:':
    'pinching-hand-medium-dark-skin-tone_1f90f-1f3fe',
  ':pinching_hand_dark_skin_tone:': 'pinching-hand-dark-skin-tone_1f90f-1f3ff',
  ':victory_hand:': 'victory-hand_270c-fe0f',
  ':victory_hand_light_skin_tone:': 'victory-hand-light-skin-tone_270c-1f3fb',
  ':victory_hand_medium-light_skin_tone:':
    'victory-hand-medium-light-skin-tone_270c-1f3fc',
  ':victory_hand_medium_skin_tone:': 'victory-hand-medium-skin-tone_270c-1f3fd',
  ':victory_hand_medium-dark_skin_tone:':
    'victory-hand-medium-dark-skin-tone_270c-1f3fe',
  ':victory_hand_dark_skin_tone:': 'victory-hand-dark-skin-tone_270c-1f3ff',
  ':crossed_fingers:': 'crossed-fingers_1f91e',
  ':crossed_fingers_light_skin_tone:':
    'crossed-fingers-light-skin-tone_1f91e-1f3fb',
  ':crossed_fingers_medium-light_skin_tone:':
    'crossed-fingers-medium-light-skin-tone_1f91e-1f3fc',
  ':crossed_fingers_medium_skin_tone:':
    'crossed-fingers-medium-skin-tone_1f91e-1f3fd',
  ':crossed_fingers_medium-dark_skin_tone:':
    'crossed-fingers-medium-dark-skin-tone_1f91e-1f3fe',
  ':crossed_fingers_dark_skin_tone:':
    'crossed-fingers-dark-skin-tone_1f91e-1f3ff',
  ':hand_with_index_finger_and_thumb_crossed:':
    'hand-with-index-finger-and-thumb-crossed_1faf0',
  ':hand_with_index_finger_and_thumb_crossed_light_skin_tone:':
    'hand-with-index-finger-and-thumb-crossed-light-skin-tone_1faf0-1f3fb',
  ':hand_with_index_finger_and_thumb_crossed_medium-light_skin_tone:':
    'hand-with-index-finger-and-thumb-crossed-medium-light-skin-tone_1faf0-1f3fc',
  ':hand_with_index_finger_and_thumb_crossed_medium_skin_tone:':
    'hand-with-index-finger-and-thumb-crossed-medium-skin-tone_1faf0-1f3fd',
  ':hand_with_index_finger_and_thumb_crossed_medium-dark_skin_tone:':
    'hand-with-index-finger-and-thumb-crossed-medium-dark-skin-tone_1faf0-1f3fe',
  ':hand_with_index_finger_and_thumb_crossed_dark_skin_tone:':
    'hand-with-index-finger-and-thumb-crossed-dark-skin-tone_1faf0-1f3ff',
  ':love-you_gesture:': 'love-you-gesture_1f91f',
  ':love-you_gesture_light_skin_tone:':
    'love-you-gesture-light-skin-tone_1f91f-1f3fb',
  ':love-you_gesture_medium-light_skin_tone:':
    'love-you-gesture-medium-light-skin-tone_1f91f-1f3fc',
  ':love-you_gesture_medium_skin_tone:':
    'love-you-gesture-medium-skin-tone_1f91f-1f3fd',
  ':love-you_gesture_medium-dark_skin_tone:':
    'love-you-gesture-medium-dark-skin-tone_1f91f-1f3fe',
  ':love-you_gesture_dark_skin_tone:':
    'love-you-gesture-dark-skin-tone_1f91f-1f3ff',
  ':sign_of_the_horns:': 'sign-of-the-horns_1f918',
  ':sign_of_the_horns_light_skin_tone:':
    'sign-of-the-horns-light-skin-tone_1f918-1f3fb',
  ':sign_of_the_horns_medium-light_skin_tone:':
    'sign-of-the-horns-medium-light-skin-tone_1f918-1f3fc',
  ':sign_of_the_horns_medium_skin_tone:':
    'sign-of-the-horns-medium-skin-tone_1f918-1f3fd',
  ':sign_of_the_horns_medium-dark_skin_tone:':
    'sign-of-the-horns-medium-dark-skin-tone_1f918-1f3fe',
  ':sign_of_the_horns_dark_skin_tone:':
    'sign-of-the-horns-dark-skin-tone_1f918-1f3ff',
  ':call_me_hand:': 'call-me-hand_1f919',
  ':call_me_hand_light_skin_tone:': 'call-me-hand-light-skin-tone_1f919-1f3fb',
  ':call_me_hand_medium-light_skin_tone:':
    'call-me-hand-medium-light-skin-tone_1f919-1f3fc',
  ':call_me_hand_medium_skin_tone:':
    'call-me-hand-medium-skin-tone_1f919-1f3fd',
  ':call_me_hand_medium-dark_skin_tone:':
    'call-me-hand-medium-dark-skin-tone_1f919-1f3fe',
  ':call_me_hand_dark_skin_tone:': 'call-me-hand-dark-skin-tone_1f919-1f3ff',
  ':backhand_index_pointing_left:': 'backhand-index-pointing-left_1f448',
  ':backhand_index_pointing_left_light_skin_tone:':
    'backhand-index-pointing-left-light-skin-tone_1f448-1f3fb',
  ':backhand_index_pointing_left_medium-light_skin_tone:':
    'backhand-index-pointing-left-medium-light-skin-tone_1f448-1f3fc',
  ':backhand_index_pointing_left_medium_skin_tone:':
    'backhand-index-pointing-left-medium-skin-tone_1f448-1f3fd',
  ':backhand_index_pointing_left_medium-dark_skin_tone:':
    'backhand-index-pointing-left-medium-dark-skin-tone_1f448-1f3fe',
  ':backhand_index_pointing_left_dark_skin_tone:':
    'backhand-index-pointing-left-dark-skin-tone_1f448-1f3ff',
  ':backhand_index_pointing_right:': 'backhand-index-pointing-right_1f449',
  ':backhand_index_pointing_right_light_skin_tone:':
    'backhand-index-pointing-right-light-skin-tone_1f449-1f3fb',
  ':backhand_index_pointing_right_medium-light_skin_tone:':
    'backhand-index-pointing-right-medium-light-skin-tone_1f449-1f3fc',
  ':backhand_index_pointing_right_medium_skin_tone:':
    'backhand-index-pointing-right-medium-skin-tone_1f449-1f3fd',
  ':backhand_index_pointing_right_medium-dark_skin_tone:':
    'backhand-index-pointing-right-medium-dark-skin-tone_1f449-1f3fe',
  ':backhand_index_pointing_right_dark_skin_tone:':
    'backhand-index-pointing-right-dark-skin-tone_1f449-1f3ff',
  ':backhand_index_pointing_up:': 'backhand-index-pointing-up_1f446',
  ':backhand_index_pointing_up_light_skin_tone:':
    'backhand-index-pointing-up-light-skin-tone_1f446-1f3fb',
  ':backhand_index_pointing_up_medium-light_skin_tone:':
    'backhand-index-pointing-up-medium-light-skin-tone_1f446-1f3fc',
  ':backhand_index_pointing_up_medium_skin_tone:':
    'backhand-index-pointing-up-medium-skin-tone_1f446-1f3fd',
  ':backhand_index_pointing_up_medium-dark_skin_tone:':
    'backhand-index-pointing-up-medium-dark-skin-tone_1f446-1f3fe',
  ':backhand_index_pointing_up_dark_skin_tone:':
    'backhand-index-pointing-up-dark-skin-tone_1f446-1f3ff',
  ':middle_finger:': 'middle-finger_1f595',
  ':middle_finger_light_skin_tone:':
    'middle-finger-light-skin-tone_1f595-1f3fb',
  ':middle_finger_medium-light_skin_tone:':
    'middle-finger-medium-light-skin-tone_1f595-1f3fc',
  ':middle_finger_medium_skin_tone:':
    'middle-finger-medium-skin-tone_1f595-1f3fd',
  ':middle_finger_medium-dark_skin_tone:':
    'middle-finger-medium-dark-skin-tone_1f595-1f3fe',
  ':middle_finger_dark_skin_tone:': 'middle-finger-dark-skin-tone_1f595-1f3ff',
  ':backhand_index_pointing_down:': 'backhand-index-pointing-down_1f447',
  ':backhand_index_pointing_down_light_skin_tone:':
    'backhand-index-pointing-down-light-skin-tone_1f447-1f3fb',
  ':backhand_index_pointing_down_medium-light_skin_tone:':
    'backhand-index-pointing-down-medium-light-skin-tone_1f447-1f3fc',
  ':backhand_index_pointing_down_medium_skin_tone:':
    'backhand-index-pointing-down-medium-skin-tone_1f447-1f3fd',
  ':backhand_index_pointing_down_medium-dark_skin_tone:':
    'backhand-index-pointing-down-medium-dark-skin-tone_1f447-1f3fe',
  ':backhand_index_pointing_down_dark_skin_tone:':
    'backhand-index-pointing-down-dark-skin-tone_1f447-1f3ff',
  ':index_pointing_up:': 'index-pointing-up_261d-fe0f',
  ':index_pointing_up_light_skin_tone:':
    'index-pointing-up-light-skin-tone_261d-1f3fb',
  ':index_pointing_up_medium-light_skin_tone:':
    'index-pointing-up-medium-light-skin-tone_261d-1f3fc',
  ':index_pointing_up_medium_skin_tone:':
    'index-pointing-up-medium-skin-tone_261d-1f3fd',
  ':index_pointing_up_medium-dark_skin_tone:':
    'index-pointing-up-medium-dark-skin-tone_261d-1f3fe',
  ':index_pointing_up_dark_skin_tone:':
    'index-pointing-up-dark-skin-tone_261d-1f3ff',
  ':index_pointing_at_the_viewer:': 'index-pointing-at-the-viewer_1faf5',
  ':index_pointing_at_the_viewer_light_skin_tone:':
    'index-pointing-at-the-viewer-light-skin-tone_1faf5-1f3fb',
  ':index_pointing_at_the_viewer_medium-light_skin_tone:':
    'index-pointing-at-the-viewer-medium-light-skin-tone_1faf5-1f3fc',
  ':index_pointing_at_the_viewer_medium_skin_tone:':
    'index-pointing-at-the-viewer-medium-skin-tone_1faf5-1f3fd',
  ':index_pointing_at_the_viewer_medium-dark_skin_tone:':
    'index-pointing-at-the-viewer-medium-dark-skin-tone_1faf5-1f3fe',
  ':index_pointing_at_the_viewer_dark_skin_tone:':
    'index-pointing-at-the-viewer-dark-skin-tone_1faf5-1f3ff',
  ':thumbs_up:': 'thumbs-up_1f44d',
  ':thumbs_up_light_skin_tone:': 'thumbs-up-light-skin-tone_1f44d-1f3fb',
  ':thumbs_up_medium-light_skin_tone:':
    'thumbs-up-medium-light-skin-tone_1f44d-1f3fc',
  ':thumbs_up_medium_skin_tone:': 'thumbs-up-medium-skin-tone_1f44d-1f3fd',
  ':thumbs_up_medium-dark_skin_tone:':
    'thumbs-up-medium-dark-skin-tone_1f44d-1f3fe',
  ':thumbs_up_dark_skin_tone:': 'thumbs-up-dark-skin-tone_1f44d-1f3ff',
  ':thumbs_down:': 'thumbs-down_1f44e',
  ':thumbs_down_light_skin_tone:': 'thumbs-down-light-skin-tone_1f44e-1f3fb',
  ':thumbs_down_medium-light_skin_tone:':
    'thumbs-down-medium-light-skin-tone_1f44e-1f3fc',
  ':thumbs_down_medium_skin_tone:': 'thumbs-down-medium-skin-tone_1f44e-1f3fd',
  ':thumbs_down_medium-dark_skin_tone:':
    'thumbs-down-medium-dark-skin-tone_1f44e-1f3fe',
  ':thumbs_down_dark_skin_tone:': 'thumbs-down-dark-skin-tone_1f44e-1f3ff',
  ':raised_fist:': 'raised-fist_270a',
  ':raised_fist_light_skin_tone:': 'raised-fist-light-skin-tone_270a-1f3fb',
  ':raised_fist_medium-light_skin_tone:':
    'raised-fist-medium-light-skin-tone_270a-1f3fc',
  ':raised_fist_medium_skin_tone:': 'raised-fist-medium-skin-tone_270a-1f3fd',
  ':raised_fist_medium-dark_skin_tone:':
    'raised-fist-medium-dark-skin-tone_270a-1f3fe',
  ':raised_fist_dark_skin_tone:': 'raised-fist-dark-skin-tone_270a-1f3ff',
  ':oncoming_fist:': 'oncoming-fist_1f44a',
  ':oncoming_fist_light_skin_tone:':
    'oncoming-fist-light-skin-tone_1f44a-1f3fb',
  ':oncoming_fist_medium-light_skin_tone:':
    'oncoming-fist-medium-light-skin-tone_1f44a-1f3fc',
  ':oncoming_fist_medium_skin_tone:':
    'oncoming-fist-medium-skin-tone_1f44a-1f3fd',
  ':oncoming_fist_medium-dark_skin_tone:':
    'oncoming-fist-medium-dark-skin-tone_1f44a-1f3fe',
  ':oncoming_fist_dark_skin_tone:': 'oncoming-fist-dark-skin-tone_1f44a-1f3ff',
  ':left-facing_fist:': 'left-facing-fist_1f91b',
  ':left-facing_fist_light_skin_tone:':
    'left-facing-fist-light-skin-tone_1f91b-1f3fb',
  ':left-facing_fist_medium-light_skin_tone:':
    'left-facing-fist-medium-light-skin-tone_1f91b-1f3fc',
  ':left-facing_fist_medium_skin_tone:':
    'left-facing-fist-medium-skin-tone_1f91b-1f3fd',
  ':left-facing_fist_medium-dark_skin_tone:':
    'left-facing-fist-medium-dark-skin-tone_1f91b-1f3fe',
  ':left-facing_fist_dark_skin_tone:':
    'left-facing-fist-dark-skin-tone_1f91b-1f3ff',
  ':right-facing_fist:': 'right-facing-fist_1f91c',
  ':right-facing_fist_light_skin_tone:':
    'right-facing-fist-light-skin-tone_1f91c-1f3fb',
  ':right-facing_fist_medium-light_skin_tone:':
    'right-facing-fist-medium-light-skin-tone_1f91c-1f3fc',
  ':right-facing_fist_medium_skin_tone:':
    'right-facing-fist-medium-skin-tone_1f91c-1f3fd',
  ':right-facing_fist_medium-dark_skin_tone:':
    'right-facing-fist-medium-dark-skin-tone_1f91c-1f3fe',
  ':right-facing_fist_dark_skin_tone:':
    'right-facing-fist-dark-skin-tone_1f91c-1f3ff',
  ':clapping_hands:': 'clapping-hands_1f44f',
  ':clapping_hands_light_skin_tone:':
    'clapping-hands-light-skin-tone_1f44f-1f3fb',
  ':clapping_hands_medium-light_skin_tone:':
    'clapping-hands-medium-light-skin-tone_1f44f-1f3fc',
  ':clapping_hands_medium_skin_tone:':
    'clapping-hands-medium-skin-tone_1f44f-1f3fd',
  ':clapping_hands_medium-dark_skin_tone:':
    'clapping-hands-medium-dark-skin-tone_1f44f-1f3fe',
  ':clapping_hands_dark_skin_tone:':
    'clapping-hands-dark-skin-tone_1f44f-1f3ff',
  ':raising_hands:': 'raising-hands_1f64c',
  ':raising_hands_light_skin_tone:':
    'raising-hands-light-skin-tone_1f64c-1f3fb',
  ':raising_hands_medium-light_skin_tone:':
    'raising-hands-medium-light-skin-tone_1f64c-1f3fc',
  ':raising_hands_medium_skin_tone:':
    'raising-hands-medium-skin-tone_1f64c-1f3fd',
  ':raising_hands_medium-dark_skin_tone:':
    'raising-hands-medium-dark-skin-tone_1f64c-1f3fe',
  ':raising_hands_dark_skin_tone:': 'raising-hands-dark-skin-tone_1f64c-1f3ff',
  ':heart_hands:': 'heart-hands_1faf6',
  ':open_hands:': 'open-hands_1f450',
  ':open_hands_light_skin_tone:': 'open-hands-light-skin-tone_1f450-1f3fb',
  ':open_hands_medium-light_skin_tone:':
    'open-hands-medium-light-skin-tone_1f450-1f3fc',
  ':open_hands_medium_skin_tone:': 'open-hands-medium-skin-tone_1f450-1f3fd',
  ':open_hands_medium-dark_skin_tone:':
    'open-hands-medium-dark-skin-tone_1f450-1f3fe',
  ':open_hands_dark_skin_tone:': 'open-hands-dark-skin-tone_1f450-1f3ff',
  ':palms_up_together:': 'palms-up-together_1f932',
  ':palms_up_together_light_skin_tone:':
    'palms-up-together-light-skin-tone_1f932-1f3fb',
  ':palms_up_together_medium-light_skin_tone:':
    'palms-up-together-medium-light-skin-tone_1f932-1f3fc',
  ':palms_up_together_medium_skin_tone:':
    'palms-up-together-medium-skin-tone_1f932-1f3fd',
  ':palms_up_together_medium-dark_skin_tone:':
    'palms-up-together-medium-dark-skin-tone_1f932-1f3fe',
  ':palms_up_together_dark_skin_tone:':
    'palms-up-together-dark-skin-tone_1f932-1f3ff',
  ':handshake:': 'handshake_1f91d',
  ':handshake_light_skin_tone:': 'handshake-light-skin-tone_1f91d-1f3fb',
  ':handshake_medium-light_skin_tone:':
    'handshake-medium-light-skin-tone_1f91d-1f3fc',
  ':handshake_medium_skin_tone:': 'handshake-medium-skin-tone_1f91d-1f3fd',
  ':handshake_medium-dark_skin_tone:':
    'handshake-medium-dark-skin-tone_1f91d-1f3fe',
  ':handshake_dark_skin_tone:': 'handshake-dark-skin-tone_1f91d-1f3ff',
  ':handshake_light_skin_tone_medium-light_skin_tone:':
    'handshake-light-skin-tone-medium-light-skin-tone_1faf1-1f3fb-200d-1faf2-1f3fc',
  ':handshake_light_skin_tone_medium_skin_tone:':
    'handshake-light-skin-tone-medium-skin-tone_1faf1-1f3fb-200d-1faf2-1f3fd',
  ':handshake_light_skin_tone_medium-dark_skin_tone:':
    'handshake-light-skin-tone-medium-dark-skin-tone_1faf1-1f3fb-200d-1faf2-1f3fe',
  ':handshake_light_skin_tone_dark_skin_tone:':
    'handshake-light-skin-tone-dark-skin-tone_1faf1-1f3fb-200d-1faf2-1f3ff',
  ':handshake_medium-light_skin_tone_light_skin_tone:':
    'handshake-medium-light-skin-tone-light-skin-tone_1faf1-1f3fc-200d-1faf2-1f3fb',
  ':handshake_medium-light_skin_tone_medium_skin_tone:':
    'handshake-medium-light-skin-tone-medium-skin-tone_1faf1-1f3fc-200d-1faf2-1f3fd',
  ':handshake_medium-light_skin_tone_medium-dark_skin_tone:':
    'handshake-medium-light-skin-tone-medium-dark-skin-tone_1faf1-1f3fc-200d-1faf2-1f3fe',
  ':handshake_medium-light_skin_tone_dark_skin_tone:':
    'handshake-medium-light-skin-tone-dark-skin-tone_1faf1-1f3fc-200d-1faf2-1f3ff',
  ':handshake_medium_skin_tone_light_skin_tone:':
    'handshake-medium-skin-tone-light-skin-tone_1faf1-1f3fd-200d-1faf2-1f3fb',
  ':handshake_medium_skin_tone_medium-light_skin_tone:':
    'handshake-medium-skin-tone-medium-light-skin-tone_1faf1-1f3fd-200d-1faf2-1f3fc',
  ':handshake_medium_skin_tone_medium-dark_skin_tone:':
    'handshake-medium-skin-tone-medium-dark-skin-tone_1faf1-1f3fd-200d-1faf2-1f3fe',
  ':handshake_medium_skin_tone_dark_skin_tone:':
    'handshake-medium-skin-tone-dark-skin-tone_1faf1-1f3fd-200d-1faf2-1f3ff',
  ':handshake_medium-dark_skin_tone_light_skin_tone:':
    'handshake-medium-dark-skin-tone-light-skin-tone_1faf1-1f3fe-200d-1faf2-1f3fb',
  ':handshake_medium-dark_skin_tone_medium-light_skin_tone:':
    'handshake-medium-dark-skin-tone-medium-light-skin-tone_1faf1-1f3fe-200d-1faf2-1f3fc',
  ':handshake_medium-dark_skin_tone_medium_skin_tone:':
    'handshake-medium-dark-skin-tone-medium-skin-tone_1faf1-1f3fe-200d-1faf2-1f3fd',
  ':handshake_medium-dark_skin_tone_dark_skin_tone:':
    'handshake-medium-dark-skin-tone-dark-skin-tone_1faf1-1f3fe-200d-1faf2-1f3ff',
  ':handshake_dark_skin_tone_light_skin_tone:':
    'handshake-dark-skin-tone-light-skin-tone_1faf1-1f3ff-200d-1faf2-1f3fb',
  ':handshake_dark_skin_tone_medium-light_skin_tone:':
    'handshake-dark-skin-tone-medium-light-skin-tone_1faf1-1f3ff-200d-1faf2-1f3fc',
  ':handshake_dark_skin_tone_medium_skin_tone:':
    'handshake-dark-skin-tone-medium-skin-tone_1faf1-1f3ff-200d-1faf2-1f3fd',
  ':handshake_dark_skin_tone_medium-dark_skin_tone:':
    'handshake-dark-skin-tone-medium-dark-skin-tone_1faf1-1f3ff-200d-1faf2-1f3fe',
  ':folded_hands:': 'folded-hands_1f64f',
  ':folded_hands_light_skin_tone:': 'folded-hands-light-skin-tone_1f64f-1f3fb',
  ':folded_hands_medium-light_skin_tone:':
    'folded-hands-medium-light-skin-tone_1f64f-1f3fc',
  ':folded_hands_medium_skin_tone:':
    'folded-hands-medium-skin-tone_1f64f-1f3fd',
  ':folded_hands_medium-dark_skin_tone:':
    'folded-hands-medium-dark-skin-tone_1f64f-1f3fe',
  ':folded_hands_dark_skin_tone:': 'folded-hands-dark-skin-tone_1f64f-1f3ff',
  ':writing_hand:': 'writing-hand_270d-fe0f',
  ':writing_hand_light_skin_tone:': 'writing-hand-light-skin-tone_270d-1f3fb',
  ':writing_hand_medium-light_skin_tone:':
    'writing-hand-medium-light-skin-tone_270d-1f3fc',
  ':writing_hand_medium_skin_tone:': 'writing-hand-medium-skin-tone_270d-1f3fd',
  ':writing_hand_medium-dark_skin_tone:':
    'writing-hand-medium-dark-skin-tone_270d-1f3fe',
  ':writing_hand_dark_skin_tone:': 'writing-hand-dark-skin-tone_270d-1f3ff',
  ':nail_polish:': 'nail-polish_1f485',
  ':nail_polish_light_skin_tone:': 'nail-polish-light-skin-tone_1f485-1f3fb',
  ':nail_polish_medium-light_skin_tone:':
    'nail-polish-medium-light-skin-tone_1f485-1f3fc',
  ':nail_polish_medium_skin_tone:': 'nail-polish-medium-skin-tone_1f485-1f3fd',
  ':nail_polish_medium-dark_skin_tone:':
    'nail-polish-medium-dark-skin-tone_1f485-1f3fe',
  ':nail_polish_dark_skin_tone:': 'nail-polish-dark-skin-tone_1f485-1f3ff',
  ':selfie:': 'selfie_1f933',
  ':selfie_light_skin_tone:': 'selfie-light-skin-tone_1f933-1f3fb',
  ':selfie_medium-light_skin_tone:':
    'selfie-medium-light-skin-tone_1f933-1f3fc',
  ':selfie_medium_skin_tone:': 'selfie-medium-skin-tone_1f933-1f3fd',
  ':selfie_medium-dark_skin_tone:': 'selfie-medium-dark-skin-tone_1f933-1f3fe',
  ':selfie_dark_skin_tone:': 'selfie-dark-skin-tone_1f933-1f3ff',
  ':flexed_biceps:': 'flexed-biceps_1f4aa',
  ':flexed_biceps_light_skin_tone:':
    'flexed-biceps-light-skin-tone_1f4aa-1f3fb',
  ':flexed_biceps_medium-light_skin_tone:':
    'flexed-biceps-medium-light-skin-tone_1f4aa-1f3fc',
  ':flexed_biceps_medium_skin_tone:':
    'flexed-biceps-medium-skin-tone_1f4aa-1f3fd',
  ':flexed_biceps_medium-dark_skin_tone:':
    'flexed-biceps-medium-dark-skin-tone_1f4aa-1f3fe',
  ':flexed_biceps_dark_skin_tone:': 'flexed-biceps-dark-skin-tone_1f4aa-1f3ff',
  ':mechanical_arm:': 'mechanical-arm_1f9be',
  ':mechanical_leg:': 'mechanical-leg_1f9bf',
  ':leg:': 'leg_1f9b5',
  ':leg_light_skin_tone:': 'leg-light-skin-tone_1f9b5-1f3fb',
  ':leg_medium-light_skin_tone:': 'leg-medium-light-skin-tone_1f9b5-1f3fc',
  ':leg_medium_skin_tone:': 'leg-medium-skin-tone_1f9b5-1f3fd',
  ':leg_medium-dark_skin_tone:': 'leg-medium-dark-skin-tone_1f9b5-1f3fe',
  ':leg_dark_skin_tone:': 'leg-dark-skin-tone_1f9b5-1f3ff',
  ':foot:': 'foot_1f9b6',
  ':foot_light_skin_tone:': 'foot-light-skin-tone_1f9b6-1f3fb',
  ':foot_medium-light_skin_tone:': 'foot-medium-light-skin-tone_1f9b6-1f3fc',
  ':foot_medium_skin_tone:': 'foot-medium-skin-tone_1f9b6-1f3fd',
  ':foot_medium-dark_skin_tone:': 'foot-medium-dark-skin-tone_1f9b6-1f3fe',
  ':foot_dark_skin_tone:': 'foot-dark-skin-tone_1f9b6-1f3ff',
  ':ear:': 'ear_1f442',
  ':ear_light_skin_tone:': 'ear-light-skin-tone_1f442-1f3fb',
  ':ear_medium-light_skin_tone:': 'ear-medium-light-skin-tone_1f442-1f3fc',
  ':ear_medium_skin_tone:': 'ear-medium-skin-tone_1f442-1f3fd',
  ':ear_medium-dark_skin_tone:': 'ear-medium-dark-skin-tone_1f442-1f3fe',
  ':ear_dark_skin_tone:': 'ear-dark-skin-tone_1f442-1f3ff',
  ':ear_with_hearing_aid:': 'ear-with-hearing-aid_1f9bb',
  ':ear_with_hearing_aid_light_skin_tone:':
    'ear-with-hearing-aid-light-skin-tone_1f9bb-1f3fb',
  ':ear_with_hearing_aid_medium-light_skin_tone:':
    'ear-with-hearing-aid-medium-light-skin-tone_1f9bb-1f3fc',
  ':ear_with_hearing_aid_medium_skin_tone:':
    'ear-with-hearing-aid-medium-skin-tone_1f9bb-1f3fd',
  ':ear_with_hearing_aid_medium-dark_skin_tone:':
    'ear-with-hearing-aid-medium-dark-skin-tone_1f9bb-1f3fe',
  ':ear_with_hearing_aid_dark_skin_tone:':
    'ear-with-hearing-aid-dark-skin-tone_1f9bb-1f3ff',
  ':nose:': 'nose_1f443',
  ':nose_light_skin_tone:': 'nose-light-skin-tone_1f443-1f3fb',
  ':nose_medium-light_skin_tone:': 'nose-medium-light-skin-tone_1f443-1f3fc',
  ':nose_medium_skin_tone:': 'nose-medium-skin-tone_1f443-1f3fd',
  ':nose_medium-dark_skin_tone:': 'nose-medium-dark-skin-tone_1f443-1f3fe',
  ':nose_dark_skin_tone:': 'nose-dark-skin-tone_1f443-1f3ff',
  ':brain:': 'brain_1f9e0',
  ':anatomical_heart:': 'anatomical-heart_1fac0',
  ':lungs:': 'lungs_1fac1',
  ':tooth:': 'tooth_1f9b7',
  ':bone:': 'bone_1f9b4',
  ':eyes:': 'eyes_1f440',
  ':eye:': 'eye_1f441-fe0f',
  ':tongue:': 'tongue_1f445',
  ':mouth:': 'mouth_1f444',
  ':biting_lip:': 'biting-lip_1fae6',
  ':baby:': 'baby_1f476',
  ':baby_light_skin_tone:': 'baby-light-skin-tone_1f476-1f3fb',
  ':baby_medium-light_skin_tone:': 'baby-medium-light-skin-tone_1f476-1f3fc',
  ':baby_medium_skin_tone:': 'baby-medium-skin-tone_1f476-1f3fd',
  ':baby_medium-dark_skin_tone:': 'baby-medium-dark-skin-tone_1f476-1f3fe',
  ':baby_dark_skin_tone:': 'baby-dark-skin-tone_1f476-1f3ff',
  ':child:': 'child_1f9d2',
  ':child_light_skin_tone:': 'child-light-skin-tone_1f9d2-1f3fb',
  ':child_medium-light_skin_tone:': 'child-medium-light-skin-tone_1f9d2-1f3fc',
  ':child_medium_skin_tone:': 'child-medium-skin-tone_1f9d2-1f3fd',
  ':child_medium-dark_skin_tone:': 'child-medium-dark-skin-tone_1f9d2-1f3fe',
  ':child_dark_skin_tone:': 'child-dark-skin-tone_1f9d2-1f3ff',
  ':boy:': 'boy_1f466',
  ':boy_light_skin_tone:': 'boy-light-skin-tone_1f466-1f3fb',
  ':boy_medium-light_skin_tone:': 'boy-medium-light-skin-tone_1f466-1f3fc',
  ':boy_medium_skin_tone:': 'boy-medium-skin-tone_1f466-1f3fd',
  ':boy_medium-dark_skin_tone:': 'boy-medium-dark-skin-tone_1f466-1f3fe',
  ':boy_dark_skin_tone:': 'boy-dark-skin-tone_1f466-1f3ff',
  ':girl:': 'girl_1f467',
  ':girl_light_skin_tone:': 'girl-light-skin-tone_1f467-1f3fb',
  ':girl_medium-light_skin_tone:': 'girl-medium-light-skin-tone_1f467-1f3fc',
  ':girl_medium_skin_tone:': 'girl-medium-skin-tone_1f467-1f3fd',
  ':girl_medium-dark_skin_tone:': 'girl-medium-dark-skin-tone_1f467-1f3fe',
  ':girl_dark_skin_tone:': 'girl-dark-skin-tone_1f467-1f3ff',
  ':person:': 'person_1f9d1',
  ':person_light_skin_tone:': 'person-light-skin-tone_1f9d1-1f3fb',
  ':person_medium-light_skin_tone:':
    'person-medium-light-skin-tone_1f9d1-1f3fc',
  ':person_medium_skin_tone:': 'person-medium-skin-tone_1f9d1-1f3fd',
  ':person_medium-dark_skin_tone:': 'person-medium-dark-skin-tone_1f9d1-1f3fe',
  ':person_dark_skin_tone:': 'person-dark-skin-tone_1f9d1-1f3ff',
  ':person_blond_hair:': 'person-blond-hair_1f471',
  ':person_light_skin_tone_blond_hair:':
    'person-light-skin-tone-blond-hair_1f471-1f3fb',
  ':person_medium-light_skin_tone_blond_hair:':
    'person-medium-light-skin-tone-blond-hair_1f471-1f3fc',
  ':person_medium_skin_tone_blond_hair:':
    'person-medium-skin-tone-blond-hair_1f471-1f3fd',
  ':person_medium-dark_skin_tone_blond_hair:':
    'person-medium-dark-skin-tone-blond-hair_1f471-1f3fe',
  ':person_dark_skin_tone_blond_hair:':
    'person-dark-skin-tone-blond-hair_1f471-1f3ff',
  ':man:': 'man_1f468',
  ':man_light_skin_tone:': 'man-light-skin-tone_1f468-1f3fb',
  ':man_medium-light_skin_tone:': 'man-medium-light-skin-tone_1f468-1f3fc',
  ':man_medium_skin_tone:': 'man-medium-skin-tone_1f468-1f3fd',
  ':man_medium-dark_skin_tone:': 'man-medium-dark-skin-tone_1f468-1f3fe',
  ':man_dark_skin_tone:': 'man-dark-skin-tone_1f468-1f3ff',
  ':man_beard:': 'man-beard_1f9d4',
  ':man_light_skin_tone_beard:': 'man-light-skin-tone-beard_1f9d4-1f3fb',
  ':man_medium-light_skin_tone_beard:':
    'man-medium-light-skin-tone-beard_1f9d4-1f3fc',
  ':man_medium_skin_tone_beard:': 'man-medium-skin-tone-beard_1f9d4-1f3fd',
  ':man_medium-dark_skin_tone_beard:':
    'man-medium-dark-skin-tone-beard_1f9d4-1f3fe',
  ':man_dark_skin_tone_beard:': 'man-dark-skin-tone-beard_1f9d4-1f3ff',
  ':woman_beard:': 'woman-beard_1f9d4-200d-2640-fe0f',
  ':woman_light_skin_tone_beard:':
    'woman-light-skin-tone-beard_1f9d4-1f3fb-200d-2640-fe0f',
  ':woman_medium-light_skin_tone_beard:':
    'woman-medium-light-skin-tone-beard_1f9d4-1f3fc-200d-2640-fe0f',
  ':woman_medium_skin_tone_beard:':
    'woman-medium-skin-tone-beard_1f9d4-1f3fd-200d-2640-fe0f',
  ':woman_medium-dark_skin_tone_beard:':
    'woman-medium-dark-skin-tone-beard_1f9d4-1f3fe-200d-2640-fe0f',
  ':woman_dark_skin_tone_beard:':
    'woman-dark-skin-tone-beard_1f9d4-1f3ff-200d-2640-fe0f',
  ':man_red_hair:': 'man-red-hair_1f468-200d-1f9b0',
  ':man_light_skin_tone_red_hair:':
    'man-light-skin-tone-red-hair_1f468-1f3fb-200d-1f9b0',
  ':man_medium-light_skin_tone_red_hair:':
    'man-medium-light-skin-tone-red-hair_1f468-1f3fc-200d-1f9b0',
  ':man_medium_skin_tone_red_hair:':
    'man-medium-skin-tone-red-hair_1f468-1f3fd-200d-1f9b0',
  ':man_medium-dark_skin_tone_red_hair:':
    'man-medium-dark-skin-tone-red-hair_1f468-1f3fe-200d-1f9b0',
  ':man_dark_skin_tone_red_hair:':
    'man-dark-skin-tone-red-hair_1f468-1f3ff-200d-1f9b0',
  ':man_curly_hair:': 'man-curly-hair_1f468-200d-1f9b1',
  ':man_light_skin_tone_curly_hair:':
    'man-light-skin-tone-curly-hair_1f468-1f3fb-200d-1f9b1',
  ':man_medium-light_skin_tone_curly_hair:':
    'man-medium-light-skin-tone-curly-hair_1f468-1f3fc-200d-1f9b1',
  ':man_medium_skin_tone_curly_hair:':
    'man-medium-skin-tone-curly-hair_1f468-1f3fd-200d-1f9b1',
  ':man_medium-dark_skin_tone_curly_hair:':
    'man-medium-dark-skin-tone-curly-hair_1f468-1f3fe-200d-1f9b1',
  ':man_dark_skin_tone_curly_hair:':
    'man-dark-skin-tone-curly-hair_1f468-1f3ff-200d-1f9b1',
  ':man_white_hair:': 'man-white-hair_1f468-200d-1f9b3',
  ':man_light_skin_tone_white_hair:':
    'man-light-skin-tone-white-hair_1f468-1f3fb-200d-1f9b3',
  ':man_medium-light_skin_tone_white_hair:':
    'man-medium-light-skin-tone-white-hair_1f468-1f3fc-200d-1f9b3',
  ':man_medium_skin_tone_white_hair:':
    'man-medium-skin-tone-white-hair_1f468-1f3fd-200d-1f9b3',
  ':man_medium-dark_skin_tone_white_hair:':
    'man-medium-dark-skin-tone-white-hair_1f468-1f3fe-200d-1f9b3',
  ':man_dark_skin_tone_white_hair:':
    'man-dark-skin-tone-white-hair_1f468-1f3ff-200d-1f9b3',
  ':man_bald:': 'man-bald_1f468-200d-1f9b2',
  ':man_light_skin_tone_bald:':
    'man-light-skin-tone-bald_1f468-1f3fb-200d-1f9b2',
  ':man_medium-light_skin_tone_bald:':
    'man-medium-light-skin-tone-bald_1f468-1f3fc-200d-1f9b2',
  ':man_medium_skin_tone_bald:':
    'man-medium-skin-tone-bald_1f468-1f3fd-200d-1f9b2',
  ':man_medium-dark_skin_tone_bald:':
    'man-medium-dark-skin-tone-bald_1f468-1f3fe-200d-1f9b2',
  ':man_dark_skin_tone_bald:': 'man-dark-skin-tone-bald_1f468-1f3ff-200d-1f9b2',
  ':woman:': 'woman_1f469',
  ':woman_light_skin_tone:': 'woman-light-skin-tone_1f469-1f3fb',
  ':woman_medium-light_skin_tone:': 'woman-medium-light-skin-tone_1f469-1f3fc',
  ':woman_medium_skin_tone:': 'woman-medium-skin-tone_1f469-1f3fd',
  ':woman_medium-dark_skin_tone:': 'woman-medium-dark-skin-tone_1f469-1f3fe',
  ':woman_dark_skin_tone:': 'woman-dark-skin-tone_1f469-1f3ff',
  ':woman_red_hair:': 'woman-red-hair_1f469-200d-1f9b0',
  ':woman_light_skin_tone_red_hair:':
    'woman-light-skin-tone-red-hair_1f469-1f3fb-200d-1f9b0',
  ':woman_medium-light_skin_tone_red_hair:':
    'woman-medium-light-skin-tone-red-hair_1f469-1f3fc-200d-1f9b0',
  ':woman_medium_skin_tone_red_hair:':
    'woman-medium-skin-tone-red-hair_1f469-1f3fd-200d-1f9b0',
  ':woman_medium-dark_skin_tone_red_hair:':
    'woman-medium-dark-skin-tone-red-hair_1f469-1f3fe-200d-1f9b0',
  ':woman_dark_skin_tone_red_hair:':
    'woman-dark-skin-tone-red-hair_1f469-1f3ff-200d-1f9b0',
  ':woman_curly_hair:': 'woman-curly-hair_1f469-200d-1f9b1',
  ':woman_light_skin_tone_curly_hair:':
    'woman-light-skin-tone-curly-hair_1f469-1f3fb-200d-1f9b1',
  ':woman_medium-light_skin_tone_curly_hair:':
    'woman-medium-light-skin-tone-curly-hair_1f469-1f3fc-200d-1f9b1',
  ':woman_medium_skin_tone_curly_hair:':
    'woman-medium-skin-tone-curly-hair_1f469-1f3fd-200d-1f9b1',
  ':woman_medium-dark_skin_tone_curly_hair:':
    'woman-medium-dark-skin-tone-curly-hair_1f469-1f3fe-200d-1f9b1',
  ':woman_dark_skin_tone_curly_hair:':
    'woman-dark-skin-tone-curly-hair_1f469-1f3ff-200d-1f9b1',
  ':woman_white_hair:': 'woman-white-hair_1f469-200d-1f9b3',
  ':woman_light_skin_tone_white_hair:':
    'woman-light-skin-tone-white-hair_1f469-1f3fb-200d-1f9b3',
  ':woman_medium-light_skin_tone_white_hair:':
    'woman-medium-light-skin-tone-white-hair_1f469-1f3fc-200d-1f9b3',
  ':woman_medium_skin_tone_white_hair:':
    'woman-medium-skin-tone-white-hair_1f469-1f3fd-200d-1f9b3',
  ':woman_medium-dark_skin_tone_white_hair:':
    'woman-medium-dark-skin-tone-white-hair_1f469-1f3fe-200d-1f9b3',
  ':woman_dark_skin_tone_white_hair:':
    'woman-dark-skin-tone-white-hair_1f469-1f3ff-200d-1f9b3',
  ':woman_bald:': 'woman-bald_1f469-200d-1f9b2',
  ':woman_light_skin_tone_bald:':
    'woman-light-skin-tone-bald_1f469-1f3fb-200d-1f9b2',
  ':woman_medium-light_skin_tone_bald:':
    'woman-medium-light-skin-tone-bald_1f469-1f3fc-200d-1f9b2',
  ':woman_medium_skin_tone_bald:':
    'woman-medium-skin-tone-bald_1f469-1f3fd-200d-1f9b2',
  ':woman_medium-dark_skin_tone_bald:':
    'woman-medium-dark-skin-tone-bald_1f469-1f3fe-200d-1f9b2',
  ':woman_dark_skin_tone_bald:':
    'woman-dark-skin-tone-bald_1f469-1f3ff-200d-1f9b2',
  ':woman_blond_hair:': 'woman-blond-hair_1f471-200d-2640-fe0f',
  ':woman_light_skin_tone_blond_hair:':
    'woman-light-skin-tone-blond-hair_1f471-1f3fb-200d-2640-fe0f',
  ':woman_medium-light_skin_tone_blond_hair:':
    'woman-medium-light-skin-tone-blond-hair_1f471-1f3fc-200d-2640-fe0f',
  ':woman_medium_skin_tone_blond_hair:':
    'woman-medium-skin-tone-blond-hair_1f471-1f3fd-200d-2640-fe0f',
  ':woman_medium-dark_skin_tone_blond_hair:':
    'woman-medium-dark-skin-tone-blond-hair_1f471-1f3fe-200d-2640-fe0f',
  ':woman_dark_skin_tone_blond_hair:':
    'woman-dark-skin-tone-blond-hair_1f471-1f3ff-200d-2640-fe0f',
  ':man_blond_hair:': 'man-blond-hair_1f471-200d-2642-fe0f',
  ':man_light_skin_tone_blond_hair:':
    'man-light-skin-tone-blond-hair_1f471-1f3fb-200d-2642-fe0f',
  ':man_medium-light_skin_tone_blond_hair:':
    'man-medium-light-skin-tone-blond-hair_1f471-1f3fc-200d-2642-fe0f',
  ':man_medium_skin_tone_blond_hair:':
    'man-medium-skin-tone-blond-hair_1f471-1f3fd-200d-2642-fe0f',
  ':man_medium-dark_skin_tone_blond_hair:':
    'man-medium-dark-skin-tone-blond-hair_1f471-1f3fe-200d-2642-fe0f',
  ':man_dark_skin_tone_blond_hair:':
    'man-dark-skin-tone-blond-hair_1f471-1f3ff-200d-2642-fe0f',
  ':older_person:': 'older-person_1f9d3',
  ':older_person_light_skin_tone:': 'older-person-light-skin-tone_1f9d3-1f3fb',
  ':older_person_medium-light_skin_tone:':
    'older-person-medium-light-skin-tone_1f9d3-1f3fc',
  ':older_person_medium_skin_tone:':
    'older-person-medium-skin-tone_1f9d3-1f3fd',
  ':older_person_medium-dark_skin_tone:':
    'older-person-medium-dark-skin-tone_1f9d3-1f3fe',
  ':older_person_dark_skin_tone:': 'older-person-dark-skin-tone_1f9d3-1f3ff',
  ':old_man:': 'old-man_1f474',
  ':old_man_light_skin_tone:': 'old-man-light-skin-tone_1f474-1f3fb',
  ':old_man_medium-light_skin_tone:':
    'old-man-medium-light-skin-tone_1f474-1f3fc',
  ':old_man_medium_skin_tone:': 'old-man-medium-skin-tone_1f474-1f3fd',
  ':old_man_medium-dark_skin_tone:':
    'old-man-medium-dark-skin-tone_1f474-1f3fe',
  ':old_man_dark_skin_tone:': 'old-man-dark-skin-tone_1f474-1f3ff',
  ':old_woman:': 'old-woman_1f475',
  ':old_woman_light_skin_tone:': 'old-woman-light-skin-tone_1f475-1f3fb',
  ':old_woman_medium-light_skin_tone:':
    'old-woman-medium-light-skin-tone_1f475-1f3fc',
  ':old_woman_medium_skin_tone:': 'old-woman-medium-skin-tone_1f475-1f3fd',
  ':old_woman_medium-dark_skin_tone:':
    'old-woman-medium-dark-skin-tone_1f475-1f3fe',
  ':old_woman_dark_skin_tone:': 'old-woman-dark-skin-tone_1f475-1f3ff',
  ':person_frowning:': 'person-frowning_1f64d',
  ':person_frowning_light_skin_tone:':
    'person-frowning-light-skin-tone_1f64d-1f3fb',
  ':person_frowning_medium-light_skin_tone:':
    'person-frowning-medium-light-skin-tone_1f64d-1f3fc',
  ':person_frowning_medium_skin_tone:':
    'person-frowning-medium-skin-tone_1f64d-1f3fd',
  ':person_frowning_medium-dark_skin_tone:':
    'person-frowning-medium-dark-skin-tone_1f64d-1f3fe',
  ':person_frowning_dark_skin_tone:':
    'person-frowning-dark-skin-tone_1f64d-1f3ff',
  ':man_frowning:': 'man-frowning_1f64d-200d-2642-fe0f',
  ':man_frowning_light_skin_tone:':
    'man-frowning-light-skin-tone_1f64d-1f3fb-200d-2642-fe0f',
  ':man_frowning_medium-light_skin_tone:':
    'man-frowning-medium-light-skin-tone_1f64d-1f3fc-200d-2642-fe0f',
  ':man_frowning_medium_skin_tone:':
    'man-frowning-medium-skin-tone_1f64d-1f3fd-200d-2642-fe0f',
  ':man_frowning_medium-dark_skin_tone:':
    'man-frowning-medium-dark-skin-tone_1f64d-1f3fe-200d-2642-fe0f',
  ':man_frowning_dark_skin_tone:':
    'man-frowning-dark-skin-tone_1f64d-1f3ff-200d-2642-fe0f',
  ':woman_frowning:': 'woman-frowning_1f64d-200d-2640-fe0f',
  ':woman_frowning_light_skin_tone:':
    'woman-frowning-light-skin-tone_1f64d-1f3fb-200d-2640-fe0f',
  ':woman_frowning_medium-light_skin_tone:':
    'woman-frowning-medium-light-skin-tone_1f64d-1f3fc-200d-2640-fe0f',
  ':woman_frowning_medium_skin_tone:':
    'woman-frowning-medium-skin-tone_1f64d-1f3fd-200d-2640-fe0f',
  ':woman_frowning_medium-dark_skin_tone:':
    'woman-frowning-medium-dark-skin-tone_1f64d-1f3fe-200d-2640-fe0f',
  ':woman_frowning_dark_skin_tone:':
    'woman-frowning-dark-skin-tone_1f64d-1f3ff-200d-2640-fe0f',
  ':person_pouting:': 'person-pouting_1f64e',
  ':person_pouting_light_skin_tone:':
    'person-pouting-light-skin-tone_1f64e-1f3fb',
  ':person_pouting_medium-light_skin_tone:':
    'person-pouting-medium-light-skin-tone_1f64e-1f3fc',
  ':person_pouting_medium_skin_tone:':
    'person-pouting-medium-skin-tone_1f64e-1f3fd',
  ':person_pouting_medium-dark_skin_tone:':
    'person-pouting-medium-dark-skin-tone_1f64e-1f3fe',
  ':person_pouting_dark_skin_tone:':
    'person-pouting-dark-skin-tone_1f64e-1f3ff',
  ':man_pouting:': 'man-pouting_1f64e-200d-2642-fe0f',
  ':man_pouting_light_skin_tone:':
    'man-pouting-light-skin-tone_1f64e-1f3fb-200d-2642-fe0f',
  ':man_pouting_medium-light_skin_tone:':
    'man-pouting-medium-light-skin-tone_1f64e-1f3fc-200d-2642-fe0f',
  ':man_pouting_medium_skin_tone:':
    'man-pouting-medium-skin-tone_1f64e-1f3fd-200d-2642-fe0f',
  ':man_pouting_medium-dark_skin_tone:':
    'man-pouting-medium-dark-skin-tone_1f64e-1f3fe-200d-2642-fe0f',
  ':man_pouting_dark_skin_tone:':
    'man-pouting-dark-skin-tone_1f64e-1f3ff-200d-2642-fe0f',
  ':woman_pouting:': 'woman-pouting_1f64e-200d-2640-fe0f',
  ':woman_pouting_light_skin_tone:':
    'woman-pouting-light-skin-tone_1f64e-1f3fb-200d-2640-fe0f',
  ':woman_pouting_medium-light_skin_tone:':
    'woman-pouting-medium-light-skin-tone_1f64e-1f3fc-200d-2640-fe0f',
  ':woman_pouting_medium_skin_tone:':
    'woman-pouting-medium-skin-tone_1f64e-1f3fd-200d-2640-fe0f',
  ':woman_pouting_medium-dark_skin_tone:':
    'woman-pouting-medium-dark-skin-tone_1f64e-1f3fe-200d-2640-fe0f',
  ':woman_pouting_dark_skin_tone:':
    'woman-pouting-dark-skin-tone_1f64e-1f3ff-200d-2640-fe0f',
  ':person_gesturing_NO:': 'person-gesturing-no_1f645',
  ':person_gesturing_NO_light_skin_tone:':
    'person-gesturing-no-light-skin-tone_1f645-1f3fb',
  ':person_gesturing_NO_medium-light_skin_tone:':
    'person-gesturing-no-medium-light-skin-tone_1f645-1f3fc',
  ':person_gesturing_NO_medium_skin_tone:':
    'person-gesturing-no-medium-skin-tone_1f645-1f3fd',
  ':person_gesturing_NO_medium-dark_skin_tone:':
    'person-gesturing-no-medium-dark-skin-tone_1f645-1f3fe',
  ':person_gesturing_NO_dark_skin_tone:':
    'person-gesturing-no-dark-skin-tone_1f645-1f3ff',
  ':man_gesturing_NO:': 'man-gesturing-no_1f645-200d-2642-fe0f',
  ':man_gesturing_NO_light_skin_tone:':
    'man-gesturing-no-light-skin-tone_1f645-1f3fb-200d-2642-fe0f',
  ':man_gesturing_NO_medium-light_skin_tone:':
    'man-gesturing-no-medium-light-skin-tone_1f645-1f3fc-200d-2642-fe0f',
  ':man_gesturing_NO_medium_skin_tone:':
    'man-gesturing-no-medium-skin-tone_1f645-1f3fd-200d-2642-fe0f',
  ':man_gesturing_NO_medium-dark_skin_tone:':
    'man-gesturing-no-medium-dark-skin-tone_1f645-1f3fe-200d-2642-fe0f',
  ':man_gesturing_NO_dark_skin_tone:':
    'man-gesturing-no-dark-skin-tone_1f645-1f3ff-200d-2642-fe0f',
  ':woman_gesturing_NO:': 'woman-gesturing-no_1f645-200d-2640-fe0f',
  ':woman_gesturing_NO_light_skin_tone:':
    'woman-gesturing-no-light-skin-tone_1f645-1f3fb-200d-2640-fe0f',
  ':woman_gesturing_NO_medium-light_skin_tone:':
    'woman-gesturing-no-medium-light-skin-tone_1f645-1f3fc-200d-2640-fe0f',
  ':woman_gesturing_NO_medium_skin_tone:':
    'woman-gesturing-no-medium-skin-tone_1f645-1f3fd-200d-2640-fe0f',
  ':woman_gesturing_NO_medium-dark_skin_tone:':
    'woman-gesturing-no-medium-dark-skin-tone_1f645-1f3fe-200d-2640-fe0f',
  ':woman_gesturing_NO_dark_skin_tone:':
    'woman-gesturing-no-dark-skin-tone_1f645-1f3ff-200d-2640-fe0f',
  ':person_gesturing_OK:': 'person-gesturing-ok_1f646',
  ':person_gesturing_OK_light_skin_tone:':
    'person-gesturing-ok-light-skin-tone_1f646-1f3fb',
  ':person_gesturing_OK_medium-light_skin_tone:':
    'person-gesturing-ok-medium-light-skin-tone_1f646-1f3fc',
  ':person_gesturing_OK_medium_skin_tone:':
    'person-gesturing-ok-medium-skin-tone_1f646-1f3fd',
  ':person_gesturing_OK_medium-dark_skin_tone:':
    'person-gesturing-ok-medium-dark-skin-tone_1f646-1f3fe',
  ':person_gesturing_OK_dark_skin_tone:':
    'person-gesturing-ok-dark-skin-tone_1f646-1f3ff',
  ':man_gesturing_OK:': 'man-gesturing-ok_1f646-200d-2642-fe0f',
  ':man_gesturing_OK_light_skin_tone:':
    'man-gesturing-ok-light-skin-tone_1f646-1f3fb-200d-2642-fe0f',
  ':man_gesturing_OK_medium-light_skin_tone:':
    'man-gesturing-ok-medium-light-skin-tone_1f646-1f3fc-200d-2642-fe0f',
  ':man_gesturing_OK_medium_skin_tone:':
    'man-gesturing-ok-medium-skin-tone_1f646-1f3fd-200d-2642-fe0f',
  ':man_gesturing_OK_medium-dark_skin_tone:':
    'man-gesturing-ok-medium-dark-skin-tone_1f646-1f3fe-200d-2642-fe0f',
  ':man_gesturing_OK_dark_skin_tone:':
    'man-gesturing-ok-dark-skin-tone_1f646-1f3ff-200d-2642-fe0f',
  ':woman_gesturing_OK:': 'woman-gesturing-ok_1f646-200d-2640-fe0f',
  ':woman_gesturing_OK_light_skin_tone:':
    'woman-gesturing-ok-light-skin-tone_1f646-1f3fb-200d-2640-fe0f',
  ':woman_gesturing_OK_medium-light_skin_tone:':
    'woman-gesturing-ok-medium-light-skin-tone_1f646-1f3fc-200d-2640-fe0f',
  ':woman_gesturing_OK_medium_skin_tone:':
    'woman-gesturing-ok-medium-skin-tone_1f646-1f3fd-200d-2640-fe0f',
  ':woman_gesturing_OK_medium-dark_skin_tone:':
    'woman-gesturing-ok-medium-dark-skin-tone_1f646-1f3fe-200d-2640-fe0f',
  ':woman_gesturing_OK_dark_skin_tone:':
    'woman-gesturing-ok-dark-skin-tone_1f646-1f3ff-200d-2640-fe0f',
  ':person_tipping_hand:': 'person-tipping-hand_1f481',
  ':person_tipping_hand_light_skin_tone:':
    'person-tipping-hand-light-skin-tone_1f481-1f3fb',
  ':person_tipping_hand_medium-light_skin_tone:':
    'person-tipping-hand-medium-light-skin-tone_1f481-1f3fc',
  ':person_tipping_hand_medium_skin_tone:':
    'person-tipping-hand-medium-skin-tone_1f481-1f3fd',
  ':person_tipping_hand_medium-dark_skin_tone:':
    'person-tipping-hand-medium-dark-skin-tone_1f481-1f3fe',
  ':person_tipping_hand_dark_skin_tone:':
    'person-tipping-hand-dark-skin-tone_1f481-1f3ff',
  ':man_tipping_hand:': 'man-tipping-hand_1f481-200d-2642-fe0f',
  ':man_tipping_hand_light_skin_tone:':
    'man-tipping-hand-light-skin-tone_1f481-1f3fb-200d-2642-fe0f',
  ':man_tipping_hand_medium-light_skin_tone:':
    'man-tipping-hand-medium-light-skin-tone_1f481-1f3fc-200d-2642-fe0f',
  ':man_tipping_hand_medium_skin_tone:':
    'man-tipping-hand-medium-skin-tone_1f481-1f3fd-200d-2642-fe0f',
  ':man_tipping_hand_medium-dark_skin_tone:':
    'man-tipping-hand-medium-dark-skin-tone_1f481-1f3fe-200d-2642-fe0f',
  ':man_tipping_hand_dark_skin_tone:':
    'man-tipping-hand-dark-skin-tone_1f481-1f3ff-200d-2642-fe0f',
  ':woman_tipping_hand:': 'woman-tipping-hand_1f481-200d-2640-fe0f',
  ':woman_tipping_hand_light_skin_tone:':
    'woman-tipping-hand-light-skin-tone_1f481-1f3fb-200d-2640-fe0f',
  ':woman_tipping_hand_medium-light_skin_tone:':
    'woman-tipping-hand-medium-light-skin-tone_1f481-1f3fc-200d-2640-fe0f',
  ':woman_tipping_hand_medium_skin_tone:':
    'woman-tipping-hand-medium-skin-tone_1f481-1f3fd-200d-2640-fe0f',
  ':woman_tipping_hand_medium-dark_skin_tone:':
    'woman-tipping-hand-medium-dark-skin-tone_1f481-1f3fe-200d-2640-fe0f',
  ':woman_tipping_hand_dark_skin_tone:':
    'woman-tipping-hand-dark-skin-tone_1f481-1f3ff-200d-2640-fe0f',
  ':person_raising_hand:': 'person-raising-hand_1f64b',
  ':person_raising_hand_light_skin_tone:':
    'person-raising-hand-light-skin-tone_1f64b-1f3fb',
  ':person_raising_hand_medium-light_skin_tone:':
    'person-raising-hand-medium-light-skin-tone_1f64b-1f3fc',
  ':person_raising_hand_medium_skin_tone:':
    'person-raising-hand-medium-skin-tone_1f64b-1f3fd',
  ':person_raising_hand_medium-dark_skin_tone:':
    'person-raising-hand-medium-dark-skin-tone_1f64b-1f3fe',
  ':person_raising_hand_dark_skin_tone:':
    'person-raising-hand-dark-skin-tone_1f64b-1f3ff',
  ':man_raising_hand:': 'man-raising-hand_1f64b-200d-2642-fe0f',
  ':man_raising_hand_light_skin_tone:':
    'man-raising-hand-light-skin-tone_1f64b-1f3fb-200d-2642-fe0f',
  ':man_raising_hand_medium-light_skin_tone:':
    'man-raising-hand-medium-light-skin-tone_1f64b-1f3fc-200d-2642-fe0f',
  ':man_raising_hand_medium_skin_tone:':
    'man-raising-hand-medium-skin-tone_1f64b-1f3fd-200d-2642-fe0f',
  ':man_raising_hand_medium-dark_skin_tone:':
    'man-raising-hand-medium-dark-skin-tone_1f64b-1f3fe-200d-2642-fe0f',
  ':man_raising_hand_dark_skin_tone:':
    'man-raising-hand-dark-skin-tone_1f64b-1f3ff-200d-2642-fe0f',
  ':woman_raising_hand:': 'woman-raising-hand_1f64b-200d-2640-fe0f',
  ':woman_raising_hand_light_skin_tone:':
    'woman-raising-hand-light-skin-tone_1f64b-1f3fb-200d-2640-fe0f',
  ':woman_raising_hand_medium-light_skin_tone:':
    'woman-raising-hand-medium-light-skin-tone_1f64b-1f3fc-200d-2640-fe0f',
  ':woman_raising_hand_medium_skin_tone:':
    'woman-raising-hand-medium-skin-tone_1f64b-1f3fd-200d-2640-fe0f',
  ':woman_raising_hand_medium-dark_skin_tone:':
    'woman-raising-hand-medium-dark-skin-tone_1f64b-1f3fe-200d-2640-fe0f',
  ':woman_raising_hand_dark_skin_tone:':
    'woman-raising-hand-dark-skin-tone_1f64b-1f3ff-200d-2640-fe0f',
  ':deaf_person:': 'deaf-person_1f9cf',
  ':deaf_person_light_skin_tone:': 'deaf-person-light-skin-tone_1f9cf-1f3fb',
  ':deaf_person_medium-light_skin_tone:':
    'deaf-person-medium-light-skin-tone_1f9cf-1f3fc',
  ':deaf_person_medium_skin_tone:': 'deaf-person-medium-skin-tone_1f9cf-1f3fd',
  ':deaf_person_medium-dark_skin_tone:':
    'deaf-person-medium-dark-skin-tone_1f9cf-1f3fe',
  ':deaf_person_dark_skin_tone:': 'deaf-person-dark-skin-tone_1f9cf-1f3ff',
  ':deaf_man:': 'deaf-man_1f9cf-200d-2642-fe0f',
  ':deaf_man_light_skin_tone:':
    'deaf-man-light-skin-tone_1f9cf-1f3fb-200d-2642-fe0f',
  ':deaf_man_medium-light_skin_tone:':
    'deaf-man-medium-light-skin-tone_1f9cf-1f3fc-200d-2642-fe0f',
  ':deaf_man_medium_skin_tone:':
    'deaf-man-medium-skin-tone_1f9cf-1f3fd-200d-2642-fe0f',
  ':deaf_man_medium-dark_skin_tone:':
    'deaf-man-medium-dark-skin-tone_1f9cf-1f3fe-200d-2642-fe0f',
  ':deaf_man_dark_skin_tone:':
    'deaf-man-dark-skin-tone_1f9cf-1f3ff-200d-2642-fe0f',
  ':deaf_woman:': 'deaf-woman_1f9cf-200d-2640-fe0f',
  ':deaf_woman_light_skin_tone:':
    'deaf-woman-light-skin-tone_1f9cf-1f3fb-200d-2640-fe0f',
  ':deaf_woman_medium-light_skin_tone:':
    'deaf-woman-medium-light-skin-tone_1f9cf-1f3fc-200d-2640-fe0f',
  ':deaf_woman_medium_skin_tone:':
    'deaf-woman-medium-skin-tone_1f9cf-1f3fd-200d-2640-fe0f',
  ':deaf_woman_medium-dark_skin_tone:':
    'deaf-woman-medium-dark-skin-tone_1f9cf-1f3fe-200d-2640-fe0f',
  ':deaf_woman_dark_skin_tone:':
    'deaf-woman-dark-skin-tone_1f9cf-1f3ff-200d-2640-fe0f',
  ':person_bowing:': 'person-bowing_1f647',
  ':person_bowing_light_skin_tone:':
    'person-bowing-light-skin-tone_1f647-1f3fb',
  ':person_bowing_medium-light_skin_tone:':
    'person-bowing-medium-light-skin-tone_1f647-1f3fc',
  ':person_bowing_medium_skin_tone:':
    'person-bowing-medium-skin-tone_1f647-1f3fd',
  ':person_bowing_medium-dark_skin_tone:':
    'person-bowing-medium-dark-skin-tone_1f647-1f3fe',
  ':person_bowing_dark_skin_tone:': 'person-bowing-dark-skin-tone_1f647-1f3ff',
  ':man_bowing:': 'man-bowing_1f647-200d-2642-fe0f',
  ':man_bowing_light_skin_tone:':
    'man-bowing-light-skin-tone_1f647-1f3fb-200d-2642-fe0f',
  ':man_bowing_medium-light_skin_tone:':
    'man-bowing-medium-light-skin-tone_1f647-1f3fc-200d-2642-fe0f',
  ':man_bowing_medium_skin_tone:':
    'man-bowing-medium-skin-tone_1f647-1f3fd-200d-2642-fe0f',
  ':man_bowing_medium-dark_skin_tone:':
    'man-bowing-medium-dark-skin-tone_1f647-1f3fe-200d-2642-fe0f',
  ':man_bowing_dark_skin_tone:':
    'man-bowing-dark-skin-tone_1f647-1f3ff-200d-2642-fe0f',
  ':woman_bowing:': 'woman-bowing_1f647-200d-2640-fe0f',
  ':woman_bowing_light_skin_tone:':
    'woman-bowing-light-skin-tone_1f647-1f3fb-200d-2640-fe0f',
  ':woman_bowing_medium-light_skin_tone:':
    'woman-bowing-medium-light-skin-tone_1f647-1f3fc-200d-2640-fe0f',
  ':woman_bowing_medium_skin_tone:':
    'woman-bowing-medium-skin-tone_1f647-1f3fd-200d-2640-fe0f',
  ':woman_bowing_medium-dark_skin_tone:':
    'woman-bowing-medium-dark-skin-tone_1f647-1f3fe-200d-2640-fe0f',
  ':woman_bowing_dark_skin_tone:':
    'woman-bowing-dark-skin-tone_1f647-1f3ff-200d-2640-fe0f',
  ':person_facepalming:': 'person-facepalming_1f926',
  ':person_facepalming_light_skin_tone:':
    'person-facepalming-light-skin-tone_1f926-1f3fb',
  ':person_facepalming_medium-light_skin_tone:':
    'person-facepalming-medium-light-skin-tone_1f926-1f3fc',
  ':person_facepalming_medium_skin_tone:':
    'person-facepalming-medium-skin-tone_1f926-1f3fd',
  ':person_facepalming_medium-dark_skin_tone:':
    'person-facepalming-medium-dark-skin-tone_1f926-1f3fe',
  ':person_facepalming_dark_skin_tone:':
    'person-facepalming-dark-skin-tone_1f926-1f3ff',
  ':man_facepalming:': 'man-facepalming_1f926-200d-2642-fe0f',
  ':man_facepalming_light_skin_tone:':
    'man-facepalming-light-skin-tone_1f926-1f3fb-200d-2642-fe0f',
  ':man_facepalming_medium-light_skin_tone:':
    'man-facepalming-medium-light-skin-tone_1f926-1f3fc-200d-2642-fe0f',
  ':man_facepalming_medium_skin_tone:':
    'man-facepalming-medium-skin-tone_1f926-1f3fd-200d-2642-fe0f',
  ':man_facepalming_medium-dark_skin_tone:':
    'man-facepalming-medium-dark-skin-tone_1f926-1f3fe-200d-2642-fe0f',
  ':man_facepalming_dark_skin_tone:':
    'man-facepalming-dark-skin-tone_1f926-1f3ff-200d-2642-fe0f',
  ':woman_facepalming:': 'woman-facepalming_1f926-200d-2640-fe0f',
  ':woman_facepalming_light_skin_tone:':
    'woman-facepalming-light-skin-tone_1f926-1f3fb-200d-2640-fe0f',
  ':woman_facepalming_medium-light_skin_tone:':
    'woman-facepalming-medium-light-skin-tone_1f926-1f3fc-200d-2640-fe0f',
  ':woman_facepalming_medium_skin_tone:':
    'woman-facepalming-medium-skin-tone_1f926-1f3fd-200d-2640-fe0f',
  ':woman_facepalming_medium-dark_skin_tone:':
    'woman-facepalming-medium-dark-skin-tone_1f926-1f3fe-200d-2640-fe0f',
  ':woman_facepalming_dark_skin_tone:':
    'woman-facepalming-dark-skin-tone_1f926-1f3ff-200d-2640-fe0f',
  ':person_shrugging:': 'person-shrugging_1f937',
  ':person_shrugging_light_skin_tone:':
    'person-shrugging-light-skin-tone_1f937-1f3fb',
  ':person_shrugging_medium-light_skin_tone:':
    'person-shrugging-medium-light-skin-tone_1f937-1f3fc',
  ':person_shrugging_medium_skin_tone:':
    'person-shrugging-medium-skin-tone_1f937-1f3fd',
  ':person_shrugging_medium-dark_skin_tone:':
    'person-shrugging-medium-dark-skin-tone_1f937-1f3fe',
  ':person_shrugging_dark_skin_tone:':
    'person-shrugging-dark-skin-tone_1f937-1f3ff',
  ':man_shrugging:': 'man-shrugging_1f937-200d-2642-fe0f',
  ':man_shrugging_light_skin_tone:':
    'man-shrugging-light-skin-tone_1f937-1f3fb-200d-2642-fe0f',
  ':man_shrugging_medium-light_skin_tone:':
    'man-shrugging-medium-light-skin-tone_1f937-1f3fc-200d-2642-fe0f',
  ':man_shrugging_medium_skin_tone:':
    'man-shrugging-medium-skin-tone_1f937-1f3fd-200d-2642-fe0f',
  ':man_shrugging_medium-dark_skin_tone:':
    'man-shrugging-medium-dark-skin-tone_1f937-1f3fe-200d-2642-fe0f',
  ':man_shrugging_dark_skin_tone:':
    'man-shrugging-dark-skin-tone_1f937-1f3ff-200d-2642-fe0f',
  ':woman_shrugging:': 'woman-shrugging_1f937-200d-2640-fe0f',
  ':woman_shrugging_light_skin_tone:':
    'woman-shrugging-light-skin-tone_1f937-1f3fb-200d-2640-fe0f',
  ':woman_shrugging_medium-light_skin_tone:':
    'woman-shrugging-medium-light-skin-tone_1f937-1f3fc-200d-2640-fe0f',
  ':woman_shrugging_medium_skin_tone:':
    'woman-shrugging-medium-skin-tone_1f937-1f3fd-200d-2640-fe0f',
  ':woman_shrugging_medium-dark_skin_tone:':
    'woman-shrugging-medium-dark-skin-tone_1f937-1f3fe-200d-2640-fe0f',
  ':woman_shrugging_dark_skin_tone:':
    'woman-shrugging-dark-skin-tone_1f937-1f3ff-200d-2640-fe0f',
  ':man_health_worker:': 'man-health-worker_1f468-200d-2695-fe0f',
  ':man_health_worker_light_skin_tone:':
    'man-health-worker-light-skin-tone_1f468-1f3fb-200d-2695-fe0f',
  ':man_health_worker_medium-light_skin_tone:':
    'man-health-worker-medium-light-skin-tone_1f468-1f3fc-200d-2695-fe0f',
  ':man_health_worker_medium_skin_tone:':
    'man-health-worker-medium-skin-tone_1f468-1f3fd-200d-2695-fe0f',
  ':man_health_worker_medium-dark_skin_tone:':
    'man-health-worker-medium-dark-skin-tone_1f468-1f3fe-200d-2695-fe0f',
  ':man_health_worker_dark_skin_tone:':
    'man-health-worker-dark-skin-tone_1f468-1f3ff-200d-2695-fe0f',
  ':woman_health_worker:': 'woman-health-worker_1f469-200d-2695-fe0f',
  ':woman_health_worker_light_skin_tone:':
    'woman-health-worker-light-skin-tone_1f469-1f3fb-200d-2695-fe0f',
  ':woman_health_worker_medium-light_skin_tone:':
    'woman-health-worker-medium-light-skin-tone_1f469-1f3fc-200d-2695-fe0f',
  ':woman_health_worker_medium_skin_tone:':
    'woman-health-worker-medium-skin-tone_1f469-1f3fd-200d-2695-fe0f',
  ':woman_health_worker_medium-dark_skin_tone:':
    'woman-health-worker-medium-dark-skin-tone_1f469-1f3fe-200d-2695-fe0f',
  ':woman_health_worker_dark_skin_tone:':
    'woman-health-worker-dark-skin-tone_1f469-1f3ff-200d-2695-fe0f',
  ':man_student:': 'man-student_1f468-200d-1f393',
  ':man_student_light_skin_tone:':
    'man-student-light-skin-tone_1f468-1f3fb-200d-1f393',
  ':man_student_medium-light_skin_tone:':
    'man-student-medium-light-skin-tone_1f468-1f3fc-200d-1f393',
  ':man_student_medium_skin_tone:':
    'man-student-medium-skin-tone_1f468-1f3fd-200d-1f393',
  ':man_student_medium-dark_skin_tone:':
    'man-student-medium-dark-skin-tone_1f468-1f3fe-200d-1f393',
  ':man_student_dark_skin_tone:':
    'man-student-dark-skin-tone_1f468-1f3ff-200d-1f393',
  ':woman_student:': 'woman-student_1f469-200d-1f393',
  ':woman_student_light_skin_tone:':
    'woman-student-light-skin-tone_1f469-1f3fb-200d-1f393',
  ':woman_student_medium-light_skin_tone:':
    'woman-student-medium-light-skin-tone_1f469-1f3fc-200d-1f393',
  ':woman_student_medium_skin_tone:':
    'woman-student-medium-skin-tone_1f469-1f3fd-200d-1f393',
  ':woman_student_medium-dark_skin_tone:':
    'woman-student-medium-dark-skin-tone_1f469-1f3fe-200d-1f393',
  ':woman_student_dark_skin_tone:':
    'woman-student-dark-skin-tone_1f469-1f3ff-200d-1f393',
  ':man_teacher:': 'man-teacher_1f468-200d-1f3eb',
  ':man_teacher_light_skin_tone:':
    'man-teacher-light-skin-tone_1f468-1f3fb-200d-1f3eb',
  ':man_teacher_medium-light_skin_tone:':
    'man-teacher-medium-light-skin-tone_1f468-1f3fc-200d-1f3eb',
  ':man_teacher_medium_skin_tone:':
    'man-teacher-medium-skin-tone_1f468-1f3fd-200d-1f3eb',
  ':man_teacher_medium-dark_skin_tone:':
    'man-teacher-medium-dark-skin-tone_1f468-1f3fe-200d-1f3eb',
  ':man_teacher_dark_skin_tone:':
    'man-teacher-dark-skin-tone_1f468-1f3ff-200d-1f3eb',
  ':woman_teacher:': 'woman-teacher_1f469-200d-1f3eb',
  ':woman_teacher_light_skin_tone:':
    'woman-teacher-light-skin-tone_1f469-1f3fb-200d-1f3eb',
  ':woman_teacher_medium-light_skin_tone:':
    'woman-teacher-medium-light-skin-tone_1f469-1f3fc-200d-1f3eb',
  ':woman_teacher_medium_skin_tone:':
    'woman-teacher-medium-skin-tone_1f469-1f3fd-200d-1f3eb',
  ':woman_teacher_medium-dark_skin_tone:':
    'woman-teacher-medium-dark-skin-tone_1f469-1f3fe-200d-1f3eb',
  ':woman_teacher_dark_skin_tone:':
    'woman-teacher-dark-skin-tone_1f469-1f3ff-200d-1f3eb',
  ':man_judge:': 'man-judge_1f468-200d-2696-fe0f',
  ':man_judge_light_skin_tone:':
    'man-judge-light-skin-tone_1f468-1f3fb-200d-2696-fe0f',
  ':man_judge_medium-light_skin_tone:':
    'man-judge-medium-light-skin-tone_1f468-1f3fc-200d-2696-fe0f',
  ':man_judge_medium_skin_tone:':
    'man-judge-medium-skin-tone_1f468-1f3fd-200d-2696-fe0f',
  ':man_judge_medium-dark_skin_tone:':
    'man-judge-medium-dark-skin-tone_1f468-1f3fe-200d-2696-fe0f',
  ':man_judge_dark_skin_tone:':
    'man-judge-dark-skin-tone_1f468-1f3ff-200d-2696-fe0f',
  ':woman_judge:': 'woman-judge_1f469-200d-2696-fe0f',
  ':woman_judge_light_skin_tone:':
    'woman-judge-light-skin-tone_1f469-1f3fb-200d-2696-fe0f',
  ':woman_judge_medium-light_skin_tone:':
    'woman-judge-medium-light-skin-tone_1f469-1f3fc-200d-2696-fe0f',
  ':woman_judge_medium_skin_tone:':
    'woman-judge-medium-skin-tone_1f469-1f3fd-200d-2696-fe0f',
  ':woman_judge_medium-dark_skin_tone:':
    'woman-judge-medium-dark-skin-tone_1f469-1f3fe-200d-2696-fe0f',
  ':woman_judge_dark_skin_tone:':
    'woman-judge-dark-skin-tone_1f469-1f3ff-200d-2696-fe0f',
  ':man_farmer:': 'man-farmer_1f468-200d-1f33e',
  ':man_farmer_light_skin_tone:':
    'man-farmer-light-skin-tone_1f468-1f3fb-200d-1f33e',
  ':man_farmer_medium-light_skin_tone:':
    'man-farmer-medium-light-skin-tone_1f468-1f3fc-200d-1f33e',
  ':man_farmer_medium_skin_tone:':
    'man-farmer-medium-skin-tone_1f468-1f3fd-200d-1f33e',
  ':man_farmer_medium-dark_skin_tone:':
    'man-farmer-medium-dark-skin-tone_1f468-1f3fe-200d-1f33e',
  ':man_farmer_dark_skin_tone:':
    'man-farmer-dark-skin-tone_1f468-1f3ff-200d-1f33e',
  ':woman_farmer:': 'woman-farmer_1f469-200d-1f33e',
  ':woman_farmer_light_skin_tone:':
    'woman-farmer-light-skin-tone_1f469-1f3fb-200d-1f33e',
  ':woman_farmer_medium-light_skin_tone:':
    'woman-farmer-medium-light-skin-tone_1f469-1f3fc-200d-1f33e',
  ':woman_farmer_medium_skin_tone:':
    'woman-farmer-medium-skin-tone_1f469-1f3fd-200d-1f33e',
  ':woman_farmer_medium-dark_skin_tone:':
    'woman-farmer-medium-dark-skin-tone_1f469-1f3fe-200d-1f33e',
  ':woman_farmer_dark_skin_tone:':
    'woman-farmer-dark-skin-tone_1f469-1f3ff-200d-1f33e',
  ':man_cook:': 'man-cook_1f468-200d-1f373',
  ':man_cook_light_skin_tone:':
    'man-cook-light-skin-tone_1f468-1f3fb-200d-1f373',
  ':man_cook_medium-light_skin_tone:':
    'man-cook-medium-light-skin-tone_1f468-1f3fc-200d-1f373',
  ':man_cook_medium_skin_tone:':
    'man-cook-medium-skin-tone_1f468-1f3fd-200d-1f373',
  ':man_cook_medium-dark_skin_tone:':
    'man-cook-medium-dark-skin-tone_1f468-1f3fe-200d-1f373',
  ':man_cook_dark_skin_tone:': 'man-cook-dark-skin-tone_1f468-1f3ff-200d-1f373',
  ':woman_cook:': 'woman-cook_1f469-200d-1f373',
  ':woman_cook_light_skin_tone:':
    'woman-cook-light-skin-tone_1f469-1f3fb-200d-1f373',
  ':woman_cook_medium-light_skin_tone:':
    'woman-cook-medium-light-skin-tone_1f469-1f3fc-200d-1f373',
  ':woman_cook_medium_skin_tone:':
    'woman-cook-medium-skin-tone_1f469-1f3fd-200d-1f373',
  ':woman_cook_medium-dark_skin_tone:':
    'woman-cook-medium-dark-skin-tone_1f469-1f3fe-200d-1f373',
  ':woman_cook_dark_skin_tone:':
    'woman-cook-dark-skin-tone_1f469-1f3ff-200d-1f373',
  ':man_mechanic:': 'man-mechanic_1f468-200d-1f527',
  ':man_mechanic_light_skin_tone:':
    'man-mechanic-light-skin-tone_1f468-1f3fb-200d-1f527',
  ':man_mechanic_medium-light_skin_tone:':
    'man-mechanic-medium-light-skin-tone_1f468-1f3fc-200d-1f527',
  ':man_mechanic_medium_skin_tone:':
    'man-mechanic-medium-skin-tone_1f468-1f3fd-200d-1f527',
  ':man_mechanic_medium-dark_skin_tone:':
    'man-mechanic-medium-dark-skin-tone_1f468-1f3fe-200d-1f527',
  ':man_mechanic_dark_skin_tone:':
    'man-mechanic-dark-skin-tone_1f468-1f3ff-200d-1f527',
  ':woman_mechanic:': 'woman-mechanic_1f469-200d-1f527',
  ':woman_mechanic_light_skin_tone:':
    'woman-mechanic-light-skin-tone_1f469-1f3fb-200d-1f527',
  ':woman_mechanic_medium-light_skin_tone:':
    'woman-mechanic-medium-light-skin-tone_1f469-1f3fc-200d-1f527',
  ':woman_mechanic_medium_skin_tone:':
    'woman-mechanic-medium-skin-tone_1f469-1f3fd-200d-1f527',
  ':woman_mechanic_medium-dark_skin_tone:':
    'woman-mechanic-medium-dark-skin-tone_1f469-1f3fe-200d-1f527',
  ':woman_mechanic_dark_skin_tone:':
    'woman-mechanic-dark-skin-tone_1f469-1f3ff-200d-1f527',
  ':man_factory_worker:': 'man-factory-worker_1f468-200d-1f3ed',
  ':man_factory_worker_light_skin_tone:':
    'man-factory-worker-light-skin-tone_1f468-1f3fb-200d-1f3ed',
  ':man_factory_worker_medium-light_skin_tone:':
    'man-factory-worker-medium-light-skin-tone_1f468-1f3fc-200d-1f3ed',
  ':man_factory_worker_medium_skin_tone:':
    'man-factory-worker-medium-skin-tone_1f468-1f3fd-200d-1f3ed',
  ':man_factory_worker_medium-dark_skin_tone:':
    'man-factory-worker-medium-dark-skin-tone_1f468-1f3fe-200d-1f3ed',
  ':man_factory_worker_dark_skin_tone:':
    'man-factory-worker-dark-skin-tone_1f468-1f3ff-200d-1f3ed',
  ':woman_factory_worker:': 'woman-factory-worker_1f469-200d-1f3ed',
  ':woman_factory_worker_light_skin_tone:':
    'woman-factory-worker-light-skin-tone_1f469-1f3fb-200d-1f3ed',
  ':woman_factory_worker_medium-light_skin_tone:':
    'woman-factory-worker-medium-light-skin-tone_1f469-1f3fc-200d-1f3ed',
  ':woman_factory_worker_medium_skin_tone:':
    'woman-factory-worker-medium-skin-tone_1f469-1f3fd-200d-1f3ed',
  ':woman_factory_worker_medium-dark_skin_tone:':
    'woman-factory-worker-medium-dark-skin-tone_1f469-1f3fe-200d-1f3ed',
  ':woman_factory_worker_dark_skin_tone:':
    'woman-factory-worker-dark-skin-tone_1f469-1f3ff-200d-1f3ed',
  ':man_office_worker:': 'man-office-worker_1f468-200d-1f4bc',
  ':man_office_worker_light_skin_tone:':
    'man-office-worker-light-skin-tone_1f468-1f3fb-200d-1f4bc',
  ':man_office_worker_medium-light_skin_tone:':
    'man-office-worker-medium-light-skin-tone_1f468-1f3fc-200d-1f4bc',
  ':man_office_worker_medium_skin_tone:':
    'man-office-worker-medium-skin-tone_1f468-1f3fd-200d-1f4bc',
  ':man_office_worker_medium-dark_skin_tone:':
    'man-office-worker-medium-dark-skin-tone_1f468-1f3fe-200d-1f4bc',
  ':man_office_worker_dark_skin_tone:':
    'man-office-worker-dark-skin-tone_1f468-1f3ff-200d-1f4bc',
  ':woman_office_worker:': 'woman-office-worker_1f469-200d-1f4bc',
  ':woman_office_worker_light_skin_tone:':
    'woman-office-worker-light-skin-tone_1f469-1f3fb-200d-1f4bc',
  ':woman_office_worker_medium-light_skin_tone:':
    'woman-office-worker-medium-light-skin-tone_1f469-1f3fc-200d-1f4bc',
  ':woman_office_worker_medium_skin_tone:':
    'woman-office-worker-medium-skin-tone_1f469-1f3fd-200d-1f4bc',
  ':woman_office_worker_medium-dark_skin_tone:':
    'woman-office-worker-medium-dark-skin-tone_1f469-1f3fe-200d-1f4bc',
  ':woman_office_worker_dark_skin_tone:':
    'woman-office-worker-dark-skin-tone_1f469-1f3ff-200d-1f4bc',
  ':man_scientist:': 'man-scientist_1f468-200d-1f52c',
  ':man_scientist_light_skin_tone:':
    'man-scientist-light-skin-tone_1f468-1f3fb-200d-1f52c',
  ':man_scientist_medium-light_skin_tone:':
    'man-scientist-medium-light-skin-tone_1f468-1f3fc-200d-1f52c',
  ':man_scientist_medium_skin_tone:':
    'man-scientist-medium-skin-tone_1f468-1f3fd-200d-1f52c',
  ':man_scientist_medium-dark_skin_tone:':
    'man-scientist-medium-dark-skin-tone_1f468-1f3fe-200d-1f52c',
  ':man_scientist_dark_skin_tone:':
    'man-scientist-dark-skin-tone_1f468-1f3ff-200d-1f52c',
  ':woman_scientist:': 'woman-scientist_1f469-200d-1f52c',
  ':woman_scientist_light_skin_tone:':
    'woman-scientist-light-skin-tone_1f469-1f3fb-200d-1f52c',
  ':woman_scientist_medium-light_skin_tone:':
    'woman-scientist-medium-light-skin-tone_1f469-1f3fc-200d-1f52c',
  ':woman_scientist_medium_skin_tone:':
    'woman-scientist-medium-skin-tone_1f469-1f3fd-200d-1f52c',
  ':woman_scientist_medium-dark_skin_tone:':
    'woman-scientist-medium-dark-skin-tone_1f469-1f3fe-200d-1f52c',
  ':woman_scientist_dark_skin_tone:':
    'woman-scientist-dark-skin-tone_1f469-1f3ff-200d-1f52c',
  ':man_technologist:': 'man-technologist_1f468-200d-1f4bb',
  ':man_technologist_light_skin_tone:':
    'man-technologist-light-skin-tone_1f468-1f3fb-200d-1f4bb',
  ':man_technologist_medium-light_skin_tone:':
    'man-technologist-medium-light-skin-tone_1f468-1f3fc-200d-1f4bb',
  ':man_technologist_medium_skin_tone:':
    'man-technologist-medium-skin-tone_1f468-1f3fd-200d-1f4bb',
  ':man_technologist_medium-dark_skin_tone:':
    'man-technologist-medium-dark-skin-tone_1f468-1f3fe-200d-1f4bb',
  ':man_technologist_dark_skin_tone:':
    'man-technologist-dark-skin-tone_1f468-1f3ff-200d-1f4bb',
  ':woman_technologist:': 'woman-technologist_1f469-200d-1f4bb',
  ':woman_technologist_light_skin_tone:':
    'woman-technologist-light-skin-tone_1f469-1f3fb-200d-1f4bb',
  ':woman_technologist_medium-light_skin_tone:':
    'woman-technologist-medium-light-skin-tone_1f469-1f3fc-200d-1f4bb',
  ':woman_technologist_medium_skin_tone:':
    'woman-technologist-medium-skin-tone_1f469-1f3fd-200d-1f4bb',
  ':woman_technologist_medium-dark_skin_tone:':
    'woman-technologist-medium-dark-skin-tone_1f469-1f3fe-200d-1f4bb',
  ':woman_technologist_dark_skin_tone:':
    'woman-technologist-dark-skin-tone_1f469-1f3ff-200d-1f4bb',
  ':man_singer:': 'man-singer_1f468-200d-1f3a4',
  ':man_singer_light_skin_tone:':
    'man-singer-light-skin-tone_1f468-1f3fb-200d-1f3a4',
  ':man_singer_medium-light_skin_tone:':
    'man-singer-medium-light-skin-tone_1f468-1f3fc-200d-1f3a4',
  ':man_singer_medium_skin_tone:':
    'man-singer-medium-skin-tone_1f468-1f3fd-200d-1f3a4',
  ':man_singer_medium-dark_skin_tone:':
    'man-singer-medium-dark-skin-tone_1f468-1f3fe-200d-1f3a4',
  ':man_singer_dark_skin_tone:':
    'man-singer-dark-skin-tone_1f468-1f3ff-200d-1f3a4',
  ':woman_singer:': 'woman-singer_1f469-200d-1f3a4',
  ':woman_singer_light_skin_tone:':
    'woman-singer-light-skin-tone_1f469-1f3fb-200d-1f3a4',
  ':woman_singer_medium-light_skin_tone:':
    'woman-singer-medium-light-skin-tone_1f469-1f3fc-200d-1f3a4',
  ':woman_singer_medium_skin_tone:':
    'woman-singer-medium-skin-tone_1f469-1f3fd-200d-1f3a4',
  ':woman_singer_medium-dark_skin_tone:':
    'woman-singer-medium-dark-skin-tone_1f469-1f3fe-200d-1f3a4',
  ':woman_singer_dark_skin_tone:':
    'woman-singer-dark-skin-tone_1f469-1f3ff-200d-1f3a4',
  ':man_artist:': 'man-artist_1f468-200d-1f3a8',
  ':man_artist_light_skin_tone:':
    'man-artist-light-skin-tone_1f468-1f3fb-200d-1f3a8',
  ':man_artist_medium-light_skin_tone:':
    'man-artist-medium-light-skin-tone_1f468-1f3fc-200d-1f3a8',
  ':man_artist_medium_skin_tone:':
    'man-artist-medium-skin-tone_1f468-1f3fd-200d-1f3a8',
  ':man_artist_medium-dark_skin_tone:':
    'man-artist-medium-dark-skin-tone_1f468-1f3fe-200d-1f3a8',
  ':man_artist_dark_skin_tone:':
    'man-artist-dark-skin-tone_1f468-1f3ff-200d-1f3a8',
  ':woman_artist:': 'woman-artist_1f469-200d-1f3a8',
  ':woman_artist_light_skin_tone:':
    'woman-artist-light-skin-tone_1f469-1f3fb-200d-1f3a8',
  ':woman_artist_medium-light_skin_tone:':
    'woman-artist-medium-light-skin-tone_1f469-1f3fc-200d-1f3a8',
  ':woman_artist_medium_skin_tone:':
    'woman-artist-medium-skin-tone_1f469-1f3fd-200d-1f3a8',
  ':woman_artist_medium-dark_skin_tone:':
    'woman-artist-medium-dark-skin-tone_1f469-1f3fe-200d-1f3a8',
  ':woman_artist_dark_skin_tone:':
    'woman-artist-dark-skin-tone_1f469-1f3ff-200d-1f3a8',
  ':man_pilot:': 'man-pilot_1f468-200d-2708-fe0f',
  ':man_pilot_light_skin_tone:':
    'man-pilot-light-skin-tone_1f468-1f3fb-200d-2708-fe0f',
  ':man_pilot_medium-light_skin_tone:':
    'man-pilot-medium-light-skin-tone_1f468-1f3fc-200d-2708-fe0f',
  ':man_pilot_medium_skin_tone:':
    'man-pilot-medium-skin-tone_1f468-1f3fd-200d-2708-fe0f',
  ':man_pilot_medium-dark_skin_tone:':
    'man-pilot-medium-dark-skin-tone_1f468-1f3fe-200d-2708-fe0f',
  ':man_pilot_dark_skin_tone:':
    'man-pilot-dark-skin-tone_1f468-1f3ff-200d-2708-fe0f',
  ':woman_pilot:': 'woman-pilot_1f469-200d-2708-fe0f',
  ':woman_pilot_light_skin_tone:':
    'woman-pilot-light-skin-tone_1f469-1f3fb-200d-2708-fe0f',
  ':woman_pilot_medium-light_skin_tone:':
    'woman-pilot-medium-light-skin-tone_1f469-1f3fc-200d-2708-fe0f',
  ':woman_pilot_medium_skin_tone:':
    'woman-pilot-medium-skin-tone_1f469-1f3fd-200d-2708-fe0f',
  ':woman_pilot_medium-dark_skin_tone:':
    'woman-pilot-medium-dark-skin-tone_1f469-1f3fe-200d-2708-fe0f',
  ':woman_pilot_dark_skin_tone:':
    'woman-pilot-dark-skin-tone_1f469-1f3ff-200d-2708-fe0f',
  ':man_astronaut:': 'man-astronaut_1f468-200d-1f680',
  ':man_astronaut_light_skin_tone:':
    'man-astronaut-light-skin-tone_1f468-1f3fb-200d-1f680',
  ':man_astronaut_medium-light_skin_tone:':
    'man-astronaut-medium-light-skin-tone_1f468-1f3fc-200d-1f680',
  ':man_astronaut_medium_skin_tone:':
    'man-astronaut-medium-skin-tone_1f468-1f3fd-200d-1f680',
  ':man_astronaut_medium-dark_skin_tone:':
    'man-astronaut-medium-dark-skin-tone_1f468-1f3fe-200d-1f680',
  ':man_astronaut_dark_skin_tone:':
    'man-astronaut-dark-skin-tone_1f468-1f3ff-200d-1f680',
  ':woman_astronaut:': 'woman-astronaut_1f469-200d-1f680',
  ':woman_astronaut_light_skin_tone:':
    'woman-astronaut-light-skin-tone_1f469-1f3fb-200d-1f680',
  ':woman_astronaut_medium-light_skin_tone:':
    'woman-astronaut-medium-light-skin-tone_1f469-1f3fc-200d-1f680',
  ':woman_astronaut_medium_skin_tone:':
    'woman-astronaut-medium-skin-tone_1f469-1f3fd-200d-1f680',
  ':woman_astronaut_medium-dark_skin_tone:':
    'woman-astronaut-medium-dark-skin-tone_1f469-1f3fe-200d-1f680',
  ':woman_astronaut_dark_skin_tone:':
    'woman-astronaut-dark-skin-tone_1f469-1f3ff-200d-1f680',
  ':man_firefighter:': 'man-firefighter_1f468-200d-1f692',
  ':man_firefighter_light_skin_tone:':
    'man-firefighter-light-skin-tone_1f468-1f3fb-200d-1f692',
  ':man_firefighter_medium-light_skin_tone:':
    'man-firefighter-medium-light-skin-tone_1f468-1f3fc-200d-1f692',
  ':man_firefighter_medium_skin_tone:':
    'man-firefighter-medium-skin-tone_1f468-1f3fd-200d-1f692',
  ':man_firefighter_medium-dark_skin_tone:':
    'man-firefighter-medium-dark-skin-tone_1f468-1f3fe-200d-1f692',
  ':man_firefighter_dark_skin_tone:':
    'man-firefighter-dark-skin-tone_1f468-1f3ff-200d-1f692',
  ':woman_firefighter:': 'woman-firefighter_1f469-200d-1f692',
  ':woman_firefighter_light_skin_tone:':
    'woman-firefighter-light-skin-tone_1f469-1f3fb-200d-1f692',
  ':woman_firefighter_medium-light_skin_tone:':
    'woman-firefighter-medium-light-skin-tone_1f469-1f3fc-200d-1f692',
  ':woman_firefighter_medium_skin_tone:':
    'woman-firefighter-medium-skin-tone_1f469-1f3fd-200d-1f692',
  ':woman_firefighter_medium-dark_skin_tone:':
    'woman-firefighter-medium-dark-skin-tone_1f469-1f3fe-200d-1f692',
  ':woman_firefighter_dark_skin_tone:':
    'woman-firefighter-dark-skin-tone_1f469-1f3ff-200d-1f692',
  ':police_officer:': 'police-officer_1f46e',
  ':police_officer_light_skin_tone:':
    'police-officer-light-skin-tone_1f46e-1f3fb',
  ':police_officer_medium-light_skin_tone:':
    'police-officer-medium-light-skin-tone_1f46e-1f3fc',
  ':police_officer_medium_skin_tone:':
    'police-officer-medium-skin-tone_1f46e-1f3fd',
  ':police_officer_medium-dark_skin_tone:':
    'police-officer-medium-dark-skin-tone_1f46e-1f3fe',
  ':police_officer_dark_skin_tone:':
    'police-officer-dark-skin-tone_1f46e-1f3ff',
  ':man_police_officer:': 'man-police-officer_1f46e-200d-2642-fe0f',
  ':man_police_officer_light_skin_tone:':
    'man-police-officer-light-skin-tone_1f46e-1f3fb-200d-2642-fe0f',
  ':man_police_officer_medium-light_skin_tone:':
    'man-police-officer-medium-light-skin-tone_1f46e-1f3fc-200d-2642-fe0f',
  ':man_police_officer_medium_skin_tone:':
    'man-police-officer-medium-skin-tone_1f46e-1f3fd-200d-2642-fe0f',
  ':man_police_officer_medium-dark_skin_tone:':
    'man-police-officer-medium-dark-skin-tone_1f46e-1f3fe-200d-2642-fe0f',
  ':man_police_officer_dark_skin_tone:':
    'man-police-officer-dark-skin-tone_1f46e-1f3ff-200d-2642-fe0f',
  ':woman_police_officer:': 'woman-police-officer_1f46e-200d-2640-fe0f',
  ':woman_police_officer_light_skin_tone:':
    'woman-police-officer-light-skin-tone_1f46e-1f3fb-200d-2640-fe0f',
  ':woman_police_officer_medium-light_skin_tone:':
    'woman-police-officer-medium-light-skin-tone_1f46e-1f3fc-200d-2640-fe0f',
  ':woman_police_officer_medium_skin_tone:':
    'woman-police-officer-medium-skin-tone_1f46e-1f3fd-200d-2640-fe0f',
  ':woman_police_officer_medium-dark_skin_tone:':
    'woman-police-officer-medium-dark-skin-tone_1f46e-1f3fe-200d-2640-fe0f',
  ':woman_police_officer_dark_skin_tone:':
    'woman-police-officer-dark-skin-tone_1f46e-1f3ff-200d-2640-fe0f',
  ':detective:': 'detective_1f575-fe0f',
  ':detective_light_skin_tone:': 'detective-light-skin-tone_1f575-1f3fb',
  ':detective_medium-light_skin_tone:':
    'detective-medium-light-skin-tone_1f575-1f3fc',
  ':detective_medium_skin_tone:': 'detective-medium-skin-tone_1f575-1f3fd',
  ':detective_medium-dark_skin_tone:':
    'detective-medium-dark-skin-tone_1f575-1f3fe',
  ':detective_dark_skin_tone:': 'detective-dark-skin-tone_1f575-1f3ff',
  ':man_detective:': 'man-detective_1f575-fe0f-200d-2642-fe0f',
  ':man_detective_light_skin_tone:':
    'man-detective-light-skin-tone_1f575-1f3fb-200d-2642-fe0f',
  ':man_detective_medium-light_skin_tone:':
    'man-detective-medium-light-skin-tone_1f575-1f3fc-200d-2642-fe0f',
  ':man_detective_medium_skin_tone:':
    'man-detective-medium-skin-tone_1f575-1f3fd-200d-2642-fe0f',
  ':man_detective_medium-dark_skin_tone:':
    'man-detective-medium-dark-skin-tone_1f575-1f3fe-200d-2642-fe0f',
  ':man_detective_dark_skin_tone:':
    'man-detective-dark-skin-tone_1f575-1f3ff-200d-2642-fe0f',
  ':woman_detective:': 'woman-detective_1f575-fe0f-200d-2640-fe0f',
  ':woman_detective_light_skin_tone:':
    'woman-detective-light-skin-tone_1f575-1f3fb-200d-2640-fe0f',
  ':woman_detective_medium-light_skin_tone:':
    'woman-detective-medium-light-skin-tone_1f575-1f3fc-200d-2640-fe0f',
  ':woman_detective_medium_skin_tone:':
    'woman-detective-medium-skin-tone_1f575-1f3fd-200d-2640-fe0f',
  ':woman_detective_medium-dark_skin_tone:':
    'woman-detective-medium-dark-skin-tone_1f575-1f3fe-200d-2640-fe0f',
  ':woman_detective_dark_skin_tone:':
    'woman-detective-dark-skin-tone_1f575-1f3ff-200d-2640-fe0f',
  ':guard:': 'guard_1f482',
  ':guard_light_skin_tone:': 'guard-light-skin-tone_1f482-1f3fb',
  ':guard_medium-light_skin_tone:': 'guard-medium-light-skin-tone_1f482-1f3fc',
  ':guard_medium_skin_tone:': 'guard-medium-skin-tone_1f482-1f3fd',
  ':guard_medium-dark_skin_tone:': 'guard-medium-dark-skin-tone_1f482-1f3fe',
  ':guard_dark_skin_tone:': 'guard-dark-skin-tone_1f482-1f3ff',
  ':man_guard:': 'man-guard_1f482-200d-2642-fe0f',
  ':man_guard_light_skin_tone:':
    'man-guard-light-skin-tone_1f482-1f3fb-200d-2642-fe0f',
  ':man_guard_medium-light_skin_tone:':
    'man-guard-medium-light-skin-tone_1f482-1f3fc-200d-2642-fe0f',
  ':man_guard_medium_skin_tone:':
    'man-guard-medium-skin-tone_1f482-1f3fd-200d-2642-fe0f',
  ':man_guard_medium-dark_skin_tone:':
    'man-guard-medium-dark-skin-tone_1f482-1f3fe-200d-2642-fe0f',
  ':man_guard_dark_skin_tone:':
    'man-guard-dark-skin-tone_1f482-1f3ff-200d-2642-fe0f',
  ':woman_guard:': 'woman-guard_1f482-200d-2640-fe0f',
  ':woman_guard_light_skin_tone:':
    'woman-guard-light-skin-tone_1f482-1f3fb-200d-2640-fe0f',
  ':woman_guard_medium-light_skin_tone:':
    'woman-guard-medium-light-skin-tone_1f482-1f3fc-200d-2640-fe0f',
  ':woman_guard_medium_skin_tone:':
    'woman-guard-medium-skin-tone_1f482-1f3fd-200d-2640-fe0f',
  ':woman_guard_medium-dark_skin_tone:':
    'woman-guard-medium-dark-skin-tone_1f482-1f3fe-200d-2640-fe0f',
  ':woman_guard_dark_skin_tone:':
    'woman-guard-dark-skin-tone_1f482-1f3ff-200d-2640-fe0f',
  ':ninja:': 'ninja_1f977',
  ':ninja_light_skin_tone:': 'ninja-light-skin-tone_1f977-1f3fb',
  ':ninja_medium-light_skin_tone:': 'ninja-medium-light-skin-tone_1f977-1f3fc',
  ':ninja_medium_skin_tone:': 'ninja-medium-skin-tone_1f977-1f3fd',
  ':ninja_medium-dark_skin_tone:': 'ninja-medium-dark-skin-tone_1f977-1f3fe',
  ':ninja_dark_skin_tone:': 'ninja-dark-skin-tone_1f977-1f3ff',
  ':construction_worker:': 'construction-worker_1f477',
  ':construction_worker_light_skin_tone:':
    'construction-worker-light-skin-tone_1f477-1f3fb',
  ':construction_worker_medium-light_skin_tone:':
    'construction-worker-medium-light-skin-tone_1f477-1f3fc',
  ':construction_worker_medium_skin_tone:':
    'construction-worker-medium-skin-tone_1f477-1f3fd',
  ':construction_worker_medium-dark_skin_tone:':
    'construction-worker-medium-dark-skin-tone_1f477-1f3fe',
  ':construction_worker_dark_skin_tone:':
    'construction-worker-dark-skin-tone_1f477-1f3ff',
  ':man_construction_worker:': 'man-construction-worker_1f477-200d-2642-fe0f',
  ':man_construction_worker_light_skin_tone:':
    'man-construction-worker-light-skin-tone_1f477-1f3fb-200d-2642-fe0f',
  ':man_construction_worker_medium-light_skin_tone:':
    'man-construction-worker-medium-light-skin-tone_1f477-1f3fc-200d-2642-fe0f',
  ':man_construction_worker_medium_skin_tone:':
    'man-construction-worker-medium-skin-tone_1f477-1f3fd-200d-2642-fe0f',
  ':man_construction_worker_medium-dark_skin_tone:':
    'man-construction-worker-medium-dark-skin-tone_1f477-1f3fe-200d-2642-fe0f',
  ':man_construction_worker_dark_skin_tone:':
    'man-construction-worker-dark-skin-tone_1f477-1f3ff-200d-2642-fe0f',
  ':woman_construction_worker:':
    'woman-construction-worker_1f477-200d-2640-fe0f',
  ':woman_construction_worker_light_skin_tone:':
    'woman-construction-worker-light-skin-tone_1f477-1f3fb-200d-2640-fe0f',
  ':woman_construction_worker_medium-light_skin_tone:':
    'woman-construction-worker-medium-light-skin-tone_1f477-1f3fc-200d-2640-fe0f',
  ':woman_construction_worker_medium_skin_tone:':
    'woman-construction-worker-medium-skin-tone_1f477-1f3fd-200d-2640-fe0f',
  ':woman_construction_worker_medium-dark_skin_tone:':
    'woman-construction-worker-medium-dark-skin-tone_1f477-1f3fe-200d-2640-fe0f',
  ':woman_construction_worker_dark_skin_tone:':
    'woman-construction-worker-dark-skin-tone_1f477-1f3ff-200d-2640-fe0f',
  ':person_with_crown:': 'person-with-crown_1fac5',
  ':person_with_crown_light_skin_tone:':
    'person-with-crown-light-skin-tone_1fac5-1f3fb',
  ':person_with_crown_medium-light_skin_tone:':
    'person-with-crown-medium-light-skin-tone_1fac5-1f3fc',
  ':person_with_crown_medium_skin_tone:':
    'person-with-crown-medium-skin-tone_1fac5-1f3fd',
  ':person_with_crown_medium-dark_skin_tone:':
    'person-with-crown-medium-dark-skin-tone_1fac5-1f3fe',
  ':person_with_crown_dark_skin_tone:':
    'person-with-crown-dark-skin-tone_1fac5-1f3ff',
  ':prince:': 'prince_1f934',
  ':prince_light_skin_tone:': 'prince-light-skin-tone_1f934-1f3fb',
  ':prince_medium-light_skin_tone:':
    'prince-medium-light-skin-tone_1f934-1f3fc',
  ':prince_medium_skin_tone:': 'prince-medium-skin-tone_1f934-1f3fd',
  ':prince_medium-dark_skin_tone:': 'prince-medium-dark-skin-tone_1f934-1f3fe',
  ':prince_dark_skin_tone:': 'prince-dark-skin-tone_1f934-1f3ff',
  ':princess:': 'princess_1f478',
  ':princess_light_skin_tone:': 'princess-light-skin-tone_1f478-1f3fb',
  ':princess_medium-light_skin_tone:':
    'princess-medium-light-skin-tone_1f478-1f3fc',
  ':princess_medium_skin_tone:': 'princess-medium-skin-tone_1f478-1f3fd',
  ':princess_medium-dark_skin_tone:':
    'princess-medium-dark-skin-tone_1f478-1f3fe',
  ':princess_dark_skin_tone:': 'princess-dark-skin-tone_1f478-1f3ff',
  ':person_wearing_turban:': 'person-wearing-turban_1f473',
  ':person_wearing_turban_light_skin_tone:':
    'person-wearing-turban-light-skin-tone_1f473-1f3fb',
  ':person_wearing_turban_medium-light_skin_tone:':
    'person-wearing-turban-medium-light-skin-tone_1f473-1f3fc',
  ':person_wearing_turban_medium_skin_tone:':
    'person-wearing-turban-medium-skin-tone_1f473-1f3fd',
  ':person_wearing_turban_medium-dark_skin_tone:':
    'person-wearing-turban-medium-dark-skin-tone_1f473-1f3fe',
  ':person_wearing_turban_dark_skin_tone:':
    'person-wearing-turban-dark-skin-tone_1f473-1f3ff',
  ':man_wearing_turban:': 'man-wearing-turban_1f473-200d-2642-fe0f',
  ':man_wearing_turban_light_skin_tone:':
    'man-wearing-turban-light-skin-tone_1f473-1f3fb-200d-2642-fe0f',
  ':man_wearing_turban_medium-light_skin_tone:':
    'man-wearing-turban-medium-light-skin-tone_1f473-1f3fc-200d-2642-fe0f',
  ':man_wearing_turban_medium_skin_tone:':
    'man-wearing-turban-medium-skin-tone_1f473-1f3fd-200d-2642-fe0f',
  ':man_wearing_turban_medium-dark_skin_tone:':
    'man-wearing-turban-medium-dark-skin-tone_1f473-1f3fe-200d-2642-fe0f',
  ':man_wearing_turban_dark_skin_tone:':
    'man-wearing-turban-dark-skin-tone_1f473-1f3ff-200d-2642-fe0f',
  ':woman_wearing_turban:': 'woman-wearing-turban_1f473-200d-2640-fe0f',
  ':woman_wearing_turban_light_skin_tone:':
    'woman-wearing-turban-light-skin-tone_1f473-1f3fb-200d-2640-fe0f',
  ':woman_wearing_turban_medium-light_skin_tone:':
    'woman-wearing-turban-medium-light-skin-tone_1f473-1f3fc-200d-2640-fe0f',
  ':woman_wearing_turban_medium_skin_tone:':
    'woman-wearing-turban-medium-skin-tone_1f473-1f3fd-200d-2640-fe0f',
  ':woman_wearing_turban_medium-dark_skin_tone:':
    'woman-wearing-turban-medium-dark-skin-tone_1f473-1f3fe-200d-2640-fe0f',
  ':woman_wearing_turban_dark_skin_tone:':
    'woman-wearing-turban-dark-skin-tone_1f473-1f3ff-200d-2640-fe0f',
  ':person_with_skullcap:': 'person-with-skullcap_1f472',
  ':person_with_skullcap_light_skin_tone:':
    'person-with-skullcap-light-skin-tone_1f472-1f3fb',
  ':person_with_skullcap_medium-light_skin_tone:':
    'person-with-skullcap-medium-light-skin-tone_1f472-1f3fc',
  ':person_with_skullcap_medium_skin_tone:':
    'person-with-skullcap-medium-skin-tone_1f472-1f3fd',
  ':person_with_skullcap_medium-dark_skin_tone:':
    'person-with-skullcap-medium-dark-skin-tone_1f472-1f3fe',
  ':person_with_skullcap_dark_skin_tone:':
    'person-with-skullcap-dark-skin-tone_1f472-1f3ff',
  ':woman_with_headscarf:': 'woman-with-headscarf_1f9d5',
  ':woman_with_headscarf_light_skin_tone:':
    'woman-with-headscarf-light-skin-tone_1f9d5-1f3fb',
  ':woman_with_headscarf_medium-light_skin_tone:':
    'woman-with-headscarf-medium-light-skin-tone_1f9d5-1f3fc',
  ':woman_with_headscarf_medium_skin_tone:':
    'woman-with-headscarf-medium-skin-tone_1f9d5-1f3fd',
  ':woman_with_headscarf_medium-dark_skin_tone:':
    'woman-with-headscarf-medium-dark-skin-tone_1f9d5-1f3fe',
  ':woman_with_headscarf_dark_skin_tone:':
    'woman-with-headscarf-dark-skin-tone_1f9d5-1f3ff',
  ':person_in_tuxedo:': 'person-in-tuxedo_1f935',
  ':person_in_tuxedo_light_skin_tone:':
    'person-in-tuxedo-light-skin-tone_1f935-1f3fb',
  ':person_in_tuxedo_medium-light_skin_tone:':
    'person-in-tuxedo-medium-light-skin-tone_1f935-1f3fc',
  ':person_in_tuxedo_medium_skin_tone:':
    'person-in-tuxedo-medium-skin-tone_1f935-1f3fd',
  ':person_in_tuxedo_medium-dark_skin_tone:':
    'person-in-tuxedo-medium-dark-skin-tone_1f935-1f3fe',
  ':person_in_tuxedo_dark_skin_tone:':
    'person-in-tuxedo-dark-skin-tone_1f935-1f3ff',
  ':man_in_tuxedo:': 'man-in-tuxedo_1f935-200d-2642-fe0f',
  ':man_in_tuxedo_light_skin_tone:':
    'man-in-tuxedo-light-skin-tone_1f935-1f3fb-200d-2642-fe0f',
  ':man_in_tuxedo_medium-light_skin_tone:':
    'man-in-tuxedo-medium-light-skin-tone_1f935-1f3fc-200d-2642-fe0f',
  ':man_in_tuxedo_medium_skin_tone:':
    'man-in-tuxedo-medium-skin-tone_1f935-1f3fd-200d-2642-fe0f',
  ':man_in_tuxedo_medium-dark_skin_tone:':
    'man-in-tuxedo-medium-dark-skin-tone_1f935-1f3fe-200d-2642-fe0f',
  ':man_in_tuxedo_dark_skin_tone:':
    'man-in-tuxedo-dark-skin-tone_1f935-1f3ff-200d-2642-fe0f',
  ':woman_in_tuxedo:': 'woman-in-tuxedo_1f935-200d-2640-fe0f',
  ':woman_in_tuxedo_light_skin_tone:':
    'woman-in-tuxedo-light-skin-tone_1f935-1f3fb-200d-2640-fe0f',
  ':woman_in_tuxedo_medium-light_skin_tone:':
    'woman-in-tuxedo-medium-light-skin-tone_1f935-1f3fc-200d-2640-fe0f',
  ':woman_in_tuxedo_medium_skin_tone:':
    'woman-in-tuxedo-medium-skin-tone_1f935-1f3fd-200d-2640-fe0f',
  ':woman_in_tuxedo_medium-dark_skin_tone:':
    'woman-in-tuxedo-medium-dark-skin-tone_1f935-1f3fe-200d-2640-fe0f',
  ':woman_in_tuxedo_dark_skin_tone:':
    'woman-in-tuxedo-dark-skin-tone_1f935-1f3ff-200d-2640-fe0f',
  ':person_with_veil:': 'person-with-veil_1f470',
  ':person_with_veil_light_skin_tone:':
    'person-with-veil-light-skin-tone_1f470-1f3fb',
  ':person_with_veil_medium-light_skin_tone:':
    'person-with-veil-medium-light-skin-tone_1f470-1f3fc',
  ':person_with_veil_medium_skin_tone:':
    'person-with-veil-medium-skin-tone_1f470-1f3fd',
  ':person_with_veil_medium-dark_skin_tone:':
    'person-with-veil-medium-dark-skin-tone_1f470-1f3fe',
  ':person_with_veil_dark_skin_tone:':
    'person-with-veil-dark-skin-tone_1f470-1f3ff',
  ':man_with_veil:': 'man-with-veil_1f470-200d-2642-fe0f',
  ':man_with_veil_light_skin_tone:':
    'man-with-veil-light-skin-tone_1f470-1f3fb-200d-2642-fe0f',
  ':man_with_veil_medium-light_skin_tone:':
    'man-with-veil-medium-light-skin-tone_1f470-1f3fc-200d-2642-fe0f',
  ':man_with_veil_medium_skin_tone:':
    'man-with-veil-medium-skin-tone_1f470-1f3fd-200d-2642-fe0f',
  ':man_with_veil_medium-dark_skin_tone:':
    'man-with-veil-medium-dark-skin-tone_1f470-1f3fe-200d-2642-fe0f',
  ':man_with_veil_dark_skin_tone:':
    'man-with-veil-dark-skin-tone_1f470-1f3ff-200d-2642-fe0f',
  ':woman_with_veil:': 'woman-with-veil_1f470-200d-2640-fe0f',
  ':woman_with_veil_light_skin_tone:':
    'woman-with-veil-light-skin-tone_1f470-1f3fb-200d-2640-fe0f',
  ':woman_with_veil_medium-light_skin_tone:':
    'woman-with-veil-medium-light-skin-tone_1f470-1f3fc-200d-2640-fe0f',
  ':woman_with_veil_medium_skin_tone:':
    'woman-with-veil-medium-skin-tone_1f470-1f3fd-200d-2640-fe0f',
  ':woman_with_veil_medium-dark_skin_tone:':
    'woman-with-veil-medium-dark-skin-tone_1f470-1f3fe-200d-2640-fe0f',
  ':woman_with_veil_dark_skin_tone:':
    'woman-with-veil-dark-skin-tone_1f470-1f3ff-200d-2640-fe0f',
  ':pregnant_woman:': 'pregnant-woman_1f930',
  ':pregnant_woman_light_skin_tone:':
    'pregnant-woman-light-skin-tone_1f930-1f3fb',
  ':pregnant_woman_medium-light_skin_tone:':
    'pregnant-woman-medium-light-skin-tone_1f930-1f3fc',
  ':pregnant_woman_medium_skin_tone:':
    'pregnant-woman-medium-skin-tone_1f930-1f3fd',
  ':pregnant_woman_medium-dark_skin_tone:':
    'pregnant-woman-medium-dark-skin-tone_1f930-1f3fe',
  ':pregnant_woman_dark_skin_tone:':
    'pregnant-woman-dark-skin-tone_1f930-1f3ff',
  ':pregnant_man:': 'pregnant-man_1fac3',
  ':pregnant_man_light_skin_tone:': 'pregnant-man-light-skin-tone_1fac3-1f3fb',
  ':pregnant_man_medium-light_skin_tone:':
    'pregnant-man-medium-light-skin-tone_1fac3-1f3fc',
  ':pregnant_man_medium_skin_tone:':
    'pregnant-man-medium-skin-tone_1fac3-1f3fd',
  ':pregnant_man_medium-dark_skin_tone:':
    'pregnant-man-medium-dark-skin-tone_1fac3-1f3fe',
  ':pregnant_man_dark_skin_tone:': 'pregnant-man-dark-skin-tone_1fac3-1f3ff',
  ':pregnant_person:': 'pregnant-person_1fac4',
  ':pregnant_person_light_skin_tone:':
    'pregnant-person-light-skin-tone_1fac4-1f3fb',
  ':pregnant_person_medium-light_skin_tone:':
    'pregnant-person-medium-light-skin-tone_1fac4-1f3fc',
  ':pregnant_person_medium_skin_tone:':
    'pregnant-person-medium-skin-tone_1fac4-1f3fd',
  ':pregnant_person_medium-dark_skin_tone:':
    'pregnant-person-medium-dark-skin-tone_1fac4-1f3fe',
  ':pregnant_person_dark_skin_tone:':
    'pregnant-person-dark-skin-tone_1fac4-1f3ff',
  ':breast-feeding:': 'breast-feeding_1f931',
  ':breast-feeding_light_skin_tone:':
    'breast-feeding-light-skin-tone_1f931-1f3fb',
  ':breast-feeding_medium-light_skin_tone:':
    'breast-feeding-medium-light-skin-tone_1f931-1f3fc',
  ':breast-feeding_medium_skin_tone:':
    'breast-feeding-medium-skin-tone_1f931-1f3fd',
  ':breast-feeding_medium-dark_skin_tone:':
    'breast-feeding-medium-dark-skin-tone_1f931-1f3fe',
  ':breast-feeding_dark_skin_tone:':
    'breast-feeding-dark-skin-tone_1f931-1f3ff',
  ':woman_feeding_baby:': 'woman-feeding-baby_1f469-200d-1f37c',
  ':woman_feeding_baby_light_skin_tone:':
    'woman-feeding-baby-light-skin-tone_1f469-1f3fb-200d-1f37c',
  ':woman_feeding_baby_medium-light_skin_tone:':
    'woman-feeding-baby-medium-light-skin-tone_1f469-1f3fc-200d-1f37c',
  ':woman_feeding_baby_medium_skin_tone:':
    'woman-feeding-baby-medium-skin-tone_1f469-1f3fd-200d-1f37c',
  ':woman_feeding_baby_medium-dark_skin_tone:':
    'woman-feeding-baby-medium-dark-skin-tone_1f469-1f3fe-200d-1f37c',
  ':woman_feeding_baby_dark_skin_tone:':
    'woman-feeding-baby-dark-skin-tone_1f469-1f3ff-200d-1f37c',
  ':man_feeding_baby:': 'man-feeding-baby_1f468-200d-1f37c',
  ':man_feeding_baby_light_skin_tone:':
    'man-feeding-baby-light-skin-tone_1f468-1f3fb-200d-1f37c',
  ':man_feeding_baby_medium-light_skin_tone:':
    'man-feeding-baby-medium-light-skin-tone_1f468-1f3fc-200d-1f37c',
  ':man_feeding_baby_medium_skin_tone:':
    'man-feeding-baby-medium-skin-tone_1f468-1f3fd-200d-1f37c',
  ':man_feeding_baby_medium-dark_skin_tone:':
    'man-feeding-baby-medium-dark-skin-tone_1f468-1f3fe-200d-1f37c',
  ':man_feeding_baby_dark_skin_tone:':
    'man-feeding-baby-dark-skin-tone_1f468-1f3ff-200d-1f37c',
  ':person_feeding_baby:': 'person-feeding-baby_1f9d1-200d-1f37c',
  ':person_feeding_baby_light_skin_tone:':
    'person-feeding-baby-light-skin-tone_1f9d1-1f3fb-200d-1f37c',
  ':person_feeding_baby_medium-light_skin_tone:':
    'person-feeding-baby-medium-light-skin-tone_1f9d1-1f3fc-200d-1f37c',
  ':person_feeding_baby_medium_skin_tone:':
    'person-feeding-baby-medium-skin-tone_1f9d1-1f3fd-200d-1f37c',
  ':person_feeding_baby_medium-dark_skin_tone:':
    'person-feeding-baby-medium-dark-skin-tone_1f9d1-1f3fe-200d-1f37c',
  ':person_feeding_baby_dark_skin_tone:':
    'person-feeding-baby-dark-skin-tone_1f9d1-1f3ff-200d-1f37c',
  ':baby_angel:': 'baby-angel_1f47c',
  ':baby_angel_light_skin_tone:': 'baby-angel-light-skin-tone_1f47c-1f3fb',
  ':baby_angel_medium-light_skin_tone:':
    'baby-angel-medium-light-skin-tone_1f47c-1f3fc',
  ':baby_angel_medium_skin_tone:': 'baby-angel-medium-skin-tone_1f47c-1f3fd',
  ':baby_angel_medium-dark_skin_tone:':
    'baby-angel-medium-dark-skin-tone_1f47c-1f3fe',
  ':baby_angel_dark_skin_tone:': 'baby-angel-dark-skin-tone_1f47c-1f3ff',
  ':Santa_Claus:': 'santa-claus_1f385',
  ':Santa_Claus_light_skin_tone:': 'santa-claus-light-skin-tone_1f385-1f3fb',
  ':Santa_Claus_medium-light_skin_tone:':
    'santa-claus-medium-light-skin-tone_1f385-1f3fc',
  ':Santa_Claus_medium_skin_tone:': 'santa-claus-medium-skin-tone_1f385-1f3fd',
  ':Santa_Claus_medium-dark_skin_tone:':
    'santa-claus-medium-dark-skin-tone_1f385-1f3fe',
  ':Santa_Claus_dark_skin_tone:': 'santa-claus-dark-skin-tone_1f385-1f3ff',
  ':Mrs._Claus:': 'mrs-claus_1f936',
  ':Mrs._Claus_light_skin_tone:': 'mrs-claus-light-skin-tone_1f936-1f3fb',
  ':Mrs._Claus_medium-light_skin_tone:':
    'mrs-claus-medium-light-skin-tone_1f936-1f3fc',
  ':Mrs._Claus_medium_skin_tone:': 'mrs-claus-medium-skin-tone_1f936-1f3fd',
  ':Mrs._Claus_medium-dark_skin_tone:':
    'mrs-claus-medium-dark-skin-tone_1f936-1f3fe',
  ':Mrs._Claus_dark_skin_tone:': 'mrs-claus-dark-skin-tone_1f936-1f3ff',
  ':mx_claus:': 'mx-claus_1f9d1-200d-1f384',
  ':mx_claus_light_skin_tone:':
    'mx-claus-light-skin-tone_1f9d1-1f3fb-200d-1f384',
  ':mx_claus_medium-light_skin_tone:':
    'mx-claus-medium-light-skin-tone_1f9d1-1f3fc-200d-1f384',
  ':mx_claus_medium_skin_tone:':
    'mx-claus-medium-skin-tone_1f9d1-1f3fd-200d-1f384',
  ':mx_claus_medium-dark_skin_tone:':
    'mx-claus-medium-dark-skin-tone_1f9d1-1f3fe-200d-1f384',
  ':mx_claus_dark_skin_tone:': 'mx-claus-dark-skin-tone_1f9d1-1f3ff-200d-1f384',
  ':superhero:': 'superhero_1f9b8',
  ':superhero_light_skin_tone:': 'superhero-light-skin-tone_1f9b8-1f3fb',
  ':superhero_medium-light_skin_tone:':
    'superhero-medium-light-skin-tone_1f9b8-1f3fc',
  ':superhero_medium_skin_tone:': 'superhero-medium-skin-tone_1f9b8-1f3fd',
  ':superhero_medium-dark_skin_tone:':
    'superhero-medium-dark-skin-tone_1f9b8-1f3fe',
  ':superhero_dark_skin_tone:': 'superhero-dark-skin-tone_1f9b8-1f3ff',
  ':man_superhero:': 'man-superhero_1f9b8-200d-2642-fe0f',
  ':man_superhero_light_skin_tone:':
    'man-superhero-light-skin-tone_1f9b8-1f3fb-200d-2642-fe0f',
  ':man_superhero_medium-light_skin_tone:':
    'man-superhero-medium-light-skin-tone_1f9b8-1f3fc-200d-2642-fe0f',
  ':man_superhero_medium_skin_tone:':
    'man-superhero-medium-skin-tone_1f9b8-1f3fd-200d-2642-fe0f',
  ':man_superhero_medium-dark_skin_tone:':
    'man-superhero-medium-dark-skin-tone_1f9b8-1f3fe-200d-2642-fe0f',
  ':man_superhero_dark_skin_tone:':
    'man-superhero-dark-skin-tone_1f9b8-1f3ff-200d-2642-fe0f',
  ':woman_superhero:': 'woman-superhero_1f9b8-200d-2640-fe0f',
  ':woman_superhero_light_skin_tone:':
    'woman-superhero-light-skin-tone_1f9b8-1f3fb-200d-2640-fe0f',
  ':woman_superhero_medium-light_skin_tone:':
    'woman-superhero-medium-light-skin-tone_1f9b8-1f3fc-200d-2640-fe0f',
  ':woman_superhero_medium_skin_tone:':
    'woman-superhero-medium-skin-tone_1f9b8-1f3fd-200d-2640-fe0f',
  ':woman_superhero_medium-dark_skin_tone:':
    'woman-superhero-medium-dark-skin-tone_1f9b8-1f3fe-200d-2640-fe0f',
  ':woman_superhero_dark_skin_tone:':
    'woman-superhero-dark-skin-tone_1f9b8-1f3ff-200d-2640-fe0f',
  ':supervillain:': 'supervillain_1f9b9',
  ':supervillain_light_skin_tone:': 'supervillain-light-skin-tone_1f9b9-1f3fb',
  ':supervillain_medium-light_skin_tone:':
    'supervillain-medium-light-skin-tone_1f9b9-1f3fc',
  ':supervillain_medium_skin_tone:':
    'supervillain-medium-skin-tone_1f9b9-1f3fd',
  ':supervillain_medium-dark_skin_tone:':
    'supervillain-medium-dark-skin-tone_1f9b9-1f3fe',
  ':supervillain_dark_skin_tone:': 'supervillain-dark-skin-tone_1f9b9-1f3ff',
  ':man_supervillain:': 'man-supervillain_1f9b9-200d-2642-fe0f',
  ':man_supervillain_light_skin_tone:':
    'man-supervillain-light-skin-tone_1f9b9-1f3fb-200d-2642-fe0f',
  ':man_supervillain_medium-light_skin_tone:':
    'man-supervillain-medium-light-skin-tone_1f9b9-1f3fc-200d-2642-fe0f',
  ':man_supervillain_medium_skin_tone:':
    'man-supervillain-medium-skin-tone_1f9b9-1f3fd-200d-2642-fe0f',
  ':man_supervillain_medium-dark_skin_tone:':
    'man-supervillain-medium-dark-skin-tone_1f9b9-1f3fe-200d-2642-fe0f',
  ':man_supervillain_dark_skin_tone:':
    'man-supervillain-dark-skin-tone_1f9b9-1f3ff-200d-2642-fe0f',
  ':woman_supervillain:': 'woman-supervillain_1f9b9-200d-2640-fe0f',
  ':woman_supervillain_light_skin_tone:':
    'woman-supervillain-light-skin-tone_1f9b9-1f3fb-200d-2640-fe0f',
  ':woman_supervillain_medium-light_skin_tone:':
    'woman-supervillain-medium-light-skin-tone_1f9b9-1f3fc-200d-2640-fe0f',
  ':woman_supervillain_medium_skin_tone:':
    'woman-supervillain-medium-skin-tone_1f9b9-1f3fd-200d-2640-fe0f',
  ':woman_supervillain_medium-dark_skin_tone:':
    'woman-supervillain-medium-dark-skin-tone_1f9b9-1f3fe-200d-2640-fe0f',
  ':woman_supervillain_dark_skin_tone:':
    'woman-supervillain-dark-skin-tone_1f9b9-1f3ff-200d-2640-fe0f',
  ':mage:': 'mage_1f9d9',
  ':mage_light_skin_tone:': 'mage-light-skin-tone_1f9d9-1f3fb',
  ':mage_medium-light_skin_tone:': 'mage-medium-light-skin-tone_1f9d9-1f3fc',
  ':mage_medium_skin_tone:': 'mage-medium-skin-tone_1f9d9-1f3fd',
  ':mage_medium-dark_skin_tone:': 'mage-medium-dark-skin-tone_1f9d9-1f3fe',
  ':mage_dark_skin_tone:': 'mage-dark-skin-tone_1f9d9-1f3ff',
  ':man_mage:': 'man-mage_1f9d9-200d-2642-fe0f',
  ':man_mage_light_skin_tone:':
    'man-mage-light-skin-tone_1f9d9-1f3fb-200d-2642-fe0f',
  ':man_mage_medium-light_skin_tone:':
    'man-mage-medium-light-skin-tone_1f9d9-1f3fc-200d-2642-fe0f',
  ':man_mage_medium_skin_tone:':
    'man-mage-medium-skin-tone_1f9d9-1f3fd-200d-2642-fe0f',
  ':man_mage_medium-dark_skin_tone:':
    'man-mage-medium-dark-skin-tone_1f9d9-1f3fe-200d-2642-fe0f',
  ':man_mage_dark_skin_tone:':
    'man-mage-dark-skin-tone_1f9d9-1f3ff-200d-2642-fe0f',
  ':woman_mage:': 'woman-mage_1f9d9-200d-2640-fe0f',
  ':woman_mage_light_skin_tone:':
    'woman-mage-light-skin-tone_1f9d9-1f3fb-200d-2640-fe0f',
  ':woman_mage_medium-light_skin_tone:':
    'woman-mage-medium-light-skin-tone_1f9d9-1f3fc-200d-2640-fe0f',
  ':woman_mage_medium_skin_tone:':
    'woman-mage-medium-skin-tone_1f9d9-1f3fd-200d-2640-fe0f',
  ':woman_mage_medium-dark_skin_tone:':
    'woman-mage-medium-dark-skin-tone_1f9d9-1f3fe-200d-2640-fe0f',
  ':woman_mage_dark_skin_tone:':
    'woman-mage-dark-skin-tone_1f9d9-1f3ff-200d-2640-fe0f',
  ':fairy:': 'fairy_1f9da',
  ':fairy_light_skin_tone:': 'fairy-light-skin-tone_1f9da-1f3fb',
  ':fairy_medium-light_skin_tone:': 'fairy-medium-light-skin-tone_1f9da-1f3fc',
  ':fairy_medium_skin_tone:': 'fairy-medium-skin-tone_1f9da-1f3fd',
  ':fairy_medium-dark_skin_tone:': 'fairy-medium-dark-skin-tone_1f9da-1f3fe',
  ':fairy_dark_skin_tone:': 'fairy-dark-skin-tone_1f9da-1f3ff',
  ':man_fairy:': 'man-fairy_1f9da-200d-2642-fe0f',
  ':man_fairy_light_skin_tone:':
    'man-fairy-light-skin-tone_1f9da-1f3fb-200d-2642-fe0f',
  ':man_fairy_medium-light_skin_tone:':
    'man-fairy-medium-light-skin-tone_1f9da-1f3fc-200d-2642-fe0f',
  ':man_fairy_medium_skin_tone:':
    'man-fairy-medium-skin-tone_1f9da-1f3fd-200d-2642-fe0f',
  ':man_fairy_medium-dark_skin_tone:':
    'man-fairy-medium-dark-skin-tone_1f9da-1f3fe-200d-2642-fe0f',
  ':man_fairy_dark_skin_tone:':
    'man-fairy-dark-skin-tone_1f9da-1f3ff-200d-2642-fe0f',
  ':woman_fairy:': 'woman-fairy_1f9da-200d-2640-fe0f',
  ':woman_fairy_light_skin_tone:':
    'woman-fairy-light-skin-tone_1f9da-1f3fb-200d-2640-fe0f',
  ':woman_fairy_medium-light_skin_tone:':
    'woman-fairy-medium-light-skin-tone_1f9da-1f3fc-200d-2640-fe0f',
  ':woman_fairy_medium_skin_tone:':
    'woman-fairy-medium-skin-tone_1f9da-1f3fd-200d-2640-fe0f',
  ':woman_fairy_medium-dark_skin_tone:':
    'woman-fairy-medium-dark-skin-tone_1f9da-1f3fe-200d-2640-fe0f',
  ':woman_fairy_dark_skin_tone:':
    'woman-fairy-dark-skin-tone_1f9da-1f3ff-200d-2640-fe0f',
  ':vampire:': 'vampire_1f9db',
  ':vampire_light_skin_tone:': 'vampire-light-skin-tone_1f9db-1f3fb',
  ':vampire_medium-light_skin_tone:':
    'vampire-medium-light-skin-tone_1f9db-1f3fc',
  ':vampire_medium_skin_tone:': 'vampire-medium-skin-tone_1f9db-1f3fd',
  ':vampire_medium-dark_skin_tone:':
    'vampire-medium-dark-skin-tone_1f9db-1f3fe',
  ':vampire_dark_skin_tone:': 'vampire-dark-skin-tone_1f9db-1f3ff',
  ':man_vampire:': 'man-vampire_1f9db-200d-2642-fe0f',
  ':man_vampire_light_skin_tone:':
    'man-vampire-light-skin-tone_1f9db-1f3fb-200d-2642-fe0f',
  ':man_vampire_medium-light_skin_tone:':
    'man-vampire-medium-light-skin-tone_1f9db-1f3fc-200d-2642-fe0f',
  ':man_vampire_medium_skin_tone:':
    'man-vampire-medium-skin-tone_1f9db-1f3fd-200d-2642-fe0f',
  ':man_vampire_medium-dark_skin_tone:':
    'man-vampire-medium-dark-skin-tone_1f9db-1f3fe-200d-2642-fe0f',
  ':man_vampire_dark_skin_tone:':
    'man-vampire-dark-skin-tone_1f9db-1f3ff-200d-2642-fe0f',
  ':woman_vampire:': 'woman-vampire_1f9db-200d-2640-fe0f',
  ':woman_vampire_light_skin_tone:':
    'woman-vampire-light-skin-tone_1f9db-1f3fb-200d-2640-fe0f',
  ':woman_vampire_medium-light_skin_tone:':
    'woman-vampire-medium-light-skin-tone_1f9db-1f3fc-200d-2640-fe0f',
  ':woman_vampire_medium_skin_tone:':
    'woman-vampire-medium-skin-tone_1f9db-1f3fd-200d-2640-fe0f',
  ':woman_vampire_medium-dark_skin_tone:':
    'woman-vampire-medium-dark-skin-tone_1f9db-1f3fe-200d-2640-fe0f',
  ':woman_vampire_dark_skin_tone:':
    'woman-vampire-dark-skin-tone_1f9db-1f3ff-200d-2640-fe0f',
  ':merperson:': 'merperson_1f9dc',
  ':merperson_light_skin_tone:': 'merperson-light-skin-tone_1f9dc-1f3fb',
  ':merperson_medium-light_skin_tone:':
    'merperson-medium-light-skin-tone_1f9dc-1f3fc',
  ':merperson_medium_skin_tone:': 'merperson-medium-skin-tone_1f9dc-1f3fd',
  ':merperson_medium-dark_skin_tone:':
    'merperson-medium-dark-skin-tone_1f9dc-1f3fe',
  ':merperson_dark_skin_tone:': 'merperson-dark-skin-tone_1f9dc-1f3ff',
  ':merman:': 'merman_1f9dc-200d-2642-fe0f',
  ':merman_light_skin_tone:':
    'merman-light-skin-tone_1f9dc-1f3fb-200d-2642-fe0f',
  ':merman_medium-light_skin_tone:':
    'merman-medium-light-skin-tone_1f9dc-1f3fc-200d-2642-fe0f',
  ':merman_medium_skin_tone:':
    'merman-medium-skin-tone_1f9dc-1f3fd-200d-2642-fe0f',
  ':merman_medium-dark_skin_tone:':
    'merman-medium-dark-skin-tone_1f9dc-1f3fe-200d-2642-fe0f',
  ':merman_dark_skin_tone:': 'merman-dark-skin-tone_1f9dc-1f3ff-200d-2642-fe0f',
  ':mermaid:': 'mermaid_1f9dc-200d-2640-fe0f',
  ':mermaid_light_skin_tone:':
    'mermaid-light-skin-tone_1f9dc-1f3fb-200d-2640-fe0f',
  ':mermaid_medium-light_skin_tone:':
    'mermaid-medium-light-skin-tone_1f9dc-1f3fc-200d-2640-fe0f',
  ':mermaid_medium_skin_tone:':
    'mermaid-medium-skin-tone_1f9dc-1f3fd-200d-2640-fe0f',
  ':mermaid_medium-dark_skin_tone:':
    'mermaid-medium-dark-skin-tone_1f9dc-1f3fe-200d-2640-fe0f',
  ':mermaid_dark_skin_tone:':
    'mermaid-dark-skin-tone_1f9dc-1f3ff-200d-2640-fe0f',
  ':elf:': 'elf_1f9dd',
  ':elf_light_skin_tone:': 'elf-light-skin-tone_1f9dd-1f3fb',
  ':elf_medium-light_skin_tone:': 'elf-medium-light-skin-tone_1f9dd-1f3fc',
  ':elf_medium_skin_tone:': 'elf-medium-skin-tone_1f9dd-1f3fd',
  ':elf_medium-dark_skin_tone:': 'elf-medium-dark-skin-tone_1f9dd-1f3fe',
  ':elf_dark_skin_tone:': 'elf-dark-skin-tone_1f9dd-1f3ff',
  ':man_elf:': 'man-elf_1f9dd-200d-2642-fe0f',
  ':man_elf_light_skin_tone:':
    'man-elf-light-skin-tone_1f9dd-1f3fb-200d-2642-fe0f',
  ':man_elf_medium-light_skin_tone:':
    'man-elf-medium-light-skin-tone_1f9dd-1f3fc-200d-2642-fe0f',
  ':man_elf_medium_skin_tone:':
    'man-elf-medium-skin-tone_1f9dd-1f3fd-200d-2642-fe0f',
  ':man_elf_medium-dark_skin_tone:':
    'man-elf-medium-dark-skin-tone_1f9dd-1f3fe-200d-2642-fe0f',
  ':man_elf_dark_skin_tone:':
    'man-elf-dark-skin-tone_1f9dd-1f3ff-200d-2642-fe0f',
  ':woman_elf:': 'woman-elf_1f9dd-200d-2640-fe0f',
  ':woman_elf_light_skin_tone:':
    'woman-elf-light-skin-tone_1f9dd-1f3fb-200d-2640-fe0f',
  ':woman_elf_medium-light_skin_tone:':
    'woman-elf-medium-light-skin-tone_1f9dd-1f3fc-200d-2640-fe0f',
  ':woman_elf_medium_skin_tone:':
    'woman-elf-medium-skin-tone_1f9dd-1f3fd-200d-2640-fe0f',
  ':woman_elf_medium-dark_skin_tone:':
    'woman-elf-medium-dark-skin-tone_1f9dd-1f3fe-200d-2640-fe0f',
  ':woman_elf_dark_skin_tone:':
    'woman-elf-dark-skin-tone_1f9dd-1f3ff-200d-2640-fe0f',
  ':genie:': 'genie_1f9de',
  ':man_genie:': 'man-genie_1f9de-200d-2642-fe0f',
  ':woman_genie:': 'woman-genie_1f9de-200d-2640-fe0f',
  ':zombie:': 'zombie_1f9df',
  ':man_zombie:': 'man-zombie_1f9df-200d-2642-fe0f',
  ':woman_zombie:': 'woman-zombie_1f9df-200d-2640-fe0f',
  ':troll:': 'troll_1f9cc',
  ':person_getting_massage:': 'person-getting-massage_1f486',
  ':person_getting_massage_light_skin_tone:':
    'person-getting-massage-light-skin-tone_1f486-1f3fb',
  ':person_getting_massage_medium-light_skin_tone:':
    'person-getting-massage-medium-light-skin-tone_1f486-1f3fc',
  ':person_getting_massage_medium_skin_tone:':
    'person-getting-massage-medium-skin-tone_1f486-1f3fd',
  ':person_getting_massage_medium-dark_skin_tone:':
    'person-getting-massage-medium-dark-skin-tone_1f486-1f3fe',
  ':person_getting_massage_dark_skin_tone:':
    'person-getting-massage-dark-skin-tone_1f486-1f3ff',
  ':man_getting_massage:': 'man-getting-massage_1f486-200d-2642-fe0f',
  ':man_getting_massage_light_skin_tone:':
    'man-getting-massage-light-skin-tone_1f486-1f3fb-200d-2642-fe0f',
  ':man_getting_massage_medium-light_skin_tone:':
    'man-getting-massage-medium-light-skin-tone_1f486-1f3fc-200d-2642-fe0f',
  ':man_getting_massage_medium_skin_tone:':
    'man-getting-massage-medium-skin-tone_1f486-1f3fd-200d-2642-fe0f',
  ':man_getting_massage_medium-dark_skin_tone:':
    'man-getting-massage-medium-dark-skin-tone_1f486-1f3fe-200d-2642-fe0f',
  ':man_getting_massage_dark_skin_tone:':
    'man-getting-massage-dark-skin-tone_1f486-1f3ff-200d-2642-fe0f',
  ':woman_getting_massage:': 'woman-getting-massage_1f486-200d-2640-fe0f',
  ':woman_getting_massage_light_skin_tone:':
    'woman-getting-massage-light-skin-tone_1f486-1f3fb-200d-2640-fe0f',
  ':woman_getting_massage_medium-light_skin_tone:':
    'woman-getting-massage-medium-light-skin-tone_1f486-1f3fc-200d-2640-fe0f',
  ':woman_getting_massage_medium_skin_tone:':
    'woman-getting-massage-medium-skin-tone_1f486-1f3fd-200d-2640-fe0f',
  ':woman_getting_massage_medium-dark_skin_tone:':
    'woman-getting-massage-medium-dark-skin-tone_1f486-1f3fe-200d-2640-fe0f',
  ':woman_getting_massage_dark_skin_tone:':
    'woman-getting-massage-dark-skin-tone_1f486-1f3ff-200d-2640-fe0f',
  ':person_getting_haircut:': 'person-getting-haircut_1f487',
  ':person_getting_haircut_light_skin_tone:':
    'person-getting-haircut-light-skin-tone_1f487-1f3fb',
  ':person_getting_haircut_medium-light_skin_tone:':
    'person-getting-haircut-medium-light-skin-tone_1f487-1f3fc',
  ':person_getting_haircut_medium_skin_tone:':
    'person-getting-haircut-medium-skin-tone_1f487-1f3fd',
  ':person_getting_haircut_medium-dark_skin_tone:':
    'person-getting-haircut-medium-dark-skin-tone_1f487-1f3fe',
  ':person_getting_haircut_dark_skin_tone:':
    'person-getting-haircut-dark-skin-tone_1f487-1f3ff',
  ':man_getting_haircut:': 'man-getting-haircut_1f487-200d-2642-fe0f',
  ':man_getting_haircut_light_skin_tone:':
    'man-getting-haircut-light-skin-tone_1f487-1f3fb-200d-2642-fe0f',
  ':man_getting_haircut_medium-light_skin_tone:':
    'man-getting-haircut-medium-light-skin-tone_1f487-1f3fc-200d-2642-fe0f',
  ':man_getting_haircut_medium_skin_tone:':
    'man-getting-haircut-medium-skin-tone_1f487-1f3fd-200d-2642-fe0f',
  ':man_getting_haircut_medium-dark_skin_tone:':
    'man-getting-haircut-medium-dark-skin-tone_1f487-1f3fe-200d-2642-fe0f',
  ':man_getting_haircut_dark_skin_tone:':
    'man-getting-haircut-dark-skin-tone_1f487-1f3ff-200d-2642-fe0f',
  ':woman_getting_haircut:': 'woman-getting-haircut_1f487-200d-2640-fe0f',
  ':woman_getting_haircut_light_skin_tone:':
    'woman-getting-haircut-light-skin-tone_1f487-1f3fb-200d-2640-fe0f',
  ':woman_getting_haircut_medium-light_skin_tone:':
    'woman-getting-haircut-medium-light-skin-tone_1f487-1f3fc-200d-2640-fe0f',
  ':woman_getting_haircut_medium_skin_tone:':
    'woman-getting-haircut-medium-skin-tone_1f487-1f3fd-200d-2640-fe0f',
  ':woman_getting_haircut_medium-dark_skin_tone:':
    'woman-getting-haircut-medium-dark-skin-tone_1f487-1f3fe-200d-2640-fe0f',
  ':woman_getting_haircut_dark_skin_tone:':
    'woman-getting-haircut-dark-skin-tone_1f487-1f3ff-200d-2640-fe0f',
  ':person_walking:': 'person-walking_1f6b6',
  ':person_walking_light_skin_tone:':
    'person-walking-light-skin-tone_1f6b6-1f3fb',
  ':person_walking_medium-light_skin_tone:':
    'person-walking-medium-light-skin-tone_1f6b6-1f3fc',
  ':person_walking_medium_skin_tone:':
    'person-walking-medium-skin-tone_1f6b6-1f3fd',
  ':person_walking_medium-dark_skin_tone:':
    'person-walking-medium-dark-skin-tone_1f6b6-1f3fe',
  ':person_walking_dark_skin_tone:':
    'person-walking-dark-skin-tone_1f6b6-1f3ff',
  ':man_walking:': 'man-walking_1f6b6-200d-2642-fe0f',
  ':man_walking_light_skin_tone:':
    'man-walking-light-skin-tone_1f6b6-1f3fb-200d-2642-fe0f',
  ':man_walking_medium-light_skin_tone:':
    'man-walking-medium-light-skin-tone_1f6b6-1f3fc-200d-2642-fe0f',
  ':man_walking_medium_skin_tone:':
    'man-walking-medium-skin-tone_1f6b6-1f3fd-200d-2642-fe0f',
  ':man_walking_medium-dark_skin_tone:':
    'man-walking-medium-dark-skin-tone_1f6b6-1f3fe-200d-2642-fe0f',
  ':man_walking_dark_skin_tone:':
    'man-walking-dark-skin-tone_1f6b6-1f3ff-200d-2642-fe0f',
  ':woman_walking:': 'woman-walking_1f6b6-200d-2640-fe0f',
  ':woman_walking_light_skin_tone:':
    'woman-walking-light-skin-tone_1f6b6-1f3fb-200d-2640-fe0f',
  ':woman_walking_medium-light_skin_tone:':
    'woman-walking-medium-light-skin-tone_1f6b6-1f3fc-200d-2640-fe0f',
  ':woman_walking_medium_skin_tone:':
    'woman-walking-medium-skin-tone_1f6b6-1f3fd-200d-2640-fe0f',
  ':woman_walking_medium-dark_skin_tone:':
    'woman-walking-medium-dark-skin-tone_1f6b6-1f3fe-200d-2640-fe0f',
  ':woman_walking_dark_skin_tone:':
    'woman-walking-dark-skin-tone_1f6b6-1f3ff-200d-2640-fe0f',
  ':person_standing:': 'person-standing_1f9cd',
  ':person_standing_light_skin_tone:':
    'person-standing-light-skin-tone_1f9cd-1f3fb',
  ':person_standing_medium-light_skin_tone:':
    'person-standing-medium-light-skin-tone_1f9cd-1f3fc',
  ':person_standing_medium_skin_tone:':
    'person-standing-medium-skin-tone_1f9cd-1f3fd',
  ':person_standing_medium-dark_skin_tone:':
    'person-standing-medium-dark-skin-tone_1f9cd-1f3fe',
  ':person_standing_dark_skin_tone:':
    'person-standing-dark-skin-tone_1f9cd-1f3ff',
  ':man_standing:': 'man-standing_1f9cd-200d-2642-fe0f',
  ':man_standing_light_skin_tone:':
    'man-standing-light-skin-tone_1f9cd-1f3fb-200d-2642-fe0f',
  ':man_standing_medium-light_skin_tone:':
    'man-standing-medium-light-skin-tone_1f9cd-1f3fc-200d-2642-fe0f',
  ':man_standing_medium_skin_tone:':
    'man-standing-medium-skin-tone_1f9cd-1f3fd-200d-2642-fe0f',
  ':man_standing_medium-dark_skin_tone:':
    'man-standing-medium-dark-skin-tone_1f9cd-1f3fe-200d-2642-fe0f',
  ':man_standing_dark_skin_tone:':
    'man-standing-dark-skin-tone_1f9cd-1f3ff-200d-2642-fe0f',
  ':woman_standing:': 'woman-standing_1f9cd-200d-2640-fe0f',
  ':woman_standing_light_skin_tone:':
    'woman-standing-light-skin-tone_1f9cd-1f3fb-200d-2640-fe0f',
  ':woman_standing_medium-light_skin_tone:':
    'woman-standing-medium-light-skin-tone_1f9cd-1f3fc-200d-2640-fe0f',
  ':woman_standing_medium_skin_tone:':
    'woman-standing-medium-skin-tone_1f9cd-1f3fd-200d-2640-fe0f',
  ':woman_standing_medium-dark_skin_tone:':
    'woman-standing-medium-dark-skin-tone_1f9cd-1f3fe-200d-2640-fe0f',
  ':woman_standing_dark_skin_tone:':
    'woman-standing-dark-skin-tone_1f9cd-1f3ff-200d-2640-fe0f',
  ':person_kneeling:': 'person-kneeling_1f9ce',
  ':person_kneeling_light_skin_tone:':
    'person-kneeling-light-skin-tone_1f9ce-1f3fb',
  ':person_kneeling_medium-light_skin_tone:':
    'person-kneeling-medium-light-skin-tone_1f9ce-1f3fc',
  ':person_kneeling_medium_skin_tone:':
    'person-kneeling-medium-skin-tone_1f9ce-1f3fd',
  ':person_kneeling_medium-dark_skin_tone:':
    'person-kneeling-medium-dark-skin-tone_1f9ce-1f3fe',
  ':person_kneeling_dark_skin_tone:':
    'person-kneeling-dark-skin-tone_1f9ce-1f3ff',
  ':man_kneeling:': 'man-kneeling_1f9ce-200d-2642-fe0f',
  ':man_kneeling_light_skin_tone:':
    'man-kneeling-light-skin-tone_1f9ce-1f3fb-200d-2642-fe0f',
  ':man_kneeling_medium-light_skin_tone:':
    'man-kneeling-medium-light-skin-tone_1f9ce-1f3fc-200d-2642-fe0f',
  ':man_kneeling_medium_skin_tone:':
    'man-kneeling-medium-skin-tone_1f9ce-1f3fd-200d-2642-fe0f',
  ':man_kneeling_medium-dark_skin_tone:':
    'man-kneeling-medium-dark-skin-tone_1f9ce-1f3fe-200d-2642-fe0f',
  ':man_kneeling_dark_skin_tone:':
    'man-kneeling-dark-skin-tone_1f9ce-1f3ff-200d-2642-fe0f',
  ':woman_kneeling:': 'woman-kneeling_1f9ce-200d-2640-fe0f',
  ':woman_kneeling_light_skin_tone:':
    'woman-kneeling-light-skin-tone_1f9ce-1f3fb-200d-2640-fe0f',
  ':woman_kneeling_medium-light_skin_tone:':
    'woman-kneeling-medium-light-skin-tone_1f9ce-1f3fc-200d-2640-fe0f',
  ':woman_kneeling_medium_skin_tone:':
    'woman-kneeling-medium-skin-tone_1f9ce-1f3fd-200d-2640-fe0f',
  ':woman_kneeling_medium-dark_skin_tone:':
    'woman-kneeling-medium-dark-skin-tone_1f9ce-1f3fe-200d-2640-fe0f',
  ':woman_kneeling_dark_skin_tone:':
    'woman-kneeling-dark-skin-tone_1f9ce-1f3ff-200d-2640-fe0f',
  ':man_with_white_cane:': 'man-with-white-cane_1f468-200d-1f9af',
  ':man_with_white_cane_light_skin_tone:':
    'man-with-white-cane-light-skin-tone_1f468-1f3fb-200d-1f9af',
  ':man_with_white_cane_medium-light_skin_tone:':
    'man-with-white-cane-medium-light-skin-tone_1f468-1f3fc-200d-1f9af',
  ':man_with_white_cane_medium_skin_tone:':
    'man-with-white-cane-medium-skin-tone_1f468-1f3fd-200d-1f9af',
  ':man_with_white_cane_medium-dark_skin_tone:':
    'man-with-white-cane-medium-dark-skin-tone_1f468-1f3fe-200d-1f9af',
  ':man_with_white_cane_dark_skin_tone:':
    'man-with-white-cane-dark-skin-tone_1f468-1f3ff-200d-1f9af',
  ':woman_with_white_cane:': 'woman-with-white-cane_1f469-200d-1f9af',
  ':woman_with_white_cane_light_skin_tone:':
    'woman-with-white-cane-light-skin-tone_1f469-1f3fb-200d-1f9af',
  ':woman_with_white_cane_medium-light_skin_tone:':
    'woman-with-white-cane-medium-light-skin-tone_1f469-1f3fc-200d-1f9af',
  ':woman_with_white_cane_medium_skin_tone:':
    'woman-with-white-cane-medium-skin-tone_1f469-1f3fd-200d-1f9af',
  ':woman_with_white_cane_medium-dark_skin_tone:':
    'woman-with-white-cane-medium-dark-skin-tone_1f469-1f3fe-200d-1f9af',
  ':woman_with_white_cane_dark_skin_tone:':
    'woman-with-white-cane-dark-skin-tone_1f469-1f3ff-200d-1f9af',
  ':man_in_motorized_wheelchair:':
    'man-in-motorized-wheelchair_1f468-200d-1f9bc',
  ':man_in_motorized_wheelchair_light_skin_tone:':
    'man-in-motorized-wheelchair-light-skin-tone_1f468-1f3fb-200d-1f9bc',
  ':man_in_motorized_wheelchair_medium-light_skin_tone:':
    'man-in-motorized-wheelchair-medium-light-skin-tone_1f468-1f3fc-200d-1f9bc',
  ':man_in_motorized_wheelchair_medium_skin_tone:':
    'man-in-motorized-wheelchair-medium-skin-tone_1f468-1f3fd-200d-1f9bc',
  ':man_in_motorized_wheelchair_medium-dark_skin_tone:':
    'man-in-motorized-wheelchair-medium-dark-skin-tone_1f468-1f3fe-200d-1f9bc',
  ':man_in_motorized_wheelchair_dark_skin_tone:':
    'man-in-motorized-wheelchair-dark-skin-tone_1f468-1f3ff-200d-1f9bc',
  ':woman_in_motorized_wheelchair:':
    'woman-in-motorized-wheelchair_1f469-200d-1f9bc',
  ':woman_in_motorized_wheelchair_light_skin_tone:':
    'woman-in-motorized-wheelchair-light-skin-tone_1f469-1f3fb-200d-1f9bc',
  ':woman_in_motorized_wheelchair_medium-light_skin_tone:':
    'woman-in-motorized-wheelchair-medium-light-skin-tone_1f469-1f3fc-200d-1f9bc',
  ':woman_in_motorized_wheelchair_medium_skin_tone:':
    'woman-in-motorized-wheelchair-medium-skin-tone_1f469-1f3fd-200d-1f9bc',
  ':woman_in_motorized_wheelchair_medium-dark_skin_tone:':
    'woman-in-motorized-wheelchair-medium-dark-skin-tone_1f469-1f3fe-200d-1f9bc',
  ':woman_in_motorized_wheelchair_dark_skin_tone:':
    'woman-in-motorized-wheelchair-dark-skin-tone_1f469-1f3ff-200d-1f9bc',
  ':man_in_manual_wheelchair:': 'man-in-manual-wheelchair_1f468-200d-1f9bd',
  ':man_in_manual_wheelchair_light_skin_tone:':
    'man-in-manual-wheelchair-light-skin-tone_1f468-1f3fb-200d-1f9bd',
  ':man_in_manual_wheelchair_medium-light_skin_tone:':
    'man-in-manual-wheelchair-medium-light-skin-tone_1f468-1f3fc-200d-1f9bd',
  ':man_in_manual_wheelchair_medium_skin_tone:':
    'man-in-manual-wheelchair-medium-skin-tone_1f468-1f3fd-200d-1f9bd',
  ':man_in_manual_wheelchair_medium-dark_skin_tone:':
    'man-in-manual-wheelchair-medium-dark-skin-tone_1f468-1f3fe-200d-1f9bd',
  ':man_in_manual_wheelchair_dark_skin_tone:':
    'man-in-manual-wheelchair-dark-skin-tone_1f468-1f3ff-200d-1f9bd',
  ':woman_in_manual_wheelchair:': 'woman-in-manual-wheelchair_1f469-200d-1f9bd',
  ':woman_in_manual_wheelchair_light_skin_tone:':
    'woman-in-manual-wheelchair-light-skin-tone_1f469-1f3fb-200d-1f9bd',
  ':woman_in_manual_wheelchair_medium-light_skin_tone:':
    'woman-in-manual-wheelchair-medium-light-skin-tone_1f469-1f3fc-200d-1f9bd',
  ':woman_in_manual_wheelchair_medium_skin_tone:':
    'woman-in-manual-wheelchair-medium-skin-tone_1f469-1f3fd-200d-1f9bd',
  ':woman_in_manual_wheelchair_medium-dark_skin_tone:':
    'woman-in-manual-wheelchair-medium-dark-skin-tone_1f469-1f3fe-200d-1f9bd',
  ':woman_in_manual_wheelchair_dark_skin_tone:':
    'woman-in-manual-wheelchair-dark-skin-tone_1f469-1f3ff-200d-1f9bd',
  ':person_running:': 'person-running_1f3c3',
  ':person_running_light_skin_tone:':
    'person-running-light-skin-tone_1f3c3-1f3fb',
  ':person_running_medium-light_skin_tone:':
    'person-running-medium-light-skin-tone_1f3c3-1f3fc',
  ':person_running_medium_skin_tone:':
    'person-running-medium-skin-tone_1f3c3-1f3fd',
  ':person_running_medium-dark_skin_tone:':
    'person-running-medium-dark-skin-tone_1f3c3-1f3fe',
  ':person_running_dark_skin_tone:':
    'person-running-dark-skin-tone_1f3c3-1f3ff',
  ':man_running:': 'man-running_1f3c3-200d-2642-fe0f',
  ':man_running_light_skin_tone:':
    'man-running-light-skin-tone_1f3c3-1f3fb-200d-2642-fe0f',
  ':man_running_medium-light_skin_tone:':
    'man-running-medium-light-skin-tone_1f3c3-1f3fc-200d-2642-fe0f',
  ':man_running_medium_skin_tone:':
    'man-running-medium-skin-tone_1f3c3-1f3fd-200d-2642-fe0f',
  ':man_running_medium-dark_skin_tone:':
    'man-running-medium-dark-skin-tone_1f3c3-1f3fe-200d-2642-fe0f',
  ':man_running_dark_skin_tone:':
    'man-running-dark-skin-tone_1f3c3-1f3ff-200d-2642-fe0f',
  ':woman_running:': 'woman-running_1f3c3-200d-2640-fe0f',
  ':woman_running_light_skin_tone:':
    'woman-running-light-skin-tone_1f3c3-1f3fb-200d-2640-fe0f',
  ':woman_running_medium-light_skin_tone:':
    'woman-running-medium-light-skin-tone_1f3c3-1f3fc-200d-2640-fe0f',
  ':woman_running_medium_skin_tone:':
    'woman-running-medium-skin-tone_1f3c3-1f3fd-200d-2640-fe0f',
  ':woman_running_medium-dark_skin_tone:':
    'woman-running-medium-dark-skin-tone_1f3c3-1f3fe-200d-2640-fe0f',
  ':woman_running_dark_skin_tone:':
    'woman-running-dark-skin-tone_1f3c3-1f3ff-200d-2640-fe0f',
  ':woman_dancing:': 'woman-dancing_1f483',
  ':woman_dancing_light_skin_tone:':
    'woman-dancing-light-skin-tone_1f483-1f3fb',
  ':woman_dancing_medium-light_skin_tone:':
    'woman-dancing-medium-light-skin-tone_1f483-1f3fc',
  ':woman_dancing_medium_skin_tone:':
    'woman-dancing-medium-skin-tone_1f483-1f3fd',
  ':woman_dancing_medium-dark_skin_tone:':
    'woman-dancing-medium-dark-skin-tone_1f483-1f3fe',
  ':woman_dancing_dark_skin_tone:': 'woman-dancing-dark-skin-tone_1f483-1f3ff',
  ':man_dancing:': 'man-dancing_1f57a',
  ':man_dancing_light_skin_tone:': 'man-dancing-light-skin-tone_1f57a-1f3fb',
  ':man_dancing_medium-light_skin_tone:':
    'man-dancing-medium-light-skin-tone_1f57a-1f3fc',
  ':man_dancing_medium_skin_tone:': 'man-dancing-medium-skin-tone_1f57a-1f3fd',
  ':man_dancing_medium-dark_skin_tone:':
    'man-dancing-medium-dark-skin-tone_1f57a-1f3fe',
  ':man_dancing_dark_skin_tone:': 'man-dancing-dark-skin-tone_1f57a-1f3ff',
  ':person_in_suit_levitating:': 'person-in-suit-levitating_1f574-fe0f',
  ':person_in_suit_levitating_light_skin_tone:':
    'person-in-suit-levitating-light-skin-tone_1f574-1f3fb',
  ':person_in_suit_levitating_medium-light_skin_tone:':
    'person-in-suit-levitating-medium-light-skin-tone_1f574-1f3fc',
  ':person_in_suit_levitating_medium_skin_tone:':
    'person-in-suit-levitating-medium-skin-tone_1f574-1f3fd',
  ':person_in_suit_levitating_medium-dark_skin_tone:':
    'person-in-suit-levitating-medium-dark-skin-tone_1f574-1f3fe',
  ':person_in_suit_levitating_dark_skin_tone:':
    'person-in-suit-levitating-dark-skin-tone_1f574-1f3ff',
  ':people_with_bunny_ears:': 'people-with-bunny-ears_1f46f',
  ':men_with_bunny_ears:': 'men-with-bunny-ears_1f46f-200d-2642-fe0f',
  ':women_with_bunny_ears:': 'women-with-bunny-ears_1f46f-200d-2640-fe0f',
  ':person_in_steamy_room:': 'person-in-steamy-room_1f9d6',
  ':person_in_steamy_room_light_skin_tone:':
    'person-in-steamy-room-light-skin-tone_1f9d6-1f3fb',
  ':person_in_steamy_room_medium-light_skin_tone:':
    'person-in-steamy-room-medium-light-skin-tone_1f9d6-1f3fc',
  ':person_in_steamy_room_medium_skin_tone:':
    'person-in-steamy-room-medium-skin-tone_1f9d6-1f3fd',
  ':person_in_steamy_room_medium-dark_skin_tone:':
    'person-in-steamy-room-medium-dark-skin-tone_1f9d6-1f3fe',
  ':person_in_steamy_room_dark_skin_tone:':
    'person-in-steamy-room-dark-skin-tone_1f9d6-1f3ff',
  ':man_in_steamy_room:': 'man-in-steamy-room_1f9d6-200d-2642-fe0f',
  ':man_in_steamy_room_light_skin_tone:':
    'man-in-steamy-room-light-skin-tone_1f9d6-1f3fb-200d-2642-fe0f',
  ':man_in_steamy_room_medium-light_skin_tone:':
    'man-in-steamy-room-medium-light-skin-tone_1f9d6-1f3fc-200d-2642-fe0f',
  ':man_in_steamy_room_medium_skin_tone:':
    'man-in-steamy-room-medium-skin-tone_1f9d6-1f3fd-200d-2642-fe0f',
  ':man_in_steamy_room_medium-dark_skin_tone:':
    'man-in-steamy-room-medium-dark-skin-tone_1f9d6-1f3fe-200d-2642-fe0f',
  ':man_in_steamy_room_dark_skin_tone:':
    'man-in-steamy-room-dark-skin-tone_1f9d6-1f3ff-200d-2642-fe0f',
  ':woman_in_steamy_room:': 'woman-in-steamy-room_1f9d6-200d-2640-fe0f',
  ':woman_in_steamy_room_light_skin_tone:':
    'woman-in-steamy-room-light-skin-tone_1f9d6-1f3fb-200d-2640-fe0f',
  ':woman_in_steamy_room_medium-light_skin_tone:':
    'woman-in-steamy-room-medium-light-skin-tone_1f9d6-1f3fc-200d-2640-fe0f',
  ':woman_in_steamy_room_medium_skin_tone:':
    'woman-in-steamy-room-medium-skin-tone_1f9d6-1f3fd-200d-2640-fe0f',
  ':woman_in_steamy_room_medium-dark_skin_tone:':
    'woman-in-steamy-room-medium-dark-skin-tone_1f9d6-1f3fe-200d-2640-fe0f',
  ':woman_in_steamy_room_dark_skin_tone:':
    'woman-in-steamy-room-dark-skin-tone_1f9d6-1f3ff-200d-2640-fe0f',
  ':person_climbing:': 'person-climbing_1f9d7',
  ':person_climbing_light_skin_tone:':
    'person-climbing-light-skin-tone_1f9d7-1f3fb',
  ':person_climbing_medium-light_skin_tone:':
    'person-climbing-medium-light-skin-tone_1f9d7-1f3fc',
  ':person_climbing_medium_skin_tone:':
    'person-climbing-medium-skin-tone_1f9d7-1f3fd',
  ':person_climbing_medium-dark_skin_tone:':
    'person-climbing-medium-dark-skin-tone_1f9d7-1f3fe',
  ':person_climbing_dark_skin_tone:':
    'person-climbing-dark-skin-tone_1f9d7-1f3ff',
  ':man_climbing:': 'man-climbing_1f9d7-200d-2642-fe0f',
  ':man_climbing_light_skin_tone:':
    'man-climbing-light-skin-tone_1f9d7-1f3fb-200d-2642-fe0f',
  ':man_climbing_medium-light_skin_tone:':
    'man-climbing-medium-light-skin-tone_1f9d7-1f3fc-200d-2642-fe0f',
  ':man_climbing_medium_skin_tone:':
    'man-climbing-medium-skin-tone_1f9d7-1f3fd-200d-2642-fe0f',
  ':man_climbing_medium-dark_skin_tone:':
    'man-climbing-medium-dark-skin-tone_1f9d7-1f3fe-200d-2642-fe0f',
  ':man_climbing_dark_skin_tone:':
    'man-climbing-dark-skin-tone_1f9d7-1f3ff-200d-2642-fe0f',
  ':woman_climbing:': 'woman-climbing_1f9d7-200d-2640-fe0f',
  ':woman_climbing_light_skin_tone:':
    'woman-climbing-light-skin-tone_1f9d7-1f3fb-200d-2640-fe0f',
  ':woman_climbing_medium-light_skin_tone:':
    'woman-climbing-medium-light-skin-tone_1f9d7-1f3fc-200d-2640-fe0f',
  ':woman_climbing_medium_skin_tone:':
    'woman-climbing-medium-skin-tone_1f9d7-1f3fd-200d-2640-fe0f',
  ':woman_climbing_medium-dark_skin_tone:':
    'woman-climbing-medium-dark-skin-tone_1f9d7-1f3fe-200d-2640-fe0f',
  ':woman_climbing_dark_skin_tone:':
    'woman-climbing-dark-skin-tone_1f9d7-1f3ff-200d-2640-fe0f',
  ':person_fencing:': 'person-fencing_1f93a',
  ':horse_racing:': 'horse-racing_1f3c7',
  ':horse_racing_light_skin_tone:': 'horse-racing-light-skin-tone_1f3c7-1f3fb',
  ':horse_racing_medium-light_skin_tone:':
    'horse-racing-medium-light-skin-tone_1f3c7-1f3fc',
  ':horse_racing_medium_skin_tone:':
    'horse-racing-medium-skin-tone_1f3c7-1f3fd',
  ':horse_racing_medium-dark_skin_tone:':
    'horse-racing-medium-dark-skin-tone_1f3c7-1f3fe',
  ':horse_racing_dark_skin_tone:': 'horse-racing-dark-skin-tone_1f3c7-1f3ff',
  ':skier:': 'skier_26f7-fe0f',
  ':snowboarder:': 'snowboarder_1f3c2',
  ':person_golfing:': 'person-golfing_1f3cc-fe0f',
  ':person_golfing_light_skin_tone:':
    'person-golfing-light-skin-tone_1f3cc-1f3fb',
  ':person_golfing_medium-light_skin_tone:':
    'person-golfing-medium-light-skin-tone_1f3cc-1f3fc',
  ':person_golfing_medium_skin_tone:':
    'person-golfing-medium-skin-tone_1f3cc-1f3fd',
  ':person_golfing_medium-dark_skin_tone:':
    'person-golfing-medium-dark-skin-tone_1f3cc-1f3fe',
  ':person_golfing_dark_skin_tone:':
    'person-golfing-dark-skin-tone_1f3cc-1f3ff',
  ':man_golfing:': 'man-golfing_1f3cc-fe0f-200d-2642-fe0f',
  ':man_golfing_light_skin_tone:':
    'man-golfing-light-skin-tone_1f3cc-1f3fb-200d-2642-fe0f',
  ':man_golfing_medium-light_skin_tone:':
    'man-golfing-medium-light-skin-tone_1f3cc-1f3fc-200d-2642-fe0f',
  ':man_golfing_medium_skin_tone:':
    'man-golfing-medium-skin-tone_1f3cc-1f3fd-200d-2642-fe0f',
  ':man_golfing_medium-dark_skin_tone:':
    'man-golfing-medium-dark-skin-tone_1f3cc-1f3fe-200d-2642-fe0f',
  ':man_golfing_dark_skin_tone:':
    'man-golfing-dark-skin-tone_1f3cc-1f3ff-200d-2642-fe0f',
  ':woman_golfing:': 'woman-golfing_1f3cc-fe0f-200d-2640-fe0f',
  ':woman_golfing_light_skin_tone:':
    'woman-golfing-light-skin-tone_1f3cc-1f3fb-200d-2640-fe0f',
  ':woman_golfing_medium-light_skin_tone:':
    'woman-golfing-medium-light-skin-tone_1f3cc-1f3fc-200d-2640-fe0f',
  ':woman_golfing_medium_skin_tone:':
    'woman-golfing-medium-skin-tone_1f3cc-1f3fd-200d-2640-fe0f',
  ':woman_golfing_medium-dark_skin_tone:':
    'woman-golfing-medium-dark-skin-tone_1f3cc-1f3fe-200d-2640-fe0f',
  ':woman_golfing_dark_skin_tone:':
    'woman-golfing-dark-skin-tone_1f3cc-1f3ff-200d-2640-fe0f',
  ':person_surfing:': 'person-surfing_1f3c4',
  ':person_surfing_light_skin_tone:':
    'person-surfing-light-skin-tone_1f3c4-1f3fb',
  ':person_surfing_medium-light_skin_tone:':
    'person-surfing-medium-light-skin-tone_1f3c4-1f3fc',
  ':person_surfing_medium_skin_tone:':
    'person-surfing-medium-skin-tone_1f3c4-1f3fd',
  ':person_surfing_medium-dark_skin_tone:':
    'person-surfing-medium-dark-skin-tone_1f3c4-1f3fe',
  ':person_surfing_dark_skin_tone:':
    'person-surfing-dark-skin-tone_1f3c4-1f3ff',
  ':man_surfing:': 'man-surfing_1f3c4-200d-2642-fe0f',
  ':man_surfing_light_skin_tone:':
    'man-surfing-light-skin-tone_1f3c4-1f3fb-200d-2642-fe0f',
  ':man_surfing_medium-light_skin_tone:':
    'man-surfing-medium-light-skin-tone_1f3c4-1f3fc-200d-2642-fe0f',
  ':man_surfing_medium_skin_tone:':
    'man-surfing-medium-skin-tone_1f3c4-1f3fd-200d-2642-fe0f',
  ':man_surfing_medium-dark_skin_tone:':
    'man-surfing-medium-dark-skin-tone_1f3c4-1f3fe-200d-2642-fe0f',
  ':man_surfing_dark_skin_tone:':
    'man-surfing-dark-skin-tone_1f3c4-1f3ff-200d-2642-fe0f',
  ':person_swimming:': 'person-swimming_1f3ca',
  ':person_swimming_light_skin_tone:':
    'person-swimming-light-skin-tone_1f3ca-1f3fb',
  ':person_swimming_medium-light_skin_tone:':
    'person-swimming-medium-light-skin-tone_1f3ca-1f3fc',
  ':person_swimming_medium_skin_tone:':
    'person-swimming-medium-skin-tone_1f3ca-1f3fd',
  ':person_swimming_medium-dark_skin_tone:':
    'person-swimming-medium-dark-skin-tone_1f3ca-1f3fe',
  ':person_swimming_dark_skin_tone:':
    'person-swimming-dark-skin-tone_1f3ca-1f3ff',
  ':man_swimming:': 'man-swimming_1f3ca-200d-2642-fe0f',
  ':man_swimming_light_skin_tone:':
    'man-swimming-light-skin-tone_1f3ca-1f3fb-200d-2642-fe0f',
  ':man_swimming_medium-light_skin_tone:':
    'man-swimming-medium-light-skin-tone_1f3ca-1f3fc-200d-2642-fe0f',
  ':man_swimming_medium_skin_tone:':
    'man-swimming-medium-skin-tone_1f3ca-1f3fd-200d-2642-fe0f',
  ':man_swimming_medium-dark_skin_tone:':
    'man-swimming-medium-dark-skin-tone_1f3ca-1f3fe-200d-2642-fe0f',
  ':man_swimming_dark_skin_tone:':
    'man-swimming-dark-skin-tone_1f3ca-1f3ff-200d-2642-fe0f',
  ':woman_swimming:': 'woman-swimming_1f3ca-200d-2640-fe0f',
  ':woman_swimming_light_skin_tone:':
    'woman-swimming-light-skin-tone_1f3ca-1f3fb-200d-2640-fe0f',
  ':woman_swimming_medium-light_skin_tone:':
    'woman-swimming-medium-light-skin-tone_1f3ca-1f3fc-200d-2640-fe0f',
  ':woman_swimming_medium_skin_tone:':
    'woman-swimming-medium-skin-tone_1f3ca-1f3fd-200d-2640-fe0f',
  ':woman_swimming_medium-dark_skin_tone:':
    'woman-swimming-medium-dark-skin-tone_1f3ca-1f3fe-200d-2640-fe0f',
  ':woman_swimming_dark_skin_tone:':
    'woman-swimming-dark-skin-tone_1f3ca-1f3ff-200d-2640-fe0f',
  ':person_bouncing_ball:': 'person-bouncing-ball_26f9-fe0f',
  ':man_lifting_weights_light_skin_tone:':
    'man-lifting-weights-light-skin-tone_1f3cb-1f3fb-200d-2642-fe0f',
  ':man_lifting_weights_medium-light_skin_tone:':
    'man-lifting-weights-medium-light-skin-tone_1f3cb-1f3fc-200d-2642-fe0f',
  ':man_lifting_weights_medium_skin_tone:':
    'man-lifting-weights-medium-skin-tone_1f3cb-1f3fd-200d-2642-fe0f',
  ':man_lifting_weights_medium-dark_skin_tone:':
    'man-lifting-weights-medium-dark-skin-tone_1f3cb-1f3fe-200d-2642-fe0f',
  ':man_lifting_weights_dark_skin_tone:':
    'man-lifting-weights-dark-skin-tone_1f3cb-1f3ff-200d-2642-fe0f',
  ':woman_lifting_weights:': 'woman-lifting-weights_1f3cb-fe0f-200d-2640-fe0f',
  ':woman_lifting_weights_light_skin_tone:':
    'woman-lifting-weights-light-skin-tone_1f3cb-1f3fb-200d-2640-fe0f',
  ':woman_lifting_weights_medium-light_skin_tone:':
    'woman-lifting-weights-medium-light-skin-tone_1f3cb-1f3fc-200d-2640-fe0f',
  ':woman_lifting_weights_medium_skin_tone:':
    'woman-lifting-weights-medium-skin-tone_1f3cb-1f3fd-200d-2640-fe0f',
  ':woman_lifting_weights_medium-dark_skin_tone:':
    'woman-lifting-weights-medium-dark-skin-tone_1f3cb-1f3fe-200d-2640-fe0f',
  ':woman_lifting_weights_dark_skin_tone:':
    'woman-lifting-weights-dark-skin-tone_1f3cb-1f3ff-200d-2640-fe0f',
  ':person_biking:': 'person-biking_1f6b4',
  ':person_biking_light_skin_tone:':
    'person-biking-light-skin-tone_1f6b4-1f3fb',
  ':person_biking_medium-light_skin_tone:':
    'person-biking-medium-light-skin-tone_1f6b4-1f3fc',
  ':person_biking_medium_skin_tone:':
    'person-biking-medium-skin-tone_1f6b4-1f3fd',
  ':person_biking_medium-dark_skin_tone:':
    'person-biking-medium-dark-skin-tone_1f6b4-1f3fe',
  ':person_biking_dark_skin_tone:': 'person-biking-dark-skin-tone_1f6b4-1f3ff',
  ':man_biking:': 'man-biking_1f6b4-200d-2642-fe0f',
  ':woman_biking_dark_skin_tone:':
    'woman-biking-dark-skin-tone_1f6b4-1f3ff-200d-2640-fe0f',
  ':person_mountain_biking:': 'person-mountain-biking_1f6b5',
  ':person_mountain_biking_light_skin_tone:':
    'person-mountain-biking-light-skin-tone_1f6b5-1f3fb',
  ':person_mountain_biking_medium-light_skin_tone:':
    'person-mountain-biking-medium-light-skin-tone_1f6b5-1f3fc',
  ':person_mountain_biking_medium_skin_tone:':
    'person-mountain-biking-medium-skin-tone_1f6b5-1f3fd',
  ':person_mountain_biking_medium-dark_skin_tone:':
    'person-mountain-biking-medium-dark-skin-tone_1f6b5-1f3fe',
  ':person_mountain_biking_dark_skin_tone:':
    'person-mountain-biking-dark-skin-tone_1f6b5-1f3ff',
  ':man_mountain_biking:': 'man-mountain-biking_1f6b5-200d-2642-fe0f',
  ':man_mountain_biking_light_skin_tone:':
    'man-mountain-biking-light-skin-tone_1f6b5-1f3fb-200d-2642-fe0f',
  ':man_mountain_biking_medium-light_skin_tone:':
    'man-mountain-biking-medium-light-skin-tone_1f6b5-1f3fc-200d-2642-fe0f',
  ':man_mountain_biking_medium_skin_tone:':
    'man-mountain-biking-medium-skin-tone_1f6b5-1f3fd-200d-2642-fe0f',
  ':man_mountain_biking_medium-dark_skin_tone:':
    'man-mountain-biking-medium-dark-skin-tone_1f6b5-1f3fe-200d-2642-fe0f',
  ':man_mountain_biking_dark_skin_tone:':
    'man-mountain-biking-dark-skin-tone_1f6b5-1f3ff-200d-2642-fe0f',
  ':woman_mountain_biking:': 'woman-mountain-biking_1f6b5-200d-2640-fe0f',
  ':woman_mountain_biking_light_skin_tone:':
    'woman-mountain-biking-light-skin-tone_1f6b5-1f3fb-200d-2640-fe0f',
  ':woman_mountain_biking_medium-light_skin_tone:':
    'woman-mountain-biking-medium-light-skin-tone_1f6b5-1f3fc-200d-2640-fe0f',
  ':man_cartwheeling_medium_skin_tone:':
    'man-cartwheeling-medium-skin-tone_1f938-1f3fd-200d-2642-fe0f',
  ':man_cartwheeling_medium-dark_skin_tone:':
    'man-cartwheeling-medium-dark-skin-tone_1f938-1f3fe-200d-2642-fe0f',
  ':man_cartwheeling_dark_skin_tone:':
    'man-cartwheeling-dark-skin-tone_1f938-1f3ff-200d-2642-fe0f',
  ':woman_cartwheeling_medium-dark_skin_tone:':
    'woman-cartwheeling-medium-dark-skin-tone_1f938-1f3fe-200d-2640-fe0f',
  ':woman_cartwheeling_dark_skin_tone:':
    'woman-cartwheeling-dark-skin-tone_1f938-1f3ff-200d-2640-fe0f',
  ':people_wrestling:': 'people-wrestling_1f93c',
  ':men_wrestling:': 'men-wrestling_1f93c-200d-2642-fe0f',
  ':women_wrestling:': 'women-wrestling_1f93c-200d-2640-fe0f',
  ':person_playing_water_polo:': 'person-playing-water-polo_1f93d',
  ':person_playing_water_polo_light_skin_tone:':
    'person-playing-water-polo-light-skin-tone_1f93d-1f3fb',
  ':person_playing_water_polo_medium-light_skin_tone:':
    'person-playing-water-polo-medium-light-skin-tone_1f93d-1f3fc',
  ':person_playing_water_polo_medium_skin_tone:':
    'person-playing-water-polo-medium-skin-tone_1f93d-1f3fd',
  ':person_playing_water_polo_medium-dark_skin_tone:':
    'person-playing-water-polo-medium-dark-skin-tone_1f93d-1f3fe',
  ':person_playing_water_polo_dark_skin_tone:':
    'person-playing-water-polo-dark-skin-tone_1f93d-1f3ff',
  ':man_playing_water_polo:': 'man-playing-water-polo_1f93d-200d-2642-fe0f',
  ':man_playing_water_polo_light_skin_tone:':
    'man-playing-water-polo-light-skin-tone_1f93d-1f3fb-200d-2642-fe0f',
  ':man_playing_water_polo_medium-light_skin_tone:':
    'man-playing-water-polo-medium-light-skin-tone_1f93d-1f3fc-200d-2642-fe0f',
  ':man_playing_water_polo_medium_skin_tone:':
    'man-playing-water-polo-medium-skin-tone_1f93d-1f3fd-200d-2642-fe0f',
  ':man_playing_water_polo_medium-dark_skin_tone:':
    'man-playing-water-polo-medium-dark-skin-tone_1f93d-1f3fe-200d-2642-fe0f',
  ':man_playing_water_polo_dark_skin_tone:':
    'man-playing-water-polo-dark-skin-tone_1f93d-1f3ff-200d-2642-fe0f',
  ':woman_playing_water_polo:': 'woman-playing-water-polo_1f93d-200d-2640-fe0f',
  ':woman_playing_water_polo_light_skin_tone:':
    'woman-playing-water-polo-light-skin-tone_1f93d-1f3fb-200d-2640-fe0f',
  ':woman_playing_water_polo_medium-light_skin_tone:':
    'woman-playing-water-polo-medium-light-skin-tone_1f93d-1f3fc-200d-2640-fe0f',
  ':woman_playing_water_polo_medium_skin_tone:':
    'woman-playing-water-polo-medium-skin-tone_1f93d-1f3fd-200d-2640-fe0f',
  ':woman_playing_water_polo_medium-dark_skin_tone:':
    'woman-playing-water-polo-medium-dark-skin-tone_1f93d-1f3fe-200d-2640-fe0f',
  ':woman_playing_water_polo_dark_skin_tone:':
    'woman-playing-water-polo-dark-skin-tone_1f93d-1f3ff-200d-2640-fe0f',
  ':person_playing_handball:': 'person-playing-handball_1f93e',
  ':person_playing_handball_light_skin_tone:':
    'person-playing-handball-light-skin-tone_1f93e-1f3fb',
  ':person_playing_handball_medium-light_skin_tone:':
    'person-playing-handball-medium-light-skin-tone_1f93e-1f3fc',
  ':person_playing_handball_medium_skin_tone:':
    'person-playing-handball-medium-skin-tone_1f93e-1f3fd',
  ':person_playing_handball_medium-dark_skin_tone:':
    'person-playing-handball-medium-dark-skin-tone_1f93e-1f3fe',
  ':person_playing_handball_dark_skin_tone:':
    'person-playing-handball-dark-skin-tone_1f93e-1f3ff',
  ':man_playing_handball:': 'man-playing-handball_1f93e-200d-2642-fe0f',
  ':man_playing_handball_light_skin_tone:':
    'man-playing-handball-light-skin-tone_1f93e-1f3fb-200d-2642-fe0f',
  ':man_playing_handball_medium-light_skin_tone:':
    'man-playing-handball-medium-light-skin-tone_1f93e-1f3fc-200d-2642-fe0f',
  ':man_playing_handball_medium_skin_tone:':
    'man-playing-handball-medium-skin-tone_1f93e-1f3fd-200d-2642-fe0f',
  ':man_playing_handball_medium-dark_skin_tone:':
    'man-playing-handball-medium-dark-skin-tone_1f93e-1f3fe-200d-2642-fe0f',
  ':man_playing_handball_dark_skin_tone:':
    'man-playing-handball-dark-skin-tone_1f93e-1f3ff-200d-2642-fe0f',
  ':woman_playing_handball:': 'woman-playing-handball_1f93e-200d-2640-fe0f',
  ':woman_playing_handball_light_skin_tone:':
    'woman-playing-handball-light-skin-tone_1f93e-1f3fb-200d-2640-fe0f',
  ':woman_playing_handball_medium-light_skin_tone:':
    'woman-playing-handball-medium-light-skin-tone_1f93e-1f3fc-200d-2640-fe0f',
  ':woman_playing_handball_medium_skin_tone:':
    'woman-playing-handball-medium-skin-tone_1f93e-1f3fd-200d-2640-fe0f',
  ':woman_playing_handball_medium-dark_skin_tone:':
    'woman-playing-handball-medium-dark-skin-tone_1f93e-1f3fe-200d-2640-fe0f',
  ':woman_playing_handball_dark_skin_tone:':
    'woman-playing-handball-dark-skin-tone_1f93e-1f3ff-200d-2640-fe0f',
  ':person_juggling:': 'person-juggling_1f939',
  ':person_juggling_light_skin_tone:':
    'person-juggling-light-skin-tone_1f939-1f3fb',
  ':person_juggling_medium-light_skin_tone:':
    'person-juggling-medium-light-skin-tone_1f939-1f3fc',
  ':person_juggling_medium_skin_tone:':
    'person-juggling-medium-skin-tone_1f939-1f3fd',
  ':person_juggling_medium-dark_skin_tone:':
    'person-juggling-medium-dark-skin-tone_1f939-1f3fe',
  ':person_juggling_dark_skin_tone:':
    'person-juggling-dark-skin-tone_1f939-1f3ff',
  ':man_juggling:': 'man-juggling_1f939-200d-2642-fe0f',
  ':man_juggling_light_skin_tone:':
    'man-juggling-light-skin-tone_1f939-1f3fb-200d-2642-fe0f',
  ':man_juggling_medium-light_skin_tone:':
    'man-juggling-medium-light-skin-tone_1f939-1f3fc-200d-2642-fe0f',
  ':man_juggling_medium_skin_tone:':
    'man-juggling-medium-skin-tone_1f939-1f3fd-200d-2642-fe0f',
  ':man_juggling_medium-dark_skin_tone:':
    'man-juggling-medium-dark-skin-tone_1f939-1f3fe-200d-2642-fe0f',
  ':man_juggling_dark_skin_tone:':
    'man-juggling-dark-skin-tone_1f939-1f3ff-200d-2642-fe0f',
  ':woman_juggling:': 'woman-juggling_1f939-200d-2640-fe0f',
  ':woman_juggling_light_skin_tone:':
    'woman-juggling-light-skin-tone_1f939-1f3fb-200d-2640-fe0f',
  ':woman_juggling_medium-light_skin_tone:':
    'woman-juggling-medium-light-skin-tone_1f939-1f3fc-200d-2640-fe0f',
  ':woman_juggling_medium_skin_tone:':
    'woman-juggling-medium-skin-tone_1f939-1f3fd-200d-2640-fe0f',
  ':woman_juggling_medium-dark_skin_tone:':
    'woman-juggling-medium-dark-skin-tone_1f939-1f3fe-200d-2640-fe0f',
  ':woman_juggling_dark_skin_tone:':
    'woman-juggling-dark-skin-tone_1f939-1f3ff-200d-2640-fe0f',
  ':person_in_lotus_position:': 'person-in-lotus-position_1f9d8',
  ':person_in_lotus_position_light_skin_tone:':
    'person-in-lotus-position-light-skin-tone_1f9d8-1f3fb',
  ':person_in_lotus_position_medium-light_skin_tone:':
    'person-in-lotus-position-medium-light-skin-tone_1f9d8-1f3fc',
  ':person_in_lotus_position_medium_skin_tone:':
    'person-in-lotus-position-medium-skin-tone_1f9d8-1f3fd',
  ':person_in_lotus_position_medium-dark_skin_tone:':
    'person-in-lotus-position-medium-dark-skin-tone_1f9d8-1f3fe',
  ':person_in_lotus_position_dark_skin_tone:':
    'person-in-lotus-position-dark-skin-tone_1f9d8-1f3ff',
  ':man_in_lotus_position:': 'man-in-lotus-position_1f9d8-200d-2642-fe0f',
  ':man_in_lotus_position_light_skin_tone:':
    'man-in-lotus-position-light-skin-tone_1f9d8-1f3fb-200d-2642-fe0f',
  ':man_in_lotus_position_medium-light_skin_tone:':
    'man-in-lotus-position-medium-light-skin-tone_1f9d8-1f3fc-200d-2642-fe0f',
  ':man_in_lotus_position_medium_skin_tone:':
    'man-in-lotus-position-medium-skin-tone_1f9d8-1f3fd-200d-2642-fe0f',
  ':man_in_lotus_position_medium-dark_skin_tone:':
    'man-in-lotus-position-medium-dark-skin-tone_1f9d8-1f3fe-200d-2642-fe0f',
  ':man_in_lotus_position_dark_skin_tone:':
    'man-in-lotus-position-dark-skin-tone_1f9d8-1f3ff-200d-2642-fe0f',
  ':woman_in_lotus_position:': 'woman-in-lotus-position_1f9d8-200d-2640-fe0f',
  ':woman_in_lotus_position_light_skin_tone:':
    'woman-in-lotus-position-light-skin-tone_1f9d8-1f3fb-200d-2640-fe0f',
  ':woman_in_lotus_position_medium-light_skin_tone:':
    'woman-in-lotus-position-medium-light-skin-tone_1f9d8-1f3fc-200d-2640-fe0f',
  ':woman_in_lotus_position_medium_skin_tone:':
    'woman-in-lotus-position-medium-skin-tone_1f9d8-1f3fd-200d-2640-fe0f',
  ':woman_in_lotus_position_medium-dark_skin_tone:':
    'woman-in-lotus-position-medium-dark-skin-tone_1f9d8-1f3fe-200d-2640-fe0f',
  ':woman_in_lotus_position_dark_skin_tone:':
    'woman-in-lotus-position-dark-skin-tone_1f9d8-1f3ff-200d-2640-fe0f',
  ':person_taking_bath:': 'person-taking-bath_1f6c0',
  ':person_taking_bath_light_skin_tone:':
    'person-taking-bath-light-skin-tone_1f6c0-1f3fb',
  ':person_taking_bath_medium-light_skin_tone:':
    'person-taking-bath-medium-light-skin-tone_1f6c0-1f3fc',
  ':person_taking_bath_medium_skin_tone:':
    'person-taking-bath-medium-skin-tone_1f6c0-1f3fd',
  ':person_taking_bath_medium-dark_skin_tone:':
    'person-taking-bath-medium-dark-skin-tone_1f6c0-1f3fe',
  ':person_taking_bath_dark_skin_tone:':
    'person-taking-bath-dark-skin-tone_1f6c0-1f3ff',
  ':person_in_bed:': 'person-in-bed_1f6cc',
  ':person_in_bed_light_skin_tone:':
    'person-in-bed-light-skin-tone_1f6cc-1f3fb',
  ':person_in_bed_medium-light_skin_tone:':
    'person-in-bed-medium-light-skin-tone_1f6cc-1f3fc',
  ':person_in_bed_medium_skin_tone:':
    'person-in-bed-medium-skin-tone_1f6cc-1f3fd',
  ':person_in_bed_medium-dark_skin_tone:':
    'person-in-bed-medium-dark-skin-tone_1f6cc-1f3fe',
  ':person_in_bed_dark_skin_tone:': 'person-in-bed-dark-skin-tone_1f6cc-1f3ff',
  ':people_holding_hands:': 'people-holding-hands_1f9d1-200d-1f91d-200d-1f9d1',
  ':people_holding_hands_light_skin_tone:':
    'people-holding-hands-light-skin-tone_1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb',
  ':people_holding_hands_medium-light_skin_tone_light_skin_tone:':
    'people-holding-hands-medium-light-skin-tone-light-skin-tone_1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb',
  ':people_holding_hands_medium-light_skin_tone:':
    'people-holding-hands-medium-light-skin-tone_1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc',
  ':people_holding_hands_medium_skin_tone_light_skin_tone:':
    'people-holding-hands-medium-skin-tone-light-skin-tone_1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb',
  ':people_holding_hands_medium_skin_tone_medium-light_skin_tone:':
    'people-holding-hands-medium-skin-tone-medium-light-skin-tone_1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc',
  ':people_holding_hands_medium_skin_tone:':
    'people-holding-hands-medium-skin-tone_1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd',
  ':people_holding_hands_medium-dark_skin_tone_light_skin_tone:':
    'people-holding-hands-medium-dark-skin-tone-light-skin-tone_1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb',
  ':people_holding_hands_medium-dark_skin_tone_medium-light_skin_tone:':
    'people-holding-hands-medium-dark-skin-tone-medium-light-skin-tone_1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc',
  ':people_holding_hands_medium-dark_skin_tone_medium_skin_tone:':
    'people-holding-hands-medium-dark-skin-tone-medium-skin-tone_1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd',
  ':people_holding_hands_medium-dark_skin_tone:':
    'people-holding-hands-medium-dark-skin-tone_1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe',
  ':people_holding_hands_dark_skin_tone_light_skin_tone:':
    'people-holding-hands-dark-skin-tone-light-skin-tone_1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb',
  ':people_holding_hands_dark_skin_tone_medium-light_skin_tone:':
    'people-holding-hands-dark-skin-tone-medium-light-skin-tone_1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc',
  ':people_holding_hands_dark_skin_tone_medium_skin_tone:':
    'people-holding-hands-dark-skin-tone-medium-skin-tone_1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd',
  ':people_holding_hands_dark_skin_tone_medium-dark_skin_tone:':
    'people-holding-hands-dark-skin-tone-medium-dark-skin-tone_1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe',
  ':people_holding_hands_dark_skin_tone:':
    'people-holding-hands-dark-skin-tone_1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff',
  ':women_holding_hands:': 'women-holding-hands_1f46d',
  ':women_holding_hands_light_skin_tone:':
    'women-holding-hands-light-skin-tone_1f46d-1f3fb',
  ':women_holding_hands_medium-light_skin_tone_light_skin_tone:':
    'women-holding-hands-medium-light-skin-tone-light-skin-tone_1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb',
  ':women_holding_hands_medium-light_skin_tone:':
    'women-holding-hands-medium-light-skin-tone_1f46d-1f3fc',
  ':women_holding_hands_medium_skin_tone_light_skin_tone:':
    'women-holding-hands-medium-skin-tone-light-skin-tone_1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb',
  ':women_holding_hands_medium_skin_tone_medium-light_skin_tone:':
    'women-holding-hands-medium-skin-tone-medium-light-skin-tone_1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc',
  ':women_holding_hands_medium_skin_tone:':
    'women-holding-hands-medium-skin-tone_1f46d-1f3fd',
  ':women_holding_hands_medium-dark_skin_tone_light_skin_tone:':
    'women-holding-hands-medium-dark-skin-tone-light-skin-tone_1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb',
  ':women_holding_hands_medium-dark_skin_tone_medium-light_skin_tone:':
    'women-holding-hands-medium-dark-skin-tone-medium-light-skin-tone_1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc',
  ':women_holding_hands_medium-dark_skin_tone_medium_skin_tone:':
    'women-holding-hands-medium-dark-skin-tone-medium-skin-tone_1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd',
  ':women_holding_hands_medium-dark_skin_tone:':
    'women-holding-hands-medium-dark-skin-tone_1f46d-1f3fe',
  ':women_holding_hands_dark_skin_tone_light_skin_tone:':
    'women-holding-hands-dark-skin-tone-light-skin-tone_1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb',
  ':women_holding_hands_dark_skin_tone_medium-light_skin_tone:':
    'women-holding-hands-dark-skin-tone-medium-light-skin-tone_1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc',
  ':women_holding_hands_dark_skin_tone_medium_skin_tone:':
    'women-holding-hands-dark-skin-tone-medium-skin-tone_1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd',
  ':women_holding_hands_dark_skin_tone_medium-dark_skin_tone:':
    'women-holding-hands-dark-skin-tone-medium-dark-skin-tone_1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe',
  ':women_holding_hands_dark_skin_tone:':
    'women-holding-hands-dark-skin-tone_1f46d-1f3ff',
  ':woman_and_man_holding_hands:': 'woman-and-man-holding-hands_1f46b',
  ':woman_and_man_holding_hands_light_skin_tone:':
    'woman-and-man-holding-hands-light-skin-tone_1f46b-1f3fb',
  ':woman_and_man_holding_hands_light_skin_tone_medium-light_skin_tone:':
    'woman-and-man-holding-hands-light-skin-tone-medium-light-skin-tone_1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc',
  ':woman_and_man_holding_hands_light_skin_tone_medium_skin_tone:':
    'woman-and-man-holding-hands-light-skin-tone-medium-skin-tone_1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd',
  ':woman_and_man_holding_hands_light_skin_tone_medium-dark_skin_tone:':
    'woman-and-man-holding-hands-light-skin-tone-medium-dark-skin-tone_1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe',
  ':woman_and_man_holding_hands_light_skin_tone_dark_skin_tone:':
    'woman-and-man-holding-hands-light-skin-tone-dark-skin-tone_1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff',
  ':woman_and_man_holding_hands_medium-light_skin_tone_light_skin_tone:':
    'woman-and-man-holding-hands-medium-light-skin-tone-light-skin-tone_1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb',
  ':woman_and_man_holding_hands_medium-light_skin_tone:':
    'woman-and-man-holding-hands-medium-light-skin-tone_1f46b-1f3fc',
  ':woman_and_man_holding_hands_medium-light_skin_tone_medium_skin_tone:':
    'woman-and-man-holding-hands-medium-light-skin-tone-medium-skin-tone_1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd',
  ':woman_and_man_holding_hands_medium-light_skin_tone_medium-dark_skin_tone:':
    'woman-and-man-holding-hands-medium-light-skin-tone-medium-dark-skin-tone_1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe',
  ':woman_and_man_holding_hands_medium-light_skin_tone_dark_skin_tone:':
    'woman-and-man-holding-hands-medium-light-skin-tone-dark-skin-tone_1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff',
  ':woman_and_man_holding_hands_medium_skin_tone_light_skin_tone:':
    'woman-and-man-holding-hands-medium-skin-tone-light-skin-tone_1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb',
  ':woman_and_man_holding_hands_medium_skin_tone_medium-light_skin_tone:':
    'woman-and-man-holding-hands-medium-skin-tone-medium-light-skin-tone_1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc',
  ':woman_and_man_holding_hands_medium_skin_tone:':
    'woman-and-man-holding-hands-medium-skin-tone_1f46b-1f3fd',
  ':woman_and_man_holding_hands_medium_skin_tone_medium-dark_skin_tone:':
    'woman-and-man-holding-hands-medium-skin-tone-medium-dark-skin-tone_1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe',
  ':woman_and_man_holding_hands_medium_skin_tone_dark_skin_tone:':
    'woman-and-man-holding-hands-medium-skin-tone-dark-skin-tone_1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff',
  ':woman_and_man_holding_hands_medium-dark_skin_tone_light_skin_tone:':
    'woman-and-man-holding-hands-medium-dark-skin-tone-light-skin-tone_1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb',
  ':woman_and_man_holding_hands_medium-dark_skin_tone_medium-light_skin_tone:':
    'woman-and-man-holding-hands-medium-dark-skin-tone-medium-light-skin-tone_1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc',
  ':woman_and_man_holding_hands_medium-dark_skin_tone_medium_skin_tone:':
    'woman-and-man-holding-hands-medium-dark-skin-tone-medium-skin-tone_1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd',
  ':woman_and_man_holding_hands_medium-dark_skin_tone:':
    'woman-and-man-holding-hands-medium-dark-skin-tone_1f46b-1f3fe',
  ':woman_and_man_holding_hands_medium-dark_skin_tone_dark_skin_tone:':
    'woman-and-man-holding-hands-medium-dark-skin-tone-dark-skin-tone_1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff',
  ':woman_and_man_holding_hands_dark_skin_tone_light_skin_tone:':
    'woman-and-man-holding-hands-dark-skin-tone-light-skin-tone_1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb',
  ':woman_and_man_holding_hands_dark_skin_tone_medium-light_skin_tone:':
    'woman-and-man-holding-hands-dark-skin-tone-medium-light-skin-tone_1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc',
  ':woman_and_man_holding_hands_dark_skin_tone_medium_skin_tone:':
    'woman-and-man-holding-hands-dark-skin-tone-medium-skin-tone_1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd',
  ':woman_and_man_holding_hands_dark_skin_tone_medium-dark_skin_tone:':
    'woman-and-man-holding-hands-dark-skin-tone-medium-dark-skin-tone_1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe',
  ':woman_and_man_holding_hands_dark_skin_tone:':
    'woman-and-man-holding-hands-dark-skin-tone_1f46b-1f3ff',
  ':men_holding_hands:': 'men-holding-hands_1f46c',
  ':men_holding_hands_light_skin_tone:':
    'men-holding-hands-light-skin-tone_1f46c-1f3fb',
  ':men_holding_hands_medium-light_skin_tone_light_skin_tone:':
    'men-holding-hands-medium-light-skin-tone-light-skin-tone_1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb',
  ':men_holding_hands_medium-light_skin_tone:':
    'men-holding-hands-medium-light-skin-tone_1f46c-1f3fc',
  ':men_holding_hands_medium_skin_tone_light_skin_tone:':
    'men-holding-hands-medium-skin-tone-light-skin-tone_1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb',
  ':men_holding_hands_medium_skin_tone_medium-light_skin_tone:':
    'men-holding-hands-medium-skin-tone-medium-light-skin-tone_1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc',
  ':men_holding_hands_medium_skin_tone:':
    'men-holding-hands-medium-skin-tone_1f46c-1f3fd',
  ':men_holding_hands_medium-dark_skin_tone_light_skin_tone:':
    'men-holding-hands-medium-dark-skin-tone-light-skin-tone_1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb',
  ':men_holding_hands_medium-dark_skin_tone_medium-light_skin_tone:':
    'men-holding-hands-medium-dark-skin-tone-medium-light-skin-tone_1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc',
  ':men_holding_hands_medium-dark_skin_tone_medium_skin_tone:':
    'men-holding-hands-medium-dark-skin-tone-medium-skin-tone_1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd',
  ':men_holding_hands_medium-dark_skin_tone:':
    'men-holding-hands-medium-dark-skin-tone_1f46c-1f3fe',
  ':men_holding_hands_dark_skin_tone_light_skin_tone:':
    'men-holding-hands-dark-skin-tone-light-skin-tone_1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb',
  ':men_holding_hands_dark_skin_tone_medium-light_skin_tone:':
    'men-holding-hands-dark-skin-tone-medium-light-skin-tone_1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc',
  ':men_holding_hands_dark_skin_tone_medium_skin_tone:':
    'men-holding-hands-dark-skin-tone-medium-skin-tone_1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd',
  ':men_holding_hands_dark_skin_tone_medium-dark_skin_tone:':
    'men-holding-hands-dark-skin-tone-medium-dark-skin-tone_1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe',
  ':men_holding_hands_dark_skin_tone:':
    'men-holding-hands-dark-skin-tone_1f46c-1f3ff',
  ':kiss:': 'kiss_1f48f',
  ':kiss_light_skin_tone:': 'kiss-light-skin-tone_1f48f-1f3fb',
  ':kiss_medium-light_skin_tone:': 'kiss-medium-light-skin-tone_1f48f-1f3fc',
  ':kiss_medium_skin_tone:': 'kiss-medium-skin-tone_1f48f-1f3fd',
  ':kiss_medium-dark_skin_tone:': 'kiss-medium-dark-skin-tone_1f48f-1f3fe',
  ':kiss_dark_skin_tone:': 'kiss-dark-skin-tone_1f48f-1f3ff',
  ':kiss_person_person_light_skin_tone_medium-light_skin_tone:':
    'kiss-person-person-light-skin-tone-medium-light-skin-tone_1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc',
  ':kiss_person_person_light_skin_tone_medium_skin_tone:':
    'kiss-person-person-light-skin-tone-medium-skin-tone_1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd',
  ':kiss_person_person_light_skin_tone_medium-dark_skin_tone:':
    'kiss-person-person-light-skin-tone-medium-dark-skin-tone_1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe',
  ':kiss_person_person_light_skin_tone_dark_skin_tone:':
    'kiss-person-person-light-skin-tone-dark-skin-tone_1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff',
  ':kiss_person_person_medium-light_skin_tone_light_skin_tone:':
    'kiss-person-person-medium-light-skin-tone-light-skin-tone_1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb',
  ':kiss_person_person_medium-light_skin_tone_medium_skin_tone:':
    'kiss-person-person-medium-light-skin-tone-medium-skin-tone_1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd',
  ':kiss_person_person_medium-light_skin_tone_medium-dark_skin_tone:':
    'kiss-person-person-medium-light-skin-tone-medium-dark-skin-tone_1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe',
  ':kiss_person_person_medium-light_skin_tone_dark_skin_tone:':
    'kiss-person-person-medium-light-skin-tone-dark-skin-tone_1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff',
  ':kiss_person_person_medium_skin_tone_light_skin_tone:':
    'kiss-person-person-medium-skin-tone-light-skin-tone_1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb',
  ':kiss_person_person_medium_skin_tone_medium-light_skin_tone:':
    'kiss-person-person-medium-skin-tone-medium-light-skin-tone_1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc',
  ':kiss_person_person_medium_skin_tone_medium-dark_skin_tone:':
    'kiss-person-person-medium-skin-tone-medium-dark-skin-tone_1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe',
  ':kiss_person_person_medium_skin_tone_dark_skin_tone:':
    'kiss-person-person-medium-skin-tone-dark-skin-tone_1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff',
  ':kiss_person_person_medium-dark_skin_tone_light_skin_tone:':
    'kiss-person-person-medium-dark-skin-tone-light-skin-tone_1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb',
  ':kiss_person_person_medium-dark_skin_tone_medium-light_skin_tone:':
    'kiss-person-person-medium-dark-skin-tone-medium-light-skin-tone_1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc',
  ':kiss_person_person_medium-dark_skin_tone_medium_skin_tone:':
    'kiss-person-person-medium-dark-skin-tone-medium-skin-tone_1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd',
  ':kiss_person_person_medium-dark_skin_tone_dark_skin_tone:':
    'kiss-person-person-medium-dark-skin-tone-dark-skin-tone_1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff',
  ':kiss_person_person_dark_skin_tone_light_skin_tone:':
    'kiss-person-person-dark-skin-tone-light-skin-tone_1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb',
  ':kiss_person_person_dark_skin_tone_medium-light_skin_tone:':
    'kiss-person-person-dark-skin-tone-medium-light-skin-tone_1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc',
  ':kiss_person_person_dark_skin_tone_medium_skin_tone:':
    'kiss-person-person-dark-skin-tone-medium-skin-tone_1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd',
  ':kiss_person_person_dark_skin_tone_medium-dark_skin_tone:':
    'kiss-person-person-dark-skin-tone-medium-dark-skin-tone_1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe',
  ':kiss_woman_man:':
    'kiss-woman-man_1f469-200d-2764-fe0f-200d-1f48b-200d-1f468',
  ':kiss_woman_man_light_skin_tone:':
    'kiss-woman-man-light-skin-tone_1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
  ':kiss_man_man:': 'kiss-man-man_1f468-200d-2764-fe0f-200d-1f48b-200d-1f468',
  ':kiss_man_man_light_skin_tone:':
    'kiss-man-man-light-skin-tone_1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
  ':kiss_woman_woman:':
    'kiss-woman-woman_1f469-200d-2764-fe0f-200d-1f48b-200d-1f469',
  ':kiss_woman_woman_dark_skin_tone:':
    'kiss-woman-woman-dark-skin-tone_1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff',
  ':couple_with_heart:': 'couple-with-heart_1f491',
  ':couple_with_heart_medium-light_skin_tone:':
    'couple-with-heart-medium-light-skin-tone_1f491-1f3fc',
  ':couple_with_heart_medium_skin_tone:':
    'couple-with-heart-medium-skin-tone_1f491-1f3fd',
  ':couple_with_heart_medium-dark_skin_tone:':
    'couple-with-heart-medium-dark-skin-tone_1f491-1f3fe',
  ':couple_with_heart_dark_skin_tone:':
    'couple-with-heart-dark-skin-tone_1f491-1f3ff',
  ':couple_with_heart_woman_man:':
    'couple-with-heart-woman-man_1f469-200d-2764-fe0f-200d-1f468',
  ':couple_with_heart_man_man:':
    'couple-with-heart-man-man_1f468-200d-2764-fe0f-200d-1f468',
  ':couple_with_heart_woman_woman:':
    'couple-with-heart-woman-woman_1f469-200d-2764-fe0f-200d-1f469',
  ':family:': 'family_1f46a',
  ':family_man_woman_boy:': 'family-man-woman-boy_1f468-200d-1f469-200d-1f466',
  ':family_man_woman_girl:':
    'family-man-woman-girl_1f468-200d-1f469-200d-1f467',
  ':family_man_woman_girl_boy:':
    'family-man-woman-girl-boy_1f468-200d-1f469-200d-1f467-200d-1f466',
  ':family_man_woman_boy_boy:':
    'family-man-woman-boy-boy_1f468-200d-1f469-200d-1f466-200d-1f466',
  ':family_man_woman_girl_girl:':
    'family-man-woman-girl-girl_1f468-200d-1f469-200d-1f467-200d-1f467',
  ':family_man_man_boy:': 'family-man-man-boy_1f468-200d-1f468-200d-1f466',
  ':family_man_man_girl:': 'family-man-man-girl_1f468-200d-1f468-200d-1f467',
  ':family_man_man_girl_boy:':
    'family-man-man-girl-boy_1f468-200d-1f468-200d-1f467-200d-1f466',
  ':family_man_man_boy_boy:':
    'family-man-man-boy-boy_1f468-200d-1f468-200d-1f466-200d-1f466',
  ':family_man_man_girl_girl:':
    'family-man-man-girl-girl_1f468-200d-1f468-200d-1f467-200d-1f467',
  ':family_woman_woman_boy:':
    'family-woman-woman-boy_1f469-200d-1f469-200d-1f466',
  ':family_woman_woman_girl:':
    'family-woman-woman-girl_1f469-200d-1f469-200d-1f467',
  ':family_woman_woman_girl_boy:':
    'family-woman-woman-girl-boy_1f469-200d-1f469-200d-1f467-200d-1f466',
  ':family_woman_woman_boy_boy:':
    'family-woman-woman-boy-boy_1f469-200d-1f469-200d-1f466-200d-1f466',
  ':family_woman_woman_girl_girl:':
    'family-woman-woman-girl-girl_1f469-200d-1f469-200d-1f467-200d-1f467',
  ':family_man_boy:': 'family-man-boy_1f468-200d-1f466',
  ':family_man_boy_boy:': 'family-man-boy-boy_1f468-200d-1f466-200d-1f466',
  ':family_man_girl:': 'family-man-girl_1f468-200d-1f467',
  ':family_man_girl_boy:': 'family-man-girl-boy_1f468-200d-1f467-200d-1f466',
  ':family_man_girl_girl:': 'family-man-girl-girl_1f468-200d-1f467-200d-1f467',
  ':family_woman_boy:': 'family-woman-boy_1f469-200d-1f466',
  ':family_woman_boy_boy:': 'family-woman-boy-boy_1f469-200d-1f466-200d-1f466',
  ':family_woman_girl:': 'family-woman-girl_1f469-200d-1f467',
  ':family_woman_girl_boy:':
    'family-woman-girl-boy_1f469-200d-1f467-200d-1f466',
  ':family_woman_girl_girl:':
    'family-woman-girl-girl_1f469-200d-1f467-200d-1f467',
  ':speaking_head:': 'speaking-head_1f5e3-fe0f',
  ':bust_in_silhouette:': 'bust-in-silhouette_1f464',
  ':busts_in_silhouette:': 'busts-in-silhouette_1f465',
  ':people_hugging:': 'people-hugging_1fac2',
  ':footprints:': 'footprints_1f463',
  ':light_skin_tone:': 'light-skin-tone_1f3fb',
  ':medium-light_skin_tone:': 'medium-light-skin-tone_1f3fc',
  ':medium_skin_tone:': 'medium-skin-tone_1f3fd',
  ':medium-dark_skin_tone:': 'medium-dark-skin-tone_1f3fe',
  ':dark_skin_tone:': 'dark-skin-tone_1f3ff',
  ':monkey_face:': 'monkey-face_1f435',
  ':monkey:': 'monkey_1f412',
  ':gorilla:': 'gorilla_1f98d',
  ':orangutan:': 'orangutan_1f9a7',
  ':dog_face:': 'dog-face_1f436',
  ':dog:': 'dog_1f415',
  ':guide_dog:': 'guide-dog_1f9ae',
  ':service_dog:': 'service-dog_1f415-200d-1f9ba',
  ':poodle:': 'poodle_1f429',
  ':wolf:': 'wolf_1f43a',
  ':fox:': 'fox_1f98a',
  ':raccoon:': 'raccoon_1f99d',
  ':cat_face:': 'cat-face_1f431',
  ':cat:': 'cat_1f408',
  ':black_cat:': 'black-cat_1f408-200d-2b1b',
  ':lion:': 'lion_1f981',
  ':tiger_face:': 'tiger-face_1f42f',
  ':tiger:': 'tiger_1f405',
  ':leopard:': 'leopard_1f406',
  ':horse_face:': 'horse-face_1f434',
  ':horse:': 'horse_1f40e',
  ':unicorn:': 'unicorn_1f984',
  ':zebra:': 'zebra_1f993',
  ':deer:': 'deer_1f98c',
  ':bison:': 'bison_1f9ac',
  ':cow_face:': 'cow-face_1f42e',
  ':ox:': 'ox_1f402',
  ':water_buffalo:': 'water-buffalo_1f403',
  ':cow:': 'cow_1f404',
  ':pig_face:': 'pig-face_1f437',
  ':pig:': 'pig_1f416',
  ':boar:': 'boar_1f417',
  ':pig_nose:': 'pig-nose_1f43d',
  ':ram:': 'ram_1f40f',
  ':ewe:': 'ewe_1f411',
  ':goat:': 'goat_1f410',
  ':camel:': 'camel_1f42a',
  ':two-hump_camel:': 'two-hump-camel_1f42b',
  ':llama:': 'llama_1f999',
  ':giraffe:': 'giraffe_1f992',
  ':elephant:': 'elephant_1f418',
  ':mammoth:': 'mammoth_1f9a3',
  ':rhinoceros:': 'rhinoceros_1f98f',
  ':hippopotamus:': 'hippopotamus_1f99b',
  ':mouse_face:': 'mouse-face_1f42d',
  ':mouse:': 'mouse_1f401',
  ':rat:': 'rat_1f400',
  ':hamster:': 'hamster_1f439',
  ':rabbit_face:': 'rabbit-face_1f430',
  ':rabbit:': 'rabbit_1f407',
  ':chipmunk:': 'chipmunk_1f43f-fe0f',
  ':beaver:': 'beaver_1f9ab',
  ':hedgehog:': 'hedgehog_1f994',
  ':bat:': 'bat_1f987',
  ':bear:': 'bear_1f43b',
  ':polar_bear:': 'polar-bear_1f43b-200d-2744-fe0f',
  ':koala:': 'koala_1f428',
  ':panda:': 'panda_1f43c',
  ':sloth:': 'sloth_1f9a5',
  ':otter:': 'otter_1f9a6',
  ':skunk:': 'skunk_1f9a8',
  ':kangaroo:': 'kangaroo_1f998',
  ':badger:': 'badger_1f9a1',
  ':paw_prints:': 'paw-prints_1f43e',
  ':turkey:': 'turkey_1f983',
  ':chicken:': 'chicken_1f414',
  ':rooster:': 'rooster_1f413',
  ':hatching_chick:': 'hatching-chick_1f423',
  ':baby_chick:': 'baby-chick_1f424',
  ':front-facing_baby_chick:': 'front-facing-baby-chick_1f425',
  ':bird:': 'bird_1f426',
  ':penguin:': 'penguin_1f427',
  ':dove:': 'dove_1f54a-fe0f',
  ':eagle:': 'eagle_1f985',
  ':duck:': 'duck_1f986',
  ':swan:': 'swan_1f9a2',
  ':owl:': 'owl_1f989',
  ':dodo:': 'dodo_1f9a4',
  ':feather:': 'feather_1fab6',
  ':flamingo:': 'flamingo_1f9a9',
  ':peacock:': 'peacock_1f99a',
  ':parrot:': 'parrot_1f99c',
  ':frog:': 'frog_1f438',
  ':crocodile:': 'crocodile_1f40a',
  ':turtle:': 'turtle_1f422',
  ':lizard:': 'lizard_1f98e',
  ':snake:': 'snake_1f40d',
  ':dragon_face:': 'dragon-face_1f432',
  ':dragon:': 'dragon_1f409',
  ':sauropod:': 'sauropod_1f995',
  ':T-Rex:': 't-rex_1f996',
  ':spouting_whale:': 'spouting-whale_1f433',
  ':whale:': 'whale_1f40b',
  ':dolphin:': 'dolphin_1f42c',
  ':seal:': 'seal_1f9ad',
  ':fish:': 'fish_1f41f',
  ':tropical_fish:': 'tropical-fish_1f420',
  ':blowfish:': 'blowfish_1f421',
  ':shark:': 'shark_1f988',
  ':octopus:': 'octopus_1f419',
  ':spiral_shell:': 'spiral-shell_1f41a',
  ':coral:': 'coral_1fab8',
  ':snail:': 'snail_1f40c',
  ':butterfly:': 'butterfly_1f98b',
  ':bug:': 'bug_1f41b',
  ':ant:': 'ant_1f41c',
  ':honeybee:': 'honeybee_1f41d',
  ':beetle:': 'beetle_1fab2',
  ':lady_beetle:': 'lady-beetle_1f41e',
  ':cricket:': 'cricket_1f997',
  ':cockroach:': 'cockroach_1fab3',
  ':spider:': 'spider_1f577-fe0f',
  ':spider_web:': 'spider-web_1f578-fe0f',
  ':scorpion:': 'scorpion_1f982',
  ':mosquito:': 'mosquito_1f99f',
  ':fly:': 'fly_1fab0',
  ':worm:': 'worm_1fab1',
  ':microbe:': 'microbe_1f9a0',
  ':bouquet:': 'bouquet_1f490',
  ':cherry_blossom:': 'cherry-blossom_1f338',
  ':white_flower:': 'white-flower_1f4ae',
  ':lotus:': 'lotus_1fab7',
  ':rosette:': 'rosette_1f3f5-fe0f',
  ':rose:': 'rose_1f339',
  ':wilted_flower:': 'wilted-flower_1f940',
  ':hibiscus:': 'hibiscus_1f33a',
  ':sunflower:': 'sunflower_1f33b',
  ':blossom:': 'blossom_1f33c',
  ':tulip:': 'tulip_1f337',
  ':seedling:': 'seedling_1f331',
  ':potted_plant:': 'potted-plant_1fab4',
  ':evergreen_tree:': 'evergreen-tree_1f332',
  ':deciduous_tree:': 'deciduous-tree_1f333',
  ':palm_tree:': 'palm-tree_1f334',
  ':cactus:': 'cactus_1f335',
  ':sheaf_of_rice:': 'sheaf-of-rice_1f33e',
  ':herb:': 'herb_1f33f',
  ':shamrock:': 'shamrock_2618-fe0f',
  ':four_leaf_clover:': 'four-leaf-clover_1f340',
  ':maple_leaf:': 'maple-leaf_1f341',
  ':fallen_leaf:': 'fallen-leaf_1f342',
  ':leaf_fluttering_in_wind:': 'leaf-fluttering-in-wind_1f343',
  ':empty_nest:': 'empty-nest_1fab9',
  ':nest_with_eggs:': 'nest-with-eggs_1faba',
  ':mushroom:': 'mushroom_1f344',
  ':grapes:': 'grapes_1f347',
  ':melon:': 'melon_1f348',
  ':watermelon:': 'watermelon_1f349',
  ':tangerine:': 'tangerine_1f34a',
  ':lemon:': 'lemon_1f34b',
  ':banana:': 'banana_1f34c',
  ':pineapple:': 'pineapple_1f34d',
  ':mango:': 'mango_1f96d',
  ':red_apple:': 'red-apple_1f34e',
  ':green_apple:': 'green-apple_1f34f',
  ':pear:': 'pear_1f350',
  ':peach:': 'peach_1f351',
  ':cherries:': 'cherries_1f352',
  ':strawberry:': 'strawberry_1f353',
  ':blueberries:': 'blueberries_1fad0',
  ':kiwi_fruit:': 'kiwi-fruit_1f95d',
  ':tomato:': 'tomato_1f345',
  ':olive:': 'olive_1fad2',
  ':coconut:': 'coconut_1f965',
  ':avocado:': 'avocado_1f951',
  ':eggplant:': 'eggplant_1f346',
  ':potato:': 'potato_1f954',
  ':carrot:': 'carrot_1f955',
  ':ear_of_corn:': 'ear-of-corn_1f33d',
  ':hot_pepper:': 'hot-pepper_1f336-fe0f',
  ':bell_pepper:': 'bell-pepper_1fad1',
  ':cucumber:': 'cucumber_1f952',
  ':leafy_green:': 'leafy-green_1f96c',
  ':broccoli:': 'broccoli_1f966',
  ':garlic:': 'garlic_1f9c4',
  ':onion:': 'onion_1f9c5',
  ':peanuts:': 'peanuts_1f95c',
  ':beans:': 'beans_1fad8',
  ':chestnut:': 'chestnut_1f330',
  ':bread:': 'bread_1f35e',
  ':croissant:': 'croissant_1f950',
  ':baguette_bread:': 'baguette-bread_1f956',
  ':flatbread:': 'flatbread_1fad3',
  ':pretzel:': 'pretzel_1f968',
  ':bagel:': 'bagel_1f96f',
  ':pancakes:': 'pancakes_1f95e',
  ':waffle:': 'waffle_1f9c7',
  ':cheese_wedge:': 'cheese-wedge_1f9c0',
  ':meat_on_bone:': 'meat-on-bone_1f356',
  ':poultry_leg:': 'poultry-leg_1f357',
  ':cut_of_meat:': 'cut-of-meat_1f969',
  ':bacon:': 'bacon_1f953',
  ':hamburger:': 'hamburger_1f354',
  ':french_fries:': 'french-fries_1f35f',
  ':pizza:': 'pizza_1f355',
  ':hot_dog:': 'hot-dog_1f32d',
  ':sandwich:': 'sandwich_1f96a',
  ':taco:': 'taco_1f32e',
  ':burrito:': 'burrito_1f32f',
  ':tamale:': 'tamale_1fad4',
  ':stuffed_flatbread:': 'stuffed-flatbread_1f959',
  ':falafel:': 'falafel_1f9c6',
  ':egg:': 'egg_1f95a',
  ':cooking:': 'cooking_1f373',
  ':shallow_pan_of_food:': 'shallow-pan-of-food_1f958',
  ':pot_of_food:': 'pot-of-food_1f372',
  ':fondue:': 'fondue_1fad5',
  ':bowl_with_spoon:': 'bowl-with-spoon_1f963',
  ':green_salad:': 'green-salad_1f957',
  ':popcorn:': 'popcorn_1f37f',
  ':butter:': 'butter_1f9c8',
  ':salt:': 'salt_1f9c2',
  ':canned_food:': 'canned-food_1f96b',
  ':bento_box:': 'bento-box_1f371',
  ':rice_cracker:': 'rice-cracker_1f358',
  ':rice_ball:': 'rice-ball_1f359',
  ':cooked_rice:': 'cooked-rice_1f35a',
  ':curry_rice:': 'curry-rice_1f35b',
  ':steaming_bowl:': 'steaming-bowl_1f35c',
  ':spaghetti:': 'spaghetti_1f35d',
  ':roasted_sweet_potato:': 'roasted-sweet-potato_1f360',
  ':oden:': 'oden_1f362',
  ':sushi:': 'sushi_1f363',
  ':fried_shrimp:': 'fried-shrimp_1f364',
  ':fish_cake_with_swirl:': 'fish-cake-with-swirl_1f365',
  ':moon_cake:': 'moon-cake_1f96e',
  ':dango:': 'dango_1f361',
  ':dumpling:': 'dumpling_1f95f',
  ':fortune_cookie:': 'fortune-cookie_1f960',
  ':takeout_box:': 'takeout-box_1f961',
  ':crab:': 'crab_1f980',
  ':lobster:': 'lobster_1f99e',
  ':shrimp:': 'shrimp_1f990',
  ':squid:': 'squid_1f991',
  ':oyster:': 'oyster_1f9aa',
  ':soft_ice_cream:': 'soft-ice-cream_1f366',
  ':shaved_ice:': 'shaved-ice_1f367',
  ':ice_cream:': 'ice-cream_1f368',
  ':doughnut:': 'doughnut_1f369',
  ':cookie:': 'cookie_1f36a',
  ':birthday_cake:': 'birthday-cake_1f382',
  ':shortcake:': 'shortcake_1f370',
  ':cupcake:': 'cupcake_1f9c1',
  ':pie:': 'pie_1f967',
  ':chocolate_bar:': 'chocolate-bar_1f36b',
  ':candy:': 'candy_1f36c',
  ':lollipop:': 'lollipop_1f36d',
  ':custard:': 'custard_1f36e',
  ':honey_pot:': 'honey-pot_1f36f',
  ':baby_bottle:': 'baby-bottle_1f37c',
  ':glass_of_milk:': 'glass-of-milk_1f95b',
  ':hot_beverage:': 'hot-beverage_2615',
  ':teapot:': 'teapot_1fad6',
  ':teacup_without_handle:': 'teacup-without-handle_1f375',
  ':sake:': 'sake_1f376',
  ':bottle_with_popping_cork:': 'bottle-with-popping-cork_1f37e',
  ':wine_glass:': 'wine-glass_1f377',
  ':cocktail_glass:': 'cocktail-glass_1f378',
  ':tropical_drink:': 'tropical-drink_1f379',
  ':beer_mug:': 'beer-mug_1f37a',
  ':clinking_beer_mugs:': 'clinking-beer-mugs_1f37b',
  ':clinking_glasses:': 'clinking-glasses_1f942',
  ':tumbler_glass:': 'tumbler-glass_1f943',
  ':pouring_liquid:': 'pouring-liquid_1fad7',
  ':cup_with_straw:': 'cup-with-straw_1f964',
  ':bubble_tea:': 'bubble-tea_1f9cb',
  ':beverage_box:': 'beverage-box_1f9c3',
  ':mate:': 'mate_1f9c9',
  ':ice:': 'ice_1f9ca',
  ':chopsticks:': 'chopsticks_1f962',
  ':fork_and_knife_with_plate:': 'fork-and-knife-with-plate_1f37d-fe0f',
  ':fork_and_knife:': 'fork-and-knife_1f374',
  ':spoon:': 'spoon_1f944',
  ':kitchen_knife:': 'kitchen-knife_1f52a',
  ':jar:': 'jar_1fad9',
  ':amphora:': 'amphora_1f3fa',
  ':globe_showing_Europe-Africa:': 'globe-showing-europe-africa_1f30d',
  ':globe_showing_Americas:': 'globe-showing-americas_1f30e',
  ':globe_showing_Asia-Australia:': 'globe-showing-asia-australia_1f30f',
  ':globe_with_meridians:': 'globe-with-meridians_1f310',
  ':world_map:': 'world-map_1f5fa-fe0f',
  ':map_of_Japan:': 'map-of-japan_1f5fe',
  ':compass:': 'compass_1f9ed',
  ':snow-capped_mountain:': 'snow-capped-mountain_1f3d4-fe0f',
  ':mountain:': 'mountain_26f0-fe0f',
  ':volcano:': 'volcano_1f30b',
  ':mount_fuji:': 'mount-fuji_1f5fb',
  ':camping:': 'camping_1f3d5-fe0f',
  ':beach_with_umbrella:': 'beach-with-umbrella_1f3d6-fe0f',
  ':desert:': 'desert_1f3dc-fe0f',
  ':desert_island:': 'desert-island_1f3dd-fe0f',
  ':national_park:': 'national-park_1f3de-fe0f',
  ':stadium:': 'stadium_1f3df-fe0f',
  ':classical_building:': 'classical-building_1f3db-fe0f',
  ':building_construction:': 'building-construction_1f3d7-fe0f',
  ':brick:': 'brick_1f9f1',
  ':rock:': 'rock_1faa8',
  ':wood:': 'wood_1fab5',
  ':hut:': 'hut_1f6d6',
  ':houses:': 'houses_1f3d8-fe0f',
  ':derelict_house:': 'derelict-house_1f3da-fe0f',
  ':house:': 'house_1f3e0',
  ':house_with_garden:': 'house-with-garden_1f3e1',
  ':office_building:': 'office-building_1f3e2',
  ':Japanese_post_office:': 'japanese-post-office_1f3e3',
  ':post_office:': 'post-office_1f3e4',
  ':hospital:': 'hospital_1f3e5',
  ':bank:': 'bank_1f3e6',
  ':hotel:': 'hotel_1f3e8',
  ':love_hotel:': 'love-hotel_1f3e9',
  ':convenience_store:': 'convenience-store_1f3ea',
  ':school:': 'school_1f3eb',
  ':department_store:': 'department-store_1f3ec',
  ':factory:': 'factory_1f3ed',
  ':Japanese_castle:': 'japanese-castle_1f3ef',
  ':castle:': 'castle_1f3f0',
  ':wedding:': 'wedding_1f492',
  ':Tokyo_tower:': 'tokyo-tower_1f5fc',
  ':Statue_of_Liberty:': 'statue-of-liberty_1f5fd',
  ':church:': 'church_26ea',
  ':mosque:': 'mosque_1f54c',
  ':hindu_temple:': 'hindu-temple_1f6d5',
  ':synagogue:': 'synagogue_1f54d',
  ':shinto_shrine:': 'shinto-shrine_26e9-fe0f',
  ':kaaba:': 'kaaba_1f54b',
  ':fountain:': 'fountain_26f2',
  ':tent:': 'tent_26fa',
  ':foggy:': 'foggy_1f301',
  ':night_with_stars:': 'night-with-stars_1f303',
  ':cityscape:': 'cityscape_1f3d9-fe0f',
  ':sunrise_over_mountains:': 'sunrise-over-mountains_1f304',
  ':sunrise:': 'sunrise_1f305',
  ':cityscape_at_dusk:': 'cityscape-at-dusk_1f306',
  ':sunset:': 'sunset_1f307',
  ':bridge_at_night:': 'bridge-at-night_1f309',
  ':hot_springs:': 'hot-springs_2668-fe0f',
  ':carousel_horse:': 'carousel-horse_1f3a0',
  ':playground_slide:': 'playground-slide_1f6dd',
  ':ferris_wheel:': 'ferris-wheel_1f3a1',
  ':roller_coaster:': 'roller-coaster_1f3a2',
  ':barber_pole:': 'barber-pole_1f488',
  ':circus_tent:': 'circus-tent_1f3aa',
  ':locomotive:': 'locomotive_1f682',
  ':railway_car:': 'railway-car_1f683',
  ':high-speed_train:': 'high-speed-train_1f684',
  ':bullet_train:': 'bullet-train_1f685',
  ':train:': 'train_1f686',
  ':metro:': 'metro_1f687',
  ':light_rail:': 'light-rail_1f688',
  ':station:': 'station_1f689',
  ':tram:': 'tram_1f68a',
  ':monorail:': 'monorail_1f69d',
  ':mountain_railway:': 'mountain-railway_1f69e',
  ':tram_car:': 'tram-car_1f68b',
  ':bus:': 'bus_1f68c',
  ':oncoming_bus:': 'oncoming-bus_1f68d',
  ':trolleybus:': 'trolleybus_1f68e',
  ':minibus:': 'minibus_1f690',
  ':ambulance:': 'ambulance_1f691',
  ':fire_engine:': 'fire-engine_1f692',
  ':police_car:': 'police-car_1f693',
  ':oncoming_police_car:': 'oncoming-police-car_1f694',
  ':taxi:': 'taxi_1f695',
  ':oncoming_taxi:': 'oncoming-taxi_1f696',
  ':automobile:': 'automobile_1f697',
  ':oncoming_automobile:': 'oncoming-automobile_1f698',
  ':sport_utility_vehicle:': 'sport-utility-vehicle_1f699',
  ':pickup_truck:': 'pickup-truck_1f6fb',
  ':delivery_truck:': 'delivery-truck_1f69a',
  ':articulated_lorry:': 'articulated-lorry_1f69b',
  ':tractor:': 'tractor_1f69c',
  ':racing_car:': 'racing-car_1f3ce-fe0f',
  ':motorcycle:': 'motorcycle_1f3cd-fe0f',
  ':motor_scooter:': 'motor-scooter_1f6f5',
  ':manual_wheelchair:': 'manual-wheelchair_1f9bd',
  ':motorized_wheelchair:': 'motorized-wheelchair_1f9bc',
  ':auto_rickshaw:': 'auto-rickshaw_1f6fa',
  ':bicycle:': 'bicycle_1f6b2',
  ':kick_scooter:': 'kick-scooter_1f6f4',
  ':skateboard:': 'skateboard_1f6f9',
  ':roller_skate:': 'roller-skate_1f6fc',
  ':bus_stop:': 'bus-stop_1f68f',
  ':motorway:': 'motorway_1f6e3-fe0f',
  ':railway_track:': 'railway-track_1f6e4-fe0f',
  ':oil_drum:': 'oil-drum_1f6e2-fe0f',
  ':fuel_pump:': 'fuel-pump_26fd',
  ':wheel:': 'wheel_1f6de',
  ':police_car_light:': 'police-car-light_1f6a8',
  ':horizontal_traffic_light:': 'horizontal-traffic-light_1f6a5',
  ':vertical_traffic_light:': 'vertical-traffic-light_1f6a6',
  ':stop_sign:': 'stop-sign_1f6d1',
  ':construction:': 'construction_1f6a7',
  ':anchor:': 'anchor_2693',
  ':ring_buoy:': 'ring-buoy_1f6df',
  ':sailboat:': 'sailboat_26f5',
  ':canoe:': 'canoe_1f6f6',
  ':speedboat:': 'speedboat_1f6a4',
  ':passenger_ship:': 'passenger-ship_1f6f3-fe0f',
  ':ferry:': 'ferry_26f4-fe0f',
  ':motor_boat:': 'motor-boat_1f6e5-fe0f',
  ':ship:': 'ship_1f6a2',
  ':airplane:': 'airplane_2708-fe0f',
  ':small_airplane:': 'small-airplane_1f6e9-fe0f',
  ':airplane_departure:': 'airplane-departure_1f6eb',
  ':airplane_arrival:': 'airplane-arrival_1f6ec',
  ':parachute:': 'parachute_1fa82',
  ':seat:': 'seat_1f4ba',
  ':helicopter:': 'helicopter_1f681',
  ':suspension_railway:': 'suspension-railway_1f69f',
  ':mountain_cableway:': 'mountain-cableway_1f6a0',
  ':aerial_tramway:': 'aerial-tramway_1f6a1',
  ':satellite:': 'satellite_1f6f0-fe0f',
  ':rocket:': 'rocket_1f680',
  ':flying_saucer:': 'flying-saucer_1f6f8',
  ':bellhop_bell:': 'bellhop-bell_1f6ce-fe0f',
  ':luggage:': 'luggage_1f9f3',
  ':hourglass_done:': 'hourglass-done_231b',
  ':hourglass_not_done:': 'hourglass-not-done_23f3',
  ':watch:': 'watch_231a',
  ':alarm_clock:': 'alarm-clock_23f0',
  ':stopwatch:': 'stopwatch_23f1-fe0f',
  ':timer_clock:': 'timer-clock_23f2-fe0f',
  ':mantelpiece_clock:': 'mantelpiece-clock_1f570-fe0f',
  ':twelve_o’clock:': 'twelve-oclock_1f55b',
  ':twelve-thirty:': 'twelve-thirty_1f567',
  ':one_o’clock:': 'one-oclock_1f550',
  ':one-thirty:': 'one-thirty_1f55c',
  ':two_o’clock:': 'two-oclock_1f551',
  ':two-thirty:': 'two-thirty_1f55d',
  ':three_o’clock:': 'three-oclock_1f552',
  ':three-thirty:': 'three-thirty_1f55e',
  ':four_o’clock:': 'four-oclock_1f553',
  ':four-thirty:': 'four-thirty_1f55f',
  ':five_o’clock:': 'five-oclock_1f554',
  ':five-thirty:': 'five-thirty_1f560',
  ':six_o’clock:': 'six-oclock_1f555',
  ':six-thirty:': 'six-thirty_1f561',
  ':seven_o’clock:': 'seven-oclock_1f556',
  ':seven-thirty:': 'seven-thirty_1f562',
  ':eight_o’clock:': 'eight-oclock_1f557',
  ':eight-thirty:': 'eight-thirty_1f563',
  ':nine_o’clock:': 'nine-oclock_1f558',
  ':nine-thirty:': 'nine-thirty_1f564',
  ':ten_o’clock:': 'ten-oclock_1f559',
  ':ten-thirty:': 'ten-thirty_1f565',
  ':eleven_o’clock:': 'eleven-oclock_1f55a',
  ':eleven-thirty:': 'eleven-thirty_1f566',
  ':new_moon:': 'new-moon_1f311',
  ':waxing_crescent_moon:': 'waxing-crescent-moon_1f312',
  ':first_quarter_moon:': 'first-quarter-moon_1f313',
  ':waxing_gibbous_moon:': 'waxing-gibbous-moon_1f314',
  ':full_moon:': 'full-moon_1f315',
  ':waning_gibbous_moon:': 'waning-gibbous-moon_1f316',
  ':last_quarter_moon:': 'last-quarter-moon_1f317',
  ':waning_crescent_moon:': 'waning-crescent-moon_1f318',
  ':crescent_moon:': 'crescent-moon_1f319',
  ':new_moon_face:': 'new-moon-face_1f31a',
  ':first_quarter_moon_face:': 'first-quarter-moon-face_1f31b',
  ':last_quarter_moon_face:': 'last-quarter-moon-face_1f31c',
  ':thermometer:': 'thermometer_1f321-fe0f',
  ':sun:': 'sun_2600-fe0f',
  ':full_moon_face:': 'full-moon-face_1f31d',
  ':sun_with_face:': 'sun-with-face_1f31e',
  ':ringed_planet:': 'ringed-planet_1fa90',
  ':star:': 'star_2b50',
  ':glowing_star:': 'glowing-star_1f31f',
  ':shooting_star:': 'shooting-star_1f320',
  ':milky_way:': 'milky-way_1f30c',
  ':cloud:': 'cloud_2601-fe0f',
  ':sun_behind_cloud:': 'sun-behind-cloud_26c5',
  ':cloud_with_lightning_and_rain:': 'cloud-with-lightning-and-rain_26c8-fe0f',
  ':sun_behind_small_cloud:': 'sun-behind-small-cloud_1f324-fe0f',
  ':sun_behind_large_cloud:': 'sun-behind-large-cloud_1f325-fe0f',
  ':sun_behind_rain_cloud:': 'sun-behind-rain-cloud_1f326-fe0f',
  ':cloud_with_rain:': 'cloud-with-rain_1f327-fe0f',
  ':cloud_with_snow:': 'cloud-with-snow_1f328-fe0f',
  ':cloud_with_lightning:': 'cloud-with-lightning_1f329-fe0f',
  ':tornado:': 'tornado_1f32a-fe0f',
  ':fog:': 'fog_1f32b-fe0f',
  ':wind_face:': 'wind-face_1f32c-fe0f',
  ':cyclone:': 'cyclone_1f300',
  ':rainbow:': 'rainbow_1f308',
  ':closed_umbrella:': 'closed-umbrella_1f302',
  ':umbrella:': 'umbrella_2602-fe0f',
  ':umbrella_with_rain_drops:': 'umbrella-with-rain-drops_2614',
  ':umbrella_on_ground:': 'umbrella-on-ground_26f1-fe0f',
  ':high_voltage:': 'high-voltage_26a1',
  ':snowflake:': 'snowflake_2744-fe0f',
  ':snowman:': 'snowman_2603-fe0f',
  ':snowman_without_snow:': 'snowman-without-snow_26c4',
  ':comet:': 'comet_2604-fe0f',
  ':fire:': 'fire_1f525',
  ':droplet:': 'droplet_1f4a7',
  ':water_wave:': 'water-wave_1f30a',
  ':jack-o-lantern:': 'jack-o-lantern_1f383',
  ':Christmas_tree:': 'christmas-tree_1f384',
  ':fireworks:': 'fireworks_1f386',
  ':sparkler:': 'sparkler_1f387',
  ':firecracker:': 'firecracker_1f9e8',
  ':sparkles:': 'sparkles_2728',
  ':balloon:': 'balloon_1f388',
  ':party_popper:': 'party-popper_1f389',
  ':confetti_ball:': 'confetti-ball_1f38a',
  ':tanabata_tree:': 'tanabata-tree_1f38b',
  ':pine_decoration:': 'pine-decoration_1f38d',
  ':Japanese_dolls:': 'japanese-dolls_1f38e',
  ':carp_streamer:': 'carp-streamer_1f38f',
  ':wind_chime:': 'wind-chime_1f390',
  ':moon_viewing_ceremony:': 'moon-viewing-ceremony_1f391',
  ':red_envelope:': 'red-envelope_1f9e7',
  ':ribbon:': 'ribbon_1f380',
  ':wrapped_gift:': 'wrapped-gift_1f381',
  ':reminder_ribbon:': 'reminder-ribbon_1f397-fe0f',
  ':admission_tickets:': 'admission-tickets_1f39f-fe0f',
  ':ticket:': 'ticket_1f3ab',
  ':military_medal:': 'military-medal_1f396-fe0f',
  ':trophy:': 'trophy_1f3c6',
  ':sports_medal:': 'sports-medal_1f3c5',
  ':1st_place_medal:': '1st-place-medal_1f947',
  ':2nd_place_medal:': '2nd-place-medal_1f948',
  ':3rd_place_medal:': '3rd-place-medal_1f949',
  ':soccer_ball:': 'soccer-ball_26bd',
  ':baseball:': 'baseball_26be',
  ':softball:': 'softball_1f94e',
  ':basketball:': 'basketball_1f3c0',
  ':volleyball:': 'volleyball_1f3d0',
  ':american_football:': 'american-football_1f3c8',
  ':rugby_football:': 'rugby-football_1f3c9',
  ':tennis:': 'tennis_1f3be',
  ':flying_disc:': 'flying-disc_1f94f',
  ':bowling:': 'bowling_1f3b3',
  ':cricket_game:': 'cricket-game_1f3cf',
  ':field_hockey:': 'field-hockey_1f3d1',
  ':ice_hockey:': 'ice-hockey_1f3d2',
  ':lacrosse:': 'lacrosse_1f94d',
  ':ping_pong:': 'ping-pong_1f3d3',
  ':badminton:': 'badminton_1f3f8',
  ':boxing_glove:': 'boxing-glove_1f94a',
  ':martial_arts_uniform:': 'martial-arts-uniform_1f94b',
  ':goal_net:': 'goal-net_1f945',
  ':flag_in_hole:': 'flag-in-hole_26f3',
  ':ice_skate:': 'ice-skate_26f8-fe0f',
  ':fishing_pole:': 'fishing-pole_1f3a3',
  ':diving_mask:': 'diving-mask_1f93f',
  ':running_shirt:': 'running-shirt_1f3bd',
  ':skis:': 'skis_1f3bf',
  ':sled:': 'sled_1f6f7',
  ':curling_stone:': 'curling-stone_1f94c',
  ':bullseye:': 'direct-hit_1f3af',
  ':yo-yo:': 'yo-yo_1fa80',
  ':kite:': 'kite_1fa81',
  ':water_pistol:': 'pistol_1f52b',
  ':pool_8_ball:': 'pool-8-ball_1f3b1',
  ':crystal_ball:': 'crystal-ball_1f52e',
  ':magic_wand:': 'magic-wand_1fa84',
  ':video_game:': 'video-game_1f3ae',
  ':joystick:': 'joystick_1f579-fe0f',
  ':slot_machine:': 'slot-machine_1f3b0',
  ':game_die:': 'game-die_1f3b2',
  ':puzzle_piece:': 'puzzle-piece_1f9e9',
  ':teddy_bear:': 'teddy-bear_1f9f8',
  ':piñata:': 'pinata_1fa85',
  ':mirror_ball:': 'mirror-ball_1faa9',
  ':nesting_dolls:': 'nesting-dolls_1fa86',
  ':spade_suit:': 'spade-suit_2660-fe0f',
  ':heart_suit:': 'heart-suit_2665-fe0f',
  ':diamond_suit:': 'diamond-suit_2666-fe0f',
  ':club_suit:': 'club-suit_2663-fe0f',
  ':chess_pawn:': 'chess-pawn_265f-fe0f',
  ':joker:': 'joker_1f0cf',
  ':mahjong_red_dragon:': 'mahjong-red-dragon_1f004',
  ':flower_playing_cards:': 'flower-playing-cards_1f3b4',
  ':performing_arts:': 'performing-arts_1f3ad',
  ':framed_picture:': 'framed-picture_1f5bc-fe0f',
  ':artist_palette:': 'artist-palette_1f3a8',
  ':thread:': 'thread_1f9f5',
  ':sewing_needle:': 'sewing-needle_1faa1',
  ':yarn:': 'yarn_1f9f6',
  ':knot:': 'knot_1faa2',
  ':glasses:': 'glasses_1f453',
  ':sunglasses:': 'sunglasses_1f576-fe0f',
  ':goggles:': 'goggles_1f97d',
  ':lab_coat:': 'lab-coat_1f97c',
  ':safety_vest:': 'safety-vest_1f9ba',
  ':necktie:': 'necktie_1f454',
  ':t-shirt:': 't-shirt_1f455',
  ':jeans:': 'jeans_1f456',
  ':scarf:': 'scarf_1f9e3',
  ':gloves:': 'gloves_1f9e4',
  ':coat:': 'coat_1f9e5',
  ':socks:': 'socks_1f9e6',
  ':dress:': 'dress_1f457',
  ':kimono:': 'kimono_1f458',
  ':sari:': 'sari_1f97b',
  ':one-piece_swimsuit:': 'one-piece-swimsuit_1fa71',
  ':briefs:': 'briefs_1fa72',
  ':shorts:': 'shorts_1fa73',
  ':bikini:': 'bikini_1f459',
  ':woman’s_clothes:': 'womans-clothes_1f45a',
  ':purse:': 'purse_1f45b',
  ':handbag:': 'handbag_1f45c',
  ':clutch_bag:': 'clutch-bag_1f45d',
  ':shopping_bags:': 'shopping-bags_1f6cd-fe0f',
  ':backpack:': 'backpack_1f392',
  ':thong_sandal:': 'thong-sandal_1fa74',
  ':man’s_shoe:': 'mans-shoe_1f45e',
  ':running_shoe:': 'running-shoe_1f45f',
  ':hiking_boot:': 'hiking-boot_1f97e',
  ':flat_shoe:': 'flat-shoe_1f97f',
  ':high-heeled_shoe:': 'high-heeled-shoe_1f460',
  ':woman’s_sandal:': 'womans-sandal_1f461',
  ':ballet_shoes:': 'ballet-shoes_1fa70',
  ':woman’s_boot:': 'womans-boot_1f462',
  ':crown:': 'crown_1f451',
  ':woman’s_hat:': 'womans-hat_1f452',
  ':top_hat:': 'top-hat_1f3a9',
  ':graduation_cap:': 'graduation-cap_1f393',
  ':billed_cap:': 'billed-cap_1f9e2',
  ':military_helmet:': 'military-helmet_1fa96',
  ':rescue_worker’s_helmet:': 'rescue-workers-helmet_26d1-fe0f',
  ':prayer_beads:': 'prayer-beads_1f4ff',
  ':lipstick:': 'lipstick_1f484',
  ':ring:': 'ring_1f48d',
  ':gem_stone:': 'gem-stone_1f48e',
  ':muted_speaker:': 'muted-speaker_1f507',
  ':speaker_low_volume:': 'speaker-low-volume_1f508',
  ':speaker_medium_volume:': 'speaker-medium-volume_1f509',
  ':speaker_high_volume:': 'speaker-high-volume_1f50a',
  ':loudspeaker:': 'loudspeaker_1f4e2',
  ':megaphone:': 'megaphone_1f4e3',
  ':postal_horn:': 'postal-horn_1f4ef',
  ':bell:': 'bell_1f514',
  ':bell_with_slash:': 'bell-with-slash_1f515',
  ':musical_score:': 'musical-score_1f3bc',
  ':musical_note:': 'musical-note_1f3b5',
  ':musical_notes:': 'musical-notes_1f3b6',
  ':studio_microphone:': 'studio-microphone_1f399-fe0f',
  ':level_slider:': 'level-slider_1f39a-fe0f',
  ':control_knobs:': 'control-knobs_1f39b-fe0f',
  ':microphone:': 'microphone_1f3a4',
  ':headphone:': 'headphone_1f3a7',
  ':radio:': 'radio_1f4fb',
  ':saxophone:': 'saxophone_1f3b7',
  ':accordion:': 'accordion_1fa97',
  ':guitar:': 'guitar_1f3b8',
  ':musical_keyboard:': 'musical-keyboard_1f3b9',
  ':trumpet:': 'trumpet_1f3ba',
  ':violin:': 'violin_1f3bb',
  ':banjo:': 'banjo_1fa95',
  ':drum:': 'drum_1f941',
  ':long_drum:': 'long-drum_1fa98',
  ':mobile_phone:': 'mobile-phone_1f4f1',
  ':mobile_phone_with_arrow:': 'mobile-phone-with-arrow_1f4f2',
  ':telephone:': 'telephone_260e-fe0f',
  ':telephone_receiver:': 'telephone-receiver_1f4de',
  ':pager:': 'pager_1f4df',
  ':fax_machine:': 'fax-machine_1f4e0',
  ':battery:': 'battery_1f50b',
  ':low_battery:': 'low-battery_1faab',
  ':electric_plug:': 'electric-plug_1f50c',
  ':laptop:': 'laptop_1f4bb',
  ':desktop_computer:': 'desktop-computer_1f5a5-fe0f',
  ':printer:': 'printer_1f5a8-fe0f',
  ':keyboard:': 'keyboard_2328-fe0f',
  ':computer_mouse:': 'computer-mouse_1f5b1-fe0f',
  ':trackball:': 'trackball_1f5b2-fe0f',
  ':computer_disk:': 'computer-disk_1f4bd',
  ':floppy_disk:': 'floppy-disk_1f4be',
  ':optical_disk:': 'optical-disk_1f4bf',
  ':dvd:': 'dvd_1f4c0',
  ':abacus:': 'abacus_1f9ee',
  ':movie_camera:': 'movie-camera_1f3a5',
  ':film_frames:': 'film-frames_1f39e-fe0f',
  ':film_projector:': 'film-projector_1f4fd-fe0f',
  ':clapper_board:': 'clapper-board_1f3ac',
  ':television:': 'television_1f4fa',
  ':camera:': 'camera_1f4f7',
  ':camera_with_flash:': 'camera-with-flash_1f4f8',
  ':video_camera:': 'video-camera_1f4f9',
  ':videocassette:': 'videocassette_1f4fc',
  ':magnifying_glass_tilted_left:': 'magnifying-glass-tilted-left_1f50d',
  ':magnifying_glass_tilted_right:': 'magnifying-glass-tilted-right_1f50e',
  ':candle:': 'candle_1f56f-fe0f',
  ':light_bulb:': 'light-bulb_1f4a1',
  ':flashlight:': 'flashlight_1f526',
  ':red_paper_lantern:': 'red-paper-lantern_1f3ee',
  ':diya_lamp:': 'diya-lamp_1fa94',
  ':notebook_with_decorative_cover:': 'notebook-with-decorative-cover_1f4d4',
  ':closed_book:': 'closed-book_1f4d5',
  ':open_book:': 'open-book_1f4d6',
  ':green_book:': 'green-book_1f4d7',
  ':blue_book:': 'blue-book_1f4d8',
  ':orange_book:': 'orange-book_1f4d9',
  ':books:': 'books_1f4da',
  ':notebook:': 'notebook_1f4d3',
  ':ledger:': 'ledger_1f4d2',
  ':page_with_curl:': 'page-with-curl_1f4c3',
  ':scroll:': 'scroll_1f4dc',
  ':page_facing_up:': 'page-facing-up_1f4c4',
  ':newspaper:': 'newspaper_1f4f0',
  ':rolled-up_newspaper:': 'rolled-up-newspaper_1f5de-fe0f',
  ':bookmark_tabs:': 'bookmark-tabs_1f4d1',
  ':bookmark:': 'bookmark_1f516',
  ':label:': 'label_1f3f7-fe0f',
  ':money_bag:': 'money-bag_1f4b0',
  ':coin:': 'coin_1fa99',
  ':yen_banknote:': 'yen-banknote_1f4b4',
  ':dollar_banknote:': 'dollar-banknote_1f4b5',
  ':euro_banknote:': 'euro-banknote_1f4b6',
  ':pound_banknote:': 'pound-banknote_1f4b7',
  ':money_with_wings:': 'money-with-wings_1f4b8',
  ':credit_card:': 'credit-card_1f4b3',
  ':receipt:': 'receipt_1f9fe',
  ':chart_increasing_with_yen:': 'chart-increasing-with-yen_1f4b9',
  ':envelope:': 'envelope_2709-fe0f',
  ':e-mail:': 'e-mail_1f4e7',
  ':incoming_envelope:': 'incoming-envelope_1f4e8',
  ':envelope_with_arrow:': 'envelope-with-arrow_1f4e9',
  ':outbox_tray:': 'outbox-tray_1f4e4',
  ':inbox_tray:': 'inbox-tray_1f4e5',
  ':package:': 'package_1f4e6',
  ':closed_mailbox_with_raised_flag:': 'closed-mailbox-with-raised-flag_1f4eb',
  ':closed_mailbox_with_lowered_flag:':
    'closed-mailbox-with-lowered-flag_1f4ea',
  ':open_mailbox_with_raised_flag:': 'open-mailbox-with-raised-flag_1f4ec',
  ':open_mailbox_with_lowered_flag:': 'open-mailbox-with-lowered-flag_1f4ed',
  ':postbox:': 'postbox_1f4ee',
  ':ballot_box_with_ballot:': 'ballot-box-with-ballot_1f5f3-fe0f',
  ':pencil:': 'pencil_270f-fe0f',
  ':black_nib:': 'black-nib_2712-fe0f',
  ':fountain_pen:': 'fountain-pen_1f58b-fe0f',
  ':pen:': 'pen_1f58a-fe0f',
  ':paintbrush:': 'paintbrush_1f58c-fe0f',
  ':crayon:': 'crayon_1f58d-fe0f',
  ':memo:': 'memo_1f4dd',
  ':briefcase:': 'briefcase_1f4bc',
  ':file_folder:': 'file-folder_1f4c1',
  ':open_file_folder:': 'open-file-folder_1f4c2',
  ':card_index_dividers:': 'card-index-dividers_1f5c2-fe0f',
  ':calendar:': 'calendar_1f4c5',
  ':tear-off_calendar:': 'tear-off-calendar_1f4c6',
  ':spiral_notepad:': 'spiral-notepad_1f5d2-fe0f',
  ':spiral_calendar:': 'spiral-calendar_1f5d3-fe0f',
  ':card_index:': 'card-index_1f4c7',
  ':chart_increasing:': 'chart-increasing_1f4c8',
  ':chart_decreasing:': 'chart-decreasing_1f4c9',
  ':bar_chart:': 'bar-chart_1f4ca',
  ':clipboard:': 'clipboard_1f4cb',
  ':pushpin:': 'pushpin_1f4cc',
  ':round_pushpin:': 'round-pushpin_1f4cd',
  ':paperclip:': 'paperclip_1f4ce',
  ':linked_paperclips:': 'linked-paperclips_1f587-fe0f',
  ':straight_ruler:': 'straight-ruler_1f4cf',
  ':triangular_ruler:': 'triangular-ruler_1f4d0',
  ':scissors:': 'scissors_2702-fe0f',
  ':card_file_box:': 'card-file-box_1f5c3-fe0f',
  ':file_cabinet:': 'file-cabinet_1f5c4-fe0f',
  ':wastebasket:': 'wastebasket_1f5d1-fe0f',
  ':locked:': 'locked_1f512',
  ':unlocked:': 'unlocked_1f513',
  ':locked_with_pen:': 'locked-with-pen_1f50f',
  ':locked_with_key:': 'locked-with-key_1f510',
  ':key:': 'key_1f511',
  ':old_key:': 'old-key_1f5dd-fe0f',
  ':hammer:': 'hammer_1f528',
  ':axe:': 'axe_1fa93',
  ':pick:': 'pick_26cf-fe0f',
  ':hammer_and_pick:': 'hammer-and-pick_2692-fe0f',
  ':hammer_and_wrench:': 'hammer-and-wrench_1f6e0-fe0f',
  ':dagger:': 'dagger_1f5e1-fe0f',
  ':crossed_swords:': 'crossed-swords_2694-fe0f',
  ':bomb:': 'bomb_1f4a3',
  ':boomerang:': 'boomerang_1fa83',
  ':bow_and_arrow:': 'bow-and-arrow_1f3f9',
  ':shield:': 'shield_1f6e1-fe0f',
  ':carpentry_saw:': 'carpentry-saw_1fa9a',
  ':wrench:': 'wrench_1f527',
  ':screwdriver:': 'screwdriver_1fa9b',
  ':nut_and_bolt:': 'nut-and-bolt_1f529',
  ':gear:': 'gear_2699-fe0f',
  ':clamp:': 'clamp_1f5dc-fe0f',
  ':balance_scale:': 'balance-scale_2696-fe0f',
  ':white_cane:': 'white-cane_1f9af',
  ':link:': 'link_1f517',
  ':chains:': 'chains_26d3-fe0f',
  ':hook:': 'hook_1fa9d',
  ':toolbox:': 'toolbox_1f9f0',
  ':magnet:': 'magnet_1f9f2',
  ':ladder:': 'ladder_1fa9c',
  ':alembic:': 'alembic_2697-fe0f',
  ':test_tube:': 'test-tube_1f9ea',
  ':petri_dish:': 'petri-dish_1f9eb',
  ':dna:': 'dna_1f9ec',
  ':microscope:': 'microscope_1f52c',
  ':telescope:': 'telescope_1f52d',
  ':satellite_antenna:': 'satellite-antenna_1f4e1',
  ':syringe:': 'syringe_1f489',
  ':drop_of_blood:': 'drop-of-blood_1fa78',
  ':pill:': 'pill_1f48a',
  ':adhesive_bandage:': 'adhesive-bandage_1fa79',
  ':crutch:': 'crutch_1fa7c',
  ':stethoscope:': 'stethoscope_1fa7a',
  ':x-ray:': 'x-ray_1fa7b',
  ':door:': 'door_1f6aa',
  ':elevator:': 'elevator_1f6d7',
  ':mirror:': 'mirror_1fa9e',
  ':window:': 'window_1fa9f',
  ':bed:': 'bed_1f6cf-fe0f',
  ':couch_and_lamp:': 'couch-and-lamp_1f6cb-fe0f',
  ':chair:': 'chair_1fa91',
  ':toilet:': 'toilet_1f6bd',
  ':plunger:': 'plunger_1faa0',
  ':shower:': 'shower_1f6bf',
  ':bathtub:': 'bathtub_1f6c1',
  ':mouse_trap:': 'mouse-trap_1faa4',
  ':razor:': 'razor_1fa92',
  ':lotion_bottle:': 'lotion-bottle_1f9f4',
  ':safety_pin:': 'safety-pin_1f9f7',
  ':broom:': 'broom_1f9f9',
  ':basket:': 'basket_1f9fa',
  ':roll_of_paper:': 'roll-of-paper_1f9fb',
  ':bucket:': 'bucket_1faa3',
  ':soap:': 'soap_1f9fc',
  ':bubbles:': 'bubbles_1fae7',
  ':toothbrush:': 'toothbrush_1faa5',
  ':sponge:': 'sponge_1f9fd',
  ':fire_extinguisher:': 'fire-extinguisher_1f9ef',
  ':shopping_cart:': 'shopping-cart_1f6d2',
  ':cigarette:': 'cigarette_1f6ac',
  ':coffin:': 'coffin_26b0-fe0f',
  ':headstone:': 'headstone_1faa6',
  ':funeral_urn:': 'funeral-urn_26b1-fe0f',
  ':nazar_amulet:': 'nazar-amulet_1f9ff',
  ':hamsa:': 'hamsa_1faac',
  ':moai:': 'moai_1f5ff',
  ':placard:': 'placard_1faa7',
  ':identification_card:': 'identification-card_1faaa',
  ':ATM_sign:': 'atm-sign_1f3e7',
  ':litter_in_bin_sign:': 'litter-in-bin-sign_1f6ae',
  ':potable_water:': 'potable-water_1f6b0',
  ':wheelchair_symbol:': 'wheelchair-symbol_267f',
  ':men’s_room:': 'mens-room_1f6b9',
  ':women’s_room:': 'womens-room_1f6ba',
  ':restroom:': 'restroom_1f6bb',
  ':baby_symbol:': 'baby-symbol_1f6bc',
  ':water_closet:': 'water-closet_1f6be',
  ':passport_control:': 'passport-control_1f6c2',
  ':customs:': 'customs_1f6c3',
  ':baggage_claim:': 'baggage-claim_1f6c4',
  ':left_luggage:': 'left-luggage_1f6c5',
  ':warning:': 'warning_26a0-fe0f',
  ':children_crossing:': 'children-crossing_1f6b8',
  ':no_entry:': 'no-entry_26d4',
  ':prohibited:': 'prohibited_1f6ab',
  ':no_bicycles:': 'no-bicycles_1f6b3',
  ':no_smoking:': 'no-smoking_1f6ad',
  ':no_littering:': 'no-littering_1f6af',
  ':non-potable_water:': 'non-potable-water_1f6b1',
  ':no_pedestrians:': 'no-pedestrians_1f6b7',
  ':no_mobile_phones:': 'no-mobile-phones_1f4f5',
  ':no_one_under_eighteen:': 'no-one-under-eighteen_1f51e',
  ':radioactive:': 'radioactive_2622-fe0f',
  ':biohazard:': 'biohazard_2623-fe0f',
  ':up_arrow:': 'up-arrow_2b06-fe0f',
  ':up-right_arrow:': 'up-right-arrow_2197-fe0f',
  ':right_arrow:': 'right-arrow_27a1-fe0f',
  ':down-right_arrow:': 'down-right-arrow_2198-fe0f',
  ':down_arrow:': 'down-arrow_2b07-fe0f',
  ':down-left_arrow:': 'down-left-arrow_2199-fe0f',
  ':left_arrow:': 'left-arrow_2b05-fe0f',
  ':up-left_arrow:': 'up-left-arrow_2196-fe0f',
  ':up-down_arrow:': 'up-down-arrow_2195-fe0f',
  ':left-right_arrow:': 'left-right-arrow_2194-fe0f',
  ':right_arrow_curving_left:': 'right-arrow-curving-left_21a9-fe0f',
  ':left_arrow_curving_right:': 'left-arrow-curving-right_21aa-fe0f',
  ':right_arrow_curving_up:': 'right-arrow-curving-up_2934-fe0f',
  ':right_arrow_curving_down:': 'right-arrow-curving-down_2935-fe0f',
  ':clockwise_vertical_arrows:': 'clockwise-vertical-arrows_1f503',
  ':counterclockwise_arrows_button:': 'counterclockwise-arrows-button_1f504',
  ':BACK_arrow:': 'back-arrow_1f519',
  ':END_arrow:': 'end-arrow_1f51a',
  ':ON!_arrow:': 'on-arrow_1f51b',
  ':SOON_arrow:': 'soon-arrow_1f51c',
  ':TOP_arrow:': 'top-arrow_1f51d',
  ':place_of_worship:': 'place-of-worship_1f6d0',
  ':atom_symbol:': 'atom-symbol_269b-fe0f',
  ':om:': 'om_1f549-fe0f',
  ':star_of_David:': 'star-of-david_2721-fe0f',
  ':wheel_of_dharma:': 'wheel-of-dharma_2638-fe0f',
  ':yin_yang:': 'yin-yang_262f-fe0f',
  ':latin_cross:': 'latin-cross_271d-fe0f',
  ':orthodox_cross:': 'orthodox-cross_2626-fe0f',
  ':star_and_crescent:': 'star-and-crescent_262a-fe0f',
  ':peace_symbol:': 'peace-symbol_262e-fe0f',
  ':menorah:': 'menorah_1f54e',
  ':dotted_six-pointed_star:': 'dotted-six-pointed-star_1f52f',
  ':Aries:': 'aries_2648',
  ':Taurus:': 'taurus_2649',
  ':Gemini:': 'gemini_264a',
  ':Cancer:': 'cancer_264b',
  ':Leo:': 'leo_264c',
  ':Virgo:': 'virgo_264d',
  ':Libra:': 'libra_264e',
  ':Scorpio:': 'scorpio_264f',
  ':Sagittarius:': 'sagittarius_2650',
  ':Capricorn:': 'capricorn_2651',
  ':Aquarius:': 'aquarius_2652',
  ':Pisces:': 'pisces_2653',
  ':Ophiuchus:': 'ophiuchus_26ce',
  ':shuffle_tracks_button:': 'shuffle-tracks-button_1f500',
  ':repeat_button:': 'repeat-button_1f501',
  ':repeat_single_button:': 'repeat-single-button_1f502',
  ':play_button:': 'play-button_25b6-fe0f',
  ':fast-forward_button:': 'fast-forward-button_23e9',
  ':next_track_button:': 'next-track-button_23ed-fe0f',
  ':play_or_pause_button:': 'play-or-pause-button_23ef-fe0f',
  ':reverse_button:': 'reverse-button_25c0-fe0f',
  ':fast_reverse_button:': 'fast-reverse-button_23ea',
  ':last_track_button:': 'last-track-button_23ee-fe0f',
  ':upwards_button:': 'upwards-button_1f53c',
  ':fast_up_button:': 'fast-up-button_23eb',
  ':downwards_button:': 'downwards-button_1f53d',
  ':fast_down_button:': 'fast-down-button_23ec',
  ':pause_button:': 'pause-button_23f8-fe0f',
  ':stop_button:': 'stop-button_23f9-fe0f',
  ':record_button:': 'record-button_23fa-fe0f',
  ':eject_button:': 'eject-button_23cf-fe0f',
  ':cinema:': 'cinema_1f3a6',
  ':dim_button:': 'dim-button_1f505',
  ':bright_button:': 'bright-button_1f506',
  ':antenna_bars:': 'antenna-bars_1f4f6',
  ':vibration_mode:': 'vibration-mode_1f4f3',
  ':mobile_phone_off:': 'mobile-phone-off_1f4f4',
  ':female_sign:': 'female-sign_2640-fe0f',
  ':male_sign:': 'male-sign_2642-fe0f',
  ':multiply:': 'multiply_2716-fe0f',
  ':plus:': 'plus_2795',
  ':minus:': 'minus_2796',
  ':divide:': 'divide_2797',
  ':heavy_equals_sign:': 'heavy-equals-sign_1f7f0',
  ':infinity:': 'infinity_267e-fe0f',
  ':double_exclamation_mark:': 'double-exclamation-mark_203c-fe0f',
  ':exclamation_question_mark:': 'exclamation-question-mark_2049-fe0f',
  ':red_question_mark:': 'question-mark_2753',
  ':white_question_mark:': 'white-question-mark_2754',
  ':white_exclamation_mark:': 'white-exclamation-mark_2755',
  ':red_exclamation_mark:': 'exclamation-mark_2757',
  ':wavy_dash:': 'wavy-dash_3030-fe0f',
  ':currency_exchange:': 'currency-exchange_1f4b1',
  ':heavy_dollar_sign:': 'heavy-dollar-sign_1f4b2',
  ':medical_symbol:': 'medical-symbol_2695-fe0f',
  ':recycling_symbol:': 'recycling-symbol_267b-fe0f',
  ':fleur-de-lis:': 'fleur-de-lis_269c-fe0f',
  ':trident_emblem:': 'trident-emblem_1f531',
  ':name_badge:': 'name-badge_1f4db',
  ':Japanese_symbol_for_beginner:': 'japanese-symbol-for-beginner_1f530',
  ':hollow_red_circle:': 'hollow-red-circle_2b55',
  ':check_mark_button:': 'check-mark-button_2705',
  ':check_box_with_check:': 'check-box-with-check_2611-fe0f',
  ':check_mark:': 'check-mark_2714-fe0f',
  ':cross_mark:': 'cross-mark_274c',
  ':cross_mark_button:': 'cross-mark-button_274e',
  ':curly_loop:': 'curly-loop_27b0',
  ':double_curly_loop:': 'double-curly-loop_27bf',
  ':part_alternation_mark:': 'part-alternation-mark_303d-fe0f',
  ':eight-spoked_asterisk:': 'eight-spoked-asterisk_2733-fe0f',
  ':eight-pointed_star:': 'eight-pointed-star_2734-fe0f',
  ':sparkle:': 'sparkle_2747-fe0f',
  ':copyright:': 'copyright_00a9-fe0f',
  ':registered:': 'registered_00ae-fe0f',
  ':trade_mark:': 'trade-mark_2122-fe0f',
  ':keycap_#:': 'keycap-number-sign_0023-fe0f-20e3',
  ':keycap_*:': 'keycap-asterisk_002a-fe0f-20e3',
  ':keycap_0:': 'keycap-digit-zero_0030-fe0f-20e3',
  ':keycap_1:': 'keycap-digit-one_0031-fe0f-20e3',
  ':keycap_2:': 'keycap-digit-two_0032-fe0f-20e3',
  ':keycap_3:': 'keycap-digit-three_0033-fe0f-20e3',
  ':keycap_4:': 'keycap-digit-four_0034-fe0f-20e3',
  ':keycap_5:': 'keycap-digit-five_0035-fe0f-20e3',
  ':keycap_6:': 'keycap-digit-six_0036-fe0f-20e3',
  ':keycap_7:': 'keycap-digit-seven_0037-fe0f-20e3',
  ':keycap_8:': 'keycap-digit-eight_0038-fe0f-20e3',
  ':keycap_9:': 'keycap-digit-nine_0039-fe0f-20e3',
  ':keycap_10:': 'keycap-10_1f51f',
  ':input_latin_uppercase:': 'input-latin-uppercase_1f520',
  ':input_latin_lowercase:': 'input-latin-lowercase_1f521',
  ':input_numbers:': 'input-numbers_1f522',
  ':input_symbols:': 'input-symbols_1f523',
  ':input_latin_letters:': 'input-latin-letters_1f524',
  ':A_button_(blood_type):': 'a-button-blood-type_1f170-fe0f',
  ':AB_button_(blood_type):': 'ab-button-blood-type_1f18e',
  ':B_button_(blood_type):': 'b-button-blood-type_1f171-fe0f',
  ':CL_button:': 'cl-button_1f191',
  ':COOL_button:': 'cool-button_1f192',
  ':FREE_button:': 'free-button_1f193',
  ':information:': 'information_2139-fe0f',
  ':ID_button:': 'id-button_1f194',
  ':circled_M:': 'circled-m_24c2-fe0f',
  ':NEW_button:': 'new-button_1f195',
  ':NG_button:': 'ng-button_1f196',
  ':O_button_(blood_type):': 'o-button-blood-type_1f17e-fe0f',
  ':OK_button:': 'ok-button_1f197',
  ':P_button:': 'p-button_1f17f-fe0f',
  ':SOS_button:': 'sos-button_1f198',
  ':UP!_button:': 'up-button_1f199',
  ':VS_button:': 'vs-button_1f19a',
  ':Japanese_here_button:': 'japanese-here-button_1f201',
  ':Japanese_service_charge_button:':
    'japanese-service-charge-button_1f202-fe0f',
  ':Japanese_monthly_amount_button:':
    'japanese-monthly-amount-button_1f237-fe0f',
  ':Japanese_not_free_of_charge_button:':
    'japanese-not-free-of-charge-button_1f236',
  ':Japanese_reserved_button:': 'japanese-reserved-button_1f22f',
  ':Japanese_bargain_button:': 'japanese-bargain-button_1f250',
  ':Japanese_discount_button:': 'japanese-discount-button_1f239',
  ':Japanese_free_of_charge_button:': 'japanese-free-of-charge-button_1f21a',
  ':Japanese_prohibited_button:': 'japanese-prohibited-button_1f232',
  ':Japanese_acceptable_button:': 'japanese-acceptable-button_1f251',
  ':Japanese_application_button:': 'japanese-application-button_1f238',
  ':Japanese_passing_grade_button:': 'japanese-passing-grade-button_1f234',
  ':Japanese_vacancy_button:': 'japanese-vacancy-button_1f233',
  ':Japanese_congratulations_button:':
    'japanese-congratulations-button_3297-fe0f',
  ':Japanese_secret_button:': 'japanese-secret-button_3299-fe0f',
  ':Japanese_open_for_business_button:':
    'japanese-open-for-business-button_1f23a',
  ':Japanese_no_vacancy_button:': 'japanese-no-vacancy-button_1f235',
  ':red_circle:': 'large-red-circle_1f534',
  ':orange_circle:': 'large-orange-circle_1f7e0',
  ':yellow_circle:': 'large-yellow-circle_1f7e1',
  ':green_circle:': 'large-green-circle_1f7e2',
  ':blue_circle:': 'large-blue-circle_1f535',
  ':purple_circle:': 'large-purple-circle_1f7e3',
  ':brown_circle:': 'large-brown-circle_1f7e4',
  ':black_circle:': 'black-circle_26ab',
  ':white_circle:': 'white-circle_26aa',
  ':red_square:': 'large-red-square_1f7e5',
  ':orange_square:': 'large-orange-square_1f7e7',
  ':yellow_square:': 'large-yellow-square_1f7e8',
  ':green_square:': 'large-green-square_1f7e9',
  ':blue_square:': 'large-blue-square_1f7e6',
  ':purple_square:': 'large-purple-square_1f7ea',
  ':brown_square:': 'large-brown-square_1f7eb',
  ':black_large_square:': 'black-large-square_2b1b',
  ':white_large_square:': 'white-large-square_2b1c',
  ':black_medium_square:': 'black-medium-square_25fc-fe0f',
  ':white_medium_square:': 'white-medium-square_25fb-fe0f',
  ':black_medium-small_square:': 'black-medium-small-square_25fe',
  ':white_medium-small_square:': 'white-medium-small-square_25fd',
  ':black_small_square:': 'black-small-square_25aa-fe0f',
  ':white_small_square:': 'white-small-square_25ab-fe0f',
  ':large_orange_diamond:': 'large-orange-diamond_1f536',
  ':large_blue_diamond:': 'large-blue-diamond_1f537',
  ':small_orange_diamond:': 'small-orange-diamond_1f538',
  ':small_blue_diamond:': 'small-blue-diamond_1f539',
  ':red_triangle_pointed_up:': 'red-triangle-pointed-up_1f53a',
  ':red_triangle_pointed_down:': 'red-triangle-pointed-down_1f53b',
  ':diamond_with_a_dot:': 'diamond-with-a-dot_1f4a0',
  ':radio_button:': 'radio-button_1f518',
  ':white_square_button:': 'white-square-button_1f533',
  ':black_square_button:': 'black-square-button_1f532',
  ':chequered_flag:': 'chequered-flag_1f3c1',
  ':triangular_flag:': 'triangular-flag_1f6a9',
  ':crossed_flags:': 'crossed-flags_1f38c',
  ':black_flag:': 'black-flag_1f3f4',
  ':white_flag:': 'white-flag_1f3f3-fe0f',
  ':rainbow_flag:': 'rainbow-flag_1f3f3-fe0f-200d-1f308',
  ':transgender_flag:': 'transgender-flag_1f3f3-fe0f-200d-26a7-fe0f',
  ':pirate_flag:': 'pirate-flag_1f3f4-200d-2620-fe0f',
  ':Ascension_Island:': 'flag-ascension-island_1f1e6-1f1e8',
  ':Andorra:': 'flag-andorra_1f1e6-1f1e9',
  ':United_Arab_Emirates:': 'flag-united-arab-emirates_1f1e6-1f1ea',
  ':Afghanistan:': 'flag-afghanistan_1f1e6-1f1eb',
  ':Antigua_&amp;_Barbuda:': 'flag-antigua-barbuda_1f1e6-1f1ec',
  ':Anguilla:': 'flag-anguilla_1f1e6-1f1ee',
  ':Albania:': 'flag-albania_1f1e6-1f1f1',
  ':Armenia:': 'flag-armenia_1f1e6-1f1f2',
  ':Angola:': 'flag-angola_1f1e6-1f1f4',
  ':Antarctica:': 'flag-antarctica_1f1e6-1f1f6',
  ':Argentina:': 'flag-argentina_1f1e6-1f1f7',
  ':American_Samoa:': 'flag-american-samoa_1f1e6-1f1f8',
  ':Austria:': 'flag-austria_1f1e6-1f1f9',
  ':Australia:': 'flag-australia_1f1e6-1f1fa',
  ':Aruba:': 'flag-aruba_1f1e6-1f1fc',
  ':Åland_Islands:': 'flag-aland-islands_1f1e6-1f1fd',
  ':Azerbaijan:': 'flag-azerbaijan_1f1e6-1f1ff',
  ':Bosnia_&amp;_Herzegovina:': 'flag-bosnia-herzegovina_1f1e7-1f1e6',
  ':Barbados:': 'flag-barbados_1f1e7-1f1e7',
  ':Bangladesh:': 'flag-bangladesh_1f1e7-1f1e9',
  ':Belgium:': 'flag-belgium_1f1e7-1f1ea',
  ':Burkina_Faso:': 'flag-burkina-faso_1f1e7-1f1eb',
  ':Bulgaria:': 'flag-bulgaria_1f1e7-1f1ec',
  ':Bahrain:': 'flag-bahrain_1f1e7-1f1ed',
  ':Burundi:': 'flag-burundi_1f1e7-1f1ee',
  ':Benin:': 'flag-benin_1f1e7-1f1ef',
  ':St._Barthélemy:': 'flag-st-barthelemy_1f1e7-1f1f1',
  ':Bermuda:': 'flag-bermuda_1f1e7-1f1f2',
  ':Brunei:': 'flag-brunei_1f1e7-1f1f3',
  ':Bolivia:': 'flag-bolivia_1f1e7-1f1f4',
  ':Caribbean_Netherlands:': 'flag-caribbean-netherlands_1f1e7-1f1f6',
  ':Brazil:': 'flag-brazil_1f1e7-1f1f7',
  ':Bahamas:': 'flag-bahamas_1f1e7-1f1f8',
  ':Bhutan:': 'flag-bhutan_1f1e7-1f1f9',
  ':Bouvet_Island:': 'flag-bouvet-island_1f1e7-1f1fb',
  ':Botswana:': 'flag-botswana_1f1e7-1f1fc',
  ':Belarus:': 'flag-belarus_1f1e7-1f1fe',
  ':Belize:': 'flag-belize_1f1e7-1f1ff',
  ':Canada:': 'flag-canada_1f1e8-1f1e6',
  ':Cocos_(Keeling)_Islands:': 'flag-cocos-keeling-islands_1f1e8-1f1e8',
  ':Congo_-_Kinshasa:': 'flag-congo-kinshasa_1f1e8-1f1e9',
  ':Central_African_Republic:': 'flag-central-african-republic_1f1e8-1f1eb',
  ':Congo_-_Brazzaville:': 'flag-congo-brazzaville_1f1e8-1f1ec',
  ':Switzerland:': 'flag-switzerland_1f1e8-1f1ed',
  ':Côte_d’Ivoire:': 'flag-cote-divoire_1f1e8-1f1ee',
  ':Cook_Islands:': 'flag-cook-islands_1f1e8-1f1f0',
  ':Chile:': 'flag-chile_1f1e8-1f1f1',
  ':Cameroon:': 'flag-cameroon_1f1e8-1f1f2',
  ':China:': 'flag-china_1f1e8-1f1f3',
  ':Colombia:': 'flag-colombia_1f1e8-1f1f4',
  ':Clipperton_Island:': 'flag-clipperton-island_1f1e8-1f1f5',
  ':Costa_Rica:': 'flag-costa-rica_1f1e8-1f1f7',
  ':Cuba:': 'flag-cuba_1f1e8-1f1fa',
  ':Cape_Verde:': 'flag-cape-verde_1f1e8-1f1fb',
  ':Curaçao:': 'flag-curacao_1f1e8-1f1fc',
  ':Christmas_Island:': 'flag-christmas-island_1f1e8-1f1fd',
  ':Cyprus:': 'flag-cyprus_1f1e8-1f1fe',
  ':Czechia:': 'flag-czechia_1f1e8-1f1ff',
  ':Germany:': 'flag-germany_1f1e9-1f1ea',
  ':Diego_Garcia:': 'flag-diego-garcia_1f1e9-1f1ec',
  ':Djibouti:': 'flag-djibouti_1f1e9-1f1ef',
  ':Denmark:': 'flag-denmark_1f1e9-1f1f0',
  ':Dominica:': 'flag-dominica_1f1e9-1f1f2',
  ':Dominican_Republic:': 'flag-dominican-republic_1f1e9-1f1f4',
  ':Algeria:': 'flag-algeria_1f1e9-1f1ff',
  ':Ceuta_&amp;_Melilla:': 'flag-ceuta-melilla_1f1ea-1f1e6',
  ':Ecuador:': 'flag-ecuador_1f1ea-1f1e8',
  ':Estonia:': 'flag-estonia_1f1ea-1f1ea',
  ':Egypt:': 'flag-egypt_1f1ea-1f1ec',
  ':Western_Sahara:': 'flag-western-sahara_1f1ea-1f1ed',
  ':Eritrea:': 'flag-eritrea_1f1ea-1f1f7',
  ':Spain:': 'flag-spain_1f1ea-1f1f8',
  ':Ethiopia:': 'flag-ethiopia_1f1ea-1f1f9',
  ':European_Union:': 'flag-european-union_1f1ea-1f1fa',
  ':Finland:': 'flag-finland_1f1eb-1f1ee',
  ':Fiji:': 'flag-fiji_1f1eb-1f1ef',
  ':Falkland_Islands:': 'flag-falkland-islands_1f1eb-1f1f0',
  ':Micronesia:': 'flag-micronesia_1f1eb-1f1f2',
  ':Faroe_Islands:': 'flag-faroe-islands_1f1eb-1f1f4',
  ':France:': 'flag-france_1f1eb-1f1f7',
  ':Gabon:': 'flag-gabon_1f1ec-1f1e6',
  ':United_Kingdom:': 'flag-united-kingdom_1f1ec-1f1e7',
  ':Grenada:': 'flag-grenada_1f1ec-1f1e9',
  ':Georgia:': 'flag-georgia_1f1ec-1f1ea',
  ':French_Guiana:': 'flag-french-guiana_1f1ec-1f1eb',
  ':Guernsey:': 'flag-guernsey_1f1ec-1f1ec',
  ':Ghana:': 'flag-ghana_1f1ec-1f1ed',
  ':Gibraltar:': 'flag-gibraltar_1f1ec-1f1ee',
  ':Greenland:': 'flag-greenland_1f1ec-1f1f1',
  ':Gambia:': 'flag-gambia_1f1ec-1f1f2',
  ':Guinea:': 'flag-guinea_1f1ec-1f1f3',
  ':Guadeloupe:': 'flag-guadeloupe_1f1ec-1f1f5',
  ':Equatorial_Guinea:': 'flag-equatorial-guinea_1f1ec-1f1f6',
  ':Greece:': 'flag-greece_1f1ec-1f1f7',
  ':South_Georgia_&amp;_South_Sandwich_Islands:':
    'flag-south-georgia-south-sandwich-islands_1f1ec-1f1f8',
  ':Guatemala:': 'flag-guatemala_1f1ec-1f1f9',
  ':Guam:': 'flag-guam_1f1ec-1f1fa',
  ':Guinea-Bissau:': 'flag-guinea-bissau_1f1ec-1f1fc',
  ':Guyana:': 'flag-guyana_1f1ec-1f1fe',
  ':Hong_Kong_SAR_China:': 'flag-hong-kong-sar-china_1f1ed-1f1f0',
  ':Heard_&amp;_McDonald_Islands:': 'flag-heard-mcdonald-islands_1f1ed-1f1f2',
  ':Honduras:': 'flag-honduras_1f1ed-1f1f3',
  ':Croatia:': 'flag-croatia_1f1ed-1f1f7',
  ':Haiti:': 'flag-haiti_1f1ed-1f1f9',
  ':Hungary:': 'flag-hungary_1f1ed-1f1fa',
  ':Canary_Islands:': 'flag-canary-islands_1f1ee-1f1e8',
  ':Indonesia:': 'flag-indonesia_1f1ee-1f1e9',
  ':Ireland:': 'flag-ireland_1f1ee-1f1ea',
  ':Israel:': 'flag-israel_1f1ee-1f1f1',
  ':Isle_of_Man:': 'flag-isle-of-man_1f1ee-1f1f2',
  ':India:': 'flag-india_1f1ee-1f1f3',
  ':British_Indian_Ocean_Territory:':
    'flag-british-indian-ocean-territory_1f1ee-1f1f4',
  ':Iraq:': 'flag-iraq_1f1ee-1f1f6',
  ':Iran:': 'flag-iran_1f1ee-1f1f7',
  ':Iceland:': 'flag-iceland_1f1ee-1f1f8',
  ':Italy:': 'flag-italy_1f1ee-1f1f9',
  ':Jersey:': 'flag-jersey_1f1ef-1f1ea',
  ':Jamaica:': 'flag-jamaica_1f1ef-1f1f2',
  ':Jordan:': 'flag-jordan_1f1ef-1f1f4',
  ':Japan:': 'flag-japan_1f1ef-1f1f5',
  ':Kenya:': 'flag-kenya_1f1f0-1f1ea',
  ':Kyrgyzstan:': 'flag-kyrgyzstan_1f1f0-1f1ec',
  ':Cambodia:': 'flag-cambodia_1f1f0-1f1ed',
  ':Kiribati:': 'flag-kiribati_1f1f0-1f1ee',
  ':Comoros:': 'flag-comoros_1f1f0-1f1f2',
  ':St._Kitts_&amp;_Nevis:': 'flag-st-kitts-nevis_1f1f0-1f1f3',
  ':North_Korea:': 'flag-north-korea_1f1f0-1f1f5',
  ':South_Korea:': 'flag-south-korea_1f1f0-1f1f7',
  ':Kuwait:': 'flag-kuwait_1f1f0-1f1fc',
  ':Cayman_Islands:': 'flag-cayman-islands_1f1f0-1f1fe',
  ':Kazakhstan:': 'flag-kazakhstan_1f1f0-1f1ff',
  ':Laos:': 'flag-laos_1f1f1-1f1e6',
  ':Lebanon:': 'flag-lebanon_1f1f1-1f1e7',
  ':St._Lucia:': 'flag-st-lucia_1f1f1-1f1e8',
  ':Liechtenstein:': 'flag-liechtenstein_1f1f1-1f1ee',
  ':Sri_Lanka:': 'flag-sri-lanka_1f1f1-1f1f0',
  ':Liberia:': 'flag-liberia_1f1f1-1f1f7',
  ':Lesotho:': 'flag-lesotho_1f1f1-1f1f8',
  ':Lithuania:': 'flag-lithuania_1f1f1-1f1f9',
  ':Luxembourg:': 'flag-luxembourg_1f1f1-1f1fa',
  ':Latvia:': 'flag-latvia_1f1f1-1f1fb',
  ':Libya:': 'flag-libya_1f1f1-1f1fe',
  ':Morocco:': 'flag-morocco_1f1f2-1f1e6',
  ':Monaco:': 'flag-monaco_1f1f2-1f1e8',
  ':Moldova:': 'flag-moldova_1f1f2-1f1e9',
  ':Montenegro:': 'flag-montenegro_1f1f2-1f1ea',
  ':St._Martin:': 'flag-st-martin_1f1f2-1f1eb',
  ':Madagascar:': 'flag-madagascar_1f1f2-1f1ec',
  ':Marshall_Islands:': 'flag-marshall-islands_1f1f2-1f1ed',
  ':North_Macedonia:': 'flag-north-macedonia_1f1f2-1f1f0',
  ':Mali:': 'flag-mali_1f1f2-1f1f1',
  ':Myanmar_(Burma):': 'flag-myanmar-burma_1f1f2-1f1f2',
  ':Mongolia:': 'flag-mongolia_1f1f2-1f1f3',
  ':Macao_SAR_China:': 'flag-macao-sar-china_1f1f2-1f1f4',
  ':Northern_Mariana_Islands:': 'flag-northern-mariana-islands_1f1f2-1f1f5',
  ':Martinique:': 'flag-martinique_1f1f2-1f1f6',
  ':Mauritania:': 'flag-mauritania_1f1f2-1f1f7',
  ':Montserrat:': 'flag-montserrat_1f1f2-1f1f8',
  ':Malta:': 'flag-malta_1f1f2-1f1f9',
  ':Mauritius:': 'flag-mauritius_1f1f2-1f1fa',
  ':Maldives:': 'flag-maldives_1f1f2-1f1fb',
  ':Malawi:': 'flag-malawi_1f1f2-1f1fc',
  ':Mexico:': 'flag-mexico_1f1f2-1f1fd',
  ':Malaysia:': 'flag-malaysia_1f1f2-1f1fe',
  ':Mozambique:': 'flag-mozambique_1f1f2-1f1ff',
  ':Namibia:': 'flag-namibia_1f1f3-1f1e6',
  ':New_Caledonia:': 'flag-new-caledonia_1f1f3-1f1e8',
  ':Niger:': 'flag-niger_1f1f3-1f1ea',
  ':Norfolk_Island:': 'flag-norfolk-island_1f1f3-1f1eb',
  ':Nigeria:': 'flag-nigeria_1f1f3-1f1ec',
  ':Nicaragua:': 'flag-nicaragua_1f1f3-1f1ee',
  ':Netherlands:': 'flag-netherlands_1f1f3-1f1f1',
  ':Norway:': 'flag-norway_1f1f3-1f1f4',
  ':Nepal:': 'flag-nepal_1f1f3-1f1f5',
  ':Nauru:': 'flag-nauru_1f1f3-1f1f7',
  ':Niue:': 'flag-niue_1f1f3-1f1fa',
  ':New_Zealand:': 'flag-new-zealand_1f1f3-1f1ff',
  ':Oman:': 'flag-oman_1f1f4-1f1f2',
  ':Panama:': 'flag-panama_1f1f5-1f1e6',
  ':Peru:': 'flag-peru_1f1f5-1f1ea',
  ':French_Polynesia:': 'flag-french-polynesia_1f1f5-1f1eb',
  ':Papua_New_Guinea:': 'flag-papua-new-guinea_1f1f5-1f1ec',
  ':Philippines:': 'flag-philippines_1f1f5-1f1ed',
  ':Pakistan:': 'flag-pakistan_1f1f5-1f1f0',
  ':Poland:': 'flag-poland_1f1f5-1f1f1',
  ':St._Pierre_&amp;_Miquelon:': 'flag-st-pierre-miquelon_1f1f5-1f1f2',
  ':Pitcairn_Islands:': 'flag-pitcairn-islands_1f1f5-1f1f3',
  ':Puerto_Rico:': 'flag-puerto-rico_1f1f5-1f1f7',
  ':Palestinian_Territories:': 'flag-palestinian-territories_1f1f5-1f1f8',
  ':Portugal:': 'flag-portugal_1f1f5-1f1f9',
  ':Palau:': 'flag-palau_1f1f5-1f1fc',
  ':Paraguay:': 'flag-paraguay_1f1f5-1f1fe',
  ':Qatar:': 'flag-qatar_1f1f6-1f1e6',
  ':Réunion:': 'flag-reunion_1f1f7-1f1ea',
  ':Romania:': 'flag-romania_1f1f7-1f1f4',
  ':Serbia:': 'flag-serbia_1f1f7-1f1f8',
  ':Russia:': 'flag-russia_1f1f7-1f1fa',
  ':Rwanda:': 'flag-rwanda_1f1f7-1f1fc',
  ':Saudi_Arabia:': 'flag-saudi-arabia_1f1f8-1f1e6',
  ':Solomon_Islands:': 'flag-solomon-islands_1f1f8-1f1e7',
  ':Seychelles:': 'flag-seychelles_1f1f8-1f1e8',
  ':Sudan:': 'flag-sudan_1f1f8-1f1e9',
  ':Sweden:': 'flag-sweden_1f1f8-1f1ea',
  ':Singapore:': 'flag-singapore_1f1f8-1f1ec',
  ':St._Helena:': 'flag-st-helena_1f1f8-1f1ed',
  ':Slovenia:': 'flag-slovenia_1f1f8-1f1ee',
  ':Svalbard_&amp;_Jan_Mayen:': 'flag-svalbard-jan-mayen_1f1f8-1f1ef',
  ':Slovakia:': 'flag-slovakia_1f1f8-1f1f0',
  ':Sierra_Leone:': 'flag-sierra-leone_1f1f8-1f1f1',
  ':San_Marino:': 'flag-san-marino_1f1f8-1f1f2',
  ':Senegal:': 'flag-senegal_1f1f8-1f1f3',
  ':Somalia:': 'flag-somalia_1f1f8-1f1f4',
  ':Suriname:': 'flag-suriname_1f1f8-1f1f7',
  ':South_Sudan:': 'flag-south-sudan_1f1f8-1f1f8',
  ':São_Tomé_&amp;_Príncipe:': 'flag-sao-tome-principe_1f1f8-1f1f9',
  ':El_Salvador:': 'flag-el-salvador_1f1f8-1f1fb',
  ':Sint_Maarten:': 'flag-sint-maarten_1f1f8-1f1fd',
  ':Syria:': 'flag-syria_1f1f8-1f1fe',
  ':Eswatini:': 'flag-eswatini_1f1f8-1f1ff',
  ':Tristan_da_Cunha:': 'flag-tristan-da-cunha_1f1f9-1f1e6',
  ':Turks_&amp;_Caicos_Islands:': 'flag-turks-caicos-islands_1f1f9-1f1e8',
  ':Chad:': 'flag-chad_1f1f9-1f1e9',
  ':French_Southern_Territories:':
    'flag-french-southern-territories_1f1f9-1f1eb',
  ':Togo:': 'flag-togo_1f1f9-1f1ec',
  ':Thailand:': 'flag-thailand_1f1f9-1f1ed',
  ':Tajikistan:': 'flag-tajikistan_1f1f9-1f1ef',
  ':Tokelau:': 'flag-tokelau_1f1f9-1f1f0',
  ':Timor-Leste:': 'flag-timor-leste_1f1f9-1f1f1',
  ':Turkmenistan:': 'flag-turkmenistan_1f1f9-1f1f2',
  ':Tunisia:': 'flag-tunisia_1f1f9-1f1f3',
  ':Tonga:': 'flag-tonga_1f1f9-1f1f4',
  ':Turkey:': 'flag-turkey_1f1f9-1f1f7',
  ':Trinidad_&amp;_Tobago:': 'flag-trinidad-tobago_1f1f9-1f1f9',
  ':Tuvalu:': 'flag-tuvalu_1f1f9-1f1fb',
  ':Taiwan:': 'flag-taiwan_1f1f9-1f1fc',
  ':Tanzania:': 'flag-tanzania_1f1f9-1f1ff',
  ':Ukraine:': 'flag-ukraine_1f1fa-1f1e6',
  ':Uganda:': 'flag-uganda_1f1fa-1f1ec',
  ':U.S._Outlying_Islands:': 'flag-us-outlying-islands_1f1fa-1f1f2',
  ':United_Nations:': 'flag-united-nations_1f1fa-1f1f3',
  ':United_States:': 'flag-united-states_1f1fa-1f1f8',
  ':Uruguay:': 'flag-uruguay_1f1fa-1f1fe',
  ':Uzbekistan:': 'flag-uzbekistan_1f1fa-1f1ff',
  ':Vatican_City:': 'flag-vatican-city_1f1fb-1f1e6',
  ':St._Vincent_&amp;_Grenadines:': 'flag-st-vincent-grenadines_1f1fb-1f1e8',
  ':Venezuela:': 'flag-venezuela_1f1fb-1f1ea',
  ':British_Virgin_Islands:': 'flag-british-virgin-islands_1f1fb-1f1ec',
  ':U.S._Virgin_Islands:': 'flag-us-virgin-islands_1f1fb-1f1ee',
  ':Vietnam:': 'flag-vietnam_1f1fb-1f1f3',
  ':Vanuatu:': 'flag-vanuatu_1f1fb-1f1fa',
  ':Wallis_&amp;_Futuna:': 'flag-wallis-futuna_1f1fc-1f1eb',
  ':Samoa:': 'flag-samoa_1f1fc-1f1f8',
  ':Kosovo:': 'flag-kosovo_1f1fd-1f1f0',
  ':Yemen:': 'flag-yemen_1f1fe-1f1ea',
  ':Mayotte:': 'flag-mayotte_1f1fe-1f1f9',
  ':South_Africa:': 'flag-south-africa_1f1ff-1f1e6',
  ':Zambia:': 'flag-zambia_1f1ff-1f1f2',
  ':Zimbabwe:': 'flag-zimbabwe_1f1ff-1f1fc',
  ':England:': 'flag-england_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f',
  ':Scotland:': 'flag-scotland_1f3f4-e0067-e0062-e0073-e0063-e0074-e007f',
  ':Wales:': 'flag-wales_1f3f4-e0067-e0062-e0077-e006c-e0073-e007f',
  ':person_light_skin_tone_beard:': 'man-light-skin-tone-beard_1f9d4-1f3fb',
  ':person_medium-light_skin_tone_beard:':
    'man-medium-light-skin-tone-beard_1f9d4-1f3fc',
  ':person_medium_skin_tone_beard:': 'man-medium-skin-tone-beard_1f9d4-1f3fd',
  ':person_medium-dark_skin_tone_beard:':
    'man-medium-dark-skin-tone-beard_1f9d4-1f3fe',
  ':person_dark_skin_tone_beard:': 'man-dark-skin-tone-beard_1f9d4-1f3ff',
  ':person_red_hair:': 'woman-red-hair_1f469-200d-1f9b0',
  ':person_light_skin_tone_red_hair:':
    'woman-light-skin-tone-red-hair_1f469-1f3fb-200d-1f9b0',
  ':person_medium-light_skin_tone_red_hair:':
    'woman-medium-light-skin-tone-red-hair_1f469-1f3fc-200d-1f9b0',
  ':person_medium_skin_tone_red_hair:':
    'woman-medium-skin-tone-red-hair_1f469-1f3fd-200d-1f9b0',
  ':person_medium-dark_skin_tone_red_hair:':
    'woman-medium-dark-skin-tone-red-hair_1f469-1f3fe-200d-1f9b0',
  ':person_dark_skin_tone_red_hair:':
    'woman-dark-skin-tone-red-hair_1f469-1f3ff-200d-1f9b0',
  ':person_curly_hair:': 'woman-curly-hair_1f469-200d-1f9b1',
  ':person_light_skin_tone_curly_hair:':
    'woman-light-skin-tone-curly-hair_1f469-1f3fb-200d-1f9b1',
  ':person_medium-light_skin_tone_curly_hair:':
    'woman-medium-light-skin-tone-curly-hair_1f469-1f3fc-200d-1f9b1',
  ':person_medium_skin_tone_curly_hair:':
    'woman-medium-skin-tone-curly-hair_1f469-1f3fd-200d-1f9b1',
  ':person_medium-dark_skin_tone_curly_hair:':
    'woman-medium-dark-skin-tone-curly-hair_1f469-1f3fe-200d-1f9b1',
  ':person_dark_skin_tone_curly_hair:':
    'woman-dark-skin-tone-curly-hair_1f469-1f3ff-200d-1f9b1',
  ':person_white_hair:': 'woman-white-hair_1f469-200d-1f9b3',
  ':person_light_skin_tone_white_hair:':
    'woman-light-skin-tone-white-hair_1f469-1f3fb-200d-1f9b3',
  ':person_medium-light_skin_tone_white_hair:':
    'woman-medium-light-skin-tone-white-hair_1f469-1f3fc-200d-1f9b3',
  ':person_medium_skin_tone_white_hair:':
    'woman-medium-skin-tone-white-hair_1f469-1f3fd-200d-1f9b3',
  ':person_medium-dark_skin_tone_white_hair:':
    'woman-medium-dark-skin-tone-white-hair_1f469-1f3fe-200d-1f9b3',
  ':person_dark_skin_tone_white_hair:':
    'woman-dark-skin-tone-white-hair_1f469-1f3ff-200d-1f9b3',
  ':person_bald:': 'woman-bald_1f469-200d-1f9b2',
  ':person_light_skin_tone_bald:':
    'woman-light-skin-tone-bald_1f469-1f3fb-200d-1f9b2',
  ':person_medium-light_skin_tone_bald:':
    'woman-medium-light-skin-tone-bald_1f469-1f3fc-200d-1f9b2',
  ':person_medium_skin_tone_bald:':
    'woman-medium-skin-tone-bald_1f469-1f3fd-200d-1f9b2',
  ':person_medium-dark_skin_tone_bald:':
    'woman-medium-dark-skin-tone-bald_1f469-1f3fe-200d-1f9b2',
  ':person_dark_skin_tone_bald:':
    'woman-dark-skin-tone-bald_1f469-1f3ff-200d-1f9b2',
  ':health_worker:': 'woman-health-worker_1f469-200d-2695-fe0f',
  ':health_worker_light_skin_tone:':
    'woman-health-worker-light-skin-tone_1f469-1f3fb-200d-2695-fe0f',
  ':health_worker_medium-light_skin_tone:':
    'woman-health-worker-medium-light-skin-tone_1f469-1f3fc-200d-2695-fe0f',
  ':health_worker_medium_skin_tone:':
    'woman-health-worker-medium-skin-tone_1f469-1f3fd-200d-2695-fe0f',
  ':health_worker_medium-dark_skin_tone:':
    'woman-health-worker-medium-dark-skin-tone_1f469-1f3fe-200d-2695-fe0f',
  ':health_worker_dark_skin_tone:':
    'woman-health-worker-dark-skin-tone_1f469-1f3ff-200d-2695-fe0f',
  ':student:': 'woman-student_1f469-200d-1f393',
  ':student_light_skin_tone:':
    'woman-student-light-skin-tone_1f469-1f3fb-200d-1f393',
  ':student_medium-light_skin_tone:':
    'woman-student-medium-light-skin-tone_1f469-1f3fc-200d-1f393',
  ':student_medium_skin_tone:':
    'woman-student-medium-skin-tone_1f469-1f3fd-200d-1f393',
  ':student_medium-dark_skin_tone:':
    'woman-student-medium-dark-skin-tone_1f469-1f3fe-200d-1f393',
  ':student_dark_skin_tone:':
    'woman-student-dark-skin-tone_1f469-1f3ff-200d-1f393',
  ':teacher:': 'woman-teacher_1f469-200d-1f3eb',
  ':teacher_light_skin_tone:':
    'woman-teacher-light-skin-tone_1f469-1f3fb-200d-1f3eb',
  ':teacher_medium-light_skin_tone:':
    'woman-teacher-medium-light-skin-tone_1f469-1f3fc-200d-1f3eb',
  ':teacher_medium_skin_tone:':
    'woman-teacher-medium-skin-tone_1f469-1f3fd-200d-1f3eb',
  ':teacher_medium-dark_skin_tone:':
    'woman-teacher-medium-dark-skin-tone_1f469-1f3fe-200d-1f3eb',
  ':teacher_dark_skin_tone:':
    'woman-teacher-dark-skin-tone_1f469-1f3ff-200d-1f3eb',
  ':judge:': 'woman-judge_1f469-200d-2696-fe0f',
  ':judge_light_skin_tone:':
    'woman-judge-light-skin-tone_1f469-1f3fb-200d-2696-fe0f',
  ':judge_medium-light_skin_tone:':
    'woman-judge-medium-light-skin-tone_1f469-1f3fc-200d-2696-fe0f',
  ':judge_medium_skin_tone:':
    'woman-judge-medium-skin-tone_1f469-1f3fd-200d-2696-fe0f',
  ':judge_medium-dark_skin_tone:':
    'woman-judge-medium-dark-skin-tone_1f469-1f3fe-200d-2696-fe0f',
  ':judge_dark_skin_tone:':
    'woman-judge-dark-skin-tone_1f469-1f3ff-200d-2696-fe0f',
  ':farmer:': 'woman-farmer_1f469-200d-1f33e',
  ':farmer_light_skin_tone:':
    'woman-farmer-light-skin-tone_1f469-1f3fb-200d-1f33e',
  ':farmer_medium-light_skin_tone:':
    'woman-farmer-medium-light-skin-tone_1f469-1f3fc-200d-1f33e',
  ':farmer_medium_skin_tone:':
    'woman-farmer-medium-skin-tone_1f469-1f3fd-200d-1f33e',
  ':farmer_medium-dark_skin_tone:':
    'woman-farmer-medium-dark-skin-tone_1f469-1f3fe-200d-1f33e',
  ':farmer_dark_skin_tone:':
    'woman-farmer-dark-skin-tone_1f469-1f3ff-200d-1f33e',
  ':cook:': 'woman-cook_1f469-200d-1f373',
  ':cook_light_skin_tone:': 'woman-cook-light-skin-tone_1f469-1f3fb-200d-1f373',
  ':cook_medium-light_skin_tone:':
    'woman-cook-medium-light-skin-tone_1f469-1f3fc-200d-1f373',
  ':cook_medium_skin_tone:':
    'woman-cook-medium-skin-tone_1f469-1f3fd-200d-1f373',
  ':cook_medium-dark_skin_tone:':
    'woman-cook-medium-dark-skin-tone_1f469-1f3fe-200d-1f373',
  ':cook_dark_skin_tone:': 'woman-cook-dark-skin-tone_1f469-1f3ff-200d-1f373',
  ':mechanic:': 'woman-mechanic_1f469-200d-1f527',
  ':mechanic_light_skin_tone:':
    'woman-mechanic-light-skin-tone_1f469-1f3fb-200d-1f527',
  ':mechanic_medium-light_skin_tone:':
    'woman-mechanic-medium-light-skin-tone_1f469-1f3fc-200d-1f527',
  ':mechanic_medium_skin_tone:':
    'woman-mechanic-medium-skin-tone_1f469-1f3fd-200d-1f527',
  ':mechanic_medium-dark_skin_tone:':
    'woman-mechanic-medium-dark-skin-tone_1f469-1f3fe-200d-1f527',
  ':mechanic_dark_skin_tone:':
    'woman-mechanic-dark-skin-tone_1f469-1f3ff-200d-1f527',
  ':factory_worker:': 'woman-factory-worker_1f469-200d-1f3ed',
  ':factory_worker_light_skin_tone:':
    'woman-factory-worker-light-skin-tone_1f469-1f3fb-200d-1f3ed',
  ':factory_worker_medium-light_skin_tone:':
    'woman-factory-worker-medium-light-skin-tone_1f469-1f3fc-200d-1f3ed',
  ':factory_worker_medium_skin_tone:':
    'woman-factory-worker-medium-skin-tone_1f469-1f3fd-200d-1f3ed',
  ':factory_worker_medium-dark_skin_tone:':
    'woman-factory-worker-medium-dark-skin-tone_1f469-1f3fe-200d-1f3ed',
  ':factory_worker_dark_skin_tone:':
    'woman-factory-worker-dark-skin-tone_1f469-1f3ff-200d-1f3ed',
  ':office_worker:': 'woman-office-worker_1f469-200d-1f4bc',
  ':office_worker_light_skin_tone:':
    'woman-office-worker-light-skin-tone_1f469-1f3fb-200d-1f4bc',
  ':office_worker_medium-light_skin_tone:':
    'woman-office-worker-medium-light-skin-tone_1f469-1f3fc-200d-1f4bc',
  ':office_worker_medium_skin_tone:':
    'woman-office-worker-medium-skin-tone_1f469-1f3fd-200d-1f4bc',
  ':office_worker_medium-dark_skin_tone:':
    'woman-office-worker-medium-dark-skin-tone_1f469-1f3fe-200d-1f4bc',
  ':office_worker_dark_skin_tone:':
    'woman-office-worker-dark-skin-tone_1f469-1f3ff-200d-1f4bc',
  ':scientist:': 'woman-scientist_1f469-200d-1f52c',
  ':scientist_light_skin_tone:':
    'woman-scientist-light-skin-tone_1f469-1f3fb-200d-1f52c',
  ':scientist_medium-light_skin_tone:':
    'woman-scientist-medium-light-skin-tone_1f469-1f3fc-200d-1f52c',
  ':scientist_medium_skin_tone:':
    'woman-scientist-medium-skin-tone_1f469-1f3fd-200d-1f52c',
  ':scientist_medium-dark_skin_tone:':
    'woman-scientist-medium-dark-skin-tone_1f469-1f3fe-200d-1f52c',
  ':scientist_dark_skin_tone:':
    'woman-scientist-dark-skin-tone_1f469-1f3ff-200d-1f52c',
  ':technologist:': 'woman-technologist_1f469-200d-1f4bb',
  ':technologist_light_skin_tone:':
    'woman-technologist-light-skin-tone_1f469-1f3fb-200d-1f4bb',
  ':technologist_medium-light_skin_tone:':
    'woman-technologist-medium-light-skin-tone_1f469-1f3fc-200d-1f4bb',
  ':technologist_medium_skin_tone:':
    'woman-technologist-medium-skin-tone_1f469-1f3fd-200d-1f4bb',
  ':technologist_medium-dark_skin_tone:':
    'woman-technologist-medium-dark-skin-tone_1f469-1f3fe-200d-1f4bb',
  ':technologist_dark_skin_tone:':
    'woman-technologist-dark-skin-tone_1f469-1f3ff-200d-1f4bb',
  ':singer:': 'woman-singer_1f469-200d-1f3a4',
  ':singer_light_skin_tone:':
    'woman-singer-light-skin-tone_1f469-1f3fb-200d-1f3a4',
  ':singer_medium-light_skin_tone:':
    'woman-singer-medium-light-skin-tone_1f469-1f3fc-200d-1f3a4',
  ':singer_medium_skin_tone:':
    'woman-singer-medium-skin-tone_1f469-1f3fd-200d-1f3a4',
  ':singer_medium-dark_skin_tone:':
    'woman-singer-medium-dark-skin-tone_1f469-1f3fe-200d-1f3a4',
  ':singer_dark_skin_tone:':
    'woman-singer-dark-skin-tone_1f469-1f3ff-200d-1f3a4',
  ':artist:': 'woman-artist_1f469-200d-1f3a8',
  ':artist_light_skin_tone:':
    'woman-artist-light-skin-tone_1f469-1f3fb-200d-1f3a8',
  ':artist_medium-light_skin_tone:':
    'woman-artist-medium-light-skin-tone_1f469-1f3fc-200d-1f3a8',
  ':artist_medium_skin_tone:':
    'woman-artist-medium-skin-tone_1f469-1f3fd-200d-1f3a8',
  ':artist_medium-dark_skin_tone:':
    'woman-artist-medium-dark-skin-tone_1f469-1f3fe-200d-1f3a8',
  ':artist_dark_skin_tone:':
    'woman-artist-dark-skin-tone_1f469-1f3ff-200d-1f3a8',
  ':pilot:': 'woman-pilot_1f469-200d-2708-fe0f',
  ':pilot_light_skin_tone:':
    'woman-pilot-light-skin-tone_1f469-1f3fb-200d-2708-fe0f',
  ':pilot_medium-light_skin_tone:':
    'woman-pilot-medium-light-skin-tone_1f469-1f3fc-200d-2708-fe0f',
  ':pilot_medium_skin_tone:':
    'woman-pilot-medium-skin-tone_1f469-1f3fd-200d-2708-fe0f',
  ':pilot_medium-dark_skin_tone:':
    'woman-pilot-medium-dark-skin-tone_1f469-1f3fe-200d-2708-fe0f',
  ':pilot_dark_skin_tone:':
    'woman-pilot-dark-skin-tone_1f469-1f3ff-200d-2708-fe0f',
  ':astronaut:': 'woman-astronaut_1f469-200d-1f680',
  ':astronaut_light_skin_tone:':
    'woman-astronaut-light-skin-tone_1f469-1f3fb-200d-1f680',
  ':astronaut_medium-light_skin_tone:':
    'woman-astronaut-medium-light-skin-tone_1f469-1f3fc-200d-1f680',
  ':astronaut_medium_skin_tone:':
    'woman-astronaut-medium-skin-tone_1f469-1f3fd-200d-1f680',
  ':astronaut_medium-dark_skin_tone:':
    'woman-astronaut-medium-dark-skin-tone_1f469-1f3fe-200d-1f680',
  ':astronaut_dark_skin_tone:':
    'woman-astronaut-dark-skin-tone_1f469-1f3ff-200d-1f680',
  ':firefighter:': 'woman-firefighter_1f469-200d-1f692',
  ':firefighter_light_skin_tone:':
    'woman-firefighter-light-skin-tone_1f469-1f3fb-200d-1f692',
  ':firefighter_medium-light_skin_tone:':
    'woman-firefighter-medium-light-skin-tone_1f469-1f3fc-200d-1f692',
  ':firefighter_medium_skin_tone:':
    'woman-firefighter-medium-skin-tone_1f469-1f3fd-200d-1f692',
  ':firefighter_medium-dark_skin_tone:':
    'woman-firefighter-medium-dark-skin-tone_1f469-1f3fe-200d-1f692',
  ':firefighter_dark_skin_tone:':
    'woman-firefighter-dark-skin-tone_1f469-1f3ff-200d-1f692',
  ':person_with_white_cane:': 'man-with-white-cane_1f468-200d-1f9af',
  ':person_with_white_cane_light_skin_tone:':
    'man-with-white-cane-light-skin-tone_1f468-1f3fb-200d-1f9af',
  ':person_with_white_cane_medium-light_skin_tone:':
    'man-with-white-cane-medium-light-skin-tone_1f468-1f3fc-200d-1f9af',
  ':person_with_white_cane_medium_skin_tone:':
    'man-with-white-cane-medium-skin-tone_1f468-1f3fd-200d-1f9af',
  ':person_with_white_cane_medium-dark_skin_tone:':
    'man-with-white-cane-medium-dark-skin-tone_1f468-1f3fe-200d-1f9af',
  ':person_with_white_cane_dark_skin_tone:':
    'man-with-white-cane-dark-skin-tone_1f468-1f3ff-200d-1f9af',
  ':person_in_motorized_wheelchair:':
    'man-in-motorized-wheelchair_1f468-200d-1f9bc',
  ':person_in_motorized_wheelchair_light_skin_tone:':
    'man-in-motorized-wheelchair-light-skin-tone_1f468-1f3fb-200d-1f9bc',
  ':person_in_motorized_wheelchair_medium-light_skin_tone:':
    'man-in-motorized-wheelchair-medium-light-skin-tone_1f468-1f3fc-200d-1f9bc',
  ':person_in_motorized_wheelchair_medium_skin_tone:':
    'man-in-motorized-wheelchair-medium-skin-tone_1f468-1f3fd-200d-1f9bc',
  ':person_in_motorized_wheelchair_medium-dark_skin_tone:':
    'man-in-motorized-wheelchair-medium-dark-skin-tone_1f468-1f3fe-200d-1f9bc',
  ':person_in_motorized_wheelchair_dark_skin_tone:':
    'man-in-motorized-wheelchair-dark-skin-tone_1f468-1f3ff-200d-1f9bc',
  ':person_in_manual_wheelchair:': 'man-in-manual-wheelchair_1f468-200d-1f9bd',
  ':person_in_manual_wheelchair_light_skin_tone:':
    'man-in-manual-wheelchair-light-skin-tone_1f468-1f3fb-200d-1f9bd',
  ':person_in_manual_wheelchair_medium-light_skin_tone:':
    'man-in-manual-wheelchair-medium-light-skin-tone_1f468-1f3fc-200d-1f9bd',
  ':person_in_manual_wheelchair_medium_skin_tone:':
    'man-in-manual-wheelchair-medium-skin-tone_1f468-1f3fd-200d-1f9bd',
  ':person_in_manual_wheelchair_medium-dark_skin_tone:':
    'man-in-manual-wheelchair-medium-dark-skin-tone_1f468-1f3fe-200d-1f9bd',
  ':person_in_manual_wheelchair_dark_skin_tone:':
    'man-in-manual-wheelchair-dark-skin-tone_1f468-1f3ff-200d-1f9bd',
  ':woman_surfing:': 'man-surfing_1f3c4-200d-2642-fe0f',
  ':woman_surfing_light_skin_tone:':
    'man-surfing-light-skin-tone_1f3c4-1f3fb-200d-2642-fe0f',
  ':woman_surfing_medium-light_skin_tone:':
    'man-surfing-medium-light-skin-tone_1f3c4-1f3fc-200d-2642-fe0f',
  ':woman_surfing_medium_skin_tone:':
    'man-surfing-medium-skin-tone_1f3c4-1f3fd-200d-2642-fe0f',
  ':woman_surfing_medium-dark_skin_tone:':
    'man-surfing-medium-dark-skin-tone_1f3c4-1f3fe-200d-2642-fe0f',
  ':woman_surfing_dark_skin_tone:':
    'man-surfing-dark-skin-tone_1f3c4-1f3ff-200d-2642-fe0f',
  ':woman_biking:': 'woman-mountain-biking_1f6b5-200d-2640-fe0f',
}

const emojiFilenameToUnicode = (filename: string): string => {
  const codepoints = filename.split('_').at(-1)
  if (!codepoints) return ''

  return codepoints
    .split('-')
    .map((codepoint) => String.fromCodePoint(Number.parseInt(codepoint, 16)))
    .join('')
}

export const replaceEmojiShortcodes = (
  message: string | null | undefined
): string => {
  if (!message || !message.includes(':')) return message ?? ''

  return message.replace(emojiReg, (shortcode) => {
    const filename = EmojiDict[shortcode]
    return filename ? emojiFilenameToUnicode(filename) : shortcode
  })
}
