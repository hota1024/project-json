export enum OPCode {
  MotionMovesteps = 'motion_movesteps',
  MotionTurnright = 'motion_turnright',
  MotionTurnleft = 'motion_turnleft',
  MotionGoto = 'motion_goto',
  MotionGotoMenu = 'motion_goto_menu',
  MotionGotoxy = 'motion_gotoxy',
  MotionGlideto = 'motion_glideto',
  MotionGlidetoMenu = 'motion_glideto_menu',
  MotionGlidesecstoxy = 'motion_glidesecstoxy',
  MotionPointindirection = 'motion_pointindirection',
  MotionPointtowards = 'motion_pointtowards',
  MotionPointtowardsMenu = 'motion_pointtowards_menu',
  MotionChangexby = 'motion_changexby',
  MotionSetx = 'motion_setx',
  MotionChangeyby = 'motion_changeyby',
  MotionSety = 'motion_sety',
  MotionIfonedgebounce = 'motion_ifonedgebounce',
  MotionSetrotationstyle = 'motion_setrotationstyle',
  MotionXposition = 'motion_xposition',
  MotionYposition = 'motion_yposition',
  MotionDirection = 'motion_direction',
  LooksSayforsecs = 'looks_sayforsecs',
  LooksSay = 'looks_say',
  LooksThinkforsecs = 'looks_thinkforsecs',
  LooksThink = 'looks_think',
  LooksSwitchcostumeto = 'looks_switchcostumeto',
  LooksCostume = 'looks_costume',
  LooksNextcostume = 'looks_nextcostume',
  LooksSwitchbackdropto = 'looks_switchbackdropto',
  LooksBackdrops = 'looks_backdrops',
  LooksNextbackdrop = 'looks_nextbackdrop',
  LooksChangesizeby = 'looks_changesizeby',
  LooksSetsizeto = 'looks_setsizeto',
  LooksChangeeffectby = 'looks_changeeffectby',
  LooksSeteffectto = 'looks_seteffectto',
  LooksCleargraphiceffects = 'looks_cleargraphiceffects',
  LooksShow = 'looks_show',
  LooksHide = 'looks_hide',
  LooksGotofrontback = 'looks_gotofrontback',
  LooksGoforwardbackwardlayers = 'looks_goforwardbackwardlayers',
  LooksCostumenumbername = 'looks_costumenumbername',
  LooksBackdropnumbername = 'looks_backdropnumbername',
  LooksSize = 'looks_size',
  SoundPlayuntildone = 'sound_playuntildone',
  SoundSoundsMenu = 'sound_sounds_menu',
  SoundPlay = 'sound_play',
  SoundStopallsounds = 'sound_stopallsounds',
  SoundChangeeffectby = 'sound_changeeffectby',
  SoundSeteffectto = 'sound_seteffectto',
  SoundCleareffects = 'sound_cleareffects',
  SoundChangevolumeby = 'sound_changevolumeby',
  SoundSetvolumeto = 'sound_setvolumeto',
  SoundVolume = 'sound_volume',
  EventWhenflagclicked = 'event_whenflagclicked',
  EventWhenkeypressed = 'event_whenkeypressed',
  EventWhenthisspriteclicked = 'event_whenthisspriteclicked',
  EventWhenbackdropswitchesto = 'event_whenbackdropswitchesto',
  EventWhengreaterthan = 'event_whengreaterthan',
  EventWhenbroadcastreceived = 'event_whenbroadcastreceived',
  EventBroadcast = 'event_broadcast',
  EventBroadcastandwait = 'event_broadcastandwait',
  ControlWait = 'control_wait',
  ControlRepeat = 'control_repeat',
  ControlForever = 'control_forever',
  ControlIf = 'control_if',
  ControlIfElse = 'control_if_else',
  ControlWaitUntil = 'control_wait_until',
  ControlRepeatUntil = 'control_repeat_until',
  ControlStop = 'control_stop',
  ControlStartAsClone = 'control_start_as_clone',
  ControlCreateCloneOf = 'control_create_clone_of',
  ControlCreateCloneOfMenu = 'control_create_clone_of_menu',
  ControlDeleteThisClone = 'control_delete_this_clone',
  SensingTouchingobject = 'sensing_touchingobject',
  SensingTouchingobjectmenu = 'sensing_touchingobjectmenu',
  SensingTouchingcolor = 'sensing_touchingcolor',
  SensingColoristouchingcolor = 'sensing_coloristouchingcolor',
  SensingDistanceto = 'sensing_distanceto',
  SensingDistancetomenu = 'sensing_distancetomenu',
  SensingAskandwait = 'sensing_askandwait',
  SensingAnswer = 'sensing_answer',
  SensingKeypressed = 'sensing_keypressed',
  SensingKeyoptions = 'sensing_keyoptions',
  SensingMousedown = 'sensing_mousedown',
  SensingMousex = 'sensing_mousex',
  SensingMousey = 'sensing_mousey',
  SensingSetdragmode = 'sensing_setdragmode',
  SensingLoudness = 'sensing_loudness',
  SensingTimer = 'sensing_timer',
  SensingResettimer = 'sensing_resettimer',
  SensingOf = 'sensing_of',
  SensingOfObjectMenu = 'sensing_of_object_menu',
  SensingCurrent = 'sensing_current',
  SensingDayssince2000 = 'sensing_dayssince2000',
  SensingUsername = 'sensing_username',
  OperatorAdd = 'operator_add',
  OperatorSubtract = 'operator_subtract',
  OperatorMultiply = 'operator_multiply',
  OperatorDivide = 'operator_divide',
  OperatorRandom = 'operator_random',
  OperatorGt = 'operator_gt',
  OperatorLt = 'operator_lt',
  OperatorEquals = 'operator_equals',
  OperatorAnd = 'operator_and',
  OperatorOr = 'operator_or',
  OperatorNot = 'operator_not',
  OperatorJoin = 'operator_join',
  OperatorLetterOf = 'operator_letter_of',
  OperatorLength = 'operator_length',
  OperatorContains = 'operator_contains',
  OperatorMod = 'operator_mod',
  OperatorRound = 'operator_round',
  OperatorMathop = 'operator_mathop',
  DataSetvariableto = 'data_setvariableto',
  DataChangevariableby = 'data_changevariableby',
  DataShowvariable = 'data_showvariable',
  DataHidevariable = 'data_hidevariable',
  DataAddtolist = 'data_addtolist',
  DataDeleteoflist = 'data_deleteoflist',
  DataDeletealloflist = 'data_deletealloflist',
  DataInsertatlist = 'data_insertatlist',
  DataReplaceitemoflist = 'data_replaceitemoflist',
  DataItemoflist = 'data_itemoflist',
  DataItemnumoflist = 'data_itemnumoflist',
  DataLengthoflist = 'data_lengthoflist',
  DataListcontainsitem = 'data_listcontainsitem',
  DataShowlist = 'data_showlist',
  DataHidelist = 'data_hidelist',
  DataListcontents = 'data_listcontents',
  DataVariable = 'data_variable',
  ProceduresDefinition = 'procedures_definition',
  ProceduresPrototype = 'procedures_prototype',
  ProceduresCall = 'procedures_call',
  MusicPlayDrumForBeats = 'music_playDrumForBeats',
  MusicMenuDrum = 'music_menu_DRUM',
  MusicRestForBeats = 'music_restForBeats',
  MusicPlayNoteForBeats = 'music_playNoteForBeats',
  Note = 'note',
  MusicSetInstrument = 'music_setInstrument',
  MusicMenuInstrument = 'music_menu_INSTRUMENT',
  MusicSetTempo = 'music_setTempo',
  MusicChangeTempo = 'music_changeTempo',
  MusicGetTempo = 'music_getTempo',
  PenClear = 'pen_clear',
  PenStamp = 'pen_stamp',
  PenPenDown = 'pen_penDown',
  PenPenUp = 'pen_penUp',
  PenSetPenColorToColor = 'pen_setPenColorToColor',
  PenChangePenColorParamBy = 'pen_changePenColorParamBy',
  PenMenuColorParam = 'pen_menu_colorParam',
  PenSetPenColorParamTo = 'pen_setPenColorParamTo',
  PenChangePenSizeBy = 'pen_changePenSizeBy',
  PenSetPenSizeTo = 'pen_setPenSizeTo',
  VideoSensingWhenMotionGreaterThan = 'videoSensing_whenMotionGreaterThan',
  VideoSensingVideoOn = 'videoSensing_videoOn',
  VideoSensingMenuAttribute = 'videoSensing_menu_ATTRIBUTE',
  VideoSensingMenuSubject = 'videoSensing_menu_SUBJECT',
  VideoSensingVideoToggle = 'videoSensing_videoToggle',
  VideoSensingMenuVideoState = 'videoSensing_menu_VIDEO_STATE',
  VideoSensingSetVideoTransparency = 'videoSensing_setVideoTransparency',
  Text2speechSpeakAndWait = 'text2speech_speakAndWait',
  Text2speechSetVoice = 'text2speech_setVoice',
  Text2speechMenuVoices = 'text2speech_menu_voices',
  Text2speechSetLanguage = 'text2speech_setLanguage',
  Text2speechMenuLanguages = 'text2speech_menu_languages',
  TranslateGetTranslate = 'translate_getTranslate',
  TranslateMenuLanguages = 'translate_menu_languages',
  TranslateGetViewerLanguage = 'translate_getViewerLanguage',
  MakeymakeyWhenMakeyKeyPressed = 'makeymakey_whenMakeyKeyPressed',
  MakeymakeyMenuKey = 'makeymakey_menu_KEY',
  MakeymakeyWhenCodePressed = 'makeymakey_whenCodePressed',
  MakeymakeyMenuSequence = 'makeymakey_menu_SEQUENCE',
  MicrobitWhenButtonPressed = 'microbit_whenButtonPressed',
  MicrobitMenuButtons = 'microbit_menu_buttons',
  MicrobitIsButtonPressed = 'microbit_isButtonPressed',
  MicrobitWhenGesture = 'microbit_whenGesture',
  MicrobitMenuGestures = 'microbit_menu_gestures',
  MicrobitDisplaySymbol = 'microbit_displaySymbol',
  Matrix = 'matrix',
  MicrobitDisplayText = 'microbit_displayText',
  MicrobitDisplayClear = 'microbit_displayClear',
  MicrobitWhenTilted = 'microbit_whenTilted',
  MicrobitMenuTiltDirectionAny = 'microbit_menu_tiltDirectionAny',
  MicrobitIsTilted = 'microbit_isTilted',
  MicrobitGetTiltAngle = 'microbit_getTiltAngle',
  MicrobitMenuTiltDirection = 'microbit_menu_tiltDirection',
  MicrobitWhenPinConnected = 'microbit_whenPinConnected',
  MicrobitMenuTouchPins = 'microbit_menu_touchPins',
  Ev3MotorTurnClockwise = 'ev3_motorTurnClockwise',
  Ev3MenuMotorPorts = 'ev3_menu_motorPorts',
  Ev3MotorTurnCounterClockwise = 'ev3_motorTurnCounterClockwise',
  Ev3MotorSetPower = 'ev3_motorSetPower',
  Ev3GetMotorPosition = 'ev3_getMotorPosition',
  Ev3WhenButtonPressed = 'ev3_whenButtonPressed',
  Ev3MenuSensorPorts = 'ev3_menu_sensorPorts',
  Ev3WhenDistanceLessThan = 'ev3_whenDistanceLessThan',
  Ev3WhenBrightnessLessThan = 'ev3_whenBrightnessLessThan',
  Ev3ButtonPressed = 'ev3_buttonPressed',
  Ev3GetDistance = 'ev3_getDistance',
  Ev3GetBrightness = 'ev3_getBrightness',
  Ev3Beep = 'ev3_beep',
  BoostMotorOnFor = 'boost_motorOnFor',
  BoostMenuMotorId = 'boost_menu_MOTOR_ID',
  BoostMotorOnForRotation = 'boost_motorOnForRotation',
  BoostMotorOn = 'boost_motorOn',
  BoostMotorOff = 'boost_motorOff',
  BoostSetMotorPower = 'boost_setMotorPower',
  BoostSetMotorDirection = 'boost_setMotorDirection',
  BoostMenuMotorDirection = 'boost_menu_MOTOR_DIRECTION',
  BoostGetMotorPosition = 'boost_getMotorPosition',
  BoostMenuMotorReporterId = 'boost_menu_MOTOR_REPORTER_ID',
  BoostWhenColor = 'boost_whenColor',
  BoostMenuColor = 'boost_menu_COLOR',
  BoostSeeingColor = 'boost_seeingColor',
  BoostWhenTilted = 'boost_whenTilted',
  BoostMenuTiltDirectionAny = 'boost_menu_TILT_DIRECTION_ANY',
  BoostGetTiltAngle = 'boost_getTiltAngle',
  BoostMenuTiltDirection = 'boost_menu_TILT_DIRECTION',
  BoostSetLightHue = 'boost_setLightHue',
  Wedo2MotorOnFor = 'wedo2_motorOnFor',
  Wedo2MenuMotorId = 'wedo2_menu_MOTOR_ID',
  Wedo2MotorOn = 'wedo2_motorOn',
  Wedo2MotorOff = 'wedo2_motorOff',
  Wedo2StartMotorPower = 'wedo2_startMotorPower',
  Wedo2SetMotorDirection = 'wedo2_setMotorDirection',
  Wedo2MenuMotorDirection = 'wedo2_menu_MOTOR_DIRECTION',
  Wedo2SetLightHue = 'wedo2_setLightHue',
  Wedo2WhenDistance = 'wedo2_whenDistance',
  Wedo2MenuOp = 'wedo2_menu_OP',
  Wedo2WhenTilted = 'wedo2_whenTilted',
  Wedo2MenuTiltDirectionAny = 'wedo2_menu_TILT_DIRECTION_ANY',
  Wedo2GetDistance = 'wedo2_getDistance',
  Wedo2IsTilted = 'wedo2_isTilted',
  Wedo2GetTiltAngle = 'wedo2_getTiltAngle',
  Wedo2MenuTiltDirection = 'wedo2_menu_TILT_DIRECTION',
  GdxforWhenGesture = 'gdxfor_whenGesture',
  GdxforMenuGestureOptions = 'gdxfor_menu_gestureOptions',
  GdxforWhenForcePushedOrPulled = 'gdxfor_whenForcePushedOrPulled',
  GdxforMenuPushPullOptions = 'gdxfor_menu_pushPullOptions',
  GdxforGetForce = 'gdxfor_getForce',
  GdxforWhenTilted = 'gdxfor_whenTilted',
  GdxforMenuTiltAnyOptions = 'gdxfor_menu_tiltAnyOptions',
  GdxforIsTilted = 'gdxfor_isTilted',
  GdxforGetTilt = 'gdxfor_getTilt',
  GdxforMenuTiltOptions = 'gdxfor_menu_tiltOptions',
  GdxforIsFreeFalling = 'gdxfor_isFreeFalling',
  GdxforGetSpinSpeed = 'gdxfor_getSpinSpeed',
  GdxforMenuAxisOptions = 'gdxfor_menu_axisOptions',
  GdxforGetAcceleration = 'gdxfor_getAcceleration'
}
