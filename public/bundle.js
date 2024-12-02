(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

function PriorityQ(comp) {
    if (!comp || comp.length !== 2) {
        throw 'a valid comparator function required';
    }
    this.comp = comp;
    this.items = [];
}

PriorityQ.prototype.push = function (item) {
    for (var i = 0; i < this.items.length; i++) {
        if (this.comp(item, this.items[i])) {
            this.items.splice(i, 0, item);
            return;
        }
    }
    this.items[i] = item;
};

PriorityQ.prototype.pop = function () {
    return this.items.shift();
};

PriorityQ.prototype.peek = function () {
    return this.items[0];
};

PriorityQ.prototype.size = function () {
    return this.items.length;
};

PriorityQ.prototype.clear = function () {
    this.items = [];
};

PriorityQ.prototype.isEmpty = function () {
    return this.items.length === 0;
};

module.exports.PriorityQ = PriorityQ;


},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getExperimentKeyUiId = exports.getToggleKeyPanelId = exports.ExperimentKey = exports.SELECTOR_BIOME_DEFAULT = undefined;

var _UiIdConstants = require("./UiIdConstants");

var SELECTOR_BIOME_DEFAULT = exports.SELECTOR_BIOME_DEFAULT = "BIOME_DEFAULT";
var ExperimentKey = exports.ExperimentKey = undefined;
(function (ExperimentKey) {
    ExperimentKey["FREE_MODE"] = "FREE_MODE";
    ExperimentKey["SELL_MODE"] = "SELL_MODE";
    ExperimentKey["NEW_ROUND"] = "NEW_ROUND";
    ExperimentKey["GAME_SPEED_MULTIPLIER"] = "GAME_SPEED_MULTIPLIER";
    ExperimentKey["PAUSE_GAME"] = "PAUSE_GAME";
})(ExperimentKey || (exports.ExperimentKey = ExperimentKey = {}));
var EXPERIMENT_KEY_TO_UI_ID_MAP = new Map([[ExperimentKey.FREE_MODE, _UiIdConstants.EXPERIMENT_FREE_MODE_CHECKBOX_UI_ID], [ExperimentKey.SELL_MODE, _UiIdConstants.EXPERIMENT_SELL_MODE_CHECKBOX_UI_ID], [ExperimentKey.NEW_ROUND, _UiIdConstants.EXPERIMENT_NEW_ROUND_BUTTON_UI_ID], [ExperimentKey.GAME_SPEED_MULTIPLIER, _UiIdConstants.EXPERIMENT_GAME_SPEED_MULTIPLIER_SELECTOR_UI_ID], [ExperimentKey.PAUSE_GAME, _UiIdConstants.EXPERIMENTS_PAUSE_GAME_BUTTON_UI_ID]]);
var getToggleKeyPanelId = exports.getToggleKeyPanelId = function getToggleKeyPanelId(experimentKey) {
    return EXPERIMENT_KEY_TO_UI_ID_MAP.get(experimentKey) + _UiIdConstants.EXPERIMENT_PANEL_SUFFIX;
};
var getExperimentKeyUiId = exports.getExperimentKeyUiId = function getExperimentKeyUiId(experimentKey) {
    return EXPERIMENT_KEY_TO_UI_ID_MAP.get(experimentKey);
};
// const UI_ID_TO_EXPERIMENT_KEY_MAP: Map<string, ExperimentKey> = createReverseMap(EXPERIMENT_KEY_TO_UI_ID_MAP, false);
// export const getExperimentKeyFromUiId = (uiId: string): string => {
//   return UI_ID_TO_EXPERIMENT_KEY_MAP.get(uiId);
// };

},{"./UiIdConstants":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.STATS_MINIMUM_PRESTIGE_MAP = exports.STATS_SMART_DECIMAL_PRINT_FORMAT = exports.STATS_PERCENTAGE_PRINT_FORMAT = exports.STATS_TIME_PRETTY_PRINT_FORMAT = exports.STATS_TO_UI_ID_MAP = exports.StatsKey = undefined;

var _UpgradeConstants = require("./UpgradeConstants");

var StatsKey = exports.StatsKey = undefined;
(function (StatsKey) {
    StatsKey["TOTAL_POINTS_EARNED"] = "TOTAL_POINTS_EARNED";
    StatsKey["TOTAL_POINTS_EARNED_FROM_TIES"] = "TOTAL_POINTS_EARNED_FROM_TIES";
    StatsKey["TOTAL_PAPER_EARNED"] = "TOTAL_PAPER_EARNED";
    StatsKey["TOTAL_SCISSORS_EARNED"] = "TOTAL_SCISSORS_EARNED";
    StatsKey["TOTAL_ROCKS_EARNED"] = "TOTAL_ROCKS_EARNED";
    StatsKey["TOTAL_SPOCKS_EARNED"] = "TOTAL_SPOCKS_EARNED";
    StatsKey["TOTAL_LIZARDS_EARNED"] = "TOTAL_LIZARDS_EARNED";
    StatsKey["TOTAL_WINS_WITH_PAPER"] = "TOTAL_WINS_WITH_PAPER";
    StatsKey["TOTAL_WINS_WITH_SCISSOR"] = "TOTAL_WINS_WITH_SCISSOR";
    StatsKey["TOTAL_WINS_WITH_ROCK"] = "TOTAL_WINS_WITH_ROCK";
    StatsKey["TOTAL_WINS_WITH_SPOCK"] = "TOTAL_WINS_WITH_SPOCK";
    StatsKey["TOTAL_WINS_WITH_LIZARD"] = "TOTAL_WINS_WITH_LIZARD";
    StatsKey["TOTAL_WINS"] = "TOTAL_WINS";
    StatsKey["TOTAL_TIES"] = "TOTAL_TIES";
    StatsKey["TOTAL_LOSSES"] = "TOTAL_LOSSES";
    StatsKey["LONGEST_STREAK"] = "LONGEST_STREAK";
    StatsKey["MULLIGANS_USED"] = "MULLIGANS_USED";
    StatsKey["HIGHEST_ROUND_POINTS"] = "HIGHEST_ROUND_POINTS";
    StatsKey["HIGHEST_SINGLE_GAME_POINTS"] = "HIGHEST_SINGLE_GAME_POINTS";
    StatsKey["TOTAL_TIME_PLAYED_IN_SECONDS"] = "TOTAL_TIME_PLAYED_IN_SECONDS";
    StatsKey["AVERAGE_POINTS_EARNED_PER_ROUND"] = "AVERAGE_POINTS_EARNED_PER_ROUND";
})(StatsKey || (exports.StatsKey = StatsKey = {}));
var STATS_TO_UI_ID_MAP = exports.STATS_TO_UI_ID_MAP = new Map([[StatsKey.AVERAGE_POINTS_EARNED_PER_ROUND, 'statsAvgPointsEarnedPerRound'], [StatsKey.TOTAL_POINTS_EARNED, 'statsTotalPointsEarned'], [StatsKey.TOTAL_POINTS_EARNED_FROM_TIES, 'statsTotalPointsEarnedFromTies'], [StatsKey.TOTAL_PAPER_EARNED, 'statsTotalPapersEarned'], [StatsKey.TOTAL_SCISSORS_EARNED, 'statsTotalScissorsEarned'], [StatsKey.TOTAL_ROCKS_EARNED, 'statsTotalRocksEarned'], [StatsKey.TOTAL_SPOCKS_EARNED, 'statsTotalSpocksEarned'], [StatsKey.TOTAL_LIZARDS_EARNED, 'statsTotalLizardsEarned'], [StatsKey.TOTAL_WINS_WITH_PAPER, 'statsTotalWinsWithPaper'], [StatsKey.TOTAL_WINS_WITH_SCISSOR, 'statsTotalWinsWithScissor'], [StatsKey.TOTAL_WINS_WITH_ROCK, 'statsTotalWinsWithRock'], [StatsKey.TOTAL_WINS_WITH_SPOCK, 'statsTotalWinsWithSpock'], [StatsKey.TOTAL_WINS_WITH_LIZARD, 'statsTotalWinsWithLizard'], [StatsKey.TOTAL_WINS, 'statsTotalWins'], [StatsKey.TOTAL_TIES, 'statsTotalTies'], [StatsKey.TOTAL_LOSSES, 'statsTotalLosses'], [StatsKey.LONGEST_STREAK, 'statsLongestStreak'], [StatsKey.MULLIGANS_USED, 'statsMulligansUsed'], [StatsKey.HIGHEST_ROUND_POINTS, 'statsHighestRoundPoints'], [StatsKey.HIGHEST_SINGLE_GAME_POINTS, 'statsHighestSingleGamePoints'], [StatsKey.TOTAL_TIME_PLAYED_IN_SECONDS, 'statsTotalTimePlayed']]);
var STATS_TIME_PRETTY_PRINT_FORMAT = exports.STATS_TIME_PRETTY_PRINT_FORMAT = new Set([StatsKey.TOTAL_TIME_PLAYED_IN_SECONDS]);
var STATS_PERCENTAGE_PRINT_FORMAT = exports.STATS_PERCENTAGE_PRINT_FORMAT = new Set([]);
var STATS_SMART_DECIMAL_PRINT_FORMAT = exports.STATS_SMART_DECIMAL_PRINT_FORMAT = new Set([StatsKey.AVERAGE_POINTS_EARNED_PER_ROUND]);
var STATS_MINIMUM_PRESTIGE_MAP = exports.STATS_MINIMUM_PRESTIGE_MAP = new Map([[StatsKey.TOTAL_LIZARDS_EARNED, _UpgradeConstants.LIZARD_REQUIRED_PRESTIGE_LEVEL], [StatsKey.TOTAL_WINS_WITH_LIZARD, _UpgradeConstants.LIZARD_REQUIRED_PRESTIGE_LEVEL], [StatsKey.TOTAL_SPOCKS_EARNED, _UpgradeConstants.SPOCK_REQUIRED_PRESTIGE_LEVEL], [StatsKey.TOTAL_WINS_WITH_SPOCK, _UpgradeConstants.SPOCK_REQUIRED_PRESTIGE_LEVEL]]);

},{"./UpgradeConstants":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// POINTS
var POINTS_UI_ID = exports.POINTS_UI_ID = "points";
var PAPER_POINTS_UI_ID = exports.PAPER_POINTS_UI_ID = "paperPoints";
var SCISSOR_POINTS_UI_ID = exports.SCISSOR_POINTS_UI_ID = "scissorPoints";
var ROCK_POINTS_UI_ID = exports.ROCK_POINTS_UI_ID = "rockPoints";
// TODO(GenericOption): Show/Hide UI IDs for points
var SPOCK_POINTS_UI_ID = exports.SPOCK_POINTS_UI_ID = "spockPoints";
var LIZARD_POINTS_UI_ID = exports.LIZARD_POINTS_UI_ID = "lizardPoints";
var SPOCK_POINTS_ROW_UI_ID = exports.SPOCK_POINTS_ROW_UI_ID = "spockPointsRow";
var LIZARD_POINTS_ROW_UI_ID = exports.LIZARD_POINTS_ROW_UI_ID = "lizardPointsRow";
// UPGRADES
var POINTS_HEADER_UI_ID = exports.POINTS_HEADER_UI_ID = "pointUpgradeHeader";
var PAPER_POINTS_HEADER_UI_ID = exports.PAPER_POINTS_HEADER_UI_ID = "paperUpgradeHeader";
var SCISSOR_POINTS_HEADER_UI_ID = exports.SCISSOR_POINTS_HEADER_UI_ID = "scissorUpgradeHeader";
var ROCK_POINTS_HEADER_UI_ID = exports.ROCK_POINTS_HEADER_UI_ID = "rockUpgradeHeader";
var SPOCK_POINTS_HEADER_UI_ID = exports.SPOCK_POINTS_HEADER_UI_ID = "spockUpgradeHeader";
var LIZARD_POINTS_HEADER_UI_ID = exports.LIZARD_POINTS_HEADER_UI_ID = "lizardUpgradeHeader";
// BOARD
var PLAYER_GAME_OPTION_RESULT_UI_ID = exports.PLAYER_GAME_OPTION_RESULT_UI_ID = "playerGameOptionResult";
var PLAYER_GAME_OPTION_CHOICE_UI_ID = exports.PLAYER_GAME_OPTION_CHOICE_UI_ID = "playerGameOptionChoice";
var BOT_GAME_OPTION_CHOICE_UI_ID = exports.BOT_GAME_OPTION_CHOICE_UI_ID = "botGameOptionChoice";
var ROUND_RESULT_UI_ID = exports.ROUND_RESULT_UI_ID = "roundResult";
var GAME_TIMER_UI_ID = exports.GAME_TIMER_UI_ID = "gameTimer";
var CUSTOM_SELECTION_DIV_UI_ID = exports.CUSTOM_SELECTION_DIV_UI_ID = "customSelectionDiv";
var AVERAGE_POINTS_EARNED_PER_ROUND_UI_ID = exports.AVERAGE_POINTS_EARNED_PER_ROUND_UI_ID = "averagePointsEarnedPerRound";
var POINTS_EARNED_IN_CURRENT_ROUND_UI_ID = exports.POINTS_EARNED_IN_CURRENT_ROUND_UI_ID = "pointsEarnedInCurrentRound";
var MAX_STREAK_IN_CURRENT_ROUND_UI_ID = exports.MAX_STREAK_IN_CURRENT_ROUND_UI_ID = "maxStreakInCurrentRound";
var WIN_TIE_LOSS_IN_CURRENT_ROUND_UI_ID = exports.WIN_TIE_LOSS_IN_CURRENT_ROUND_UI_ID = "winTieLossInCurrentRound";
var GAME_OPTION_STREAK_UI_ID = exports.GAME_OPTION_STREAK_UI_ID = "gameOptionStreak";
var GAME_OPTION_POINTS_PER_PLAY_UI_ID = exports.GAME_OPTION_POINTS_PER_PLAY_UI_ID = "gameOptionPoints";
// STATS
var STATS_TRIPOMETER_CHECKBOX_ID = exports.STATS_TRIPOMETER_CHECKBOX_ID = "statsTripometerDisplayCheckbox";
var STATS_AVERAGE_POINTS_PER_SECOND_UI_ID = exports.STATS_AVERAGE_POINTS_PER_SECOND_UI_ID = "statsAvgPointsEarnedPerSecond";
////////////
// OLDIES //
////////////
// MODALS
var CHANGE_LOG_BUTTON_ID = exports.CHANGE_LOG_BUTTON_ID = "changeLogButton";
var CHANGE_LOG_MODAL_ID = exports.CHANGE_LOG_MODAL_ID = "changeLogModal";
var CHANGE_LOG_MODAL_TEXT_ID = exports.CHANGE_LOG_MODAL_TEXT_ID = "changeLogText";
var CHANGE_LOG_MODAL_VERSION_ID = exports.CHANGE_LOG_MODAL_VERSION_ID = "changeLogCurrentVersion";
var CONFIRM_NEW_GAME_MODAL_ID = exports.CONFIRM_NEW_GAME_MODAL_ID = "newGameConfirmationModal";
var CONFIRM_NEW_GAME_MODAL_BUTTON_YES = exports.CONFIRM_NEW_GAME_MODAL_BUTTON_YES = "confirmNewGameButton";
var CONFIRM_NEW_GAME_MODAL_BUTTON_NO = exports.CONFIRM_NEW_GAME_MODAL_BUTTON_NO = "cancelNewGameButton";
var SETTINGS_MODAL_ID = exports.SETTINGS_MODAL_ID = "settingsModal";
var STATS_MODAL_ID = exports.STATS_MODAL_ID = "statsModal";
var HELP_MODAL_ID = exports.HELP_MODAL_ID = "helpModal";
var IMPORT_SAVE_MODAL_ID = exports.IMPORT_SAVE_MODAL_ID = "importSaveModal";
var CONTROLS_MODAL_ID = exports.CONTROLS_MODAL_ID = "controlsModal";
var PRESTIGE_MODAL_ID = exports.PRESTIGE_MODAL_ID = "prestigeModal";
var PRESTIGE_MODAL_RULES_UI_ID = exports.PRESTIGE_MODAL_RULES_UI_ID = "prestigeGameRulesDiv";
var SAVE_GAME_BUTTON_ID = exports.SAVE_GAME_BUTTON_ID = "manualSaveGameButton";
var SAVE_TOAST_MODAL_ID = exports.SAVE_TOAST_MODAL_ID = "saveToastModal";
var SAVE_VERSION_WARNING_MODAL_ID = exports.SAVE_VERSION_WARNING_MODAL_ID = "saveVersionWarningModal";
var GAME_RULES_MODAL_UI_ID = exports.GAME_RULES_MODAL_UI_ID = "gameRulesModal";
var GAME_RULES_MODAL_BUTTON_UI_ID = exports.GAME_RULES_MODAL_BUTTON_UI_ID = "gameRulesButton";
var GAME_RULES_MODAL_DIV_UI_ID = exports.GAME_RULES_MODAL_DIV_UI_ID = "gameRulesDiv";
// TOGGLES PANEL
var TOGGLES_PANEL_SUFFIX = exports.TOGGLES_PANEL_SUFFIX = "Panel";
var TOGGLES_ROOT_PANEL = exports.TOGGLES_ROOT_PANEL = "togglesPanel";
var TOGGLE_AUTO_MOVE_UI_ID = exports.TOGGLE_AUTO_MOVE_UI_ID = "toggleAutoMoveCheckbox";
var TOGGLE_MERGING_UI_ID = exports.TOGGLE_MERGING_UI_ID = "toggleMergingCheckbox";
var TOGGLE_SPLITS_UI_ID = exports.TOGGLE_SPLITS_UI_ID = "toggleSplitsCheckbox";
var TOGGLE_MARK_DEADENDS_UI_ID = exports.TOGGLE_MARK_DEADENDS_UI_ID = "toggleMarkDeadendsCheckbox";
var TOGGLE_EXTRA_MAZE_ENTRANCE_UI_ID = exports.TOGGLE_EXTRA_MAZE_ENTRANCE_UI_ID = "toggleExtraMazeEntranceCheckbox";
var TOGGLE_BOT_FRUSTRATION_UI_ID = exports.TOGGLE_BOT_FRUSTRATION_UI_ID = "toggleBotFrustrationCheckbox";
var TOGGLE_BOT_SMART_MERGE_UI_ID = exports.TOGGLE_BOT_SMART_MERGE_UI_ID = "toggleSmartMergeCheckbox";
var TOGGLE_PLAYER_WALL_PHASING_UI_ID = exports.TOGGLE_PLAYER_WALL_PHASING_UI_ID = "togglePlayerWallPhasingCheckbox";
// EXPERIMENTS PANEL
var EXPERIMENT_ROOT_PANEL = exports.EXPERIMENT_ROOT_PANEL = "experimentsPanel";
var EXPERIMENT_PANEL_SUFFIX = exports.EXPERIMENT_PANEL_SUFFIX = "Panel";
var EXPERIMENT_GAME_SPEED_MULTIPLIER_SELECTOR_UI_ID = exports.EXPERIMENT_GAME_SPEED_MULTIPLIER_SELECTOR_UI_ID = "experimentGameSpeedMultiplierSelector";
var EXPERIMENT_FREE_MODE_CHECKBOX_UI_ID = exports.EXPERIMENT_FREE_MODE_CHECKBOX_UI_ID = "experimentFreeModeCheckbox";
var EXPERIMENT_SELL_MODE_CHECKBOX_UI_ID = exports.EXPERIMENT_SELL_MODE_CHECKBOX_UI_ID = "experimentSellModeCheckbox";
var EXPERIMENT_NEW_ROUND_BUTTON_UI_ID = exports.EXPERIMENT_NEW_ROUND_BUTTON_UI_ID = "experimentNewRound";
var EXPERIMENTS_PAUSE_GAME_BUTTON_UI_ID = exports.EXPERIMENTS_PAUSE_GAME_BUTTON_UI_ID = "experimentPauseGameButton";
// SPEED RUN PANEL
var SPEED_RUN_BUY_ALL_AFFORDABLE_UPGRADES_UI_ID = exports.SPEED_RUN_BUY_ALL_AFFORDABLE_UPGRADES_UI_ID = "speedRunBuyAllAffordableUpgradesButton";
var SPEED_RUN_NEW_GAME_BUTTON_UI_ID = exports.SPEED_RUN_NEW_GAME_BUTTON_UI_ID = "speedRunNewGameButton";
var SPEED_RUN_RESET_CURRENT_PRESTIGE_UI_ID = exports.SPEED_RUN_RESET_CURRENT_PRESTIGE_UI_ID = "speedRunResetCurrentPrestige";
var SPEED_RUN_NEXT_PRESTIGE_UI_ID = exports.SPEED_RUN_NEXT_PRESTIGE_UI_ID = "speedRunNextPrestige";
var SPEED_RUN_EXECUTE_BUTTON_UI_ID = exports.SPEED_RUN_EXECUTE_BUTTON_UI_ID = "speedRunExecuteButton";
var SPEED_RUN_ROUND_LIMIT_SELECTOR_UI_ID = exports.SPEED_RUN_ROUND_LIMIT_SELECTOR_UI_ID = "speedRunRoundLimitSelector";
var SPEED_RUN_UPGRADE_RESULTS_UI_ID = exports.SPEED_RUN_UPGRADE_RESULTS_UI_ID = "speedRunUpgradeResults";
var SPEED_RUN_AVG_POINTS_RESULTS_UI_ID = exports.SPEED_RUN_AVG_POINTS_RESULTS_UI_ID = "speedRunAvgPointsResults";
var SPEED_RUN_AUTO_PURCHASE_UPGRADES_UI_ID = exports.SPEED_RUN_AUTO_PURCHASE_UPGRADES_UI_ID = "speedRunAutoUpgradeCheckbox";
var SPEED_RUN_HIDE_GAME_OPTION_UPGRADE_PURCHASES_UI_ID = exports.SPEED_RUN_HIDE_GAME_OPTION_UPGRADE_PURCHASES_UI_ID = "speedRunHideGameOptionUpgradePurchases";
// export const EXPERIMENT_NEW_MAZE_BUTTON_UI_ID: string = "experimentNewMaze";
// export const EXPERIMENT_UNLOCK_ALL_UPGRADES_CHECKBOX_UI_ID: string = "experimentUnlockAllUpgradesCheckbox";
// export const EXPERIMENT_UNLOCK_ALL_ITEMS_CHECKBOX_UI_ID: string = "experimentUnlockAllItemsCheckbox";
// export const EXPERIMENT_SHOW_PURCHASED_UPGRADES_CHECKBOX_UI_ID: string = "experimentShowPurchasedUpgradesCheckbox";
// export const EXPERIMENT_MAZE_GRID_TYPE_SELECTOR_UI_ID: string = "experimentMazeGridTypeSelector";
// export const EXPERIMENT_MAZE_GRID_SIZE_SELECTOR_UI_ID: string = "experimentMazeGridSizeSelector";
// export const EXPERIMENT_MAZE_GRID_ALGORITHM_SELECTOR_UI_ID: string = "experimentMazeGridAlgorithmSelector";
// export const EXPERIMENT_TILE_COUNT_UI_ID: string = "experimentTileCount";
// ARROW KEY BUTTONS
var ARROW_KEYS_ROOT_PANEL = exports.ARROW_KEYS_ROOT_PANEL = "arrowKeysPanel";
var ARROW_KEY_UP_BUTTON_UI_ID = exports.ARROW_KEY_UP_BUTTON_UI_ID = "arrowKeyUpButton";
var ARROW_KEY_LEFT_BUTTON_UI_ID = exports.ARROW_KEY_LEFT_BUTTON_UI_ID = "arrowKeyLeftButton";
var ARROW_KEY_DOWN_BUTTON_UI_ID = exports.ARROW_KEY_DOWN_BUTTON_UI_ID = "arrowKeyDownButton";
var ARROW_KEY_RIGHT_BUTTON_UI_ID = exports.ARROW_KEY_RIGHT_BUTTON_UI_ID = "arrowKeyRightButton";

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UPGRADE_TYPE_TO_HEADER_UI_KEY_MAP = exports.LIZARD_WIN_STREAK_MULTIPLIER_INCREASE_AMOUNT = exports.LIZARD_WIN_STREAK_MULTIPLIER_BASE_COST = exports.SPOCK_CRITICAL_WIN_CHANCE_INCREASE_AMOUNT = exports.SPOCK_CRITICAL_WIN_INCREASE_BASE_COST = exports.SCISSOR_GAME_SPEED_INCREASE_AMOUNT_VALUE_CONFIG = exports.SCISSOR_GAME_SPEED_INCREASE_COST_CONFIG = exports.ROCK_STREAK_INCREMENT_INCREASE_AMOUNT = exports.ROCK_STREAK_INCREMENT_COST_CONFIG = exports.PAPER_FLAT_POINTS_UPGRADE_POINT_INCREASE_VALUE_CONFIG = exports.PAPER_FLAT_POINTS_UPGRADE_COST_CONFIG = exports.ROCK_WINS_MULTIPLY_STREAK_INCREMENT = exports.ROCK_WINS_MULTIPLIES_STREAK_COST_MULTIPLIER = exports.ROCK_WINS_MULTIPLIES_STREAK_BASE_COST = exports.CHANGE_GAME_OPTION_TO_ROCK_PROBABILITY_INCREMENT = exports.CHANGE_GAME_OPTION_TO_ROCK_COST_INCREMENT = exports.CHANGE_GAME_OPTION_TO_ROCK_BASE_COST = exports.GAME_OPTION_BONUS_POINTS_EARNED_PER_WIN_VALUE_CONFIG = exports.GAME_OPTION_BONUS_POINTS_EARNED_PER_WIN_COST_CONFIG = exports.CUSTOM_WIN_MULTIPLIERS_MULTIPLIER_INCREMENT_VALUE_CONFIG = exports.CUSTOM_WIN_MULTIPLIERS_COST_CONFIG = exports.UNLOCK_PAPER_SCISSOR_ROCK_POINTS = exports.GAME_OPTION_EQUALIZER_BASE_MULTPLIER = exports.GAME_OPTION_EQUALIZER_DISADVANTAGED_MULTPLIER = exports.GAME_OPTION_EQUALIZER_PRESTIGE = exports.GAME_OPTION_EQUALIZER_COST = exports.PLAY_MULTIPLE_GAME_OPTIONS_COST_ARRAY = exports.STREAK_MULLIGAN_UPGRADE_BASE_COST = exports.TIES_EXTEND_STREAK_MULTIPLIER_INCREMENT_AMOUNT = exports.TIES_EXTEND_STREAK_UPGRADE_BASE_COST = exports.TIES_EARN_POINTS_PERCENT_EARNED_INCREMENT_AMOUNT = exports.TIES_EARN_POINTS_UPGRADE_BASE_COST = exports.TIES_DO_NOT_BREAK_STREAK_UPGRADE_BASE_COST = exports.WIN_STREAK_UPGRADE_MULTIPLIER_INCREMENT = exports.WIN_STREAK_UPGRADE_BASE_COST = exports.FLAT_POINTS_UPGRADE_POINT_INCREASE_AMOUNT = exports.FLAT_POINTS_UPGRADE_COST_CONFIG = exports.PLAY_MULTIPLE_GAME_OPTIONS_INCREMENT_AMOUNT = exports.DEFAULT_PLAY_MULTIPLE_GAME_OPTIONS_AMOUNT = exports.PLAY_MULTIPLE_GAME_OPTIONS_COST_INCREMENT_AMOUNT = exports.GAME_SPEED_UPGRADE_REDUCTION_AMOUNT_IN_MS = exports.GAME_SPEED_UPGRADE_COST_INCREMENT_AMOUNT = exports.GAME_SPEED_UPGRADE_BASE_COST = exports.BASE_GAME_SPEED = exports.ROCK_ALWAYS_WINS_BASE_COST = exports.ROCK_NEVER_LOSES_BASE_COST = exports.SPOCK_REQUIRED_PRESTIGE_LEVEL = exports.LIZARD_REQUIRED_PRESTIGE_LEVEL = exports.GAME_OPTION_PRESTIGE_UPGRADE_BASE_COST = exports.UpgradeType = exports.UpgradeKey = undefined;

var _UiIdConstants = require("./UiIdConstants");

var _UpgradeUtils = require("../utils/UpgradeUtils");

var UpgradeKey = exports.UpgradeKey = undefined;
(function (UpgradeKey) {
    // Points
    UpgradeKey["FLAT_POINTS_UPGRADE"] = "FLAT_POINTS_UPGRADE";
    UpgradeKey["TIES_EARN_POINTS_UPGRADE"] = "TIES_EARN_POINTS_UPGRADE";
    UpgradeKey["PLAY_MULTIPLE_GAME_OPTIONS_UPGRADE"] = "PLAY_MULTIPLE_GAME_OPTIONS_UPGRADE";
    // Game Speed
    UpgradeKey["GAME_SPEED_UPGRADE"] = "GAME_SPEED_UPGRADE";
    // Streak
    UpgradeKey["TIES_DO_NOT_BREAK_STREAK_UPGRADE"] = "TIES_DO_NOT_BREAK_STREAK_UPGRADE";
    UpgradeKey["TIES_EXTEND_STREAK_UPGRADE"] = "TIES_EXTEND_STREAK_UPGRADE";
    UpgradeKey["STREAK_MULLIGAN_UPGRADE"] = "STREAK_MULLIGAN_UPGRADE";
    UpgradeKey["WIN_STREAK_MULTIPLIER_UPGRADE"] = "WIN_STREAK_MULTIPLIER_UPGRADE";
    // Game Option Special
    UpgradeKey["GAME_OPTION_EQUALIZER"] = "GAME_OPTION_EQUALIZER";
    // Game Option Type
    UpgradeKey["UNLOCK_PAPER_SCISSOR_ROCK_POINTS"] = "UNLOCK_PAPER_SCISSOR_ROCK_POINTS";
    UpgradeKey["ROCK_GAME_OPTION_MULTIPLIER"] = "ROCK_GAME_OPTION_MULTIPLIER";
    UpgradeKey["PAPER_GAME_OPTION_MULTIPLIER"] = "PAPER_GAME_OPTION_MULTIPLIER";
    UpgradeKey["SCISSOR_GAME_OPTION_MULTIPLIER"] = "SCISSOR_GAME_OPTION_MULTIPLIER";
    UpgradeKey["SPOCK_GAME_OPTION_MULTIPLIER"] = "SPOCK_GAME_OPTION_MULTIPLIER";
    UpgradeKey["LIZARD_GAME_OPTION_MULTIPLIER"] = "LIZARD_GAME_OPTION_MULTIPLIER";
    // Game Option Special Upgrade
    // TODO(GenericOption): Upgrade key generics for game option types.
    UpgradeKey["PAPER_FLAT_POINTS_UPGRADE"] = "PAPER_FLAT_POINTS_UPGRADE";
    UpgradeKey["SCISSOR_GAME_SPEED_UPGRADE"] = "SCISSOR_GAME_SPEED_UPGRADE";
    UpgradeKey["ROCK_STREAK_INCREMENT_UPGRADE"] = "ROCK_STREAK_INCREMENT_UPGRADE";
    UpgradeKey["SPOCK_CRITICAL_WIN_UPGRADE"] = "SPOCK_CRITICAL_WIN_UPGRADE";
    UpgradeKey["LIZARD_WIN_STREAK_MULTIPLIER_UPGRADE"] = "LIZARD_WIN_STREAK_MULTIPLIER_UPGRADE";
    // Bonus Game Options Earned Per Win
    UpgradeKey["BONUS_PAPER_EARNED_PER_WIN"] = "BONUS_PAPER_EARNED_PER_WIN";
    UpgradeKey["BONUS_SCISSORS_EARNED_PER_WIN"] = "BONUS_SCISSORS_EARNED_PER_WIN";
    UpgradeKey["BONUS_ROCKS_EARNED_PER_WIN"] = "BONUS_ROCKS_EARNED_PER_WIN";
    UpgradeKey["BONUS_SPOCKS_EARNED_PER_WIN"] = "BONUS_SPOCKS_EARNED_PER_WIN";
    UpgradeKey["BONUS_LIZARDS_EARNED_PER_WIN"] = "BONUS_LIZARDS_EARNED_PER_WIN";
    // Change Option to Rock
    UpgradeKey["PAPER_CHANGE_GAME_OPTION_TO_ROCK_UPGRADE"] = "PAPER_CHANGE_GAME_OPTION_TO_ROCK_UPGRADE";
    UpgradeKey["SCISSORS_CHANGE_GAME_OPTION_TO_ROCK_UPGRADE"] = "SCISSORS_CHANGE_GAME_OPTION_TO_ROCK_UPGRADE";
    UpgradeKey["SPOCKS_CHANGE_GAME_OPTION_TO_ROCK_UPGRADE"] = "SPOCKS_CHANGE_GAME_OPTION_TO_ROCK_UPGRADE";
    UpgradeKey["LIZARD_CHANGE_GAME_OPTION_TO_ROCK_UPGRADE"] = "LIZARD_CHANGE_GAME_OPTION_TO_ROCK_UPGRADE";
    // Convert Game Option to Rock
    UpgradeKey["CONVERT_PAPER_GAME_OPTION_TO_ROCK"] = "CONVERT_PAPER_GAME_OPTION_TO_ROCK";
    UpgradeKey["CONVERT_SCISSOR_GAME_OPTION_TO_ROCK"] = "CONVERT_SCISSOR_GAME_OPTION_TO_ROCK";
    UpgradeKey["CONVERT_SPOCK_GAME_OPTION_TO_ROCK"] = "CONVERT_SPOCK_GAME_OPTION_TO_ROCK";
    UpgradeKey["CONVERT_LIZARD_GAME_OPTION_TO_ROCK"] = "CONVERT_LIZARD_GAME_OPTION_TO_ROCK";
    // Prestige
    UpgradeKey["ROCK_NEVER_LOSES_UPGRADE"] = "ROCK_NEVER_LOSES_UPGRADE";
    UpgradeKey["ROCK_ALWAYS_WINS_UPGRADE"] = "ROCK_ALWAYS_WINS_UPGRADE";
    UpgradeKey["GAME_OPTION_PRESTIGE_UPGRADE"] = "GAME_OPTION_PRESTIGE_UPGRADE";
    // DISABLED:
    UpgradeKey["ROCK_WINS_MULTIPLIES_CURRENT_STREAK"] = "ROCK_WINS_MULTIPLIES_CURRENT_STREAK";
})(UpgradeKey || (exports.UpgradeKey = UpgradeKey = {}));
// TODO(GenericOption): Upgrade type generics for game option types.
var UpgradeType = exports.UpgradeType = undefined;
(function (UpgradeType) {
    UpgradeType["GENERAL"] = "GENERAL";
    UpgradeType["PAPER"] = "PAPER";
    UpgradeType["SCISSOR"] = "SCISSOR";
    UpgradeType["ROCK"] = "ROCK";
    UpgradeType["SPOCK"] = "SPOCK";
    UpgradeType["LIZARD"] = "LIZARD";
})(UpgradeType || (exports.UpgradeType = UpgradeType = {}));
// Prestige
var GAME_OPTION_PRESTIGE_UPGRADE_BASE_COST = exports.GAME_OPTION_PRESTIGE_UPGRADE_BASE_COST = [1000000000, 2000000000, 4000000000];
// TODO(GenericOption): Prestige level unlock for upgrades.
var LIZARD_REQUIRED_PRESTIGE_LEVEL = exports.LIZARD_REQUIRED_PRESTIGE_LEVEL = 1;
var SPOCK_REQUIRED_PRESTIGE_LEVEL = exports.SPOCK_REQUIRED_PRESTIGE_LEVEL = 2;
// Rock Never Loses
var ROCK_NEVER_LOSES_BASE_COST = exports.ROCK_NEVER_LOSES_BASE_COST = [2e6, 10e6, 16e6];
var ROCK_ALWAYS_WINS_BASE_COST = exports.ROCK_ALWAYS_WINS_BASE_COST = [100e6, 400e6, 1000e6];
// Game Speed
var BASE_GAME_SPEED = exports.BASE_GAME_SPEED = 3000;
var GAME_SPEED_UPGRADE_BASE_COST = exports.GAME_SPEED_UPGRADE_BASE_COST = 5;
var GAME_SPEED_UPGRADE_COST_INCREMENT_AMOUNT = exports.GAME_SPEED_UPGRADE_COST_INCREMENT_AMOUNT = 5;
var GAME_SPEED_UPGRADE_REDUCTION_AMOUNT_IN_MS = exports.GAME_SPEED_UPGRADE_REDUCTION_AMOUNT_IN_MS = 250;
var PLAY_MULTIPLE_GAME_OPTIONS_COST_INCREMENT_AMOUNT = exports.PLAY_MULTIPLE_GAME_OPTIONS_COST_INCREMENT_AMOUNT = 20000;
var DEFAULT_PLAY_MULTIPLE_GAME_OPTIONS_AMOUNT = exports.DEFAULT_PLAY_MULTIPLE_GAME_OPTIONS_AMOUNT = 1;
var PLAY_MULTIPLE_GAME_OPTIONS_INCREMENT_AMOUNT = exports.PLAY_MULTIPLE_GAME_OPTIONS_INCREMENT_AMOUNT = 1;
// Base Points
var FLAT_POINTS_UPGRADE_COST_CONFIG = exports.FLAT_POINTS_UPGRADE_COST_CONFIG = (0, _UpgradeUtils.createUpgradeScalingConfig)(5, 5, 5, 10);
var FLAT_POINTS_UPGRADE_POINT_INCREASE_AMOUNT = exports.FLAT_POINTS_UPGRADE_POINT_INCREASE_AMOUNT = 1;
// Win Streak Points Bonus
var WIN_STREAK_UPGRADE_BASE_COST = exports.WIN_STREAK_UPGRADE_BASE_COST = (0, _UpgradeUtils.generateUpgradeCostIncrementors)(20, 20, 20, 10);
var WIN_STREAK_UPGRADE_MULTIPLIER_INCREMENT = exports.WIN_STREAK_UPGRADE_MULTIPLIER_INCREMENT = 0.05;
// Ties Do Not Break Streak
var TIES_DO_NOT_BREAK_STREAK_UPGRADE_BASE_COST = exports.TIES_DO_NOT_BREAK_STREAK_UPGRADE_BASE_COST = 400;
// Ties Earn Points
var TIES_EARN_POINTS_UPGRADE_BASE_COST = exports.TIES_EARN_POINTS_UPGRADE_BASE_COST = (0, _UpgradeUtils.generateUpgradeCostIncrementors)(50000, 75000, 50000, 5);
var TIES_EARN_POINTS_PERCENT_EARNED_INCREMENT_AMOUNT = exports.TIES_EARN_POINTS_PERCENT_EARNED_INCREMENT_AMOUNT = 0.1;
// Ties Extend Streak
var TIES_EXTEND_STREAK_UPGRADE_BASE_COST = exports.TIES_EXTEND_STREAK_UPGRADE_BASE_COST = [20000, 50000, 75000, 1e5];
var TIES_EXTEND_STREAK_MULTIPLIER_INCREMENT_AMOUNT = exports.TIES_EXTEND_STREAK_MULTIPLIER_INCREMENT_AMOUNT = 0.15;
// Streak Mulligans
var STREAK_MULLIGAN_UPGRADE_BASE_COST = exports.STREAK_MULLIGAN_UPGRADE_BASE_COST = [4000, 15000, 75000, 150000, 350000, 1e6, 1.5e6, 2e6, 4e6, 8e6];
// Play Multiple Game Options
var PLAY_MULTIPLE_GAME_OPTIONS_COST_ARRAY = exports.PLAY_MULTIPLE_GAME_OPTIONS_COST_ARRAY = [750, 7500, 35000, 75000, 125000, 500000, 1250000, 2500000];
// Equalizer is used to balance out the mismatched upgrade tiers.
var GAME_OPTION_EQUALIZER_COST = exports.GAME_OPTION_EQUALIZER_COST = 30000;
var GAME_OPTION_EQUALIZER_PRESTIGE = exports.GAME_OPTION_EQUALIZER_PRESTIGE = LIZARD_REQUIRED_PRESTIGE_LEVEL;
var GAME_OPTION_EQUALIZER_DISADVANTAGED_MULTPLIER = exports.GAME_OPTION_EQUALIZER_DISADVANTAGED_MULTPLIER = 2;
var GAME_OPTION_EQUALIZER_BASE_MULTPLIER = exports.GAME_OPTION_EQUALIZER_BASE_MULTPLIER = 2;
// Unlock Paper/Scissor/Rock Points
var UNLOCK_PAPER_SCISSOR_ROCK_POINTS = exports.UNLOCK_PAPER_SCISSOR_ROCK_POINTS = 1000;
// Paper/Scissor/Rock Custom Multipliers
var CUSTOM_WIN_MULTIPLIERS_COST_CONFIG = exports.CUSTOM_WIN_MULTIPLIERS_COST_CONFIG = (0, _UpgradeUtils.createCostScalingConfig)(30, 50, 60, 8, 2);
var CUSTOM_WIN_MULTIPLIERS_MULTIPLIER_INCREMENT_VALUE_CONFIG = exports.CUSTOM_WIN_MULTIPLIERS_MULTIPLIER_INCREMENT_VALUE_CONFIG = (0, _UpgradeUtils.createUpgradeScalingConfig)(0, 0.075, 0, 8, 3);
// Bonus Paper/Scissors/Rocks Earned Per Win
var GAME_OPTION_BONUS_POINTS_EARNED_PER_WIN_COST_CONFIG = exports.GAME_OPTION_BONUS_POINTS_EARNED_PER_WIN_COST_CONFIG = (0, _UpgradeUtils.createCostScalingConfig)(20, 40, 80, 6);
var GAME_OPTION_BONUS_POINTS_EARNED_PER_WIN_VALUE_CONFIG = exports.GAME_OPTION_BONUS_POINTS_EARNED_PER_WIN_VALUE_CONFIG = (0, _UpgradeUtils.createUpgradeScalingConfig)(2, 2, 1, 6);
// Change Game Option to Rock
var CHANGE_GAME_OPTION_TO_ROCK_BASE_COST = exports.CHANGE_GAME_OPTION_TO_ROCK_BASE_COST = 18000;
var CHANGE_GAME_OPTION_TO_ROCK_COST_INCREMENT = exports.CHANGE_GAME_OPTION_TO_ROCK_COST_INCREMENT = 2000;
var CHANGE_GAME_OPTION_TO_ROCK_PROBABILITY_INCREMENT = exports.CHANGE_GAME_OPTION_TO_ROCK_PROBABILITY_INCREMENT = 0.25;
// Rock Wins Multplier Streak
var ROCK_WINS_MULTIPLIES_STREAK_BASE_COST = exports.ROCK_WINS_MULTIPLIES_STREAK_BASE_COST = 100000000;
var ROCK_WINS_MULTIPLIES_STREAK_COST_MULTIPLIER = exports.ROCK_WINS_MULTIPLIES_STREAK_COST_MULTIPLIER = 10;
var ROCK_WINS_MULTIPLY_STREAK_INCREMENT = exports.ROCK_WINS_MULTIPLY_STREAK_INCREMENT = 0.025;
// ** GENERAL GAME OPTION SCALING CONFIGS **
var GAME_OPTION_MULTIPLIER_MAX_LEVELS = 10;
var COST_SCALING_FOR_CUSTOM_GAME_OPTION_POINTS_COST_CONFIG = (0, _UpgradeUtils.createCostScalingConfig)(600, 300, 50, GAME_OPTION_MULTIPLIER_MAX_LEVELS);
// Paper Base Points
var PAPER_FLAT_POINTS_UPGRADE_COST_CONFIG = exports.PAPER_FLAT_POINTS_UPGRADE_COST_CONFIG = Object.assign({}, COST_SCALING_FOR_CUSTOM_GAME_OPTION_POINTS_COST_CONFIG, { finalLevelIncrementMultiplier: 3 });
var PAPER_FLAT_POINTS_UPGRADE_POINT_INCREASE_VALUE_CONFIG = exports.PAPER_FLAT_POINTS_UPGRADE_POINT_INCREASE_VALUE_CONFIG = (0, _UpgradeUtils.createUpgradeScalingConfig)(0, 3, 0, GAME_OPTION_MULTIPLIER_MAX_LEVELS, 3);
// Rock Base Streak Increment
var ROCK_STREAK_INCREMENT_COST_CONFIG = exports.ROCK_STREAK_INCREMENT_COST_CONFIG = Object.assign({}, COST_SCALING_FOR_CUSTOM_GAME_OPTION_POINTS_COST_CONFIG, { finalLevelIncrementMultiplier: 3 });
var ROCK_STREAK_INCREMENT_INCREASE_AMOUNT = exports.ROCK_STREAK_INCREMENT_INCREASE_AMOUNT = (0, _UpgradeUtils.createUpgradeScalingConfig)(0, 0.2, 0, GAME_OPTION_MULTIPLIER_MAX_LEVELS, 3.5);
// Scissor Game Speed Increment
var SCISSOR_GAME_SPEED_INCREASE_COST_CONFIG = exports.SCISSOR_GAME_SPEED_INCREASE_COST_CONFIG = Object.assign({}, COST_SCALING_FOR_CUSTOM_GAME_OPTION_POINTS_COST_CONFIG, { finalLevelIncrementMultiplier: 3 });
var SCISSOR_GAME_SPEED_INCREASE_AMOUNT_VALUE_CONFIG = exports.SCISSOR_GAME_SPEED_INCREASE_AMOUNT_VALUE_CONFIG = (0, _UpgradeUtils.createUpgradeScalingConfig)(0, 40, 0, GAME_OPTION_MULTIPLIER_MAX_LEVELS, 3.5);
// Spock Critical Win Chance
// FIXME(PRESTIGE-COSTS): SPOCK AND LIZARD HAS LESS UPGRADES?
var SPOCK_CRITICAL_WIN_INCREASE_BASE_COST = exports.SPOCK_CRITICAL_WIN_INCREASE_BASE_COST = Object.assign({}, COST_SCALING_FOR_CUSTOM_GAME_OPTION_POINTS_COST_CONFIG, { finalLevelIncrementMultiplier: 3 });
var SPOCK_CRITICAL_WIN_CHANCE_INCREASE_AMOUNT = exports.SPOCK_CRITICAL_WIN_CHANCE_INCREASE_AMOUNT = 0.04;
// Lizard Streak Multiplier
var LIZARD_WIN_STREAK_MULTIPLIER_BASE_COST = exports.LIZARD_WIN_STREAK_MULTIPLIER_BASE_COST = Object.assign({}, COST_SCALING_FOR_CUSTOM_GAME_OPTION_POINTS_COST_CONFIG, { finalLevelIncrementMultiplier: 3 });
var LIZARD_WIN_STREAK_MULTIPLIER_INCREASE_AMOUNT = exports.LIZARD_WIN_STREAK_MULTIPLIER_INCREASE_AMOUNT = 0.02;
var UPGRADE_TYPE_TO_HEADER_UI_KEY_MAP = exports.UPGRADE_TYPE_TO_HEADER_UI_KEY_MAP = new Map([[UpgradeType.GENERAL, _UiIdConstants.POINTS_HEADER_UI_ID], [UpgradeType.PAPER, _UiIdConstants.PAPER_POINTS_HEADER_UI_ID], [UpgradeType.SCISSOR, _UiIdConstants.SCISSOR_POINTS_HEADER_UI_ID], [UpgradeType.ROCK, _UiIdConstants.ROCK_POINTS_HEADER_UI_ID], [UpgradeType.SPOCK, _UiIdConstants.SPOCK_POINTS_HEADER_UI_ID], [UpgradeType.LIZARD, _UiIdConstants.LIZARD_POINTS_HEADER_UI_ID]]);
500;
700;
950;
1250;
1600;
2000;
2450;
2950;
3500;
4100;
5300;

},{"../utils/UpgradeUtils":46,"./UiIdConstants":4}],6:[function(require,module,exports){
"use strict";

var _UiIdConstants = require("./constants/UiIdConstants");

var _Game = require("./managers/Game");

var UP_KEY = 38;
var DOWN_KEY = 40;
var LEFT_KEY = 37;
var RIGHT_KEY = 39;
var W_KEY = 87;
var S_KEY = 83;
var A_KEY = 65;
var D_KEY = 68;
var E_KEY = 69;
var Q_KEY = 81;
var ONE_KEY = 49;
var TWO_KEY = 50;
var ESCAPE_KEY = 27;
$(document).ready(function () {
    var game = _Game.globalGame;
    //TODO: this should be in UI
    $(document).keydown(function (event) {
        if (event.keyCode === ESCAPE_KEY) {
            game.ui.closeAllModals();
        }
    });
});
var therockisalie = function therockisalie() {
    var setVisible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    _Game.globalGame.ui.setUiIdVisible(_UiIdConstants.EXPERIMENT_ROOT_PANEL, setVisible);
    if (setVisible) {
        return "The rock is definitely not a lie!";
    } else {
        return "See? We can all have rocks!";
    }
};
window.therockisalie = therockisalie;

},{"./constants/UiIdConstants":4,"./managers/Game":9}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BoardManager = exports.GameResultType = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UpgradeConstants = require("../constants/UpgradeConstants");

var _PointsManager = require("./PointsManager");

var _StatsConstants = require("../constants/StatsConstants");

var _SelectionManager = require("./SelectionManager");

var _SpockCriticalWinUpgrade = require("../upgrades/definitions/gameOption/SpockCriticalWinUpgrade");

var _ExperimentConstants = require("../constants/ExperimentConstants");

var _RandomUtils = require("../utils/RandomUtils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var COUNTER_INTERVAL_DURATION_IN_MS = 25;
var GameResultType = exports.GameResultType = undefined;
(function (GameResultType) {
    GameResultType["WIN"] = "WIN";
    GameResultType["LOSE"] = "LOSE";
    GameResultType["TIE"] = "TIE";
})(GameResultType || (exports.GameResultType = GameResultType = {}));

var BoardManager = exports.BoardManager = function () {
    function BoardManager(game) {
        _classCallCheck(this, BoardManager);

        this.game = game;
        this.gameInterval = null;
        this.currCounterTimeInMs = 0;
        this.selectionManager = new _SelectionManager.SelectionManager(this.game);
        this.clearGameTimer();
    }

    _createClass(BoardManager, [{
        key: "startGameTimer",
        value: function startGameTimer() {
            var _this = this;

            this.currCounterTimeInMs = 0;
            this.clearGameTimer();
            this.gameInterval = setInterval(function () {
                // Skip round if pause is enabled. Too lazy to stop the clock.
                if (_this.game.experiments.isExperimentEnabled(_ExperimentConstants.ExperimentKey.PAUSE_GAME)) {
                    return;
                }
                // Increment timer.
                _this.currCounterTimeInMs += COUNTER_INTERVAL_DURATION_IN_MS;
                // Timer completed, process round.
                if (_this.currCounterTimeInMs >= _this.getGameIntervalInMs()) {
                    _this.startNewRound();
                }
                // Set the UI timer.
                _this.game.ui.setGameTimer(_this.getGameIntervalInMs() - _this.currCounterTimeInMs);
            }, COUNTER_INTERVAL_DURATION_IN_MS, this);
        }
    }, {
        key: "getSelectionManager",
        value: function getSelectionManager() {
            return this.selectionManager;
        }
    }, {
        key: "startNewRound",
        value: function startNewRound() {
            // Select bot/player choices and update UI.
            var numSelections = this.getSelectionManager().getAllowedCustomSelectionCount();
            var playerSelections = this.getSelectionManager().getPlayerCustomSelections(numSelections);
            var botSelections = this.getSelectionManager().getBotSelection(numSelections);
            // Process round.
            this.processRound(playerSelections, botSelections);
            // Reset the timer
            this.currCounterTimeInMs = 0;
            this.game.upgrades.updateAllUpgradeUi();
        }
    }, {
        key: "clearGameTimer",
        value: function clearGameTimer() {
            clearInterval(this.gameInterval);
            this.currCounterTimeInMs = 0;
        }
    }, {
        key: "getGameIntervalInMs",
        value: function getGameIntervalInMs() {
            var experimentsGameSpeedMultiplier = this.game.experiments.getGameSpeedMultiplier();
            // TODO: this upgrade has the other base game speed upgrade nested within it.  Not sure how to get around this. 
            var gameSpeedInMs = this.game.upgrades.getUpgradeValue(_UpgradeConstants.UpgradeKey.SCISSOR_GAME_SPEED_UPGRADE);
            return gameSpeedInMs * experimentsGameSpeedMultiplier;
        }
        /* Swap game options to rock if upgraded and % odd lands. */

    }, {
        key: "shouldRockSwap",
        value: function shouldRockSwap(playerSelectedOption) {
            if (playerSelectedOption == _SelectionManager.GameOptionType.PAPER) {
                return this.checkForRockSwap(_UpgradeConstants.UpgradeKey.PAPER_CHANGE_GAME_OPTION_TO_ROCK_UPGRADE);
            } else if (playerSelectedOption == _SelectionManager.GameOptionType.SCISSOR) {
                return this.checkForRockSwap(_UpgradeConstants.UpgradeKey.SCISSORS_CHANGE_GAME_OPTION_TO_ROCK_UPGRADE);
            } else if (playerSelectedOption == _SelectionManager.GameOptionType.LIZARD) {
                return this.checkForRockSwap(_UpgradeConstants.UpgradeKey.LIZARD_CHANGE_GAME_OPTION_TO_ROCK_UPGRADE);
            } else if (playerSelectedOption == _SelectionManager.GameOptionType.SPOCK) {
                return this.checkForRockSwap(_UpgradeConstants.UpgradeKey.SPOCKS_CHANGE_GAME_OPTION_TO_ROCK_UPGRADE);
            }
            return false;
        }
        /** Check if rock swap is enabled for this based on upgrade key type. It must be unlocked and upgraded before testing. */

    }, {
        key: "checkForRockSwap",
        value: function checkForRockSwap(upgradeKey) {
            var upgrade = this.game.upgrades.getUpgrade(upgradeKey);
            if (!upgrade.getIsUpgraded()) {
                return false;
            }
            return (0, _RandomUtils.doesEventOccur)(upgrade.getUpgradeValue());
        }
    }, {
        key: "processRound",
        value: function processRound(playerSelectedOptions, botSelectedOptions) {
            if (playerSelectedOptions.length != botSelectedOptions.length) throw "Invalid number of selections Player: " + playerSelectedOptions + ", Bot: " + botSelectedOptions;
            var totalPointsEarned = 0,
                maxStreak = 0;
            var roundWinCount = 0,
                roundLossCount = 0,
                roundTieCount = 0;
            var gameResults = [];
            var pointsEarnedList = [];
            var streakResults = [];
            var critWinResults = [];
            for (var i = 0; i < playerSelectedOptions.length; i++) {
                var mullStart = this.game.points.getCurrentMulligans();
                var botSelectedOption = botSelectedOptions[i];
                var playerSelectedOption = playerSelectedOptions[i];
                if (this.shouldRockSwap(playerSelectedOption)) {
                    playerSelectedOptions[i] = _SelectionManager.GameOptionType.ROCK_SWAP;
                    playerSelectedOption = _SelectionManager.GameOptionType.ROCK;
                }
                var gameResult = this.getRoundResult(playerSelectedOption, botSelectedOption);
                this.game.points.updateStreak(gameResult, playerSelectedOption);
                maxStreak = Math.max(this.game.points.getCurrentStreak(), maxStreak);
                gameResults.push(gameResult);
                streakResults.push(this.game.ui.getSmartDecimalPrettyPrintNumber(this.game.points.getCurrentStreak()) + " (" + this.game.points.getCurrentMulligans() + ")");
                // Check for critical win chance.
                var didHitCriticalWin = _SpockCriticalWinUpgrade.SpockCriticalWinUpgrade.didRoundCriticalWin(this.game, gameResult);
                critWinResults.push(didHitCriticalWin);
                // Process points earned
                var pointsEarned = this.game.points.getPointsEarned(_PointsManager.PointType.POINTS, gameResult, playerSelectedOption, didHitCriticalWin);
                totalPointsEarned += pointsEarned;
                pointsEarnedList.push(pointsEarned);
                this.game.stats.setMaxStatsValue(pointsEarned, _StatsConstants.StatsKey.HIGHEST_SINGLE_GAME_POINTS);
                // Process game option resources earned.
                if (gameResult == GameResultType.WIN) {
                    // Determine the point type that is earned based on player game option.
                    var pointType = this.getPointTypeByGameOptionType(playerSelectedOption);
                    // Add custom point type.
                    // TODO(PERF): We should only add points one time instead of each row processing.  Huge perf hit.
                    this.game.points.addPoints(pointType, this.game.points.getPointsEarned(pointType, gameResult, playerSelectedOption));
                    this.game.stats.addStatsToKey(1, this.game.stats.getStatsKeyFromWinningGameOptionType(playerSelectedOption));
                    roundWinCount++;
                } else if (gameResult == GameResultType.LOSE) {
                    roundLossCount++;
                } else if (gameResult == GameResultType.TIE) {
                    roundTieCount++;
                }
                // RANDOM ASSERTIONS FOR TESTING
                // MULLIGAN ASSERTIONS
                // const mullEnd = this.game.points.getCurrentMulligans();
                // if (mullEnd - mullStart > 1 && mullEnd != this.game.upgrades.getUpgradeLevel(UpgradeKey.STREAK_MULLIGAN_UPGRADE)) {
                //   console.error(`MULLIGAN DOUBLE COUNT! Start: ${mullStart}, End: ${mullEnd}, Result: ${gameResult}`);
                // } 
                // if (gameResult == GameResultType.WIN && mullEnd!=mullStart) {
                //   console.error(`MULLIGAN ON WIN?? Start: ${mullStart}, End: ${mullEnd}, Result: ${gameResult}`);
                // }
            }
            this.game.stats.addStatsToKey(roundWinCount, _StatsConstants.StatsKey.TOTAL_WINS);
            this.game.stats.addStatsToKey(roundLossCount, _StatsConstants.StatsKey.TOTAL_LOSSES);
            this.game.stats.addStatsToKey(roundTieCount, _StatsConstants.StatsKey.TOTAL_TIES);
            this.game.points.addPoints(_PointsManager.PointType.POINTS, totalPointsEarned);
            this.game.ui.setCurrentRoundStats(totalPointsEarned, maxStreak, roundWinCount, roundTieCount, roundLossCount);
            this.game.stats.setMaxStatsValue(totalPointsEarned, _StatsConstants.StatsKey.HIGHEST_ROUND_POINTS);
            this.game.ui.setRoundResult(gameResults, critWinResults, streakResults, pointsEarnedList);
            this.game.ui.setBotSelection(botSelectedOptions);
            this.game.ui.setPlayerSelection(playerSelectedOptions);
        }
    }, {
        key: "getRoundResult",
        value: function getRoundResult(playerSelectedOption, botSelectedOption) {
            var excludeOverrides = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            var doesRockAlwaysWin = this.game.upgrades.isUpgraded(_UpgradeConstants.UpgradeKey.ROCK_ALWAYS_WINS_UPGRADE);
            if (doesRockAlwaysWin && playerSelectedOption == _SelectionManager.GameOptionType.ROCK && !excludeOverrides) {
                return GameResultType.WIN;
            }
            if (playerSelectedOption == botSelectedOption) {
                return GameResultType.TIE;
            } else if (playerSelectedOption == _SelectionManager.GameOptionType.PAPER && botSelectedOption == _SelectionManager.GameOptionType.ROCK) {
                return GameResultType.WIN;
            } else if (playerSelectedOption == _SelectionManager.GameOptionType.PAPER && botSelectedOption == _SelectionManager.GameOptionType.SCISSOR) {
                return GameResultType.LOSE;
            } else if (playerSelectedOption == _SelectionManager.GameOptionType.PAPER && botSelectedOption == _SelectionManager.GameOptionType.SPOCK) {
                return GameResultType.WIN;
            } else if (playerSelectedOption == _SelectionManager.GameOptionType.PAPER && botSelectedOption == _SelectionManager.GameOptionType.LIZARD) {
                return GameResultType.LOSE;
            } else if (playerSelectedOption == _SelectionManager.GameOptionType.SCISSOR && botSelectedOption == _SelectionManager.GameOptionType.PAPER) {
                return GameResultType.WIN;
            } else if (playerSelectedOption == _SelectionManager.GameOptionType.SCISSOR && botSelectedOption == _SelectionManager.GameOptionType.ROCK) {
                return GameResultType.LOSE;
            } else if (playerSelectedOption == _SelectionManager.GameOptionType.SCISSOR && botSelectedOption == _SelectionManager.GameOptionType.SPOCK) {
                return GameResultType.LOSE;
            } else if (playerSelectedOption == _SelectionManager.GameOptionType.SCISSOR && botSelectedOption == _SelectionManager.GameOptionType.LIZARD) {
                return GameResultType.WIN;
            } else if (playerSelectedOption == _SelectionManager.GameOptionType.SPOCK && botSelectedOption == _SelectionManager.GameOptionType.PAPER) {
                return GameResultType.LOSE;
            } else if (playerSelectedOption == _SelectionManager.GameOptionType.SPOCK && botSelectedOption == _SelectionManager.GameOptionType.SCISSOR) {
                return GameResultType.WIN;
            } else if (playerSelectedOption == _SelectionManager.GameOptionType.SPOCK && botSelectedOption == _SelectionManager.GameOptionType.ROCK) {
                return GameResultType.WIN;
            } else if (playerSelectedOption == _SelectionManager.GameOptionType.SPOCK && botSelectedOption == _SelectionManager.GameOptionType.LIZARD) {
                return GameResultType.LOSE;
            } else if (playerSelectedOption == _SelectionManager.GameOptionType.LIZARD && botSelectedOption == _SelectionManager.GameOptionType.PAPER) {
                return GameResultType.WIN;
            } else if (playerSelectedOption == _SelectionManager.GameOptionType.LIZARD && botSelectedOption == _SelectionManager.GameOptionType.SCISSOR) {
                return GameResultType.LOSE;
            } else if (playerSelectedOption == _SelectionManager.GameOptionType.LIZARD && botSelectedOption == _SelectionManager.GameOptionType.ROCK) {
                return GameResultType.LOSE;
            } else if (playerSelectedOption == _SelectionManager.GameOptionType.LIZARD && botSelectedOption == _SelectionManager.GameOptionType.SPOCK) {
                return GameResultType.WIN;
            } else if (playerSelectedOption == _SelectionManager.GameOptionType.ROCK) {
                var doesRockNeverLose = this.game.upgrades.isUpgraded(_UpgradeConstants.UpgradeKey.ROCK_NEVER_LOSES_UPGRADE);
                if (botSelectedOption == _SelectionManager.GameOptionType.SCISSOR) {
                    return GameResultType.WIN;
                } else if (botSelectedOption == _SelectionManager.GameOptionType.LIZARD) {
                    return GameResultType.WIN;
                } else if (botSelectedOption == _SelectionManager.GameOptionType.PAPER) {
                    if (doesRockNeverLose && !excludeOverrides) {
                        return GameResultType.TIE;
                    }
                    return GameResultType.LOSE;
                } else if (botSelectedOption == _SelectionManager.GameOptionType.SPOCK) {
                    if (doesRockNeverLose && !excludeOverrides) {
                        return GameResultType.TIE;
                    }
                    return GameResultType.LOSE;
                }
            } else {
                throw "Unknown game result player: " + playerSelectedOption + ", Bot: " + botSelectedOption;
            }
        }
    }, {
        key: "getPointTypeByGameOptionType",
        value: function getPointTypeByGameOptionType(gameOptionType) {
            if (gameOptionType == _SelectionManager.GameOptionType.ROCK) {
                return _PointsManager.PointType.ROCKS;
            } else if (gameOptionType == _SelectionManager.GameOptionType.PAPER) {
                var shouldMakeRocks = this.game.upgrades.isUpgraded(_UpgradeConstants.UpgradeKey.CONVERT_PAPER_GAME_OPTION_TO_ROCK);
                if (shouldMakeRocks) {
                    return _PointsManager.PointType.ROCKS;
                } else {
                    return _PointsManager.PointType.PAPERS;
                }
            } else if (gameOptionType == _SelectionManager.GameOptionType.SCISSOR) {
                var _shouldMakeRocks = this.game.upgrades.isUpgraded(_UpgradeConstants.UpgradeKey.CONVERT_SCISSOR_GAME_OPTION_TO_ROCK);
                if (_shouldMakeRocks) {
                    return _PointsManager.PointType.ROCKS;
                } else {
                    return _PointsManager.PointType.SCISSORS;
                }
            } else if (gameOptionType == _SelectionManager.GameOptionType.LIZARD) {
                var _shouldMakeRocks2 = this.game.upgrades.isUpgraded(_UpgradeConstants.UpgradeKey.CONVERT_LIZARD_GAME_OPTION_TO_ROCK);
                if (_shouldMakeRocks2) {
                    return _PointsManager.PointType.ROCKS;
                } else {
                    return _PointsManager.PointType.LIZARDS;
                }
            } else if (gameOptionType == _SelectionManager.GameOptionType.SPOCK) {
                var _shouldMakeRocks3 = this.game.upgrades.isUpgraded(_UpgradeConstants.UpgradeKey.CONVERT_SPOCK_GAME_OPTION_TO_ROCK);
                if (_shouldMakeRocks3) {
                    return _PointsManager.PointType.ROCKS;
                } else {
                    return _PointsManager.PointType.SPOCKS;
                }
            } else {
                throw "Unknown gameOptionType passed to getPointTypeByGameOptionType: " + gameOptionType;
            }
        }
    }]);

    return BoardManager;
}();

},{"../constants/ExperimentConstants":2,"../constants/StatsConstants":3,"../constants/UpgradeConstants":5,"../upgrades/definitions/gameOption/SpockCriticalWinUpgrade":29,"../utils/RandomUtils":44,"./PointsManager":10,"./SelectionManager":12}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExperimentsManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ExperimentConstants = require("../constants/ExperimentConstants");

var _Serializable2 = require("../models/Serializable");

var _UserInterface = require("./UserInterface");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SERIALIZABLE_PROPERTIES = ['experimentMap'];

var ExperimentsManager = exports.ExperimentsManager = function (_Serializable) {
    _inherits(ExperimentsManager, _Serializable);

    function ExperimentsManager(game) {
        _classCallCheck(this, ExperimentsManager);

        var _this = _possibleConstructorReturn(this, (ExperimentsManager.__proto__ || Object.getPrototypeOf(ExperimentsManager)).call(this, SERIALIZABLE_PROPERTIES));

        _this.game = game;
        _this.initExperimentMaps();
        return _this;
    }

    _createClass(ExperimentsManager, [{
        key: "initExperimentMaps",
        value: function initExperimentMaps() {
            this.experimentMap = new Map();
            // Init defaults
            for (var experimentKey in _ExperimentConstants.ExperimentKey) {
                this.experimentMap.set(experimentKey, false);
            }
        }
    }, {
        key: "initExperiments",
        value: function initExperiments() {
            // if (this.game.dev.isDisableUi()) return;
            this.initCheckBoxStates();
            this.initDropDownSelectorStates();
            this.initCheckBoxHandlers();
        }
    }, {
        key: "initCheckBoxStates",
        value: function initCheckBoxStates() {
            for (var experimentKey in _ExperimentConstants.ExperimentKey) {
                var uiId = (0, _ExperimentConstants.getExperimentKeyUiId)(experimentKey);
                var isChecked = this.experimentMap.get(experimentKey) || false;
                _UserInterface.UserInterface.setCheckBoxState(uiId, isChecked);
            }
        }
    }, {
        key: "initCheckBoxHandlers",
        value: function initCheckBoxHandlers() {
            var _this2 = this;

            var _loop = function _loop(experimentKey) {
                var uiId = (0, _ExperimentConstants.getExperimentKeyUiId)(experimentKey);
                // Add a click event to update the state.
                _this2.game.ui.addCheckEvent(uiId, function (checkEvent) {
                    var isChecked = _this2.game.ui.isCheckBoxChecked(uiId);
                    _this2.experimentMap.set(experimentKey, isChecked);
                    _this2.game.updateAllUi();
                });
            };

            for (var experimentKey in _ExperimentConstants.ExperimentKey) {
                _loop(experimentKey);
            }
        }
    }, {
        key: "initDropDownSelectorStates",
        value: function initDropDownSelectorStates() {
            _UserInterface.UserInterface.setOptionsForSelector(["1", "2", "3", "4", "5", "10", "15", "0"], (0, _ExperimentConstants.getExperimentKeyUiId)(_ExperimentConstants.ExperimentKey.GAME_SPEED_MULTIPLIER));
        }
    }, {
        key: "isExperimentEnabled",
        value: function isExperimentEnabled(experimentKey) {
            return this.isExperimentChecked(experimentKey);
        }
    }, {
        key: "isExperimentChecked",
        value: function isExperimentChecked(experimentKey) {
            // TODO: these experiment checkbox states should be tracked in code and updated onChange. UI lookup expensive.
            // const experimentCheckboxUiId: string = getExperimentKeyUiId(experimentKey);
            // return experimentCheckboxUiId 
            //   ? this.game.ui.isCheckBoxChecked(experimentCheckboxUiId)
            //   : false;
            return this.experimentMap.get(experimentKey);
        }
    }, {
        key: "getGameSpeedMultiplier",
        value: function getGameSpeedMultiplier() {
            var selectedVal = _UserInterface.UserInterface.getSelectorSelectedValue((0, _ExperimentConstants.getExperimentKeyUiId)(_ExperimentConstants.ExperimentKey.GAME_SPEED_MULTIPLIER));
            if (selectedVal == null) return 1;
            return 1 / parseInt(selectedVal);
        }
    }, {
        key: "getAllExperimentUiIds",
        value: function getAllExperimentUiIds() {
            var experimentUiIds = [];
            for (var experimentKey in _ExperimentConstants.ExperimentKey) {
                experimentUiIds.push((0, _ExperimentConstants.getExperimentKeyUiId)(experimentKey));
            }
            return experimentUiIds;
        }
    }, {
        key: "persistExperimentToggleState",
        value: function persistExperimentToggleState() {
            for (var experimentKey in _ExperimentConstants.ExperimentKey) {
                var isChecked = this.isExperimentChecked(experimentKey);
                this.experimentMap.set(experimentKey, isChecked);
            }
        }
    }]);

    return ExperimentsManager;
}(_Serializable2.Serializable);

},{"../constants/ExperimentConstants":2,"../models/Serializable":18,"./UserInterface":16}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.globalGame = exports.CURRENT_GAME_VERSION = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UserInterface = require("./UserInterface");

var _Serializable2 = require("../models/Serializable");

var _BoardManager = require("./BoardManager");

var _ExperimentsManager = require("./ExperimentsManager");

var _PointsManager = require("./PointsManager");

var _SaveManager = require("./SaveManager");

var _SpeedRunManager = require("./SpeedRunManager");

var _StatsManager = require("./StatsManager");

var _UpgradeManager = require("./UpgradeManager");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SERIALIZABLE_PROPERTIES = ['saveGameVersion', 'points', 'upgrades', 'stats']; // 'experiment', 'toggles'];
var CURRENT_GAME_VERSION = exports.CURRENT_GAME_VERSION = "0.2.0";

var Game = function (_Serializable) {
    _inherits(Game, _Serializable);

    function Game() {
        var isMobile = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var isDisableUi = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isDevMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        _classCallCheck(this, Game);

        var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, SERIALIZABLE_PROPERTIES));

        _this.experiments = new _ExperimentsManager.ExperimentsManager(_this);
        _this.save = new _SaveManager.SaveManager(_this);
        _this.ui = new _UserInterface.UserInterface(_this, isMobile);
        _this.points = new _PointsManager.PointsManager(_this);
        _this.upgrades = new _UpgradeManager.UpgradeManager(_this);
        _this.board = new _BoardManager.BoardManager(_this);
        _this.stats = new _StatsManager.StatsManager(_this);
        _this.speedRun = new _SpeedRunManager.SpeedRunManager(_this);
        _this.initManagerMaps();
        _this.updateAllUi();
        _this.ui.init();
        _this.board.getSelectionManager().initBoardGameOptionSelections();
        _this.experiments.initExperiments();
        _this.speedRun.init();
        return _this;
    }

    _createClass(Game, [{
        key: "hardResetGame",
        value: function hardResetGame() {
            this.save.clearLocalStorage();
            this.points.resetPoints();
            this.resetGame();
            this.speedRun.clearOutputs();
            this.initManagerMaps();
            this.save.enableSaveTimer();
            this.updateAllUi();
            this.ui.updatePrestigeUiContent();
        }
    }, {
        key: "reloadFromLocalStorage",
        value: function reloadFromLocalStorage() {
            this.save.loadGameSaveFromLocalStorage();
            console.info("Save game version: " + this.saveGameVersion);
            if (this.saveGameVersion != null && this.saveGameVersion != CURRENT_GAME_VERSION) {
                this.ui.showModalByType(_UserInterface.ModalType.SAVE_VERSION_WARNING_MODAL);
                this.initGameVersion();
                console.info("Current game version: " + this.saveGameVersion);
            }
            this.resetGame();
            this.save.enableSaveTimer();
            this.stats.startGamePlayedTimer();
            this.upgrades.hideAllUpgradeNewTextForUnlockedUpgrades();
            this.upgrades.updateAllUpgradeUi();
            this.points.updateAllPointsText();
            this.board.getSelectionManager().updateCustomSelectionCounts();
            this.ui.updatePrestigeUiContent();
        }
    }, {
        key: "resetGame",
        value: function resetGame() {
            this.board.startGameTimer();
        }
    }, {
        key: "initManagerMaps",
        value: function initManagerMaps() {
            this.upgrades.initUpgrades();
            this.stats.initStatsMap();
            this.ui.initUiJQueryCaches();
        }
    }, {
        key: "updateAllUi",
        value: function updateAllUi() {
            this.upgrades.updateAllUpgradeUi();
            this.stats.updateAllStatsKey();
            this.points.updateAllPointsText();
            this.ui.updatePrestigeUiContent();
            this.board.getSelectionManager().updateCustomSelectionCounts();
        }
    }, {
        key: "initGameVersion",
        value: function initGameVersion() {
            this.saveGameVersion = CURRENT_GAME_VERSION;
        }
    }]);

    return Game;
}(_Serializable2.Serializable);

exports.default = Game;
var globalGame = exports.globalGame = undefined;
$(document).ready(function () {
    var isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
    // const isMobile: boolean = window.matchMedia('(hover: none)').matches;
    console.log("Mobile: " + isMobile);
    exports.globalGame = globalGame = new Game(isMobile);
    globalGame.reloadFromLocalStorage();
});

},{"../models/Serializable":18,"./BoardManager":7,"./ExperimentsManager":8,"./PointsManager":10,"./SaveManager":11,"./SpeedRunManager":13,"./StatsManager":14,"./UpgradeManager":15,"./UserInterface":16}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PointsManager = exports.PointType = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Serializable2 = require("../models/Serializable");

var _StatsConstants = require("../constants/StatsConstants");

var _BoardManager = require("./BoardManager");

var _UpgradeConstants = require("../constants/UpgradeConstants");

var _PointsHistoryTracker = require("../models/PointsHistoryTracker");

var _SpockCriticalWinUpgrade = require("../upgrades/definitions/gameOption/SpockCriticalWinUpgrade");

var _GameOptionEqualizer = require("../upgrades/definitions/game/GameOptionEqualizer");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BASE_POINTS_PER_WIN = 1;
var POINTS_MAP_PROPERTY_KEY = 'pointsMap';
var SERIALIZABLE_PROPERTIES = [POINTS_MAP_PROPERTY_KEY, 'currentStreak', 'currentMulligans'];
var PointType = exports.PointType = undefined;
(function (PointType) {
    PointType["POINTS"] = "POINTS";
    PointType["PAPERS"] = "PAPERS";
    PointType["SCISSORS"] = "SCISSORS";
    PointType["ROCKS"] = "ROCKS";
    PointType["LIZARDS"] = "LIZARDS";
    PointType["SPOCKS"] = "SPOCKS";
})(PointType || (exports.PointType = PointType = {}));

var PointsManager = exports.PointsManager = function (_Serializable) {
    _inherits(PointsManager, _Serializable);

    function PointsManager(game) {
        _classCallCheck(this, PointsManager);

        var _this = _possibleConstructorReturn(this, (PointsManager.__proto__ || Object.getPrototypeOf(PointsManager)).call(this, SERIALIZABLE_PROPERTIES));

        _this.game = game;
        _this.initPoints();
        // Track points per round using a sliding window counter.
        _this.pointsHistoryTracker = new _PointsHistoryTracker.PointsHistoryTracker(_this.game, _StatsConstants.StatsKey.AVERAGE_POINTS_EARNED_PER_ROUND, _PointsHistoryTracker.PointsHistoryTrackerType.SLIDING_WINDOW_COUNTER);
        return _this;
    }

    _createClass(PointsManager, [{
        key: "initPoints",
        value: function initPoints() {
            var isHardReset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            // Avoid nuking when loading from local storage.
            if (this.pointsMap == null || isHardReset) {
                this.pointsMap = new Map();
                for (var pointType in PointType) {
                    if (this.pointsMap.has(pointType)) continue;
                    this.pointsMap.set(pointType, 0.0);
                }
                this.currentStreak = 0;
                this.currentMulligans = 0;
            }
        }
    }, {
        key: "updateAllPointsText",
        value: function updateAllPointsText() {
            this.setAllPointsText();
        }
    }, {
        key: "setAllPointsText",
        value: function setAllPointsText() {
            for (var pointType in PointType) {
                this.game.ui.setPointsText(pointType, this.getPoints(pointType));
                ;
            }
        }
    }, {
        key: "getPoints",
        value: function getPoints() {
            var pointType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : PointType.POINTS;

            // This is for when loading a game when new prestige point types have been added.
            if (this.pointsMap.get(pointType) == null) {
                this.pointsMap.set(pointType, 0.0);
            }
            return this.pointsMap.get(pointType);
        }
    }, {
        key: "getCurrentStreak",
        value: function getCurrentStreak() {
            return this.currentStreak;
        }
    }, {
        key: "getCurrentMulligans",
        value: function getCurrentMulligans() {
            return this.currentMulligans;
        }
    }, {
        key: "resetPoints",
        value: function resetPoints() {
            this.initPoints(true);
            this.pointsHistoryTracker.resetHistory();
            //TODO: set all point types.
            // this.game.ui.setPointsText(this.points);
        }
    }, {
        key: "addPoints",
        value: function addPoints(pointType, amount) {
            this.pointsMap.set(pointType, this.getPoints(pointType) + amount);
            this.game.stats.addStatsToKey(amount, this.game.stats.getStatsKeyFromPointType(pointType));
            this.game.ui.setPointsText(pointType, this.getPoints(pointType));
            if (pointType == PointType.POINTS) {
                this.pointsHistoryTracker.addNumber(amount);
            }
        }
    }, {
        key: "spendPoints",
        value: function spendPoints() {
            var pointType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : PointType.POINTS;
            var amount = arguments[1];

            this.pointsMap.set(pointType, this.getPoints(pointType) - amount);
            this.game.ui.setPointsText(pointType, this.getPoints(pointType));
        }
    }, {
        key: "updateStreak",
        value: function updateStreak(gameResult, playerSelectedOption) {
            var streakIncrement = 1 + this.game.upgrades.getUpgradeValue(_UpgradeConstants.UpgradeKey.ROCK_STREAK_INCREMENT_UPGRADE);
            if (gameResult == _BoardManager.GameResultType.WIN) {
                this.currentStreak += streakIncrement;
                // TODO: Upgrade rock win multiplier streak is disabled.
                // if (playerSelectedOption == GameOptionType.ROCK) {
                //   const rockWinMultiplier: number = this.game.upgrades.getUpgradeValue(UpgradeKey.ROCK_WINS_MULTIPLIES_CURRENT_STREAK);
                //   this.currentStreak *= rockWinMultiplier;
                // }
            } else if (gameResult == _BoardManager.GameResultType.TIE) {
                // Keep streak active if tie upgrade present, but do not increment.
                if (!this.game.upgrades.isUpgraded(_UpgradeConstants.UpgradeKey.TIES_DO_NOT_BREAK_STREAK_UPGRADE)) {
                    this.consumeStreakMulliganOrResetStreak();
                }
                // Ties extend streak
                else if (this.game.upgrades.isUpgraded(_UpgradeConstants.UpgradeKey.TIES_EXTEND_STREAK_UPGRADE)) {
                        var tiePercentStreakGained = this.game.upgrades.getUpgradeValue(_UpgradeConstants.UpgradeKey.TIES_EXTEND_STREAK_UPGRADE);
                        this.currentStreak += streakIncrement * tiePercentStreakGained;
                    }
            } else if (gameResult == _BoardManager.GameResultType.LOSE) {
                this.consumeStreakMulliganOrResetStreak();
            }
            this.game.stats.setMaxStatsValue(this.currentStreak, _StatsConstants.StatsKey.LONGEST_STREAK);
        }
    }, {
        key: "consumeStreakMulliganOrResetStreak",
        value: function consumeStreakMulliganOrResetStreak() {
            // Do not consume mulligans if you have no streak active.
            if (this.getCurrentStreak() == 0) {
                return;
            }
            // Consume a mulligan if any remain.
            if (this.currentMulligans > 0) {
                this.game.stats.addStatsToKey(1, _StatsConstants.StatsKey.MULLIGANS_USED);
                this.currentMulligans -= 1;
            }
            // Otherwise reset the streak and mulligans.
            else {
                    this.currentMulligans = this.game.upgrades.getUpgradeLevel(_UpgradeConstants.UpgradeKey.STREAK_MULLIGAN_UPGRADE);
                    this.currentStreak = 0;
                }
        }
    }, {
        key: "getPointsEarned",
        value: function getPointsEarned(pointType, gameResult, playerSelectedOption) {
            var didHitCriticalWin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            // Special case the paper/scissor/rock point type.
            if (pointType != PointType.POINTS) {
                if (gameResult != _BoardManager.GameResultType.WIN) {
                    return 0;
                }
                if (!this.game.upgrades.isUpgraded(_UpgradeConstants.UpgradeKey.UNLOCK_PAPER_SCISSOR_ROCK_POINTS)) {
                    return 0;
                }
                if (pointType == PointType.PAPERS) {
                    return this.game.upgrades.getUpgradeValue(_UpgradeConstants.UpgradeKey.BONUS_PAPER_EARNED_PER_WIN);
                } else if (pointType == PointType.SCISSORS) {
                    return this.game.upgrades.getUpgradeValue(_UpgradeConstants.UpgradeKey.BONUS_SCISSORS_EARNED_PER_WIN);
                } else if (pointType == PointType.ROCKS) {
                    return this.game.upgrades.getUpgradeValue(_UpgradeConstants.UpgradeKey.BONUS_ROCKS_EARNED_PER_WIN);
                } else if (pointType == PointType.SPOCKS) {
                    return this.game.upgrades.getUpgradeValue(_UpgradeConstants.UpgradeKey.BONUS_SPOCKS_EARNED_PER_WIN);
                } else if (pointType == PointType.LIZARDS) {
                    return this.game.upgrades.getUpgradeValue(_UpgradeConstants.UpgradeKey.BONUS_LIZARDS_EARNED_PER_WIN);
                } else {
                    console.error("Invalid point point for getPointsEarned: " + pointType + ".");
                    return 0;
                }
            }
            // Calculate points to be earned.
            var disadvantagedTypeMultiplier = _GameOptionEqualizer.GameOptionEqualizer.getGameOptionDisadvantagedMultiplier(this.game, playerSelectedOption);
            var currentStreak = this.game.points.getCurrentStreak();
            var basePointsPerWin = this.game.upgrades.getUpgradeValue(_UpgradeConstants.UpgradeKey.FLAT_POINTS_UPGRADE);
            var basePaperFlatPointsPerWin = this.game.upgrades.getUpgradeValue(_UpgradeConstants.UpgradeKey.PAPER_FLAT_POINTS_UPGRADE);
            // FIXME(WINSTREAK): Win streaks are out of this world. We need to re-asssess these.
            var winStreakPointMultiplier = this.game.upgrades.isUpgraded(_UpgradeConstants.UpgradeKey.WIN_STREAK_MULTIPLIER_UPGRADE) ? 1 + this.game.upgrades.getUpgradeValue(_UpgradeConstants.UpgradeKey.WIN_STREAK_MULTIPLIER_UPGRADE) * this.getCurrentStreak() : 1;
            var lizardWinStreakPointMultiplier = this.game.upgrades.isUpgraded(_UpgradeConstants.UpgradeKey.LIZARD_WIN_STREAK_MULTIPLIER_UPGRADE) ? 1 + this.game.upgrades.getUpgradeValue(_UpgradeConstants.UpgradeKey.LIZARD_WIN_STREAK_MULTIPLIER_UPGRADE) * this.getCurrentStreak() : 1;
            var pointsPerWin = basePointsPerWin + basePaperFlatPointsPerWin;
            var selectedOptionMultiplier = this.getSelectionTypeMultiplier();
            if (gameResult == _BoardManager.GameResultType.WIN) {
                if (currentStreak == 0) throw "Streak is zero after a win in getPointsEarned.";
                var spockCritWinMultiplier = _SpockCriticalWinUpgrade.SpockCriticalWinUpgrade.getCriticalWinMultiplier(didHitCriticalWin);
                var result = pointsPerWin * winStreakPointMultiplier * lizardWinStreakPointMultiplier * selectedOptionMultiplier * spockCritWinMultiplier * disadvantagedTypeMultiplier;
                // console.log(`(${currentStreak}) ${pointsPerWin} * ${winStreakPointMultiplier} * ${lizardWinStreakPointMultiplier} * ${selectedOptionMultiplier} * ${spockCritWinMultiplier} * ${disadvantagedTypeMultiplier} = ${result}`);
                return result;
            } else if (gameResult == _BoardManager.GameResultType.TIE) {
                var isTiePointsUpgraded = this.game.upgrades.isUpgraded(_UpgradeConstants.UpgradeKey.TIES_EARN_POINTS_UPGRADE);
                if (isTiePointsUpgraded) {
                    var tiePoints = pointsPerWin * this.game.upgrades.getUpgradeValue(_UpgradeConstants.UpgradeKey.TIES_EARN_POINTS_UPGRADE) * winStreakPointMultiplier * selectedOptionMultiplier;
                    this.game.stats.addStatsToKey(tiePoints, _StatsConstants.StatsKey.TOTAL_POINTS_EARNED_FROM_TIES);
                    return pointsPerWin * this.game.upgrades.getUpgradeValue(_UpgradeConstants.UpgradeKey.TIES_EARN_POINTS_UPGRADE) * winStreakPointMultiplier * lizardWinStreakPointMultiplier * selectedOptionMultiplier;
                }
            }
            return 0;
        }
    }, {
        key: "getSelectionTypeMultiplier",
        value: function getSelectionTypeMultiplier() {
            var multiplierSum = 1 + this.game.upgrades.getUpgradeValue(_UpgradeConstants.UpgradeKey.PAPER_GAME_OPTION_MULTIPLIER) + this.game.upgrades.getUpgradeValue(_UpgradeConstants.UpgradeKey.SCISSOR_GAME_OPTION_MULTIPLIER) + this.game.upgrades.getUpgradeValue(_UpgradeConstants.UpgradeKey.ROCK_GAME_OPTION_MULTIPLIER) + this.game.upgrades.getUpgradeValue(_UpgradeConstants.UpgradeKey.SPOCK_GAME_OPTION_MULTIPLIER) + this.game.upgrades.getUpgradeValue(_UpgradeConstants.UpgradeKey.LIZARD_GAME_OPTION_MULTIPLIER);
            return multiplierSum;
        }
    }]);

    return PointsManager;
}(_Serializable2.Serializable);

},{"../constants/StatsConstants":3,"../constants/UpgradeConstants":5,"../models/PointsHistoryTracker":17,"../models/Serializable":18,"../upgrades/definitions/game/GameOptionEqualizer":31,"../upgrades/definitions/gameOption/SpockCriticalWinUpgrade":29,"./BoardManager":7}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SAVE_GAME_INTERVAL = 20000;
var SAVE_GAME_LOCAL_STORE_KEY = 'rock-always-wins-idle';
var SAVE_TOAST_VISIBILITY_DURATION = 3000;

var SaveManager = exports.SaveManager = function () {
    function SaveManager(game) {
        var _this = this;

        _classCallCheck(this, SaveManager);

        this.createSaveJsonObject = function () {
            // let gamePropList = this.game.getSerializablePropertyList();
            var gameJson = {};
            gameJson = _this.game.serialize();
            // for (let gameProp of gamePropList) {
            //   if (typeof(this.game[gameProp]) === 'object') {
            //     gameJson[gameProp] = this.game[gameProp].serialize();
            //   } else {
            //     gameJson[gameProp] = this.game[gameProp];
            //   }
            // }
            return JSON.stringify(gameJson);
        };
        this.importSaveJsonObject = function (jsonObj) {
            for (var gameProp in jsonObj) {
                if (_typeof(jsonObj[gameProp]) === 'object') {
                    _this.game[gameProp].deserialize(jsonObj[gameProp]);
                } else {
                    _this.game[gameProp] = jsonObj[gameProp];
                }
            }
        };
        this.game = game;
        this.saveInterval = null;
    }

    _createClass(SaveManager, [{
        key: 'enableSaveTimer',
        value: function enableSaveTimer() {
            var _this2 = this;

            this.disableSaveTimer();
            this.saveInterval = setInterval(function () {
                _this2.saveGameToLocalStorage();
            }, SAVE_GAME_INTERVAL);
        }
    }, {
        key: 'disableSaveTimer',
        value: function disableSaveTimer() {
            clearInterval(this.saveInterval);
            this.saveInterval = null;
        }
    }, {
        key: 'saveGameToLocalStorage',
        value: function saveGameToLocalStorage() {
            this.game.ui.showSaveModalForDuration(SAVE_TOAST_VISIBILITY_DURATION);
            var saveJson = this.createSaveJsonObject();
            this.persistSaveToLocalStorage(saveJson);
        }
    }, {
        key: 'loadGameSaveFromLocalStorage',
        value: function loadGameSaveFromLocalStorage() {
            var gameObj = this.getSaveJsonFromLocalStorage();
            if (!gameObj) {
                // Set the default game version.
                this.game.initGameVersion();
                return;
            }
            this.importSaveJsonObject(gameObj);
        }
    }, {
        key: 'importGameSaveFromString',
        value: function importGameSaveFromString(saveJsonString) {
            // Disable save timer to prevent overrides
            this.game.save.disableSaveTimer();
            // Attempt to parse and save new string
            if (this.tryParseSaveJson(saveJsonString) == null) {
                this.game.save.enableSaveTimer();
                return false;
            }
            this.persistSaveToLocalStorage(saveJsonString);
            this.game.reloadFromLocalStorage();
            return true;
        }
    }, {
        key: 'persistSaveToLocalStorage',
        value: function persistSaveToLocalStorage(jsonString) {
            localStorage.setItem(SAVE_GAME_LOCAL_STORE_KEY, jsonString);
        }
    }, {
        key: 'getSaveJsonFromLocalStorage',
        value: function getSaveJsonFromLocalStorage() {
            var json = localStorage.getItem(SAVE_GAME_LOCAL_STORE_KEY);
            if (json === null || json === "") {
                return null;
            }
            return this.tryParseSaveJson(json);
        }
    }, {
        key: 'tryParseSaveJson',
        value: function tryParseSaveJson(json) {
            try {
                return JSON.parse(json);
            } catch (e) {
                console.error('Failed to parse local game save.  Error: ' + e.message + '.  \n\nLocal Save Json: ' + json);
                return null;
            }
        }
    }, {
        key: 'clearLocalStorage',
        value: function clearLocalStorage() {
            localStorage.clear();
        }
    }, {
        key: 'copySaveToClipboard',
        value: function copySaveToClipboard() {
            var saveJson = this.getSaveJsonFromLocalStorage();
            if (!saveJson) return;
            var el = document.createElement('textarea');
            el.value = JSON.stringify(saveJson);
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
        }
    }]);

    return SaveManager;
}();

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SelectionManager = exports.GameOptionType = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UiIdConstants = require("../constants/UiIdConstants");

var _UpgradeConstants = require("../constants/UpgradeConstants");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameOptionType = exports.GameOptionType = undefined;
(function (GameOptionType) {
    GameOptionType["PAPER"] = "PAPER";
    GameOptionType["SCISSOR"] = "SCISSOR";
    GameOptionType["ROCK"] = "ROCK";
    GameOptionType["ROCK_SWAP"] = "(ROCK)";
    GameOptionType["LIZARD"] = "LIZARD";
    GameOptionType["SPOCK"] = "SPOCK";
    GameOptionType["RANDOM"] = "RANDOM";
    GameOptionType["CUSTOM"] = "CUSTOM";
})(GameOptionType || (exports.GameOptionType = GameOptionType = {}));
var BUTTON_TEXT_ALL = "ALL";
var THREE_GAME_OPTION_VALID_SELECTIONS = new Set([GameOptionType.PAPER, GameOptionType.SCISSOR, GameOptionType.ROCK]);
var FOUR_GAME_OPTION_VALID_SELECTIONS = new Set([GameOptionType.PAPER, GameOptionType.SCISSOR, GameOptionType.ROCK, GameOptionType.LIZARD]);
var FIVE_GAME_OPTION_VALID_SELECTIONS = new Set([GameOptionType.PAPER, GameOptionType.SCISSOR, GameOptionType.ROCK, GameOptionType.LIZARD, GameOptionType.SPOCK]);
// TODO(rock-swap): this finally came back to bite me. Rock_swap's value is not the same as the string so I can't use it as a proper enum comparator.
var UNSELECTABLE_GAME_OPTION_TYPES = new Set([GameOptionType.CUSTOM, GameOptionType.ROCK_SWAP]);
var GameOptionTypeCustomSelection;
(function (GameOptionTypeCustomSelection) {
    GameOptionTypeCustomSelection["ALL"] = "ALL";
    GameOptionTypeCustomSelection["PLUS"] = "+";
    GameOptionTypeCustomSelection["MINUS"] = "-";
})(GameOptionTypeCustomSelection || (GameOptionTypeCustomSelection = {}));
// TODO(custom-selection): Consider separating the UI generation/management from the selection logic?
// TODO(custom-selection): Consider putting this manager at the game level?

var SelectionManager = exports.SelectionManager = function () {
    function SelectionManager(game) {
        _classCallCheck(this, SelectionManager);

        this.game = game;
        this.currentSelectionsMap = new Map();
    }

    _createClass(SelectionManager, [{
        key: "resetCurrentSelectionMap",
        value: function resetCurrentSelectionMap() {
            // Setup the map for total custom selections.
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.getAllSelectableGameOptions()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var gameOptionType = _step.value;

                    this.currentSelectionsMap.set(gameOptionType, 0);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.updateRandomCustomSelectionCount();
        }
        /* Requires upgrades init */

    }, {
        key: "initBoardGameOptionSelections",
        value: function initBoardGameOptionSelections() {
            this.resetCurrentSelectionMap();
            this.initCustomSelectionsUi();
            this.setCustomSelectionsOnClickActions();
            this.updateCustomSelectionPrestigeVisibility();
        }
    }, {
        key: "updateCustomSelectionPrestigeVisibility",
        value: function updateCustomSelectionPrestigeVisibility() {
            var prestigeLevel = this.game.upgrades.getUpgradeLevel(_UpgradeConstants.UpgradeKey.GAME_OPTION_PRESTIGE_UPGRADE);
            // Check lizard visibility.
            var shouldShowLizardPoints = prestigeLevel >= _UpgradeConstants.LIZARD_REQUIRED_PRESTIGE_LEVEL;
            this.game.ui.setUiIdVisible(this.getCustomSelectionRootDivId(GameOptionType.LIZARD), shouldShowLizardPoints, "flex");
            // Check spock visibility
            var shouldShowSpockPoints = prestigeLevel >= _UpgradeConstants.SPOCK_REQUIRED_PRESTIGE_LEVEL;
            this.game.ui.setUiIdVisible(this.getCustomSelectionRootDivId(GameOptionType.SPOCK), shouldShowSpockPoints, "flex");
        }
    }, {
        key: "updateCustomSelectionCounts",
        value: function updateCustomSelectionCounts() {
            // Update the disable flags on the buttons. 
            // This must be done before the random selection counter is updated since values may be cleared.
            this.updateGameOptionCustomSelectionUiDisabled();
            // Check for unallocated custom selections (typically from upgrades).
            this.updateRandomCustomSelectionCount();
            var validGameOptions = [].concat(_toConsumableArray(this.getValidGameOptionTypes()));
            validGameOptions.push(GameOptionType.RANDOM);
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = validGameOptions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var gameOptionType = _step2.value;

                    var uiId = this.getCustomSelectionTotalId(gameOptionType);
                    var value = this.currentSelectionsMap.get(gameOptionType);
                    this.game.ui.setText(uiId, "" + value);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }, {
        key: "getAllSelectableGameOptions",
        value: function getAllSelectableGameOptions() {
            var result = [];
            for (var gameOptionType in GameOptionType) {
                if (UNSELECTABLE_GAME_OPTION_TYPES.has(gameOptionType) || gameOptionType == "ROCK_SWAP") {
                    continue;
                }
                result.push(gameOptionType);
            }
            return result;
        }
        /** Update RANDOM custom selection counters. Updates any unallocated amounts. */

    }, {
        key: "updateRandomCustomSelectionCount",
        value: function updateRandomCustomSelectionCount() {
            var allowedSelectionCount = this.getAllowedCustomSelectionCount();
            var currSelectionCount = this.getCurrentCustomSelectionCount();
            if (currSelectionCount < allowedSelectionCount) {
                this.currentSelectionsMap.set(GameOptionType.RANDOM, allowedSelectionCount - currSelectionCount);
            }
            // This is likely a dev only thing from selling the multi-choice upgrade.
            else if (currSelectionCount > allowedSelectionCount) {
                    this.resetCurrentSelectionMap();
                    console.error("Too many custom selections. It has been reset.");
                }
        }
    }, {
        key: "initCustomSelectionsUi",
        value: function initCustomSelectionsUi() {
            // Random is in a separate div. Setup separately.
            var randomHtml = this.generateCustomSelectionForGameOption(GameOptionType.RANDOM);
            this.game.ui.setHtml('customSelectionRandomDiv', randomHtml);
            var html = "";
            var customSelectionGameOptions = this.getAllSelectableGameOptions();
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = customSelectionGameOptions[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var gameOption = _step3.value;

                    // Already generated random.
                    if (gameOption == GameOptionType.RANDOM) continue;
                    html += this.generateCustomSelectionForGameOption(gameOption);
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            this.game.ui.setHtml(_UiIdConstants.CUSTOM_SELECTION_DIV_UI_ID, html);
        }
    }, {
        key: "generateCustomSelectionForGameOption",
        value: function generateCustomSelectionForGameOption(gameOptionType) {
            var html = "";
            html += "<div id='" + this.getCustomSelectionRootDivId(gameOptionType) + "'>";
            html += "<img src='" + this.getImageIconId(gameOptionType) + "' width='20px' height='20px' style='padding-top: 5px' />";
            html += "<div>";
            html += "<span id='" + this.getCustomSelectionTotalId(gameOptionType) + "'>0</span>";
            html += this.getButtonHtml(gameOptionType);
            html += "</div>";
            html += "</div>";
            return html;
        }
    }, {
        key: "setCustomSelectionsOnClickActions",
        value: function setCustomSelectionsOnClickActions() {
            var _this = this;

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                var _loop = function _loop() {
                    var type = _step4.value;

                    var gameOptionType = type;
                    $("#" + _this.getButtonId(gameOptionType, GameOptionTypeCustomSelection.ALL)).click(function () {
                        return _this.handleCustomSelectionEvent(gameOptionType, GameOptionTypeCustomSelection.ALL);
                    });
                    $("#" + _this.getButtonId(gameOptionType, GameOptionTypeCustomSelection.PLUS)).click(function () {
                        return _this.handleCustomSelectionEvent(gameOptionType, GameOptionTypeCustomSelection.PLUS);
                    });
                    $("#" + _this.getButtonId(gameOptionType, GameOptionTypeCustomSelection.MINUS)).click(function () {
                        return _this.handleCustomSelectionEvent(gameOptionType, GameOptionTypeCustomSelection.MINUS);
                    });
                };

                for (var _iterator4 = this.getAllSelectableGameOptions()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    _loop();
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }
        }
    }, {
        key: "getCurrentCustomSelectionCount",
        value: function getCurrentCustomSelectionCount() {
            var includeRandom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var currSelectionCount = 0;
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = this.currentSelectionsMap.entries()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var _step5$value = _slicedToArray(_step5.value, 2),
                        key = _step5$value[0],
                        value = _step5$value[1];

                    // Don't count random.
                    if (key == GameOptionType.RANDOM) {
                        continue;
                    }
                    currSelectionCount += value;
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            return currSelectionCount;
        }
    }, {
        key: "getAllowedCustomSelectionCount",
        value: function getAllowedCustomSelectionCount() {
            return this.game.upgrades.getUpgradeValue(_UpgradeConstants.UpgradeKey.PLAY_MULTIPLE_GAME_OPTIONS_UPGRADE);
        }
    }, {
        key: "handleCustomSelectionEvent",
        value: function handleCustomSelectionEvent(gameOptionType, customType) {
            if (this.shouldButtonBeDisabled(gameOptionType)) {
                console.info("Game option type custom selection is disabled: " + gameOptionType + ", " + customType);
                return;
            }
            // Get current state of selections.
            var allowedSelectionCount = this.getAllowedCustomSelectionCount();
            var currentSelectionCount = this.getCurrentCustomSelectionCount();
            // Select ALL for current type and clear all others.
            if (customType == GameOptionTypeCustomSelection.ALL) {
                var _iteratorNormalCompletion6 = true;
                var _didIteratorError6 = false;
                var _iteratorError6 = undefined;

                try {
                    for (var _iterator6 = this.currentSelectionsMap.keys()[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                        var selectionKey = _step6.value;

                        this.currentSelectionsMap.set(selectionKey, 0);
                    }
                } catch (err) {
                    _didIteratorError6 = true;
                    _iteratorError6 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion6 && _iterator6.return) {
                            _iterator6.return();
                        }
                    } finally {
                        if (_didIteratorError6) {
                            throw _iteratorError6;
                        }
                    }
                }

                this.currentSelectionsMap.set(gameOptionType, allowedSelectionCount);
            }
            // Decrement the current type and increment RANDOM.
            else if (customType == GameOptionTypeCustomSelection.MINUS) {
                    var currVal = this.currentSelectionsMap.get(gameOptionType);
                    if (currVal > 0) {
                        this.currentSelectionsMap.set(gameOptionType, currVal - 1);
                        this.currentSelectionsMap.set(GameOptionType.RANDOM, this.currentSelectionsMap.get(GameOptionType.RANDOM) + 1);
                    }
                }
                // Increment the current type and decrement RANDOM.
                else if (customType == GameOptionTypeCustomSelection.PLUS) {
                        // Check if any additions can be made.
                        if (currentSelectionCount >= allowedSelectionCount) {
                            return;
                        }
                        var _currVal = this.currentSelectionsMap.get(gameOptionType);
                        if (allowedSelectionCount > currentSelectionCount) {
                            this.currentSelectionsMap.set(gameOptionType, _currVal + 1);
                            this.currentSelectionsMap.set(GameOptionType.RANDOM, this.currentSelectionsMap.get(GameOptionType.RANDOM) - 1);
                        }
                    }
            this.updateCustomSelectionCounts();
        }
    }, {
        key: "getButtonId",
        value: function getButtonId(gameOptionType, customType) {
            var customTypeId = void 0;
            if (customType == GameOptionTypeCustomSelection.ALL) {
                customTypeId = GameOptionTypeCustomSelection.ALL;
            } else if (customType == GameOptionTypeCustomSelection.PLUS) {
                customTypeId = "Plus";
            } else if (customType == GameOptionTypeCustomSelection.MINUS) {
                customTypeId = "Minus";
            } else {
                throw "Invalid GameOptionTypeCustomSelection " + customType + " in getButtonId.";
            }
            return "" + gameOptionType.toLowerCase() + customTypeId + "Button";
        }
    }, {
        key: "getCustomSelectionTotalId",
        value: function getCustomSelectionTotalId(gameOptionType) {
            return gameOptionType.toLowerCase() + "TotalSelected";
        }
    }, {
        key: "getImageIconId",
        value: function getImageIconId(gameOptionType) {
            return "img/" + gameOptionType.toLowerCase() + "-icon.png";
        }
    }, {
        key: "getCustomSelectionRootDivId",
        value: function getCustomSelectionRootDivId(gameOptionType) {
            return gameOptionType.toLowerCase() + "SelectionDiv";
        }
    }, {
        key: "getButtonHtml",
        value: function getButtonHtml(gameOptionType) {
            var allBtnId = this.getButtonId(gameOptionType, GameOptionTypeCustomSelection.ALL);
            var plusBtnId = this.getButtonId(gameOptionType, GameOptionTypeCustomSelection.PLUS);
            var minusBtnId = this.getButtonId(gameOptionType, GameOptionTypeCustomSelection.MINUS);
            var html = "<button id='" + allBtnId + "' class='all_btn_class'><div class='button_label'>" + BUTTON_TEXT_ALL + "</div></button>";
            // Random does not need a plus/minus as you can freely consume them by default.
            if (gameOptionType != GameOptionType.RANDOM) {
                html += "<button id='" + plusBtnId + "'><div class='button_label'>+</div></button>" + ("<button id='" + minusBtnId + "'><div class='button_label'>-</div></button>");
            }
            return html;
        }
    }, {
        key: "getValidGameOptionTypes",
        value: function getValidGameOptionTypes() {
            var prestigeLevel = this.game.upgrades.getUpgradeLevel(_UpgradeConstants.UpgradeKey.GAME_OPTION_PRESTIGE_UPGRADE);
            if (prestigeLevel == 0) {
                return THREE_GAME_OPTION_VALID_SELECTIONS;
            } else if (prestigeLevel == 1) {
                return FOUR_GAME_OPTION_VALID_SELECTIONS;
            } else if (prestigeLevel == 2) {
                return FIVE_GAME_OPTION_VALID_SELECTIONS;
            }
            console.error("Unhandled prestige level for getValidGameOptionTypes: " + prestigeLevel + ".");
            return FIVE_GAME_OPTION_VALID_SELECTIONS;
        }
    }, {
        key: "getPlayerCustomSelections",
        value: function getPlayerCustomSelections(maxManualSelections) {
            var totalSelection = 0;
            var customSelections = [];
            var randomSelections = [];
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
                for (var _iterator7 = this.currentSelectionsMap[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                    var _step7$value = _slicedToArray(_step7.value, 2),
                        _gameOptionType = _step7$value[0],
                        selectionCount = _step7$value[1];

                    totalSelection += selectionCount;
                    for (var i = 0; i < selectionCount; i++) {
                        if (_gameOptionType == GameOptionType.RANDOM) {
                            randomSelections.push(this.getRandSelection());
                        } else {
                            customSelections.push(_gameOptionType);
                        }
                    }
                }
            } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
                        _iterator7.return();
                    }
                } finally {
                    if (_didIteratorError7) {
                        throw _iteratorError7;
                    }
                }
            }

            if (totalSelection > maxManualSelections) {
                console.error("Invalid selection totals in getPlayerCustomSelections. Total: " + totalSelection + ", Max: " + maxManualSelections);
            }
            // Append random selections to the end of the list.
            return customSelections.concat(randomSelections);
        }
    }, {
        key: "getRandSelection",
        value: function getRandSelection() {
            var validGameOptions = this.getValidGameOptionTypes();
            var option = this.getRandomInt(1, validGameOptions.size);
            switch (option) {
                case 1:
                    return GameOptionType.PAPER;
                case 2:
                    return GameOptionType.SCISSOR;
                case 3:
                    return GameOptionType.ROCK;
                case 3 + _UpgradeConstants.LIZARD_REQUIRED_PRESTIGE_LEVEL:
                    return GameOptionType.LIZARD;
                case 3 + _UpgradeConstants.SPOCK_REQUIRED_PRESTIGE_LEVEL:
                    return GameOptionType.SPOCK;
                default:
                    throw "Invalid rand selection: " + option;
            }
        }
        /** Disable the game option selection when it should not be usable anymore. */

    }, {
        key: "disableGameOptionSelection",
        value: function disableGameOptionSelection(gameOptionType) {
            var currSelectionCount = this.currentSelectionsMap.get(gameOptionType);
            if (currSelectionCount > 0) {
                // Reset the counter for it and let the RANDOM selection be auto-updated.
                this.currentSelectionsMap.set(gameOptionType, 0);
                // const randSelectionCount = this.currentSelectionsMap.get(GameOptionType.RANDOM);
                // this.currentSelectionsMap.set(gameOptionType, randSelectionCount + currSelectionCount);
            }
        }
        /** "Disable" (add class, not disable click event) the buttons when they should not be selectable anymore. */

    }, {
        key: "updateGameOptionCustomSelectionUiDisabled",
        value: function updateGameOptionCustomSelectionUiDisabled() {
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
                for (var _iterator8 = this.getAllSelectableGameOptions()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                    var option = _step8.value;

                    var _gameOptionType2 = option;
                    var shouldDisableSelection = this.shouldButtonBeDisabled(_gameOptionType2);
                    if (shouldDisableSelection) {
                        // Reset the counter for it and let the RANDOM selection be auto-updated.
                        this.currentSelectionsMap.set(_gameOptionType2, 0);
                    }
                    this.game.ui.setClassName(this.getButtonId(_gameOptionType2, GameOptionTypeCustomSelection.ALL), "buttonDisabled", !shouldDisableSelection);
                    this.game.ui.setClassName(this.getButtonId(_gameOptionType2, GameOptionTypeCustomSelection.PLUS), "buttonDisabled", !shouldDisableSelection);
                    this.game.ui.setClassName(this.getButtonId(_gameOptionType2, GameOptionTypeCustomSelection.MINUS), "buttonDisabled", !shouldDisableSelection);
                }
            } catch (err) {
                _didIteratorError8 = true;
                _iteratorError8 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion8 && _iterator8.return) {
                        _iterator8.return();
                    }
                } finally {
                    if (_didIteratorError8) {
                        throw _iteratorError8;
                    }
                }
            }
        }
    }, {
        key: "shouldButtonBeDisabled",
        value: function shouldButtonBeDisabled(gameOptionType) {
            if (gameOptionType == GameOptionType.ROCK) {
                return this.game.upgrades.isUpgradeMaxed(_UpgradeConstants.UpgradeKey.ROCK_NEVER_LOSES_UPGRADE);
            } else if (gameOptionType == GameOptionType.PAPER) {
                return this.game.upgrades.isUpgraded(_UpgradeConstants.UpgradeKey.CONVERT_PAPER_GAME_OPTION_TO_ROCK);
            } else if (gameOptionType == GameOptionType.SCISSOR) {
                return this.game.upgrades.isUpgraded(_UpgradeConstants.UpgradeKey.CONVERT_SCISSOR_GAME_OPTION_TO_ROCK);
            } else if (gameOptionType == GameOptionType.LIZARD) {
                return this.game.upgrades.isUpgraded(_UpgradeConstants.UpgradeKey.CONVERT_LIZARD_GAME_OPTION_TO_ROCK);
            } else if (gameOptionType == GameOptionType.SPOCK) {
                return this.game.upgrades.isUpgraded(_UpgradeConstants.UpgradeKey.CONVERT_SPOCK_GAME_OPTION_TO_ROCK);
            }
            return false;
        }
    }, {
        key: "getBotSelection",
        value: function getBotSelection(numBotSelections) {
            var botSelections = [];
            for (var i = 0; i < numBotSelections; i++) {
                botSelections.push(this.getRandSelection());
            }
            return botSelections;
        }
    }, {
        key: "getRandomInt",
        value: function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }]);

    return SelectionManager;
}();

},{"../constants/UiIdConstants":4,"../constants/UpgradeConstants":5}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpeedRunManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UpgradeAutoPurchaser = require("../utils/UpgradeAutoPurchaser");

var _UserInterface = require("./UserInterface");

var _UiIdConstants = require("../constants/UiIdConstants");

var _PointsManager = require("./PointsManager");

var _UpgradeConstants = require("../constants/UpgradeConstants");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpeedRunManager = exports.SpeedRunManager = function () {
    function SpeedRunManager(game) {
        _classCallCheck(this, SpeedRunManager);

        this.game = game;
        this.upgradeAutoPurchaser = new _UpgradeAutoPurchaser.UpgradeAutoPurchaser(this.game);
        this.isSpeedRunEnabled = false;
    }

    _createClass(SpeedRunManager, [{
        key: "init",
        value: function init() {
            _UserInterface.UserInterface.setOptionsForSelector(["0", "500", "1000", "1500", "2000", "2500", "3000", "3500", "4000"], _UiIdConstants.SPEED_RUN_ROUND_LIMIT_SELECTOR_UI_ID);
            _UserInterface.UserInterface.setSelectorValue("0", _UiIdConstants.SPEED_RUN_ROUND_LIMIT_SELECTOR_UI_ID);
            _UserInterface.UserInterface.setCheckBoxState(_UiIdConstants.SPEED_RUN_AUTO_PURCHASE_UPGRADES_UI_ID, true);
            _UserInterface.UserInterface.setCheckBoxState(_UiIdConstants.SPEED_RUN_HIDE_GAME_OPTION_UPGRADE_PURCHASES_UI_ID, false);
        }
    }, {
        key: "getIsSpeedRunEnabled",
        value: function getIsSpeedRunEnabled() {
            return this.isSpeedRunEnabled;
        }
    }, {
        key: "getUpgradeAutoPurchaser",
        value: function getUpgradeAutoPurchaser() {
            return this.upgradeAutoPurchaser;
        }
    }, {
        key: "startSpeedRun",
        value: function startSpeedRun() {
            this.isSpeedRunEnabled = true;
            this.game.ui.setSpeedRunResults("", "");
            this.upgradeAutoPurchaser.reset();
            var speedRunMaxRoundIterations = this.getSpeedRunRoundLimit();
            if (speedRunMaxRoundIterations == 0) speedRunMaxRoundIterations = 20000;
            console.log("Executing speed run for " + speedRunMaxRoundIterations);
            this.game.stats.clearGamePlayedTimer();
            this.game.board.clearGameTimer();
            this.game.stats.initTripometerMazeStats();
            var currTimeInMs = 0;
            var currIterCount = 0;
            var avgPointsTimeIntervalInMs = 1 * 1000 * 60; // 1 minute
            var currIntervalInMs = 0;
            var pointsTracker = new PointsTracker(this.game);
            var pointLog = [];
            var startPrestige = this.game.upgrades.getUpgradeValue(_UpgradeConstants.UpgradeKey.GAME_OPTION_PRESTIGE_UPGRADE);
            // Initialize upgrade queues
            this.upgradeAutoPurchaser.processUpgradePurchases(currTimeInMs);
            while (this.getIsSpeedRunEnabled() && this.upgradeAutoPurchaser.hasUpgradesLeft()) {
                currIterCount += 1;
                if (currIterCount > speedRunMaxRoundIterations) {
                    console.log("Max iterations hit for speed run.");
                    break;
                }
                this.game.board.startNewRound();
                // Increment timers/counters
                var roundLengthInMs = this.game.board.getGameIntervalInMs();
                currTimeInMs += roundLengthInMs;
                currIntervalInMs += roundLengthInMs;
                this.game.stats.addGamePlayedTimerTick(roundLengthInMs / 1000);
                this.upgradeAutoPurchaser.processUpgradePurchases(currTimeInMs);
                // Calculate point averages if over time threshold.
                if (currIntervalInMs >= avgPointsTimeIntervalInMs) {
                    var pointsMap = pointsTracker.getPointsSinceLastCheck();
                    pointLog.push(this.generatePointsLog(pointsMap, avgPointsTimeIntervalInMs));
                    currIntervalInMs = 0;
                }
                var currPrestige = this.game.upgrades.getUpgradeValue(_UpgradeConstants.UpgradeKey.GAME_OPTION_PRESTIGE_UPGRADE);
                // Terminate after a prestige.
                if (startPrestige != currPrestige) {
                    console.log("Pristige purchased.");
                    break;
                }
            }
            console.log("Finished speed run at " + this.msToTime(pointLog.length * avgPointsTimeIntervalInMs + currIntervalInMs) + " with total rounds: " + currIterCount + ".");
            var purchaseLog = this.upgradeAutoPurchaser.getPurchaseLog();
            this.game.ui.setSpeedRunResults(this.createUpgradeResultOutputTable(purchaseLog), this.createAvgPointsResultOutputTable(pointLog, avgPointsTimeIntervalInMs));
            this.stopSpeedRun();
        }
        /** Points per min (per sec for PSRLS) / Total points */

    }, {
        key: "generatePointsLog",
        value: function generatePointsLog(pointsMap, durationInMs) {
            var result = [];
            for (var pt in _PointsManager.PointType) {
                var pointType = pt;
                // Points / second (Rock/Paper/Scissor)
                // Points / min (Points)
                var timeUnit = pointType == _PointsManager.PointType.POINTS ? durationInMs / 1000 / 60 : durationInMs / 1000;
                // Avg pts/sec
                result.push(pointsMap.get(pointType) / timeUnit);
                // All Time Total
                // result.push(this.game.stats.getStat(this.game.stats.getStatsKeyFromPointType(pointType), true));
                // Current Total
                result.push(this.game.points.getPoints(pointType));
            }
            return result;
        }
    }, {
        key: "createAvgPointsResultOutputTable",
        value: function createAvgPointsResultOutputTable(pointsLog, avgPointsTimeIntervalInMs) {
            var html = "";
            var currTimeInMs = 0;
            html += "<tr><td>Time</td>";
            for (var pointType in _PointsManager.PointType) {
                html += "<td>" + pointType + "</td><td></td>";
            }
            html += "</tr>";
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = pointsLog[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var log = _step.value;

                    html += "<tr>";
                    currTimeInMs += avgPointsTimeIntervalInMs;
                    html += "<td>" + this.msToTime(currTimeInMs) + "</td>";
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = log[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var entry = _step2.value;

                            html += "<td className=''>" + this.game.ui.getDecimalPrettyPrintNumber(entry, 0) + "</td>";
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }

                    "</tr>";
                    // TODO: add curr points earned
                    // TODO: add points per round next
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return html;
        }
    }, {
        key: "createUpgradeResultOutputTable",
        value: function createUpgradeResultOutputTable(purchaseLog) {
            var html = "";
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = purchaseLog[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var log = _step3.value;

                    if (this.game.ui.isCheckBoxChecked(_UiIdConstants.SPEED_RUN_HIDE_GAME_OPTION_UPGRADE_PURCHASES_UI_ID) && this.game.upgrades.getUpgrade(log.upgradeKey).getPointType() != _PointsManager.PointType.POINTS) {
                        continue;
                    }
                    html += "<tr>" + ("<td className='speedRunTimeRow'>" + this.msToTime(log.timeInMs) + "</td>") + ("<td className='speedRunUpgradeRow'>" + log.upgradeKey + "</td>") + ("<td className='speedRunCostRow'>" + log.cost + "</td>") + ("<td className=''>" + this.game.upgrades.getUpgrade(log.upgradeKey).getPointType() + "</td>") + "</tr>";
                    // TODO: add curr points earned
                    // TODO: add points per round next
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return html;
        }
    }, {
        key: "msToTime",
        value: function msToTime(timeInMs) {
            if (timeInMs / 1000 < 60) {
                return (timeInMs / 1000).toFixed(1) + " Sec";
            } else if (timeInMs / (1000 * 60) < 60) {
                return (timeInMs / (1000 * 60)).toFixed(1) + " Min";
            } else if (timeInMs / (1000 * 60 * 60) < 24) {
                return (timeInMs / (1000 * 60 * 60)).toFixed(2) + " Hrs";
            } else {
                return (timeInMs / (1000 * 60 * 60 * 24)).toFixed(3) + " Days";
            }
        }
    }, {
        key: "stopSpeedRun",
        value: function stopSpeedRun() {
            this.isSpeedRunEnabled = false;
            this.game.stats.startGamePlayedTimer();
            this.game.board.startGameTimer();
        }
    }, {
        key: "getSpeedRunRoundLimit",
        value: function getSpeedRunRoundLimit() {
            var selectedVal = _UserInterface.UserInterface.getSelectorSelectedValue(_UiIdConstants.SPEED_RUN_ROUND_LIMIT_SELECTOR_UI_ID);
            if (selectedVal == null) return 0;
            return parseInt(selectedVal);
        }
    }, {
        key: "clearOutputs",
        value: function clearOutputs() {
            this.game.ui.setSpeedRunResults("", "");
        }
    }]);

    return SpeedRunManager;
}();

var PointsTracker = function () {
    function PointsTracker(game) {
        _classCallCheck(this, PointsTracker);

        this.game = game;
        this.prevPoints = new Map();
        for (var pointType in _PointsManager.PointType) {
            this.prevPoints.set(pointType, 0);
        }
    }

    _createClass(PointsTracker, [{
        key: "getPointsSinceLastCheck",
        value: function getPointsSinceLastCheck() {
            var pointsMap = new Map();
            var strings = "";
            // Set new points starting point
            for (var pt in _PointsManager.PointType) {
                var pointType = pt;
                var prevPoints = this.prevPoints.get(pointType);
                var newPoints = this.game.stats.getStat(this.game.stats.getStatsKeyFromPointType(pointType), true);
                strings += " -> " + newPoints;
                pointsMap.set(pointType, newPoints - prevPoints);
                this.prevPoints.set(pointType, newPoints);
            }
            return pointsMap;
        }
    }, {
        key: "setPointsCheckPoint",
        value: function setPointsCheckPoint() {
            for (var pt in _PointsManager.PointType) {
                var pointType = pt;
                this.prevPoints;
            }
        }
    }]);

    return PointsTracker;
}();

},{"../constants/UiIdConstants":4,"../constants/UpgradeConstants":5,"../utils/UpgradeAutoPurchaser":45,"./PointsManager":10,"./UserInterface":16}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StatsManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Serializable2 = require("../models/Serializable");

var _StatsConstants = require("../constants/StatsConstants");

var _PointsManager = require("./PointsManager");

var _SelectionManager = require("./SelectionManager");

var _UpgradeConstants = require("../constants/UpgradeConstants");

var _UiIdConstants = require("../constants/UiIdConstants");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_STAT_VALUE = 0;
var SERIALIZABLE_PROPERTIES = ['statsMap', 'saveTimeStamp'];
var ONE_SECOND_IN_MS = 1000;

var StatsManager = exports.StatsManager = function (_Serializable) {
    _inherits(StatsManager, _Serializable);

    function StatsManager(game) {
        _classCallCheck(this, StatsManager);

        var _this = _possibleConstructorReturn(this, (StatsManager.__proto__ || Object.getPrototypeOf(StatsManager)).call(this, SERIALIZABLE_PROPERTIES));

        _this.statsMap = new Map();
        _this.tripometerMap = new Map();
        _this.game = game;
        return _this;
    }

    _createClass(StatsManager, [{
        key: "initStatsMap",
        value: function initStatsMap() {
            for (var statsKey in _StatsConstants.StatsKey) {
                this.statsMap.set(statsKey, DEFAULT_STAT_VALUE);
            }
            this.initTripometerMazeStats();
            this.updateAllStatsKey();
        }
    }, {
        key: "initTripometerMazeStats",
        value: function initTripometerMazeStats() {
            for (var statsKey in _StatsConstants.StatsKey) {
                this.tripometerMap.set(statsKey, DEFAULT_STAT_VALUE);
            }
            this.updateAllStatsKey();
        }
    }, {
        key: "clearGamePlayedTimer",
        value: function clearGamePlayedTimer() {
            clearInterval(this.timePlayedTimer);
        }
    }, {
        key: "updateAllStatsKey",
        value: function updateAllStatsKey() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = _StatsConstants.STATS_TO_UI_ID_MAP.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var statsKey = _step.value;

                    this.updateStatsKey(statsKey);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "isTripometerActive",
        value: function isTripometerActive() {
            return this.game.ui.isCheckBoxChecked(_UiIdConstants.STATS_TRIPOMETER_CHECKBOX_ID);
        }
    }, {
        key: "updateStatsKey",
        value: function updateStatsKey(statsKey) {
            var statsKeyUiId = this.getStatsKeyUiId(statsKey);
            var statsValue = this.getStat(statsKey, this.isTripometerActive());
            // TODO(prestige): Consider having a prestige manager that has everything for unlock levels. A prestige constants file for this as well instead of scattering.
            var shouldShowStat = true;
            // Show/hide the stat key if it can be hidden by prestige.
            if (_StatsConstants.STATS_MINIMUM_PRESTIGE_MAP.has(statsKey)) {
                var prestigeLevel = this.game.upgrades.getUpgradeValue(_UpgradeConstants.UpgradeKey.GAME_OPTION_PRESTIGE_UPGRADE);
                var minLevel = _StatsConstants.STATS_MINIMUM_PRESTIGE_MAP.get(statsKey);
                shouldShowStat = prestigeLevel >= minLevel;
                this.game.ui.setUiIdVisible(this.getStatsKeyParentDiv(statsKey), shouldShowStat);
            }
            if (shouldShowStat) {
                this.game.ui.updateStatsKey(statsKey, statsValue, statsKeyUiId);
            }
            // Special case for avg pts/round to update avg pts/sec.
            if (statsKey == _StatsConstants.StatsKey.AVERAGE_POINTS_EARNED_PER_ROUND) {
                this.updatePointsPerSecond();
            }
        }
        /** Use the average points per round stat to create the average points per second stat. */

    }, {
        key: "updatePointsPerSecond",
        value: function updatePointsPerSecond() {
            // Skip updates for speed run mode.
            if (this.game.speedRun.getIsSpeedRunEnabled()) {
                return;
            }
            // TODO: this probably should just be a stats key to make this easier to manage.
            var avgPointsPerRound = this.getStat(_StatsConstants.StatsKey.AVERAGE_POINTS_EARNED_PER_ROUND, this.isTripometerActive());
            var secsPerRound = this.game.board.getGameIntervalInMs() / 1000;
            var avgPointsPerSecond = avgPointsPerRound / secsPerRound;
            this.game.ui.setText(_UiIdConstants.STATS_AVERAGE_POINTS_PER_SECOND_UI_ID, "" + this.game.ui.getSmartDecimalPrettyPrintNumber(avgPointsPerSecond));
        }
    }, {
        key: "clearStatValue",
        value: function clearStatValue(statsKey) {
            this.tripometerMap.set(statsKey, DEFAULT_STAT_VALUE);
            this.statsMap.set(statsKey, DEFAULT_STAT_VALUE);
        }
    }, {
        key: "addAverageStatValue",
        value: function addAverageStatValue(value, totalStatsKey, averageStatKey) {
            // Trip/Regular stats need to calculate based on pre-existing values (totals).  Update each independently.
            this.handleAverageStatValue(value, totalStatsKey, averageStatKey, false);
            this.handleAverageStatValue(value, totalStatsKey, averageStatKey, true);
            this.updateStatsKey(averageStatKey);
        }
    }, {
        key: "handleAverageStatValue",
        value: function handleAverageStatValue(value, totalStatsKey, averageStatKey) {
            var isTripStat = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            var currAverageValue = this.getStat(averageStatKey, isTripStat);
            var newValue = value;
            if (currAverageValue !== 0) {
                var totalCount = this.getStat(totalStatsKey, isTripStat);
                var statDiff = (value - currAverageValue) / (totalCount + 1);
                newValue = value + statDiff;
            }
            if (isTripStat) {
                this.tripometerMap.set(averageStatKey, newValue);
            } else {
                this.statsMap.set(averageStatKey, newValue);
            }
        }
    }, {
        key: "getStat",
        value: function getStat(statsKey) {
            var useTripStat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (!this.hasMazeStat(statsKey)) {
                console.log("MISSING STATS KEY: " + statsKey + ".");
                console.log(this.statsMap);
                return 0;
            }
            return useTripStat ? this.tripometerMap.get(statsKey) : this.statsMap.get(statsKey);
        }
    }, {
        key: "hasMazeStat",
        value: function hasMazeStat(statsKey) {
            return this.statsMap.has(statsKey);
        }
    }, {
        key: "addStatsToKey",
        value: function addStatsToKey(value, statsKey) {
            var oldValue = this.getStat(statsKey);
            this.statsMap.set(statsKey, value + oldValue);
            var oldTripValue = this.getStat(statsKey, true);
            this.tripometerMap.set(statsKey, value + oldTripValue);
            this.updateStatsKey(statsKey);
        }
    }, {
        key: "setMaxStatsValue",
        value: function setMaxStatsValue(value, statsKey) {
            var oldValue = this.getStat(statsKey);
            this.statsMap.set(statsKey, Math.max(value, oldValue));
            var oldTripValue = this.getStat(statsKey, true);
            this.tripometerMap.set(statsKey, Math.max(value, oldTripValue));
            this.updateStatsKey(statsKey);
        }
    }, {
        key: "hasStatsKeyUiId",
        value: function hasStatsKeyUiId(statsKey) {
            return _StatsConstants.STATS_TO_UI_ID_MAP.has(statsKey);
        }
    }, {
        key: "getStatsKeyUiId",
        value: function getStatsKeyUiId(statsKey) {
            if (this.hasStatsKeyUiId(statsKey)) return _StatsConstants.STATS_TO_UI_ID_MAP.get(statsKey);
        }
    }, {
        key: "getStatsKeyParentDiv",
        value: function getStatsKeyParentDiv(statsKey) {
            if (this.hasStatsKeyUiId(statsKey)) {
                return this.getStatsKeyUiId(statsKey) + "Div";
            }
            return null;
        }
    }, {
        key: "getStatsKeyFromPointType",
        value: function getStatsKeyFromPointType(pointType) {
            switch (pointType) {
                case _PointsManager.PointType.POINTS:
                    return _StatsConstants.StatsKey.TOTAL_POINTS_EARNED;
                case _PointsManager.PointType.PAPERS:
                    return _StatsConstants.StatsKey.TOTAL_PAPER_EARNED;
                case _PointsManager.PointType.SCISSORS:
                    return _StatsConstants.StatsKey.TOTAL_SCISSORS_EARNED;
                case _PointsManager.PointType.ROCKS:
                    return _StatsConstants.StatsKey.TOTAL_ROCKS_EARNED;
                case _PointsManager.PointType.SPOCKS:
                    return _StatsConstants.StatsKey.TOTAL_SPOCKS_EARNED;
                case _PointsManager.PointType.LIZARDS:
                    return _StatsConstants.StatsKey.TOTAL_LIZARDS_EARNED;
                default:
                    console.error("Invalid getStatsKeyFromPointType: " + pointType + ".");
                    return null;
            }
        }
    }, {
        key: "getStatsKeyFromWinningGameOptionType",
        value: function getStatsKeyFromWinningGameOptionType(winningOption) {
            switch (winningOption) {
                case _SelectionManager.GameOptionType.PAPER:
                    return _StatsConstants.StatsKey.TOTAL_WINS_WITH_PAPER;
                case _SelectionManager.GameOptionType.SCISSOR:
                    return _StatsConstants.StatsKey.TOTAL_WINS_WITH_SCISSOR;
                case _SelectionManager.GameOptionType.ROCK:
                    return _StatsConstants.StatsKey.TOTAL_WINS_WITH_ROCK;
                case _SelectionManager.GameOptionType.SPOCK:
                    return _StatsConstants.StatsKey.TOTAL_WINS_WITH_SPOCK;
                case _SelectionManager.GameOptionType.LIZARD:
                    return _StatsConstants.StatsKey.TOTAL_WINS_WITH_LIZARD;
                default:
                    console.error("Invalid getStatsKeyFromWinningGameOptionType: " + winningOption + ".");
                    return null;
            }
        }
    }, {
        key: "setStatsToKey",
        value: function setStatsToKey(value, statsKey) {
            this.statsMap.set(statsKey, value);
            this.tripometerMap.set(statsKey, value);
            this.updateStatsKey(statsKey);
        }
    }, {
        key: "addStatsToKeyList",
        value: function addStatsToKeyList(amount, statsKeyList) {
            if (!statsKeyList) return;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = statsKeyList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var statsKey = _step2.value;

                    this.addStatsToKey(amount, statsKey);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }, {
        key: "startGamePlayedTimer",
        value: function startGamePlayedTimer() {
            var _this2 = this;

            this.clearGamePlayedTimer();
            this.timePlayedTimer = setInterval(function () {
                var experimentMovementSpeedMultiplier = 1 / _this2.game.experiments.getGameSpeedMultiplier();
                _this2.addGamePlayedTimerTick(experimentMovementSpeedMultiplier);
            }, ONE_SECOND_IN_MS);
        }
    }, {
        key: "addGamePlayedTimerTick",
        value: function addGamePlayedTimerTick(tickAmount) {
            this.addStatsToKey(tickAmount, _StatsConstants.StatsKey.TOTAL_TIME_PLAYED_IN_SECONDS);
        }
    }, {
        key: "deserialize",
        value: function deserialize(jsonObj) {
            _get(StatsManager.prototype.__proto__ || Object.getPrototypeOf(StatsManager.prototype), "deserialize", this).call(this, jsonObj);
            // Reset average points earned at each reload
            this.statsMap.set(_StatsConstants.StatsKey.AVERAGE_POINTS_EARNED_PER_ROUND, 0);
        }
    }]);

    return StatsManager;
}(_Serializable2.Serializable);

},{"../constants/StatsConstants":3,"../constants/UiIdConstants":4,"../constants/UpgradeConstants":5,"../models/Serializable":18,"./PointsManager":10,"./SelectionManager":12}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UpgradeManager = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _GameSpeedUpgrade = require("../upgrades/definitions/game/GameSpeedUpgrade");

var _FlatPointsUpgrade = require("../upgrades/definitions/game/FlatPointsUpgrade");

var _PlayMultipleGameOptionsUpgrade = require("../upgrades/definitions/game/PlayMultipleGameOptionsUpgrade");

var _RockAlwaysWinsUpgrade = require("../upgrades/definitions/game/RockAlwaysWinsUpgrade");

var _RockNeverLosesUpgrade = require("../upgrades/definitions/game/RockNeverLosesUpgrade");

var _TiesEarnPointsUpgrade = require("../upgrades/definitions/game/TiesEarnPointsUpgrade");

var _UnlockPaperScissorRockPoints = require("../upgrades/definitions/game/UnlockPaperScissorRockPoints");

var _GameOptionEqualizer = require("../upgrades/definitions/game/GameOptionEqualizer");

var _StreakMulliganUpgrade = require("../upgrades/definitions/streaks/StreakMulliganUpgrade");

var _TiesDoNotBreakStreakUpgrade = require("../upgrades/definitions/streaks/TiesDoNotBreakStreakUpgrade");

var _TiesExtendStreakUpgrade = require("../upgrades/definitions/streaks/TiesExtendStreakUpgrade");

var _WinStreakMultiplierUpgrade = require("../upgrades/definitions/streaks/WinStreakMultiplierUpgrade");

var _RockWinsMultiplyCurrentStreak = require("../upgrades/definitions/streaks/RockWinsMultiplyCurrentStreak");

var _BonusGameOptionPointsEarnedPerWin = require("../upgrades/definitions/gameOption/BonusGameOptionPointsEarnedPerWin");

var _ChangeGameOptionToRockUpgrade = require("../upgrades/definitions/gameOption/ChangeGameOptionToRockUpgrade");

var _GameOptionWinMultiplierUpgrade = require("../upgrades/definitions/gameOption/GameOptionWinMultiplierUpgrade");

var _ConvertGameOptionToRockUpgrade = require("../upgrades/definitions/gameOption/ConvertGameOptionToRockUpgrade");

var _PaperFlatPointsUpgrade = require("../upgrades/definitions/gameOption/PaperFlatPointsUpgrade");

var _ScissorGameSpeedUpgrade = require("../upgrades/definitions/gameOption/ScissorGameSpeedUpgrade");

var _SpockCriticalWinUpgrade = require("../upgrades/definitions/gameOption/SpockCriticalWinUpgrade");

var _LizardWinStreakMultiplierUpgrade = require("../upgrades/definitions/gameOption/LizardWinStreakMultiplierUpgrade");

var _RockStreakIncrementUpgrade = require("../upgrades/definitions/gameOption/RockStreakIncrementUpgrade");

var _GameOptionPrestigeUpgrade = require("../upgrades/definitions/gameOption/GameOptionPrestigeUpgrade");

var _UpgradeConstants = require("../constants/UpgradeConstants");

var _Serializable2 = require("../models/Serializable");

var _UserInterface = require("./UserInterface");

var _UiIdConstants = require("../constants/UiIdConstants");

var _GameRules = require("../utils/GameRules");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UPGRADE_MAP_PROPERTY_KEY = 'upgradeMap';
var SERIALIZABLE_PROPERTIES = [UPGRADE_MAP_PROPERTY_KEY];

var UpgradeManager = exports.UpgradeManager = function (_Serializable) {
    _inherits(UpgradeManager, _Serializable);

    function UpgradeManager(game) {
        _classCallCheck(this, UpgradeManager);

        var _this = _possibleConstructorReturn(this, (UpgradeManager.__proto__ || Object.getPrototypeOf(UpgradeManager)).call(this, SERIALIZABLE_PROPERTIES));

        _this.game = game;
        return _this;
    }

    _createClass(UpgradeManager, [{
        key: "initUpgrades",
        value: function initUpgrades() {
            var prestigeLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            this.upgradeMap = new Map();
            // General Game/Points
            this.createUpgrade(new _FlatPointsUpgrade.FlatPointsUpgrade(this.game, _UpgradeConstants.UpgradeKey.FLAT_POINTS_UPGRADE));
            this.createUpgrade(new _GameSpeedUpgrade.GameSpeedUpgrade(this.game, _UpgradeConstants.UpgradeKey.GAME_SPEED_UPGRADE));
            this.createUpgrade(new _TiesEarnPointsUpgrade.TiesEarnPointsUpgrade(this.game, _UpgradeConstants.UpgradeKey.TIES_EARN_POINTS_UPGRADE));
            this.createUpgrade(new _PlayMultipleGameOptionsUpgrade.PlayMultipleGameOptionsUpgrade(this.game, _UpgradeConstants.UpgradeKey.PLAY_MULTIPLE_GAME_OPTIONS_UPGRADE));
            // Streaks
            this.createUpgrade(new _TiesDoNotBreakStreakUpgrade.TiesDoNotBreakStreakUpgrade(this.game, _UpgradeConstants.UpgradeKey.TIES_DO_NOT_BREAK_STREAK_UPGRADE));
            this.createUpgrade(new _WinStreakMultiplierUpgrade.WinStreakMultiplierUpgrade(this.game, _UpgradeConstants.UpgradeKey.WIN_STREAK_MULTIPLIER_UPGRADE));
            this.createUpgrade(new _StreakMulliganUpgrade.StreakMulliganUpgrade(this.game, _UpgradeConstants.UpgradeKey.STREAK_MULLIGAN_UPGRADE));
            this.createUpgrade(new _TiesExtendStreakUpgrade.TiesExtendStreakUpgrade(this.game, _UpgradeConstants.UpgradeKey.TIES_EXTEND_STREAK_UPGRADE));
            // Game Option Selection
            this.createUpgrade(new _UnlockPaperScissorRockPoints.UnlockPaperScissorRockPoints(this.game, _UpgradeConstants.UpgradeKey.UNLOCK_PAPER_SCISSOR_ROCK_POINTS));
            this.createUpgrade(new _GameOptionEqualizer.GameOptionEqualizer(this.game, _UpgradeConstants.UpgradeKey.GAME_OPTION_EQUALIZER));
            // Game Option Win Multiplier
            this.createUpgrade(new _GameOptionWinMultiplierUpgrade.PaperGameOptionWinMultiplierUpgrade(this.game, _UpgradeConstants.UpgradeKey.PAPER_GAME_OPTION_MULTIPLIER));
            this.createUpgrade(new _GameOptionWinMultiplierUpgrade.ScissorGameOptionWinMultiplierUpgrade(this.game, _UpgradeConstants.UpgradeKey.SCISSOR_GAME_OPTION_MULTIPLIER));
            this.createUpgrade(new _GameOptionWinMultiplierUpgrade.RockGameOptionWinMultiplierUpgrade(this.game, _UpgradeConstants.UpgradeKey.ROCK_GAME_OPTION_MULTIPLIER));
            this.createUpgrade(new _GameOptionWinMultiplierUpgrade.SpockGameOptionWinMultiplierUpgrade(this.game, _UpgradeConstants.UpgradeKey.SPOCK_GAME_OPTION_MULTIPLIER));
            this.createUpgrade(new _GameOptionWinMultiplierUpgrade.LizardGameOptionWinMultiplierUpgrade(this.game, _UpgradeConstants.UpgradeKey.LIZARD_GAME_OPTION_MULTIPLIER));
            // Game Option Point Types Earned Per Win
            this.createUpgrade(new _BonusGameOptionPointsEarnedPerWin.BonusPaperEarnedPerWin(this.game, _UpgradeConstants.UpgradeKey.BONUS_PAPER_EARNED_PER_WIN));
            this.createUpgrade(new _BonusGameOptionPointsEarnedPerWin.BonusScissorsEarnedPerWin(this.game, _UpgradeConstants.UpgradeKey.BONUS_SCISSORS_EARNED_PER_WIN));
            this.createUpgrade(new _BonusGameOptionPointsEarnedPerWin.BonusRocksEarnedPerWin(this.game, _UpgradeConstants.UpgradeKey.BONUS_ROCKS_EARNED_PER_WIN));
            this.createUpgrade(new _BonusGameOptionPointsEarnedPerWin.BonusSpocksEarnedPerWin(this.game, _UpgradeConstants.UpgradeKey.BONUS_SPOCKS_EARNED_PER_WIN));
            this.createUpgrade(new _BonusGameOptionPointsEarnedPerWin.BonusLizardsEarnedPerWin(this.game, _UpgradeConstants.UpgradeKey.BONUS_LIZARDS_EARNED_PER_WIN));
            // Game Option Special Upgrade
            this.createUpgrade(new _PaperFlatPointsUpgrade.PaperFlatPointsUpgrade(this.game, _UpgradeConstants.UpgradeKey.PAPER_FLAT_POINTS_UPGRADE));
            this.createUpgrade(new _ScissorGameSpeedUpgrade.ScissorGameSpeedUpgrade(this.game, _UpgradeConstants.UpgradeKey.SCISSOR_GAME_SPEED_UPGRADE));
            this.createUpgrade(new _RockStreakIncrementUpgrade.RockStreakIncrementUpgrade(this.game, _UpgradeConstants.UpgradeKey.ROCK_STREAK_INCREMENT_UPGRADE));
            this.createUpgrade(new _SpockCriticalWinUpgrade.SpockCriticalWinUpgrade(this.game, _UpgradeConstants.UpgradeKey.SPOCK_CRITICAL_WIN_UPGRADE));
            this.createUpgrade(new _LizardWinStreakMultiplierUpgrade.LizardWinStreakMultiplierUpgrade(this.game, _UpgradeConstants.UpgradeKey.LIZARD_WIN_STREAK_MULTIPLIER_UPGRADE));
            // Change Game Option Selection
            this.createUpgrade(new _ChangeGameOptionToRockUpgrade.PaperChangeGameOptionToRockUpgrade(this.game, _UpgradeConstants.UpgradeKey.PAPER_CHANGE_GAME_OPTION_TO_ROCK_UPGRADE));
            this.createUpgrade(new _ChangeGameOptionToRockUpgrade.ScissorChangeGameOptionToRockUpgrade(this.game, _UpgradeConstants.UpgradeKey.SCISSORS_CHANGE_GAME_OPTION_TO_ROCK_UPGRADE));
            this.createUpgrade(new _ChangeGameOptionToRockUpgrade.SpockChangeGameOptionToRockUpgrade(this.game, _UpgradeConstants.UpgradeKey.SPOCKS_CHANGE_GAME_OPTION_TO_ROCK_UPGRADE));
            this.createUpgrade(new _ChangeGameOptionToRockUpgrade.LizardChangeGameOptionToRockUpgrade(this.game, _UpgradeConstants.UpgradeKey.LIZARD_CHANGE_GAME_OPTION_TO_ROCK_UPGRADE));
            // Convert All Game Options to Rock
            this.createUpgrade(new _ConvertGameOptionToRockUpgrade.ConvertPaperGameOptionToRockUpgrade(this.game, _UpgradeConstants.UpgradeKey.CONVERT_PAPER_GAME_OPTION_TO_ROCK));
            this.createUpgrade(new _ConvertGameOptionToRockUpgrade.ConvertScissorGameOptionToRockUpgrade(this.game, _UpgradeConstants.UpgradeKey.CONVERT_SCISSOR_GAME_OPTION_TO_ROCK));
            this.createUpgrade(new _ConvertGameOptionToRockUpgrade.ConvertSpockGameOptionToRockUpgrade(this.game, _UpgradeConstants.UpgradeKey.CONVERT_SPOCK_GAME_OPTION_TO_ROCK));
            this.createUpgrade(new _ConvertGameOptionToRockUpgrade.ConvertLizardGameOptionToRockUpgrade(this.game, _UpgradeConstants.UpgradeKey.CONVERT_LIZARD_GAME_OPTION_TO_ROCK));
            // Rock Never Loses
            this.createUpgrade(new _RockNeverLosesUpgrade.RockNeverLosesUpgrade(this.game, _UpgradeConstants.UpgradeKey.ROCK_NEVER_LOSES_UPGRADE));
            this.createUpgrade(new _RockAlwaysWinsUpgrade.RockAlwaysWinsUpgrade(this.game, _UpgradeConstants.UpgradeKey.ROCK_ALWAYS_WINS_UPGRADE));
            this.createUpgrade(new _RockWinsMultiplyCurrentStreak.RockWinsMultiplyCurrentStreak(this.game, _UpgradeConstants.UpgradeKey.ROCK_WINS_MULTIPLIES_CURRENT_STREAK));
            // Prestige
            this.createUpgrade(new _GameOptionPrestigeUpgrade.GameOptionPrestigeUpgrade(this.game, _UpgradeConstants.UpgradeKey.GAME_OPTION_PRESTIGE_UPGRADE, prestigeLevel));
            // Init upgrade point type mapping
            this.initUpgradePointTypeMapping();
        }
        /* Group all of the upgrade keys by their point type for quick access. */

    }, {
        key: "initUpgradePointTypeMapping",
        value: function initUpgradePointTypeMapping() {
            this.upgradeKeysByType = new Map();
            for (var upgradeKey in _UpgradeConstants.UpgradeKey) {
                var upgrade = this.getUpgrade(upgradeKey);
                if (upgrade == null) {
                    throw "Missing upgrade definition for key: " + upgradeKey;
                }
                var pointType = upgrade.getPointType();
                if (!this.upgradeKeysByType.has(pointType)) {
                    this.upgradeKeysByType.set(pointType, new Set());
                }
                this.upgradeKeysByType.get(pointType).add(upgrade.getUpgradeKey());
            }
        }
    }, {
        key: "getUpgradeKeysByPointType",
        value: function getUpgradeKeysByPointType(pointType) {
            if (!this.upgradeKeysByType.has(pointType)) return new Set();
            return this.upgradeKeysByType.get(pointType);
        }
    }, {
        key: "getUpgradeValue",
        value: function getUpgradeValue(upgradeKey) {
            var useNextLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            return this.getUpgrade(upgradeKey).getUpgradeValue(useNextLevel);
        }
    }, {
        key: "updateAllUpgradeUi",
        value: function updateAllUpgradeUi() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.upgradeMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _step$value = _slicedToArray(_step.value, 2),
                        _ = _step$value[0],
                        upgrade = _step$value[1];

                    upgrade.updateUiProperties();
                    upgrade.updateUiDisabled();
                    upgrade.updateVisibility();
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.updateUpgradeSectionVisibility();
        }
    }, {
        key: "hideAllUpgradeNewTextForUnlockedUpgrades",
        value: function hideAllUpgradeNewTextForUnlockedUpgrades() {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.upgradeMap[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _step2$value = _slicedToArray(_step2.value, 2),
                        _ = _step2$value[0],
                        upgrade = _step2$value[1];

                    if (upgrade.isUnlocked()) {
                        upgrade.setVisibilityOfNewText(false);
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }, {
        key: "createUpgrade",
        value: function createUpgrade(upgrade) {
            this.upgradeMap.set(upgrade.getUpgradeKey(), upgrade);
        }
    }, {
        key: "getUpgrade",
        value: function getUpgrade(upgradeKey) {
            if (!this.hasUpgrade(upgradeKey)) {
                console.error("Unexpected upgrade key requested: " + upgradeKey);
                return null;
            }
            return this.upgradeMap.get(upgradeKey);
        }
    }, {
        key: "hasUpgrade",
        value: function hasUpgrade(upgradeKey) {
            return this.upgradeMap.has(upgradeKey);
        }
    }, {
        key: "getUpgradeLevel",
        value: function getUpgradeLevel(upgradeKey) {
            var useNextLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (!this.hasUpgrade(upgradeKey)) return 0;
            return this.getUpgrade(upgradeKey).upgradeLevel + (useNextLevel ? 1 : 0);
        }
    }, {
        key: "isUpgraded",
        value: function isUpgraded(upgradeKey) {
            if (!this.hasUpgrade(upgradeKey)) return false;
            return this.getUpgrade(upgradeKey).getIsUpgraded();
        }
    }, {
        key: "isUpgradeMaxed",
        value: function isUpgradeMaxed(upgradeKey) {
            if (!this.hasUpgrade(upgradeKey)) return false;
            return this.getUpgrade(upgradeKey).isMaxUpgradeLevel();
        }
    }, {
        key: "isUnlocked",
        value: function isUnlocked(upgradeKey) {
            if (!this.hasUpgrade(upgradeKey)) return false;
            return this.upgradeMap.get(upgradeKey).isUnlocked();
        }
    }, {
        key: "isUpgradeAvailableForUpgradeType",
        value: function isUpgradeAvailableForUpgradeType(upgradeType) {
            for (var upgradeKey in _UpgradeConstants.UpgradeKey) {
                var upgrade = this.getUpgrade(upgradeKey);
                if (upgrade && upgrade.upgradeType === upgradeType && !upgrade.isMaxUpgradeLevel() && upgrade.isUnlocked()) {
                    return true;
                }
            }
            return false;
        }
    }, {
        key: "updateUpgradeSectionVisibility",
        value: function updateUpgradeSectionVisibility() {
            for (var upgradeType in _UpgradeConstants.UpgradeType) {
                var isUpgradeAvailable = this.isUpgradeAvailableForUpgradeType(upgradeType);
                var uiKey = _UpgradeConstants.UPGRADE_TYPE_TO_HEADER_UI_KEY_MAP.get(upgradeType);
                if (uiKey) {
                    _UserInterface.UserInterface.setIdVisible(uiKey, isUpgradeAvailable);
                }
            }
        }
    }, {
        key: "getAllUnlockedUpgrades",
        value: function getAllUnlockedUpgrades() {
            var upgradeKeyList = [];
            for (var upgradeType in _UpgradeConstants.UpgradeKey) {
                if (this.isUnlocked(upgradeType)) {
                    upgradeKeyList.push(upgradeType);
                }
            }
            return upgradeKeyList;
        }
        /* Reset all upgrades and points. Prestige level persists at "CURRENT" level. */

    }, {
        key: "prestigeUpgrades",
        value: function prestigeUpgrades() {
            var prestigeLevel = this.getUpgradeLevel(_UpgradeConstants.UpgradeKey.GAME_OPTION_PRESTIGE_UPGRADE);
            for (var upgradeKey in _UpgradeConstants.UpgradeKey) {
                var upgrade = this.getUpgrade(upgradeKey);
                if (upgrade.getUpgradeKey() == _UpgradeConstants.UpgradeKey.GAME_OPTION_PRESTIGE_UPGRADE) {
                    upgrade.setUpgradeLevel(prestigeLevel);
                } else {
                    upgrade.setUpgradeLevel(0);
                }
            }
            this.game.points.resetPoints();
            // TODO: this should show whatever new type we're unlocking.
            this.game.ui.setHtml(_UiIdConstants.PRESTIGE_MODAL_RULES_UI_ID, (0, _GameRules.generateGameRulesHtml)(this.game));
            this.game.ui.showModalByType(_UserInterface.ModalType.PRESTIGE_MODAL);
            this.game.updateAllUi();
        }
    }, {
        key: "serializeProperty",
        value: function serializeProperty(property) {
            // Upgrade map will export the upgrade level of each key
            if (property === UPGRADE_MAP_PROPERTY_KEY) {
                var obj = {};
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = this.upgradeMap[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var _step3$value = _slicedToArray(_step3.value, 2),
                            k = _step3$value[0],
                            v = _step3$value[1];

                        obj[k] = v.upgradeLevel;
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }

                return obj;
            } else {
                return _get(UpgradeManager.prototype.__proto__ || Object.getPrototypeOf(UpgradeManager.prototype), "serializeProperty", this).call(this, property);
            }
        }
    }, {
        key: "deserializeProperty",
        value: function deserializeProperty(property, value) {
            // Upgrade map will restore the upgrade level of each key
            if (property === UPGRADE_MAP_PROPERTY_KEY) {
                for (var upgradeKey in value) {
                    if (this.upgradeMap.has(upgradeKey)) {
                        this.upgradeMap.get(upgradeKey).upgradeLevel = parseInt(value[upgradeKey]);
                    } else {
                        console.error("Failed to deserialize upgrade key: ", upgradeKey);
                    }
                }
            } else {
                return _get(UpgradeManager.prototype.__proto__ || Object.getPrototypeOf(UpgradeManager.prototype), "deserializeProperty", this).call(this, property, value);
            }
        }
    }]);

    return UpgradeManager;
}(_Serializable2.Serializable);

exports.default = UpgradeManager;

},{"../constants/UiIdConstants":4,"../constants/UpgradeConstants":5,"../models/Serializable":18,"../upgrades/definitions/game/FlatPointsUpgrade":30,"../upgrades/definitions/game/GameOptionEqualizer":31,"../upgrades/definitions/game/GameSpeedUpgrade":32,"../upgrades/definitions/game/PlayMultipleGameOptionsUpgrade":33,"../upgrades/definitions/game/RockAlwaysWinsUpgrade":34,"../upgrades/definitions/game/RockNeverLosesUpgrade":35,"../upgrades/definitions/game/TiesEarnPointsUpgrade":36,"../upgrades/definitions/game/UnlockPaperScissorRockPoints":37,"../upgrades/definitions/gameOption/BonusGameOptionPointsEarnedPerWin":20,"../upgrades/definitions/gameOption/ChangeGameOptionToRockUpgrade":21,"../upgrades/definitions/gameOption/ConvertGameOptionToRockUpgrade":22,"../upgrades/definitions/gameOption/GameOptionPrestigeUpgrade":23,"../upgrades/definitions/gameOption/GameOptionWinMultiplierUpgrade":24,"../upgrades/definitions/gameOption/LizardWinStreakMultiplierUpgrade":25,"../upgrades/definitions/gameOption/PaperFlatPointsUpgrade":26,"../upgrades/definitions/gameOption/RockStreakIncrementUpgrade":27,"../upgrades/definitions/gameOption/ScissorGameSpeedUpgrade":28,"../upgrades/definitions/gameOption/SpockCriticalWinUpgrade":29,"../upgrades/definitions/streaks/RockWinsMultiplyCurrentStreak":38,"../upgrades/definitions/streaks/StreakMulliganUpgrade":39,"../upgrades/definitions/streaks/TiesDoNotBreakStreakUpgrade":40,"../upgrades/definitions/streaks/TiesExtendStreakUpgrade":41,"../upgrades/definitions/streaks/WinStreakMultiplierUpgrade":42,"../utils/GameRules":43,"./UserInterface":16}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserInterface = exports.UIProperty = exports.ModalType = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _StatsConstants = require("../constants/StatsConstants");

var _BoardManager = require("./BoardManager");

var _UiIdConstants = require("../constants/UiIdConstants");

var _GameRules = require("../utils/GameRules");

var _PointsManager = require("./PointsManager");

var _UpgradeConstants = require("../constants/UpgradeConstants");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModalType = exports.ModalType = undefined;
(function (ModalType) {
    ModalType["CHANGE_LOG_MODAL"] = "CHANGE_LOG_MODAL";
    ModalType["CONTROLS_MODAL"] = "CONTROLS_MODAL";
    ModalType["HELP_MODAL"] = "HELP_MODAL";
    ModalType["IMPORT_SAVE_MODAL"] = "IMPORT_SAVE_MODAL";
    ModalType["NEW_GAME_CONFIRM_MODAL"] = "NEW_GAME_CONFIRM_MODAL";
    ModalType["OFFLINE_SCORE_MODAL"] = "OFFLINE_SCORE_MODAL";
    ModalType["SAVE_VERSION_WARNING_MODAL"] = "SAVE_VERSION_WARNING_MODAL";
    ModalType["SETTINGS_MODAL"] = "SETTINGS_MODAL";
    ModalType["GAME_RULES_MODAL"] = "GAME_RULES_MODAL";
    ModalType["STATS_MODAL"] = "STATS_MODAL";
    ModalType["PRESTIGE_MODAL"] = "PRESTIGE_MODAL";
})(ModalType || (exports.ModalType = ModalType = {}));
var UIProperty = exports.UIProperty = undefined;
(function (UIProperty) {
    UIProperty["DISPLAY"] = "DISPLAY";
    UIProperty["DISABLED"] = "DISABLED";
})(UIProperty || (exports.UIProperty = UIProperty = {}));

var UserInterface = exports.UserInterface = function () {
    function UserInterface(game, isMobileBrowser) {
        _classCallCheck(this, UserInterface);

        // Cache the UI checkbox elements to avoid jquery searches.
        this.generalUiElementMap = null;
        this.prettyPrintCacheMap = null;
        this.game = game;
        this.activeModalType = null;
        this.initUiJQueryCaches();
        this.isMobileBrowser = isMobileBrowser;
    }

    _createClass(UserInterface, [{
        key: "init",
        value: function init() {
            this.initText();
            this.initEvents();
        }
    }, {
        key: "isMobile",
        value: function isMobile() {
            return this.isMobileBrowser;
        }
    }, {
        key: "initUiJQueryCaches",
        value: function initUiJQueryCaches() {
            this.generalUiElementMap = new Map();
            this.prettyPrintCacheMap = new Map();
        }
    }, {
        key: "initText",
        value: function initText() {
            // Init points text for puny/big maze.
            this.setPointsText(_PointsManager.PointType.POINTS, 0);
            this.setPointsText(_PointsManager.PointType.PAPERS, 0);
            this.setPointsText(_PointsManager.PointType.SCISSORS, 0);
            this.setPointsText(_PointsManager.PointType.ROCKS, 0);
        }
    }, {
        key: "initEvents",
        value: function initEvents() {
            var _this = this;

            // Global click event
            // $(document).click((e) => {
            $(document).on("mouseup", function (e) {
                // Close active modal if clicking outside (ie. click target is not descendant of parent id)
                if (_this.activeModalType) {
                    if ($("#" + _this.getModalIdByType(_this.activeModalType)).find(e.target).length === 0) {
                        _this.setModalVisibilityByType(_this.activeModalType, false);
                        _this.activeModalType = null;
                    }
                }
            });
            //TODO: migrate these to a constants file.
            $("#" + _UiIdConstants.CHANGE_LOG_BUTTON_ID).click(function (e) {
                return _this.showModalByType(ModalType.CHANGE_LOG_MODAL, true, e);
            });
            $("#" + _UiIdConstants.SAVE_GAME_BUTTON_ID).click(function () {
                return _this.game.save.saveGameToLocalStorage();
            });
            $("#deleteSaveGame").click(function () {
                return _this.game.save.clearLocalStorage();
            });
            $("#newGame").click(function (e) {
                return _this.showModalByType(ModalType.NEW_GAME_CONFIRM_MODAL, true, e);
            });
            $("#helpButton").click(function (e) {
                return _this.showModalByType(ModalType.HELP_MODAL, true, e);
            });
            $("#importSaveOpenModalButton").click(function (e) {
                $("#importSaveErrorLabel").text("");
                _this.showModalByType(ModalType.IMPORT_SAVE_MODAL, true, e);
            });
            $("#openControlsModalButton").click(function (e) {
                return _this.showModalByType(ModalType.CONTROLS_MODAL, true, e);
            });
            $("#settingsButton").click(function (e) {
                return _this.showModalByType(ModalType.SETTINGS_MODAL, true, e);
            });
            $("#copySaveJson").click(function () {
                return _this.game.save.copySaveToClipboard();
            });
            $("#importSaveModalButton").click(function () {
                var saveJson = $("#importSaveTextArea").val();
                var importSuccess = _this.game.save.importGameSaveFromString(saveJson);
                if (importSuccess) {
                    _this.showModalByType(ModalType.IMPORT_SAVE_MODAL, false);
                }
                $("#importSaveErrorLabel").text(importSuccess ? "" : "Failed to import save json.");
            });
            $("#" + _UiIdConstants.GAME_RULES_MODAL_BUTTON_UI_ID).click(function (e) {
                var modalHtml = (0, _GameRules.generateGameRulesHtml)(_this.game);
                _this.setHtml(_UiIdConstants.GAME_RULES_MODAL_DIV_UI_ID, modalHtml);
                _this.showModalByType(ModalType.GAME_RULES_MODAL, true, e);
            });
            $("#" + _UiIdConstants.CONFIRM_NEW_GAME_MODAL_BUTTON_YES).click(function () {
                _this.closeAllModals();
                _this.game.hardResetGame();
            });
            $("#" + _UiIdConstants.CONFIRM_NEW_GAME_MODAL_BUTTON_NO).click(function () {
                return _this.closeAllModals();
            });
            // Experiments
            $("#" + _UiIdConstants.EXPERIMENT_NEW_ROUND_BUTTON_UI_ID).click(function () {
                _this.game.board.startNewRound();
            });
            // Speed Run
            $("#" + _UiIdConstants.SPEED_RUN_NEW_GAME_BUTTON_UI_ID).click(function () {
                return _this.game.hardResetGame();
            });
            $("#" + _UiIdConstants.SPEED_RUN_NEXT_PRESTIGE_UI_ID).click(function () {
                var prestigeUpgrade = _this.game.upgrades.getUpgrade(_UpgradeConstants.UpgradeKey.GAME_OPTION_PRESTIGE_UPGRADE);
                var currPrestige = prestigeUpgrade.getUpgradeValue();
                prestigeUpgrade.setUpgradeLevel(currPrestige + 1);
                _this.game.upgrades.prestigeUpgrades();
            });
            $("#" + _UiIdConstants.SPEED_RUN_RESET_CURRENT_PRESTIGE_UI_ID).click(function () {
                return _this.game.upgrades.prestigeUpgrades();
            });
            $("#" + _UiIdConstants.SPEED_RUN_BUY_ALL_AFFORDABLE_UPGRADES_UI_ID).click(function () {
                _this.game.speedRun.getUpgradeAutoPurchaser().processUpgradePurchases(0);
            });
            $("#" + _UiIdConstants.SPEED_RUN_EXECUTE_BUTTON_UI_ID).click(function () {
                if (_this.game.speedRun.getIsSpeedRunEnabled()) {
                    _this.game.speedRun.stopSpeedRun();
                } else {
                    _this.game.speedRun.startSpeedRun();
                }
            });
            // Stats Events
            // $(`#clearAllStats`).click(() => this.game.stats.initStatsMap());
            $("#statsButton").click(function (e) {
                return _this.showModalByType(ModalType.STATS_MODAL, true, e);
            });
            $("#statsTripometerDisplayCheckbox").click(function (e) {
                return _this.game.stats.updateAllStatsKey();
            });
            $("#resetTripometerStatsButton").click(function () {
                _this.game.stats.initTripometerMazeStats();
                _this.game.stats.updateAllStatsKey();
            });
        }
    }, {
        key: "setBotSelection",
        value: function setBotSelection(botOptionTypes) {
            this.setHtml(_UiIdConstants.BOT_GAME_OPTION_CHOICE_UI_ID, UserInterface.newLineHtmlJoin(botOptionTypes));
        }
    }, {
        key: "setPlayerSelection",
        value: function setPlayerSelection(playerOptionTypes) {
            this.setHtml(_UiIdConstants.PLAYER_GAME_OPTION_CHOICE_UI_ID, UserInterface.newLineHtmlJoin(playerOptionTypes));
        }
    }, {
        key: "setGameTimer",
        value: function setGameTimer(timerVal) {
            this.setText(_UiIdConstants.GAME_TIMER_UI_ID, "" + this.getDecimalPrettyPrintNumber(timerVal / 1000, 2));
        }
    }, {
        key: "setRoundResult",
        value: function setRoundResult(winTieLossHtml, critWinResults, streakDetails, pointsEarnedList) {
            var _this2 = this;

            if (winTieLossHtml.length !== critWinResults.length) throw "Mismatched winTieLoss and critWinResults in setRoundResult: " + winTieLossHtml + ", " + critWinResults + ".";
            var mappedResult = [];
            for (var i = 0; i < winTieLossHtml.length; i++) {
                if (winTieLossHtml[i] !== _BoardManager.GameResultType.WIN && critWinResults[i]) throw "Critical win found on a non-win round in setRoundResult: " + winTieLossHtml[i] + ", " + critWinResults[i] + ".";
                if (critWinResults[i]) {
                    mappedResult.push("!" + winTieLossHtml[i] + "!");
                } else {
                    mappedResult.push(winTieLossHtml[i]);
                }
            }
            this.setHtml(_UiIdConstants.PLAYER_GAME_OPTION_RESULT_UI_ID, UserInterface.newLineHtmlJoin(mappedResult));
            this.setHtml(_UiIdConstants.GAME_OPTION_STREAK_UI_ID, UserInterface.newLineHtmlJoin(streakDetails));
            this.setHtml(_UiIdConstants.GAME_OPTION_POINTS_PER_PLAY_UI_ID, UserInterface.newLineHtmlJoin(pointsEarnedList.map(function (pts) {
                return _this2.game.ui.getSmartDecimalPrettyPrintNumber(pts);
            })));
        }
    }, {
        key: "setSpeedRunResults",
        value: function setSpeedRunResults(speedRunResultsHtml, avgPointsResultHtml) {
            this.setHtml(_UiIdConstants.SPEED_RUN_UPGRADE_RESULTS_UI_ID, speedRunResultsHtml);
            this.setHtml(_UiIdConstants.SPEED_RUN_AVG_POINTS_RESULTS_UI_ID, avgPointsResultHtml);
        }
    }, {
        key: "updateStatsKey",
        value: function updateStatsKey(statsKey, statsValue, statsKeyUiId) {
            if (!statsKeyUiId) {
                console.error("No stats key statsKeyUiId in updateStatsKey: " + statsKey, statsKey);
                return;
            }
            if (!$("#" + statsKeyUiId)) {
                console.error("No UI component registered to stats key: " + statsKey + " and UiId: " + statsKeyUiId + ".");
                return;
            }
            var statsText = " " + this.getPrettyPrintFormattedStat(statsValue, statsKey);
            this.setText(statsKeyUiId, statsText);
        }
    }, {
        key: "getOrUpdateUiElementInMap",
        value: function getOrUpdateUiElementInMap(uiElementMap, selector) {
            // Element never looked up or no longer exists, re-fetch. (?)
            // Length == 0 for jquery null element found.
            if (!uiElementMap.has(selector) || uiElementMap.get(selector).length == 0) {
                // || uiElementMap.get(selector).parent() == null) {
                var uiElement = $("" + selector);
                if (uiElement == null || uiElement.length == 0) return null;
                uiElementMap.set(selector, uiElement);
                return uiElement;
            }
            return uiElementMap.get(selector);
        }
    }, {
        key: "addCheckEvent",
        value: function addCheckEvent(uiId, fxnHandler) {
            var element = this.getOrUpdateUiElementInMap(this.generalUiElementMap, "#" + uiId);
            if (element != null) {
                element.change(fxnHandler);
            }
        }
    }, {
        key: "setCurrentRoundStats",
        value: function setCurrentRoundStats(pointsPerWin, maxStreak, winCount, tieCount, lossCount) {
            this.setText(_UiIdConstants.POINTS_EARNED_IN_CURRENT_ROUND_UI_ID, "" + this.getSmartDecimalPrettyPrintNumber(pointsPerWin));
            this.setText(_UiIdConstants.MAX_STREAK_IN_CURRENT_ROUND_UI_ID, "" + this.getDecimalPrettyPrintNumber(maxStreak));
            this.setText(_UiIdConstants.WIN_TIE_LOSS_IN_CURRENT_ROUND_UI_ID, " (" + winCount + " / " + lossCount + " / " + tieCount + ")");
        }
    }, {
        key: "setPointsText",
        value: function setPointsText(pointType, amount) {
            var pointsUiId = null;
            var decimalLength = 0;
            if (pointType == _PointsManager.PointType.POINTS) {
                pointsUiId = _UiIdConstants.POINTS_UI_ID;
                decimalLength = 2;
            } else if (pointType == _PointsManager.PointType.PAPERS) {
                pointsUiId = _UiIdConstants.PAPER_POINTS_UI_ID;
            } else if (pointType == _PointsManager.PointType.SCISSORS) {
                pointsUiId = _UiIdConstants.SCISSOR_POINTS_UI_ID;
            } else if (pointType == _PointsManager.PointType.ROCKS) {
                pointsUiId = _UiIdConstants.ROCK_POINTS_UI_ID;
            } else if (pointType == _PointsManager.PointType.SPOCKS) {
                pointsUiId = _UiIdConstants.SPOCK_POINTS_UI_ID;
            } else if (pointType == _PointsManager.PointType.LIZARDS) {
                pointsUiId = _UiIdConstants.LIZARD_POINTS_UI_ID;
            } else {
                console.error("Missing pointsType for setPointsType: " + pointType);
            }
            if (pointsUiId != null) {
                this.game.ui.setText(pointsUiId, "" + this.getSmartDecimalPrettyPrintNumber(amount));
            }
        }
    }, {
        key: "updatePrestigeUiContent",
        value: function updatePrestigeUiContent() {
            var prestigeLevel = this.game.upgrades.getUpgradeLevel(_UpgradeConstants.UpgradeKey.GAME_OPTION_PRESTIGE_UPGRADE);
            var shouldShowLizardPoints = prestigeLevel >= _UpgradeConstants.LIZARD_REQUIRED_PRESTIGE_LEVEL;
            this.setUiIdVisible(_UiIdConstants.LIZARD_POINTS_ROW_UI_ID, shouldShowLizardPoints);
            var shouldShowSpockPoints = prestigeLevel >= _UpgradeConstants.SPOCK_REQUIRED_PRESTIGE_LEVEL;
            this.setUiIdVisible(_UiIdConstants.SPOCK_POINTS_ROW_UI_ID, shouldShowSpockPoints);
            this.game.board.getSelectionManager().updateCustomSelectionPrestigeVisibility();
        }
    }, {
        key: "getPrettyPrintFormattedStat",
        value: function getPrettyPrintFormattedStat(statsValue) {
            var statsKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (_StatsConstants.STATS_TIME_PRETTY_PRINT_FORMAT.has(statsKey)) {
                return UserInterface.getPrettyPrintTime(statsValue);
            } else if (_StatsConstants.STATS_PERCENTAGE_PRINT_FORMAT.has(statsKey)) {
                return UserInterface.getPrettyPrintNumber(statsValue * 100) + "%";
            } else if (_StatsConstants.STATS_SMART_DECIMAL_PRINT_FORMAT.has(statsKey)) {
                return this.getSmartDecimalPrettyPrintNumber(statsValue);
            }
            return UserInterface.getPrettyPrintNumber(statsValue);
        }
    }, {
        key: "getDecimalPrettyPrintNumber",
        value: function getDecimalPrettyPrintNumber(num) {
            var decimalLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            var cacheKey = num + "_" + decimalLength;
            if (this.prettyPrintCacheMap.has(cacheKey)) {
                return this.prettyPrintCacheMap.get(cacheKey);
            }
            var formattedResult = parseFloat(num.toFixed(decimalLength)).toLocaleString(undefined, { minimumFractionDigits: decimalLength });
            this.prettyPrintCacheMap.set(cacheKey, formattedResult);
            return formattedResult;
        }
    }, {
        key: "getSmartDecimalPrettyPrintNumber",
        value: function getSmartDecimalPrettyPrintNumber(num) {
            var numDecimals = 0;
            if (num % 1 == 0) {
                numDecimals = 0;
            } else if (num < 10) {
                numDecimals = 2;
            } else if (num < 100) {
                numDecimals = 1;
            } else if (num < 1000) {
                numDecimals = 0;
            }
            // TODO(PERF): This pretty print looks super expensive.
            var formattedResult = parseFloat(num.toFixed(numDecimals)).toLocaleString(undefined, { minimumFractionDigits: numDecimals });
            // this.prettyPrintCacheMap.set(cacheKey, formattedResult);
            return formattedResult;
        }
    }, {
        key: "setCssProperty",

        // TODO: this should be used for everything more or less when setting css.
        value: function setCssProperty(uiId, property, value) {
            var shouldCache = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

            var uiElement = shouldCache ? this.getOrUpdateUiElementInMap(this.generalUiElementMap, "#" + uiId) : $("#" + uiId);
            if (uiElement != null) {
                uiElement.css(property, value);
            }
        }
    }, {
        key: "setDisabled",
        value: function setDisabled(uiId, isDisabled) {
            var shouldCache = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            var uiElement = shouldCache ? this.getOrUpdateUiElementInMap(this.generalUiElementMap, "#" + uiId) : $("#" + uiId);
            if (uiElement != null) {
                uiElement.prop('disabled', isDisabled);
            }
        }
    }, {
        key: "setClassName",
        value: function setClassName(uiId, className) {
            var shouldRemove = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            var uiElement = this.getOrUpdateUiElementInMap(this.generalUiElementMap, "#" + uiId);
            if (uiElement != null) {
                if (shouldRemove) {
                    uiElement.removeClass(className);
                } else {
                    uiElement.addClass(className);
                }
            }
        }
    }, {
        key: "setText",
        value: function setText(uiId, text) {
            var uiElement = this.getOrUpdateUiElementInMap(this.generalUiElementMap, "#" + uiId);
            if (uiElement != null) {
                uiElement.text(text);
            }
        }
    }, {
        key: "setHtml",
        value: function setHtml(uiId, text) {
            var uiElement = this.getOrUpdateUiElementInMap(this.generalUiElementMap, "#" + uiId);
            if (uiElement != null) {
                uiElement.html(text);
            }
        }
    }, {
        key: "isCheckBoxChecked",
        value: function isCheckBoxChecked(uiId) {
            var uiElement = this.getOrUpdateUiElementInMap(this.generalUiElementMap, "#" + uiId);
            if (uiElement == null) {
                return false;
            }
            return uiElement.is(':checked');
        }
    }, {
        key: "showModalByType",
        value: function showModalByType(newModalType) {
            var shouldCloseOtherModals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var clickEvent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            // Prevent clicks from propagating to the global modal closing click event
            if (clickEvent) clickEvent.stopPropagation();
            for (var modalType in ModalType) {
                if (shouldCloseOtherModals && modalType !== newModalType) {
                    this.setModalVisibilityByType(modalType, false);
                } else {
                    this.setModalVisibilityByType(newModalType, true);
                    this.activeModalType = newModalType;
                }
            }
        }
    }, {
        key: "setModalVisibilityByType",
        value: function setModalVisibilityByType(modalType, setVisible) {
            UserInterface.setIdVisible(this.getModalIdByType(modalType), setVisible);
        }
    }, {
        key: "getModalIdByType",
        value: function getModalIdByType(modalType) {
            if (modalType === ModalType.SETTINGS_MODAL) {
                return _UiIdConstants.SETTINGS_MODAL_ID;
            } else if (modalType === ModalType.OFFLINE_SCORE_MODAL) {
                // return "offlineModal";
            } else if (modalType === ModalType.STATS_MODAL) {
                return _UiIdConstants.STATS_MODAL_ID;
            } else if (modalType === ModalType.HELP_MODAL) {
                return _UiIdConstants.HELP_MODAL_ID;
            } else if (modalType === ModalType.IMPORT_SAVE_MODAL) {
                return _UiIdConstants.IMPORT_SAVE_MODAL_ID;
            } else if (modalType === ModalType.CONTROLS_MODAL) {
                return _UiIdConstants.CONTROLS_MODAL_ID;
            } else if (modalType === ModalType.SAVE_VERSION_WARNING_MODAL) {
                return _UiIdConstants.SAVE_VERSION_WARNING_MODAL_ID;
            } else if (modalType === ModalType.NEW_GAME_CONFIRM_MODAL) {
                return _UiIdConstants.CONFIRM_NEW_GAME_MODAL_ID;
            } else if (modalType === ModalType.CHANGE_LOG_MODAL) {
                return _UiIdConstants.CHANGE_LOG_MODAL_ID;
            } else if (modalType === ModalType.PRESTIGE_MODAL) {
                return _UiIdConstants.PRESTIGE_MODAL_ID;
            } else if (modalType === ModalType.GAME_RULES_MODAL) {
                return _UiIdConstants.GAME_RULES_MODAL_UI_ID;
            } else {
                console.error("Invalid modal to show: " + modalType);
            }
        }
    }, {
        key: "closeAllModals",
        value: function closeAllModals() {
            for (var modalType in ModalType) {
                this.setModalVisibilityByType(modalType, false);
            }
            this.activeModalType = null;
        }
    }, {
        key: "showSaveModalForDuration",
        value: function showSaveModalForDuration(visibilityDuration) {
            UserInterface.setIdVisible(_UiIdConstants.SAVE_TOAST_MODAL_ID, true);
            setTimeout(function () {
                UserInterface.setIdVisible(_UiIdConstants.SAVE_TOAST_MODAL_ID, false);
            }, visibilityDuration);
        }
    }, {
        key: "setUiIdVisible",
        value: function setUiIdVisible(uiId) {
            var setVisible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var displayType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "block";

            $("#" + uiId).css("display", setVisible ? displayType : "none");
        }
    }, {
        key: "setImageIconBySelector",
        value: function setImageIconBySelector(idSelector, imgPath, pxSize) {
            $("" + idSelector).css("background-image", "url(\"" + imgPath + "\")");
            $("" + idSelector).css("background-repeat", "no-repeat");
            $("" + idSelector).css("background-position", "center");
            $("" + idSelector).css("background-size", pxSize);
        }
    }, {
        key: "setImageIcon",
        value: function setImageIcon(uiId, imgPath, pxSize) {
            this.setImageIconBySelector("#" + uiId, imgPath, pxSize);
        }
        /** Capitalize first letter, but lower case the rest (ROCK -> Rock). */

    }, {
        key: "capitalizeFirstLetter",
        value: function capitalizeFirstLetter(str) {
            if (!str) return null;
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        }
    }], [{
        key: "newLineHtmlJoin",
        value: function newLineHtmlJoin(printList) {
            return printList.join("<br />");
        }
    }, {
        key: "getPrettyPrintNumber",
        value: function getPrettyPrintNumber(num) {
            if (!num) return "0";
            return numberformat.formatShort(num);
        }
    }, {
        key: "getPrettyPrintTime",
        value: function getPrettyPrintTime(numMillis) {
            // Total hack: "1970-05-06T12:30:12.000Z" > "12:30:12"
            return new Date(numMillis * 1000).toISOString().substr(11, 8);
        }
    }, {
        key: "setIdVisible",
        value: function setIdVisible(uid) {
            var setVisible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var displayType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "block";

            $("#" + uid).css("display", setVisible ? displayType : "none");
        }
    }, {
        key: "setOptionsForSelector",
        value: function setOptionsForSelector(textList, uiId) {
            UserInterface.clearSelector(uiId);
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = textList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var text = _step.value;

                    $('<option/>').val(text).text(text).appendTo("#" + uiId);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "clearSelector",
        value: function clearSelector(uiId) {
            $("#" + uiId).empty();
        }
    }, {
        key: "setSelectorValue",
        value: function setSelectorValue(value, uiId) {
            $("#" + uiId).val(value);
        }
    }, {
        key: "getSelectorSelectedValue",
        value: function getSelectorSelectedValue(uiId) {
            return $("#" + uiId).val();
        }
    }, {
        key: "setCheckBoxState",
        value: function setCheckBoxState(uiId) {
            var isChecked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            $("#" + uiId).prop('checked', isChecked);
        }
    }]);

    return UserInterface;
}();

},{"../constants/StatsConstants":3,"../constants/UiIdConstants":4,"../constants/UpgradeConstants":5,"../utils/GameRules":43,"./BoardManager":7,"./PointsManager":10}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SLIDING_WINDOW_LENGTH = 40;
var PointsHistoryTrackerType = exports.PointsHistoryTrackerType = undefined;
(function (PointsHistoryTrackerType) {
    PointsHistoryTrackerType["SLIDING_WINDOW_COUNTER"] = "SLIDING_WINDOW_COUNTER";
    PointsHistoryTrackerType["SLIDING_WINDOW_AVERAGE"] = "SLIDING_WINDOW_AVERAGE";
})(PointsHistoryTrackerType || (exports.PointsHistoryTrackerType = PointsHistoryTrackerType = {}));

var PointsHistoryTracker = exports.PointsHistoryTracker = function () {
    function PointsHistoryTracker(game, statsKey, pointHistoryTrackerType) {
        var shouldDisableUiTimer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        _classCallCheck(this, PointsHistoryTracker);

        this.currIndex = 0;
        this.game = game;
        this.statsKey = statsKey;
        this.pointHistoryTrackerType = pointHistoryTrackerType;
        this.shouldDisableUiTimer = shouldDisableUiTimer;
        this.resetHistory();
    }

    _createClass(PointsHistoryTracker, [{
        key: "resetHistory",
        value: function resetHistory() {
            var stopTimer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            this.slidingWindow = new Array(SLIDING_WINDOW_LENGTH).fill(0);
            this.currentTotal = 0;
            this.currentDataPoints = 0;
            this.currIndex = 0;
            clearInterval(this.timer);
            if (!stopTimer) {
                this.startTimer();
            }
        }
    }, {
        key: "startTimer",
        value: function startTimer() {
            var _this = this;

            if (this.shouldDisableUiTimer || this.pointHistoryTrackerType == PointsHistoryTrackerType.SLIDING_WINDOW_COUNTER) return;
            this.timer = setInterval(function () {
                // Update average
                _this.updateStatsAverage();
                _this.slideWindow();
            }, 1000 * this.game.experiments.getGameSpeedMultiplier());
        }
    }, {
        key: "slideWindow",
        value: function slideWindow() {
            // Add total from previous second.
            var prevIndex = this.currIndex;
            var nextIndex = this.getNextIndex();
            // Add most recently completed bucket
            this.currentTotal += this.slidingWindow[prevIndex];
            // Subtract the new bucket indexes total and zero it out
            this.currentTotal -= this.slidingWindow[nextIndex];
            this.slidingWindow[nextIndex] = 0;
            // Update index after the fact.
            this.currIndex = nextIndex;
            // TODO: for sliding window avg, this used to be average stats update (and above part before). Lazy. Sue me.
            // Keep track of current points -- always short 1 data point from max
            this.currentDataPoints = this.currentDataPoints + 1 < this.slidingWindow.length ? this.currentDataPoints + 1 : this.slidingWindow.length - 1;
        }
    }, {
        key: "getNextIndex",
        value: function getNextIndex() {
            return ++this.currIndex === this.slidingWindow.length ? 0 : this.currIndex;
        }
    }, {
        key: "updateStatsAverage",
        value: function updateStatsAverage() {
            var average = this.getAverage();
            this.game.stats.setStatsToKey(average, this.statsKey);
        }
    }, {
        key: "getAverage",
        value: function getAverage() {
            if (this.currentDataPoints <= 0) return 0;
            return Math.max(0, this.currentTotal / this.currentDataPoints);
        }
        /* shouldUpdateAverage for when you want counter-based average */

    }, {
        key: "addNumber",
        value: function addNumber(value) {
            if (!this.timer) {
                this.startTimer();
            }
            this.slidingWindow[this.currIndex] += value;
            if (this.pointHistoryTrackerType == PointsHistoryTrackerType.SLIDING_WINDOW_COUNTER) {
                this.updateStatsAverage();
                this.slideWindow();
            }
        }
    }]);

    return PointsHistoryTracker;
}();

},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MAP_TYPE_PREFIX = "~~";

var Serializable = exports.Serializable = function () {
    function Serializable() {
        var basicPropertyList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, Serializable);

        this.serializablePropertyList = [];
        this.serializablePropertyList = basicPropertyList;
    }

    _createClass(Serializable, [{
        key: "stringifyMap",
        value: function stringifyMap(value) {
            try {
                return JSON.stringify([].concat(_toConsumableArray(value.entries())));
            } catch (e) {
                console.error("Error seriailizing expected map type: ", value);
                return "";
            }
        }
    }, {
        key: "destringifyMap",
        value: function destringifyMap(value) {
            // Trim prefix
            var str = value.substr(MAP_TYPE_PREFIX.length);
            return JSON.parse(str).reduce(function (m, _ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    key = _ref2[0],
                    val = _ref2[1];

                return m.set(key, val);
            }, new Map());
        }
    }, {
        key: "serializeProperty",
        value: function serializeProperty(property) {
            // Is of type "Serializable"
            if (this[property] instanceof Serializable) {
                return this[property].serialize();
            } else if (_typeof(this[property]) === 'object') {
                if (this[property] == null) {
                    console.error('Serialization error for property: ', property);
                    return "";
                }
                return MAP_TYPE_PREFIX + this.stringifyMap(this[property]);
            }
            return this[property];
        }
    }, {
        key: "deserializeProperty",
        value: function deserializeProperty(property, value) {
            if (value && typeof value === 'string' && value.startsWith(MAP_TYPE_PREFIX)) {
                this[property] = this.destringifyMap(value);
            } else {
                this[property] = value;
            }
        }
    }, {
        key: "getSerializablePropertyList",
        value: function getSerializablePropertyList() {
            return this.serializablePropertyList;
        }
    }, {
        key: "serialize",
        value: function serialize() {
            var gamePropList = this.getSerializablePropertyList();
            var jsonObj = {};
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = gamePropList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var prop = _step.value;

                    jsonObj[prop] = this.serializeProperty(prop);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return jsonObj;
        }
    }, {
        key: "deserialize",
        value: function deserialize(jsonObj) {
            for (var prop in jsonObj) {
                this.deserializeProperty(prop, jsonObj[prop]);
            }
        }
    }]);

    return Serializable;
}();

},{}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UserInterface = require('../managers/UserInterface');

var _UpgradeConstants = require('../constants/UpgradeConstants');

var _PointsManager = require('../managers/PointsManager');

var _ExperimentConstants = require('../constants/ExperimentConstants');

var _UpgradeUtils = require('../utils/UpgradeUtils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TOOLTIP_UI_ID_SUFFIX = "Tooltip";
var BUTTON_TEXT_UI_ID_SUFFIX = "Text";
var BUTTON_UI_ID_SUFFIX = "Button";
var NEW_TEXT_SUFFIX = "NewText";
var MIN_UPGRADE_LEVEL = 0;

var Upgrade = function () {
    function Upgrade(game, upgradeType) {
        var tooltipText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        var upgradeKey = arguments[3];
        var upgradeCount = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
        var isSinglePurchase = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
        var pointType = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : _PointsManager.PointType.POINTS;

        _classCallCheck(this, Upgrade);

        this.isSinglePurchase = false;
        this.arrowTextUnicode = "➔";
        this.game = game;
        this.upgradeType = upgradeType;
        this.tooltipText = tooltipText;
        this.upgradeKey = upgradeKey;
        this.upgradeLevel = upgradeCount;
        this.isSinglePurchase = isSinglePurchase;
        this.costScalingConfig = null;
        this.upgradeValueScalingConfig = null;
        this.currentUiTextDeduper = null;
        this.currentUiFormattedCostAmount = null;
        this.currentUiFormattedCostText = null;
        this.pointType = pointType;
        this.initUiButton();
        this.initClickEvent();
    }

    _createClass(Upgrade, [{
        key: 'getUpgradeLevel',
        value: function getUpgradeLevel() {
            var useNextLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            return useNextLevel ? this.getNextUpgradeLevel() : this.upgradeLevel;
        }
    }, {
        key: 'setUpgradeLevel',
        value: function setUpgradeLevel(upgradeLevel) {
            this.upgradeLevel = upgradeLevel;
        }
    }, {
        key: 'getNextUpgradeLevel',
        value: function getNextUpgradeLevel() {
            var isSellingUpgrade = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (this.isMaxUpgradeLevel() && !isSellingUpgrade) {
                return this.upgradeLevel;
            }
            var nextLevel = this.getUpgradeLevel() + (isSellingUpgrade ? -1 : 1);
            return Math.max(MIN_UPGRADE_LEVEL, nextLevel);
        }
    }, {
        key: 'buyUpgrade',
        value: function buyUpgrade() {
            if (!this.canAffordToBuyUpgrade()) {
                return false;
            }
            // Calculate cost (including free mode experiment)
            var cost = this.getCost();
            var isFreeMode = this.game.experiments.isExperimentEnabled(_ExperimentConstants.ExperimentKey.FREE_MODE);
            if (isFreeMode) {
                cost = 0;
            }
            // Get next upgrade level
            var isSellingUpgrade = this.game.experiments.isExperimentEnabled(_ExperimentConstants.ExperimentKey.SELL_MODE);
            this.upgradeLevel = this.getNextUpgradeLevel(isSellingUpgrade);
            if (!isSellingUpgrade) {
                this.game.points.spendPoints(this.pointType, cost);
            }
            this.game.upgrades.updateAllUpgradeUi();
            return true;
        }
        // This does not check upgrade toggle state

    }, {
        key: 'getIsUpgraded',
        value: function getIsUpgraded() {
            return this.isUnlocked() && this.upgradeLevel >= 1;
        }
    }, {
        key: 'canAffordToBuyUpgrade',
        value: function canAffordToBuyUpgrade() {
            // return Math.floor(this.getCost()) <= this.game.points.getPoints(this.pointType);
            return this.game.experiments.isExperimentEnabled(_ExperimentConstants.ExperimentKey.FREE_MODE) || this.game.experiments.isExperimentEnabled(_ExperimentConstants.ExperimentKey.SELL_MODE) || Math.floor(this.getCost()) <= this.game.points.getPoints(this.pointType);
        }
    }, {
        key: 'getTooltipText',
        value: function getTooltipText() {
            return this.tooltipText;
        }
    }, {
        key: 'setUiText',
        value: function setUiText(text) {
            // De-dupe UI text updates
            if (text === this.currentUiTextDeduper) return;
            this.currentUiTextDeduper = text;
            this.game.ui.setText(this.getButtonTextUiId(), text);
        }
    }, {
        key: 'getUiId',
        value: function getUiId() {
            return 'buy' + this.constructor.name;
        }
    }, {
        key: 'getButtonUiId',
        value: function getButtonUiId() {
            return '' + this.getUiId() + BUTTON_UI_ID_SUFFIX;
        }
    }, {
        key: 'getButtonTextUiId',
        value: function getButtonTextUiId() {
            return '' + this.getUiId() + BUTTON_TEXT_UI_ID_SUFFIX;
        }
    }, {
        key: 'getButtonTooltipUiId',
        value: function getButtonTooltipUiId() {
            return '' + this.getUiId() + TOOLTIP_UI_ID_SUFFIX;
        }
    }, {
        key: 'getNewTextUiId',
        value: function getNewTextUiId() {
            return '' + this.getUiId() + NEW_TEXT_SUFFIX;
        }
    }, {
        key: 'initUiButton',
        value: function initUiButton() {
            var _this = this;

            // Inject a button text + the span to be used as a tooltip
            // Wrapper div with: <new tag><button><button text><tooltip>
            var isMobile = this.game.ui.isMobile();
            // Supress new text for mobile.
            var newText = isMobile ? "" : '<p id=\'' + this.getNewTextUiId() + '\' class=\'upgradeNewText\'>New!</p>';
            var buttonTextHtml = '<div id=\'' + this.getButtonTextUiId() + '\' class=\'button_label\'></div>';
            var tooltipHtml = '<span id=\'' + this.getButtonTooltipUiId() + '\' class=\'tooltip biomeTooltip\'>' + this.getTooltipText() + '</span>';
            var button = '<button id=\'' + this.getButtonUiId() + '\'>' + buttonTextHtml + tooltipHtml + '</button>';
            this.game.ui.setHtml(this.getUiId(), '' + newText + button);
            // $(`#${this.getUiId()}`).html();
            // Hover does not work on mobile and we don't have an elegant solution, so we just disable it.
            if (!this.game.ui.isMobile()) {
                $('#' + this.getButtonUiId()).hover(function () {
                    _this.handleHoverStart();
                }, function () {
                    _this.handleHoverEnd();
                }, this);
            }
        }
    }, {
        key: 'handleHoverStart',
        value: function handleHoverStart() {
            this.updateToolTipText();
            this.setVisibilityOfNewText(false);
            _UserInterface.UserInterface.setIdVisible(this.getButtonTooltipUiId(), true);
        }
    }, {
        key: 'handleHoverEnd',
        value: function handleHoverEnd() {
            _UserInterface.UserInterface.setIdVisible(this.getButtonTooltipUiId(), false);
        }
    }, {
        key: 'updateToolTipText',
        value: function updateToolTipText() {
            $('#' + this.getButtonTooltipUiId()).html(this.getTooltipText());
        }
    }, {
        key: 'getStatArrowText',
        value: function getStatArrowText(currLevelVal, nextLevelVal) {
            var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

            return '(' + currLevelVal + ' ' + this.arrowTextUnicode + ' ' + nextLevelVal + unit + ')';
        }
    }, {
        key: 'setVisibilityOfNewText',
        value: function setVisibilityOfNewText(setVisible) {
            setVisible = setVisible && this.isUnlocked();
            $('#' + this.getNewTextUiId()).css("visibility", setVisible ? "visible" : "hidden");
        }
    }, {
        key: 'updateVisibility',
        value: function updateVisibility() {
            this.game.ui.setUiIdVisible(this.getUiId(), this.shouldShowUpgrade(), "flex");
        }
    }, {
        key: 'shouldShowUpgrade',
        value: function shouldShowUpgrade() {
            var hideFromMaxLevel = this.isMaxUpgradeLevel();
            var setVisible = this.isUnlocked() && !hideFromMaxLevel;
            return setVisible;
        }
    }, {
        key: 'updateUiDisabled',
        value: function updateUiDisabled() {
            this.game.ui.setClassName(this.getButtonUiId(), "buttonDisabled", !this.isDisabled());
        }
    }, {
        key: 'initClickEvent',
        value: function initClickEvent() {
            var _this2 = this;

            $('#' + this.getUiId() + BUTTON_UI_ID_SUFFIX).unbind("click");
            $('#' + this.getUiId() + BUTTON_UI_ID_SUFFIX).click(function () {
                return _this2.buyUpgrade();
            });
        }
    }, {
        key: 'isDisabled',
        value: function isDisabled() {
            return this.isMaxUpgradeLevel() || !this.canAffordToBuyUpgrade();
        }
    }, {
        key: 'updateUiProperties',
        value: function updateUiProperties() {
            throw 'updateUiProperties must be implemented.';
        }
    }, {
        key: 'hasUpgradeValueScalingConfig',
        value: function hasUpgradeValueScalingConfig() {
            return this.upgradeValueScalingConfig != null;
        }
    }, {
        key: 'setUpgradeValueScalingConfig',
        value: function setUpgradeValueScalingConfig(upgradeValueScalingConfig) {
            this.upgradeValueScalingConfig = upgradeValueScalingConfig;
            if (this.costScalingConfig != null && this.costScalingConfig.maxLevel != this.upgradeValueScalingConfig.maxLevel) {
                throw 'Mismatched maxLevels in setCostScalingConfig for ' + this.upgradeKey + '. Cost: ' + JSON.stringify(this.costScalingConfig) + ', Value: ' + JSON.stringify(this.upgradeValueScalingConfig) + '.';
            }
        }
    }, {
        key: 'getUpgradeValue',
        value: function getUpgradeValue() {
            var useNextLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (this.hasUpgradeValueScalingConfig()) {
                return (0, _UpgradeUtils.calculateValueFromScalingConfigAtLevel)(this.getUpgradeLevel(useNextLevel), this.upgradeValueScalingConfig);
            }
            console.error('Upgrade key ' + this.upgradeKey + ' does not have a value.');
            return 0;
        }
    }, {
        key: 'hasCostScalingConfig',
        value: function hasCostScalingConfig() {
            return this.costScalingConfig != null;
        }
    }, {
        key: 'setCostScalingConfig',
        value: function setCostScalingConfig(costScalingConfig) {
            this.costScalingConfig = costScalingConfig;
            if (this.upgradeValueScalingConfig != null && this.upgradeValueScalingConfig.maxLevel != this.costScalingConfig.maxLevel) {
                throw 'Mismatched maxLevels in setCostScalingConfig for ' + this.upgradeKey + '. Cost: ' + JSON.stringify(this.costScalingConfig) + ', Value: ' + JSON.stringify(this.upgradeValueScalingConfig) + '.';
            }
        }
    }, {
        key: 'getCost',
        value: function getCost() {
            if (this.hasCostScalingConfig()) {
                return (0, _UpgradeUtils.calculateValueFromScalingConfigAtLevel)(this.getUpgradeLevel(), this.costScalingConfig);
            }
            throw 'getCost must be implemented.';
        }
    }, {
        key: 'isUnlocked',
        value: function isUnlocked() {
            return this.isAllPrerequisiteUpgradesComplete();
        }
    }, {
        key: 'prettyPrint',
        value: function prettyPrint(val) {
            return _UserInterface.UserInterface.getPrettyPrintNumber(val);
        }
    }, {
        key: 'getPrettyPrintCost',
        value: function getPrettyPrintCost() {
            // Dedupe the cost string calculation
            var currCost = this.getCost();
            if (currCost === this.currentUiFormattedCostAmount) return this.currentUiFormattedCostText;
            this.currentUiFormattedCostAmount = currCost;
            this.currentUiFormattedCostText = this.prettyPrint(currCost);
            return this.currentUiFormattedCostText;
        }
    }, {
        key: 'isMaxUpgradeLevel',
        value: function isMaxUpgradeLevel() {
            // Check for min or max level based on buy/sell mode
            if (this.game.experiments.isExperimentEnabled(_ExperimentConstants.ExperimentKey.SELL_MODE)) {
                return this.upgradeLevel === MIN_UPGRADE_LEVEL;
            }
            if (this.getMaxUpgradeLevel() != null) {
                return this.upgradeLevel >= this.getMaxUpgradeLevel();
            } else {
                return this.isSinglePurchase && this.upgradeLevel >= 1;
            }
        }
    }, {
        key: 'isAllPrerequisiteUpgradesComplete',
        value: function isAllPrerequisiteUpgradesComplete() {
            if (!this.hasPreReqUpgradeKeys()) return false;
            if (!this.hasPreReqMaxedUpgradeKeys()) return false;
            if (!this.hasRequiredPrestigeLevel()) return false;
            return true;
        }
    }, {
        key: 'getPreReqMaxedUpgradeKeys',
        value: function getPreReqMaxedUpgradeKeys() {
            return [];
        }
    }, {
        key: 'hasPreReqMaxedUpgradeKeys',
        value: function hasPreReqMaxedUpgradeKeys() {
            var _this3 = this;

            var prereqMaxedUpgradeKeys = this.getPreReqMaxedUpgradeKeys();
            return prereqMaxedUpgradeKeys.every(function (key) {
                return _this3.game.upgrades.getUpgrade(key).isMaxUpgradeLevel();
            });
        }
    }, {
        key: 'getPreReqUpgradeKeys',
        value: function getPreReqUpgradeKeys() {
            return [];
        }
    }, {
        key: 'hasPreReqUpgradeKeys',
        value: function hasPreReqUpgradeKeys() {
            var _this4 = this;

            var prereqUpgradeKeys = this.getPreReqUpgradeKeys();
            return prereqUpgradeKeys.every(function (key) {
                return _this4.game.upgrades.isUpgraded(key);
            });
        }
    }, {
        key: 'getMaxUpgradeLevel',
        value: function getMaxUpgradeLevel() {
            if (this.costScalingConfig != null) {
                return this.costScalingConfig.maxLevel;
            } else if (this.upgradeValueScalingConfig != null) {
                return this.upgradeValueScalingConfig.maxLevel;
            }
            return null;
        }
    }, {
        key: 'getPointType',
        value: function getPointType() {
            return this.pointType;
        }
    }, {
        key: 'getUpgradeKey',
        value: function getUpgradeKey() {
            return this.upgradeKey;
        }
    }, {
        key: 'getUpgradeType',
        value: function getUpgradeType() {
            return this.upgradeType;
        }
    }, {
        key: 'getRequiredPrestigeLevel',
        value: function getRequiredPrestigeLevel() {
            return 0;
        }
    }, {
        key: 'hasRequiredPrestigeLevel',
        value: function hasRequiredPrestigeLevel() {
            var prestigeLevel = this.game.upgrades.getUpgradeLevel(_UpgradeConstants.UpgradeKey.GAME_OPTION_PRESTIGE_UPGRADE);
            return prestigeLevel >= this.getRequiredPrestigeLevel();
        }
    }]);

    return Upgrade;
}();

exports.default = Upgrade;

},{"../constants/ExperimentConstants":2,"../constants/UpgradeConstants":5,"../managers/PointsManager":10,"../managers/UserInterface":16,"../utils/UpgradeUtils":46}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BonusLizardsEarnedPerWin = exports.BonusSpocksEarnedPerWin = exports.BonusRocksEarnedPerWin = exports.BonusScissorsEarnedPerWin = exports.BonusPaperEarnedPerWin = exports.BonusGameOptionPointsEarnedPerWin = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Upgrade2 = require("../../Upgrade");

var _Upgrade3 = _interopRequireDefault(_Upgrade2);

var _UpgradeConstants = require("../../../constants/UpgradeConstants");

var _SelectionManager = require("../../../managers/SelectionManager");

var _PointsManager = require("../../../managers/PointsManager");

var _GameOptionEqualizer = require("../game/GameOptionEqualizer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** General class for game option bonus points. This should be extended. */
var BonusGameOptionPointsEarnedPerWin = exports.BonusGameOptionPointsEarnedPerWin = function (_Upgrade) {
    _inherits(BonusGameOptionPointsEarnedPerWin, _Upgrade);

    function BonusGameOptionPointsEarnedPerWin(game, upgradeOptionType, upgradeType, upgradeKey, pointType) {
        var upgradeLevel = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

        _classCallCheck(this, BonusGameOptionPointsEarnedPerWin);

        var tooltipText = "Winning with " + upgradeOptionType + " selected earns more " + upgradeOptionType.toLowerCase() + "s.";

        var _this = _possibleConstructorReturn(this, (BonusGameOptionPointsEarnedPerWin.__proto__ || Object.getPrototypeOf(BonusGameOptionPointsEarnedPerWin)).call(this, game, upgradeType, tooltipText, upgradeKey, upgradeLevel, false, pointType));

        _this.setCostScalingConfig(_UpgradeConstants.GAME_OPTION_BONUS_POINTS_EARNED_PER_WIN_COST_CONFIG);
        _this.setUpgradeValueScalingConfig(_UpgradeConstants.GAME_OPTION_BONUS_POINTS_EARNED_PER_WIN_VALUE_CONFIG);
        _this.upgradeOptionType = upgradeOptionType;
        return _this;
    }

    _createClass(BonusGameOptionPointsEarnedPerWin, [{
        key: "updateUiProperties",
        value: function updateUiProperties() {
            this.setUiText(this.game.ui.capitalizeFirstLetter(this.upgradeOptionType) + "s Per Win: " + this.getStatArrowText(this.getUpgradeValue(), this.getUpgradeValue(true), " " + this.upgradeOptionType.toLowerCase() + "s") + " " + this.getPrettyPrintCost() + " " + this.upgradeOptionType.toLowerCase() + "s");
        }
        // public getUpgradeValue(useNextLevel: boolean = false): number {
        //   return DEFAULT_GAME_OPTION_BONUS_POINTS_EARNED_PER_WIN + GAME_OPTION_BONUS_POINTS_EARNED_PER_WIN_BASE_INCREMENT * this.getUpgradeLevel(useNextLevel);
        // }

    }, {
        key: "getPreReqUpgradeKeys",
        value: function getPreReqUpgradeKeys() {
            return [_UpgradeConstants.UpgradeKey.UNLOCK_PAPER_SCISSOR_ROCK_POINTS];
        }
    }]);

    return BonusGameOptionPointsEarnedPerWin;
}(_Upgrade3.default);
/** Paper */


var BonusPaperEarnedPerWin = exports.BonusPaperEarnedPerWin = function (_BonusGameOptionPoint) {
    _inherits(BonusPaperEarnedPerWin, _BonusGameOptionPoint);

    function BonusPaperEarnedPerWin(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, BonusPaperEarnedPerWin);

        return _possibleConstructorReturn(this, (BonusPaperEarnedPerWin.__proto__ || Object.getPrototypeOf(BonusPaperEarnedPerWin)).call(this, game, _SelectionManager.GameOptionType.PAPER, _UpgradeConstants.UpgradeType.PAPER, upgradeKey, _PointsManager.PointType.PAPERS, upgradeLevel));
    }
    // Process disadvantged types for prestige 2.


    _createClass(BonusPaperEarnedPerWin, [{
        key: "getUpgradeValue",
        value: function getUpgradeValue() {
            var useNextLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            return _get(BonusPaperEarnedPerWin.prototype.__proto__ || Object.getPrototypeOf(BonusPaperEarnedPerWin.prototype), "getUpgradeValue", this).call(this, useNextLevel) * _GameOptionEqualizer.GameOptionEqualizer.getGameOptionDisadvantagedMultiplier(this.game, _SelectionManager.GameOptionType.PAPER);
        }
    }]);

    return BonusPaperEarnedPerWin;
}(BonusGameOptionPointsEarnedPerWin);
/** Scissors */


var BonusScissorsEarnedPerWin = exports.BonusScissorsEarnedPerWin = function (_BonusGameOptionPoint2) {
    _inherits(BonusScissorsEarnedPerWin, _BonusGameOptionPoint2);

    function BonusScissorsEarnedPerWin(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, BonusScissorsEarnedPerWin);

        return _possibleConstructorReturn(this, (BonusScissorsEarnedPerWin.__proto__ || Object.getPrototypeOf(BonusScissorsEarnedPerWin)).call(this, game, _SelectionManager.GameOptionType.SCISSOR, _UpgradeConstants.UpgradeType.SCISSOR, upgradeKey, _PointsManager.PointType.SCISSORS, upgradeLevel));
    }

    return BonusScissorsEarnedPerWin;
}(BonusGameOptionPointsEarnedPerWin);
/** Rock */


var BonusRocksEarnedPerWin = exports.BonusRocksEarnedPerWin = function (_BonusGameOptionPoint3) {
    _inherits(BonusRocksEarnedPerWin, _BonusGameOptionPoint3);

    function BonusRocksEarnedPerWin(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, BonusRocksEarnedPerWin);

        return _possibleConstructorReturn(this, (BonusRocksEarnedPerWin.__proto__ || Object.getPrototypeOf(BonusRocksEarnedPerWin)).call(this, game, _SelectionManager.GameOptionType.ROCK, _UpgradeConstants.UpgradeType.ROCK, upgradeKey, _PointsManager.PointType.ROCKS, upgradeLevel));
    }

    return BonusRocksEarnedPerWin;
}(BonusGameOptionPointsEarnedPerWin);
/** Spock */


var BonusSpocksEarnedPerWin = exports.BonusSpocksEarnedPerWin = function (_BonusGameOptionPoint4) {
    _inherits(BonusSpocksEarnedPerWin, _BonusGameOptionPoint4);

    function BonusSpocksEarnedPerWin(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, BonusSpocksEarnedPerWin);

        return _possibleConstructorReturn(this, (BonusSpocksEarnedPerWin.__proto__ || Object.getPrototypeOf(BonusSpocksEarnedPerWin)).call(this, game, _SelectionManager.GameOptionType.SPOCK, _UpgradeConstants.UpgradeType.SPOCK, upgradeKey, _PointsManager.PointType.SPOCKS, upgradeLevel));
    }

    _createClass(BonusSpocksEarnedPerWin, [{
        key: "getRequiredPrestigeLevel",
        value: function getRequiredPrestigeLevel() {
            return _UpgradeConstants.SPOCK_REQUIRED_PRESTIGE_LEVEL;
        }
    }]);

    return BonusSpocksEarnedPerWin;
}(BonusGameOptionPointsEarnedPerWin);
/** Lizard */


var BonusLizardsEarnedPerWin = exports.BonusLizardsEarnedPerWin = function (_BonusGameOptionPoint5) {
    _inherits(BonusLizardsEarnedPerWin, _BonusGameOptionPoint5);

    function BonusLizardsEarnedPerWin(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, BonusLizardsEarnedPerWin);

        return _possibleConstructorReturn(this, (BonusLizardsEarnedPerWin.__proto__ || Object.getPrototypeOf(BonusLizardsEarnedPerWin)).call(this, game, _SelectionManager.GameOptionType.LIZARD, _UpgradeConstants.UpgradeType.LIZARD, upgradeKey, _PointsManager.PointType.LIZARDS, upgradeLevel));
    }

    _createClass(BonusLizardsEarnedPerWin, [{
        key: "getUpgradeValue",
        value: function getUpgradeValue() {
            var useNextLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            return _get(BonusLizardsEarnedPerWin.prototype.__proto__ || Object.getPrototypeOf(BonusLizardsEarnedPerWin.prototype), "getUpgradeValue", this).call(this, useNextLevel) * _GameOptionEqualizer.GameOptionEqualizer.getGameOptionDisadvantagedMultiplier(this.game, _SelectionManager.GameOptionType.LIZARD);
        }
    }, {
        key: "getRequiredPrestigeLevel",
        value: function getRequiredPrestigeLevel() {
            return _UpgradeConstants.LIZARD_REQUIRED_PRESTIGE_LEVEL;
        }
    }]);

    return BonusLizardsEarnedPerWin;
}(BonusGameOptionPointsEarnedPerWin);

},{"../../../constants/UpgradeConstants":5,"../../../managers/PointsManager":10,"../../../managers/SelectionManager":12,"../../Upgrade":19,"../game/GameOptionEqualizer":31}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LizardChangeGameOptionToRockUpgrade = exports.SpockChangeGameOptionToRockUpgrade = exports.ScissorChangeGameOptionToRockUpgrade = exports.PaperChangeGameOptionToRockUpgrade = exports.ChangeGameOptionToRockUpgrade = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Upgrade2 = require("../../Upgrade");

var _Upgrade3 = _interopRequireDefault(_Upgrade2);

var _UpgradeConstants = require("../../../constants/UpgradeConstants");

var _SelectionManager = require("../../../managers/SelectionManager");

var _PointsManager = require("../../../managers/PointsManager");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** General class for game option multipliers. This should be extended. */
var ChangeGameOptionToRockUpgrade = exports.ChangeGameOptionToRockUpgrade = function (_Upgrade) {
    _inherits(ChangeGameOptionToRockUpgrade, _Upgrade);

    function ChangeGameOptionToRockUpgrade(game, upgradeOptionType, upgradeType, upgradeKey, pointType) {
        var upgradeLevel = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
        var tooltipText = arguments[6];

        _classCallCheck(this, ChangeGameOptionToRockUpgrade);

        var _this = _possibleConstructorReturn(this, (ChangeGameOptionToRockUpgrade.__proto__ || Object.getPrototypeOf(ChangeGameOptionToRockUpgrade)).call(this, game, upgradeType, tooltipText, upgradeKey, upgradeLevel, false, pointType));

        _this.upgradeOptionType = upgradeOptionType;
        return _this;
    }

    _createClass(ChangeGameOptionToRockUpgrade, [{
        key: "updateUiProperties",
        value: function updateUiProperties() {
            this.setUiText(this.game.ui.capitalizeFirstLetter(this.getUpgradeType()) + " Switch to Rock: " + this.getStatArrowText(this.getUpgradeValue() * 100, this.getUpgradeValue(true) * 100, "%") + " " + this.getPrettyPrintCost() + " " + this.upgradeOptionType.toLowerCase() + "s");
        }
    }, {
        key: "getCost",
        value: function getCost() {
            return _UpgradeConstants.CHANGE_GAME_OPTION_TO_ROCK_BASE_COST + _UpgradeConstants.CHANGE_GAME_OPTION_TO_ROCK_COST_INCREMENT * this.getUpgradeLevel();
        }
    }, {
        key: "getUpgradeValue",
        value: function getUpgradeValue() {
            var useNextLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            return this.getUpgradeLevel(useNextLevel) * _UpgradeConstants.CHANGE_GAME_OPTION_TO_ROCK_PROBABILITY_INCREMENT;
        }
    }, {
        key: "getMaxUpgradeLevel",
        value: function getMaxUpgradeLevel() {
            return 1 / _UpgradeConstants.CHANGE_GAME_OPTION_TO_ROCK_PROBABILITY_INCREMENT;
        }
    }, {
        key: "getPreReqMaxedUpgradeKeys",
        value: function getPreReqMaxedUpgradeKeys() {
            return [_UpgradeConstants.UpgradeKey.UNLOCK_PAPER_SCISSOR_ROCK_POINTS, _UpgradeConstants.UpgradeKey.ROCK_NEVER_LOSES_UPGRADE];
        }
    }]);

    return ChangeGameOptionToRockUpgrade;
}(_Upgrade3.default);
/** Paper */


var PaperChangeGameOptionToRockUpgrade = exports.PaperChangeGameOptionToRockUpgrade = function (_ChangeGameOptionToRo) {
    _inherits(PaperChangeGameOptionToRockUpgrade, _ChangeGameOptionToRo);

    function PaperChangeGameOptionToRockUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, PaperChangeGameOptionToRockUpgrade);

        var tooltipText = "Selecting " + game.ui.capitalizeFirstLetter(_SelectionManager.GameOptionType.PAPER) + " will switch to being rock X% of the time.";
        return _possibleConstructorReturn(this, (PaperChangeGameOptionToRockUpgrade.__proto__ || Object.getPrototypeOf(PaperChangeGameOptionToRockUpgrade)).call(this, game, _SelectionManager.GameOptionType.ROCK, _UpgradeConstants.UpgradeType.PAPER, upgradeKey, _PointsManager.PointType.ROCKS, upgradeLevel, tooltipText));
    }

    _createClass(PaperChangeGameOptionToRockUpgrade, [{
        key: "getPreReqMaxedUpgradeKeys",
        value: function getPreReqMaxedUpgradeKeys() {
            return [_UpgradeConstants.UpgradeKey.PAPER_FLAT_POINTS_UPGRADE, _UpgradeConstants.UpgradeKey.PAPER_GAME_OPTION_MULTIPLIER, _UpgradeConstants.UpgradeKey.BONUS_PAPER_EARNED_PER_WIN].concat(_get(PaperChangeGameOptionToRockUpgrade.prototype.__proto__ || Object.getPrototypeOf(PaperChangeGameOptionToRockUpgrade.prototype), "getPreReqMaxedUpgradeKeys", this).call(this));
        }
    }]);

    return PaperChangeGameOptionToRockUpgrade;
}(ChangeGameOptionToRockUpgrade);
/** Scissors */


var ScissorChangeGameOptionToRockUpgrade = exports.ScissorChangeGameOptionToRockUpgrade = function (_ChangeGameOptionToRo2) {
    _inherits(ScissorChangeGameOptionToRockUpgrade, _ChangeGameOptionToRo2);

    function ScissorChangeGameOptionToRockUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, ScissorChangeGameOptionToRockUpgrade);

        var tooltipText = "Selecting " + game.ui.capitalizeFirstLetter(_SelectionManager.GameOptionType.SCISSOR) + " will switch to being rock X% of the time.";
        return _possibleConstructorReturn(this, (ScissorChangeGameOptionToRockUpgrade.__proto__ || Object.getPrototypeOf(ScissorChangeGameOptionToRockUpgrade)).call(this, game, _SelectionManager.GameOptionType.ROCK, _UpgradeConstants.UpgradeType.SCISSOR, upgradeKey, _PointsManager.PointType.ROCKS, upgradeLevel, tooltipText));
    }

    _createClass(ScissorChangeGameOptionToRockUpgrade, [{
        key: "getPreReqMaxedUpgradeKeys",
        value: function getPreReqMaxedUpgradeKeys() {
            return [_UpgradeConstants.UpgradeKey.SCISSOR_GAME_SPEED_UPGRADE, _UpgradeConstants.UpgradeKey.SCISSOR_GAME_OPTION_MULTIPLIER, _UpgradeConstants.UpgradeKey.BONUS_SCISSORS_EARNED_PER_WIN].concat(_get(ScissorChangeGameOptionToRockUpgrade.prototype.__proto__ || Object.getPrototypeOf(ScissorChangeGameOptionToRockUpgrade.prototype), "getPreReqMaxedUpgradeKeys", this).call(this));
        }
    }]);

    return ScissorChangeGameOptionToRockUpgrade;
}(ChangeGameOptionToRockUpgrade);
/** Spocks */


var SpockChangeGameOptionToRockUpgrade = exports.SpockChangeGameOptionToRockUpgrade = function (_ChangeGameOptionToRo3) {
    _inherits(SpockChangeGameOptionToRockUpgrade, _ChangeGameOptionToRo3);

    function SpockChangeGameOptionToRockUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, SpockChangeGameOptionToRockUpgrade);

        var tooltipText = "Selecting " + game.ui.capitalizeFirstLetter(_SelectionManager.GameOptionType.SPOCK) + " will switch to being rock X% of the time.";
        return _possibleConstructorReturn(this, (SpockChangeGameOptionToRockUpgrade.__proto__ || Object.getPrototypeOf(SpockChangeGameOptionToRockUpgrade)).call(this, game, _SelectionManager.GameOptionType.ROCK, _UpgradeConstants.UpgradeType.SPOCK, upgradeKey, _PointsManager.PointType.ROCKS, upgradeLevel, tooltipText));
    }

    _createClass(SpockChangeGameOptionToRockUpgrade, [{
        key: "getPreReqMaxedUpgradeKeys",
        value: function getPreReqMaxedUpgradeKeys() {
            return [_UpgradeConstants.UpgradeKey.SPOCK_CRITICAL_WIN_UPGRADE, _UpgradeConstants.UpgradeKey.SPOCK_GAME_OPTION_MULTIPLIER, _UpgradeConstants.UpgradeKey.BONUS_SPOCKS_EARNED_PER_WIN].concat(_get(SpockChangeGameOptionToRockUpgrade.prototype.__proto__ || Object.getPrototypeOf(SpockChangeGameOptionToRockUpgrade.prototype), "getPreReqMaxedUpgradeKeys", this).call(this));
        }
    }, {
        key: "getRequiredPrestigeLevel",
        value: function getRequiredPrestigeLevel() {
            return _UpgradeConstants.SPOCK_REQUIRED_PRESTIGE_LEVEL;
        }
    }]);

    return SpockChangeGameOptionToRockUpgrade;
}(ChangeGameOptionToRockUpgrade);
/** Lizards */


var LizardChangeGameOptionToRockUpgrade = exports.LizardChangeGameOptionToRockUpgrade = function (_ChangeGameOptionToRo4) {
    _inherits(LizardChangeGameOptionToRockUpgrade, _ChangeGameOptionToRo4);

    function LizardChangeGameOptionToRockUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, LizardChangeGameOptionToRockUpgrade);

        var tooltipText = "Selecting " + _SelectionManager.GameOptionType.LIZARD + " will switch to being rock X% of the time.";
        return _possibleConstructorReturn(this, (LizardChangeGameOptionToRockUpgrade.__proto__ || Object.getPrototypeOf(LizardChangeGameOptionToRockUpgrade)).call(this, game, _SelectionManager.GameOptionType.ROCK, _UpgradeConstants.UpgradeType.LIZARD, upgradeKey, _PointsManager.PointType.ROCKS, upgradeLevel, tooltipText));
    }

    _createClass(LizardChangeGameOptionToRockUpgrade, [{
        key: "getPreReqMaxedUpgradeKeys",
        value: function getPreReqMaxedUpgradeKeys() {
            return [_UpgradeConstants.UpgradeKey.LIZARD_WIN_STREAK_MULTIPLIER_UPGRADE, _UpgradeConstants.UpgradeKey.LIZARD_GAME_OPTION_MULTIPLIER, _UpgradeConstants.UpgradeKey.BONUS_LIZARDS_EARNED_PER_WIN].concat(_get(LizardChangeGameOptionToRockUpgrade.prototype.__proto__ || Object.getPrototypeOf(LizardChangeGameOptionToRockUpgrade.prototype), "getPreReqMaxedUpgradeKeys", this).call(this));
        }
    }, {
        key: "getRequiredPrestigeLevel",
        value: function getRequiredPrestigeLevel() {
            return _UpgradeConstants.LIZARD_REQUIRED_PRESTIGE_LEVEL;
        }
    }]);

    return LizardChangeGameOptionToRockUpgrade;
}(ChangeGameOptionToRockUpgrade);

},{"../../../constants/UpgradeConstants":5,"../../../managers/PointsManager":10,"../../../managers/SelectionManager":12,"../../Upgrade":19}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConvertLizardGameOptionToRockUpgrade = exports.ConvertSpockGameOptionToRockUpgrade = exports.ConvertScissorGameOptionToRockUpgrade = exports.ConvertPaperGameOptionToRockUpgrade = exports.ConvertGameOptionToRockUpgrade = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Upgrade2 = require("../../Upgrade");

var _Upgrade3 = _interopRequireDefault(_Upgrade2);

var _UpgradeConstants = require("../../../constants/UpgradeConstants");

var _SelectionManager = require("../../../managers/SelectionManager");

var _PointsManager = require("../../../managers/PointsManager");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** General class for game option multipliers. This should be extended. */
var ConvertGameOptionToRockUpgrade = exports.ConvertGameOptionToRockUpgrade = function (_Upgrade) {
    _inherits(ConvertGameOptionToRockUpgrade, _Upgrade);

    function ConvertGameOptionToRockUpgrade(game, upgradeOptionType, upgradeType, upgradeKey, pointType) {
        var upgradeLevel = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

        _classCallCheck(this, ConvertGameOptionToRockUpgrade);

        var tooltipText = "Winning with " + game.ui.capitalizeFirstLetter(upgradeOptionType) + " earns ROCKS instead. Convert all current " + game.ui.capitalizeFirstLetter(upgradeOptionType) + "s to Rocks.";

        var _this = _possibleConstructorReturn(this, (ConvertGameOptionToRockUpgrade.__proto__ || Object.getPrototypeOf(ConvertGameOptionToRockUpgrade)).call(this, game, upgradeType, tooltipText, upgradeKey, upgradeLevel, true, pointType));

        _this.upgradeOptionType = upgradeOptionType;
        return _this;
    }

    _createClass(ConvertGameOptionToRockUpgrade, [{
        key: "updateUiProperties",
        value: function updateUiProperties() {
            this.setUiText("Convert all " + this.game.ui.capitalizeFirstLetter(this.upgradeOptionType) + " to Rocks: FREE");
        }
    }, {
        key: "getCost",
        value: function getCost() {
            return 0;
        }
    }, {
        key: "buyUpgrade",
        value: function buyUpgrade() {
            var currPoints = this.game.points.getPoints(this.getPointType());
            this.game.points.spendPoints(this.getPointType(), currPoints);
            this.game.points.addPoints(_PointsManager.PointType.ROCKS, currPoints);
            return _get(ConvertGameOptionToRockUpgrade.prototype.__proto__ || Object.getPrototypeOf(ConvertGameOptionToRockUpgrade.prototype), "buyUpgrade", this).call(this);
        }
    }, {
        key: "getPreReqMaxedUpgradeKeys",
        value: function getPreReqMaxedUpgradeKeys() {
            return [_UpgradeConstants.UpgradeKey.UNLOCK_PAPER_SCISSOR_ROCK_POINTS, _UpgradeConstants.UpgradeKey.ROCK_NEVER_LOSES_UPGRADE];
        }
    }]);

    return ConvertGameOptionToRockUpgrade;
}(_Upgrade3.default);
/** Paper */


var ConvertPaperGameOptionToRockUpgrade = exports.ConvertPaperGameOptionToRockUpgrade = function (_ConvertGameOptionToR) {
    _inherits(ConvertPaperGameOptionToRockUpgrade, _ConvertGameOptionToR);

    function ConvertPaperGameOptionToRockUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, ConvertPaperGameOptionToRockUpgrade);

        return _possibleConstructorReturn(this, (ConvertPaperGameOptionToRockUpgrade.__proto__ || Object.getPrototypeOf(ConvertPaperGameOptionToRockUpgrade)).call(this, game, _SelectionManager.GameOptionType.PAPER, _UpgradeConstants.UpgradeType.PAPER, upgradeKey, _PointsManager.PointType.PAPERS, upgradeLevel));
    }

    _createClass(ConvertPaperGameOptionToRockUpgrade, [{
        key: "getPreReqMaxedUpgradeKeys",
        value: function getPreReqMaxedUpgradeKeys() {
            // Must complete all the core upgrades
            return [_UpgradeConstants.UpgradeKey.PAPER_FLAT_POINTS_UPGRADE, _UpgradeConstants.UpgradeKey.PAPER_GAME_OPTION_MULTIPLIER, _UpgradeConstants.UpgradeKey.BONUS_PAPER_EARNED_PER_WIN].concat(_get(ConvertPaperGameOptionToRockUpgrade.prototype.__proto__ || Object.getPrototypeOf(ConvertPaperGameOptionToRockUpgrade.prototype), "getPreReqMaxedUpgradeKeys", this).call(this));
        }
    }]);

    return ConvertPaperGameOptionToRockUpgrade;
}(ConvertGameOptionToRockUpgrade);
/** Scissors */


var ConvertScissorGameOptionToRockUpgrade = exports.ConvertScissorGameOptionToRockUpgrade = function (_ConvertGameOptionToR2) {
    _inherits(ConvertScissorGameOptionToRockUpgrade, _ConvertGameOptionToR2);

    function ConvertScissorGameOptionToRockUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, ConvertScissorGameOptionToRockUpgrade);

        return _possibleConstructorReturn(this, (ConvertScissorGameOptionToRockUpgrade.__proto__ || Object.getPrototypeOf(ConvertScissorGameOptionToRockUpgrade)).call(this, game, _SelectionManager.GameOptionType.SCISSOR, _UpgradeConstants.UpgradeType.SCISSOR, upgradeKey, _PointsManager.PointType.SCISSORS, upgradeLevel));
    }

    _createClass(ConvertScissorGameOptionToRockUpgrade, [{
        key: "getPreReqMaxedUpgradeKeys",
        value: function getPreReqMaxedUpgradeKeys() {
            // Must complete all the core upgrades
            return [_UpgradeConstants.UpgradeKey.SCISSOR_GAME_SPEED_UPGRADE, _UpgradeConstants.UpgradeKey.SCISSOR_GAME_OPTION_MULTIPLIER, _UpgradeConstants.UpgradeKey.BONUS_SCISSORS_EARNED_PER_WIN].concat(_get(ConvertScissorGameOptionToRockUpgrade.prototype.__proto__ || Object.getPrototypeOf(ConvertScissorGameOptionToRockUpgrade.prototype), "getPreReqMaxedUpgradeKeys", this).call(this));
        }
    }]);

    return ConvertScissorGameOptionToRockUpgrade;
}(ConvertGameOptionToRockUpgrade);
/** Spock */


var ConvertSpockGameOptionToRockUpgrade = exports.ConvertSpockGameOptionToRockUpgrade = function (_ConvertGameOptionToR3) {
    _inherits(ConvertSpockGameOptionToRockUpgrade, _ConvertGameOptionToR3);

    function ConvertSpockGameOptionToRockUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, ConvertSpockGameOptionToRockUpgrade);

        return _possibleConstructorReturn(this, (ConvertSpockGameOptionToRockUpgrade.__proto__ || Object.getPrototypeOf(ConvertSpockGameOptionToRockUpgrade)).call(this, game, _SelectionManager.GameOptionType.SPOCK, _UpgradeConstants.UpgradeType.SPOCK, upgradeKey, _PointsManager.PointType.SPOCKS, upgradeLevel));
    }

    _createClass(ConvertSpockGameOptionToRockUpgrade, [{
        key: "getPreReqMaxedUpgradeKeys",
        value: function getPreReqMaxedUpgradeKeys() {
            // Must complete all the core upgrades
            return [_UpgradeConstants.UpgradeKey.SPOCK_GAME_OPTION_MULTIPLIER, _UpgradeConstants.UpgradeKey.BONUS_SPOCKS_EARNED_PER_WIN, _UpgradeConstants.UpgradeKey.SPOCK_CRITICAL_WIN_UPGRADE].concat(_get(ConvertSpockGameOptionToRockUpgrade.prototype.__proto__ || Object.getPrototypeOf(ConvertSpockGameOptionToRockUpgrade.prototype), "getPreReqMaxedUpgradeKeys", this).call(this));
        }
    }, {
        key: "getRequiredPrestigeLevel",
        value: function getRequiredPrestigeLevel() {
            return _UpgradeConstants.SPOCK_REQUIRED_PRESTIGE_LEVEL;
        }
    }]);

    return ConvertSpockGameOptionToRockUpgrade;
}(ConvertGameOptionToRockUpgrade);
/** Lizard */


var ConvertLizardGameOptionToRockUpgrade = exports.ConvertLizardGameOptionToRockUpgrade = function (_ConvertGameOptionToR4) {
    _inherits(ConvertLizardGameOptionToRockUpgrade, _ConvertGameOptionToR4);

    function ConvertLizardGameOptionToRockUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, ConvertLizardGameOptionToRockUpgrade);

        return _possibleConstructorReturn(this, (ConvertLizardGameOptionToRockUpgrade.__proto__ || Object.getPrototypeOf(ConvertLizardGameOptionToRockUpgrade)).call(this, game, _SelectionManager.GameOptionType.LIZARD, _UpgradeConstants.UpgradeType.LIZARD, upgradeKey, _PointsManager.PointType.LIZARDS, upgradeLevel));
    }

    _createClass(ConvertLizardGameOptionToRockUpgrade, [{
        key: "getPreReqMaxedUpgradeKeys",
        value: function getPreReqMaxedUpgradeKeys() {
            // Must complete all the core upgrades
            return [_UpgradeConstants.UpgradeKey.LIZARD_GAME_OPTION_MULTIPLIER, _UpgradeConstants.UpgradeKey.BONUS_LIZARDS_EARNED_PER_WIN, _UpgradeConstants.UpgradeKey.LIZARD_WIN_STREAK_MULTIPLIER_UPGRADE].concat(_get(ConvertLizardGameOptionToRockUpgrade.prototype.__proto__ || Object.getPrototypeOf(ConvertLizardGameOptionToRockUpgrade.prototype), "getPreReqMaxedUpgradeKeys", this).call(this));
        }
    }, {
        key: "getRequiredPrestigeLevel",
        value: function getRequiredPrestigeLevel() {
            return _UpgradeConstants.LIZARD_REQUIRED_PRESTIGE_LEVEL;
        }
    }]);

    return ConvertLizardGameOptionToRockUpgrade;
}(ConvertGameOptionToRockUpgrade);

},{"../../../constants/UpgradeConstants":5,"../../../managers/PointsManager":10,"../../../managers/SelectionManager":12,"../../Upgrade":19}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GameOptionPrestigeUpgrade = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Upgrade2 = require("../../Upgrade");

var _Upgrade3 = _interopRequireDefault(_Upgrade2);

var _UpgradeConstants = require("../../../constants/UpgradeConstants");

var _PointsManager = require("../../../managers/PointsManager");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOOLTIP_TEXT = 'Prestige into a higher realm. Give up all your upgrades, rocks, and points to play with one more game option. See if rock can achieve victory again.';

var GameOptionPrestigeUpgrade = exports.GameOptionPrestigeUpgrade = function (_Upgrade) {
    _inherits(GameOptionPrestigeUpgrade, _Upgrade);

    function GameOptionPrestigeUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, GameOptionPrestigeUpgrade);

        return _possibleConstructorReturn(this, (GameOptionPrestigeUpgrade.__proto__ || Object.getPrototypeOf(GameOptionPrestigeUpgrade)).call(this, game, _UpgradeConstants.UpgradeType.GENERAL, TOOLTIP_TEXT, upgradeKey, upgradeLevel, false, _PointsManager.PointType.POINTS));
    }

    _createClass(GameOptionPrestigeUpgrade, [{
        key: "updateUiProperties",
        value: function updateUiProperties() {
            this.setUiText("Level Up! (Reset and unlock a new game option): " + this.getPrettyPrintCost());
        }
    }, {
        key: "getCost",
        value: function getCost() {
            var prestigeLevel = this.game.upgrades.getUpgradeValue(_UpgradeConstants.UpgradeKey.GAME_OPTION_PRESTIGE_UPGRADE);
            return _UpgradeConstants.GAME_OPTION_PRESTIGE_UPGRADE_BASE_COST[Math.min(prestigeLevel, _UpgradeConstants.GAME_OPTION_PRESTIGE_UPGRADE_BASE_COST.length - 1)];
        }
    }, {
        key: "buyUpgrade",
        value: function buyUpgrade() {
            var didBuy = _get(GameOptionPrestigeUpgrade.prototype.__proto__ || Object.getPrototypeOf(GameOptionPrestigeUpgrade.prototype), "buyUpgrade", this).call(this);
            if (didBuy) {
                this.game.upgrades.prestigeUpgrades();
            }
            return didBuy;
        }
    }, {
        key: "getUpgradeValue",
        value: function getUpgradeValue(useNextLevel) {
            return this.getUpgradeLevel(useNextLevel);
        }
    }]);

    return GameOptionPrestigeUpgrade;
}(_Upgrade3.default);

},{"../../../constants/UpgradeConstants":5,"../../../managers/PointsManager":10,"../../Upgrade":19}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LizardGameOptionWinMultiplierUpgrade = exports.SpockGameOptionWinMultiplierUpgrade = exports.RockGameOptionWinMultiplierUpgrade = exports.ScissorGameOptionWinMultiplierUpgrade = exports.PaperGameOptionWinMultiplierUpgrade = exports.GameOptionWinMultiplierUpgrade = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Upgrade2 = require("../../Upgrade");

var _Upgrade3 = _interopRequireDefault(_Upgrade2);

var _UpgradeConstants = require("../../../constants/UpgradeConstants");

var _SelectionManager = require("../../../managers/SelectionManager");

var _PointsManager = require("../../../managers/PointsManager");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** General class for game option multipliers. This should be extended. */
var GameOptionWinMultiplierUpgrade = exports.GameOptionWinMultiplierUpgrade = function (_Upgrade) {
    _inherits(GameOptionWinMultiplierUpgrade, _Upgrade);

    function GameOptionWinMultiplierUpgrade(game, upgradeOptionType, upgradeType, upgradeKey, pointType) {
        var upgradeLevel = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

        _classCallCheck(this, GameOptionWinMultiplierUpgrade);

        var tooltipText = "Points earned from wins are multiplied by X amount. This amount is summed between each game option type.";

        var _this = _possibleConstructorReturn(this, (GameOptionWinMultiplierUpgrade.__proto__ || Object.getPrototypeOf(GameOptionWinMultiplierUpgrade)).call(this, game, upgradeType, tooltipText, upgradeKey, upgradeLevel, false, pointType));

        _this.setCostScalingConfig(_UpgradeConstants.CUSTOM_WIN_MULTIPLIERS_COST_CONFIG);
        _this.setUpgradeValueScalingConfig(_UpgradeConstants.CUSTOM_WIN_MULTIPLIERS_MULTIPLIER_INCREMENT_VALUE_CONFIG);
        _this.upgradeOptionType = upgradeOptionType;
        return _this;
    }

    _createClass(GameOptionWinMultiplierUpgrade, [{
        key: "updateUiProperties",
        value: function updateUiProperties() {
            var beforeVal = this.game.ui.getDecimalPrettyPrintNumber(1 + this.getUpgradeValue(), 1);
            var afterVal = this.game.ui.getDecimalPrettyPrintNumber(1 + this.getUpgradeValue(true), 1);
            this.setUiText(this.game.ui.capitalizeFirstLetter(this.upgradeOptionType) + "s Win Multiplier: " + this.getStatArrowText(beforeVal, afterVal, "x") + " " + this.getPrettyPrintCost() + " " + this.upgradeOptionType.toLowerCase() + "s");
        }
    }, {
        key: "getPreReqUpgradeKeys",
        value: function getPreReqUpgradeKeys() {
            return [_UpgradeConstants.UpgradeKey.UNLOCK_PAPER_SCISSOR_ROCK_POINTS];
        }
    }]);

    return GameOptionWinMultiplierUpgrade;
}(_Upgrade3.default);
/** Paper */


var PaperGameOptionWinMultiplierUpgrade = exports.PaperGameOptionWinMultiplierUpgrade = function (_GameOptionWinMultipl) {
    _inherits(PaperGameOptionWinMultiplierUpgrade, _GameOptionWinMultipl);

    function PaperGameOptionWinMultiplierUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, PaperGameOptionWinMultiplierUpgrade);

        return _possibleConstructorReturn(this, (PaperGameOptionWinMultiplierUpgrade.__proto__ || Object.getPrototypeOf(PaperGameOptionWinMultiplierUpgrade)).call(this, game, _SelectionManager.GameOptionType.PAPER, _UpgradeConstants.UpgradeType.PAPER, upgradeKey, _PointsManager.PointType.PAPERS, upgradeLevel));
    }

    return PaperGameOptionWinMultiplierUpgrade;
}(GameOptionWinMultiplierUpgrade);
/** Scissors */


var ScissorGameOptionWinMultiplierUpgrade = exports.ScissorGameOptionWinMultiplierUpgrade = function (_GameOptionWinMultipl2) {
    _inherits(ScissorGameOptionWinMultiplierUpgrade, _GameOptionWinMultipl2);

    function ScissorGameOptionWinMultiplierUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, ScissorGameOptionWinMultiplierUpgrade);

        return _possibleConstructorReturn(this, (ScissorGameOptionWinMultiplierUpgrade.__proto__ || Object.getPrototypeOf(ScissorGameOptionWinMultiplierUpgrade)).call(this, game, _SelectionManager.GameOptionType.SCISSOR, _UpgradeConstants.UpgradeType.SCISSOR, upgradeKey, _PointsManager.PointType.SCISSORS, upgradeLevel));
    }

    return ScissorGameOptionWinMultiplierUpgrade;
}(GameOptionWinMultiplierUpgrade);
/** Rock */


var RockGameOptionWinMultiplierUpgrade = exports.RockGameOptionWinMultiplierUpgrade = function (_GameOptionWinMultipl3) {
    _inherits(RockGameOptionWinMultiplierUpgrade, _GameOptionWinMultipl3);

    function RockGameOptionWinMultiplierUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, RockGameOptionWinMultiplierUpgrade);

        return _possibleConstructorReturn(this, (RockGameOptionWinMultiplierUpgrade.__proto__ || Object.getPrototypeOf(RockGameOptionWinMultiplierUpgrade)).call(this, game, _SelectionManager.GameOptionType.ROCK, _UpgradeConstants.UpgradeType.ROCK, upgradeKey, _PointsManager.PointType.ROCKS, upgradeLevel));
    }

    return RockGameOptionWinMultiplierUpgrade;
}(GameOptionWinMultiplierUpgrade);
/** Spock */


var SpockGameOptionWinMultiplierUpgrade = exports.SpockGameOptionWinMultiplierUpgrade = function (_GameOptionWinMultipl4) {
    _inherits(SpockGameOptionWinMultiplierUpgrade, _GameOptionWinMultipl4);

    function SpockGameOptionWinMultiplierUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, SpockGameOptionWinMultiplierUpgrade);

        return _possibleConstructorReturn(this, (SpockGameOptionWinMultiplierUpgrade.__proto__ || Object.getPrototypeOf(SpockGameOptionWinMultiplierUpgrade)).call(this, game, _SelectionManager.GameOptionType.SPOCK, _UpgradeConstants.UpgradeType.SPOCK, upgradeKey, _PointsManager.PointType.SPOCKS, upgradeLevel));
    }

    _createClass(SpockGameOptionWinMultiplierUpgrade, [{
        key: "getRequiredPrestigeLevel",
        value: function getRequiredPrestigeLevel() {
            return _UpgradeConstants.SPOCK_REQUIRED_PRESTIGE_LEVEL;
        }
    }]);

    return SpockGameOptionWinMultiplierUpgrade;
}(GameOptionWinMultiplierUpgrade);
/** Lizard */


var LizardGameOptionWinMultiplierUpgrade = exports.LizardGameOptionWinMultiplierUpgrade = function (_GameOptionWinMultipl5) {
    _inherits(LizardGameOptionWinMultiplierUpgrade, _GameOptionWinMultipl5);

    function LizardGameOptionWinMultiplierUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, LizardGameOptionWinMultiplierUpgrade);

        return _possibleConstructorReturn(this, (LizardGameOptionWinMultiplierUpgrade.__proto__ || Object.getPrototypeOf(LizardGameOptionWinMultiplierUpgrade)).call(this, game, _SelectionManager.GameOptionType.LIZARD, _UpgradeConstants.UpgradeType.LIZARD, upgradeKey, _PointsManager.PointType.LIZARDS, upgradeLevel));
    }

    _createClass(LizardGameOptionWinMultiplierUpgrade, [{
        key: "getRequiredPrestigeLevel",
        value: function getRequiredPrestigeLevel() {
            return _UpgradeConstants.LIZARD_REQUIRED_PRESTIGE_LEVEL;
        }
    }]);

    return LizardGameOptionWinMultiplierUpgrade;
}(GameOptionWinMultiplierUpgrade);

},{"../../../constants/UpgradeConstants":5,"../../../managers/PointsManager":10,"../../../managers/SelectionManager":12,"../../Upgrade":19}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LizardWinStreakMultiplierUpgrade = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Upgrade2 = require("../../Upgrade");

var _Upgrade3 = _interopRequireDefault(_Upgrade2);

var _UpgradeConstants = require("../../../constants/UpgradeConstants");

var _PointsManager = require("../../../managers/PointsManager");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOOLTIP_TEXT = "Increase your win streak multiplier by even more! This is a cumulative upgrade (i.e. 1.01x + 1.01x = 1.02x).";

var LizardWinStreakMultiplierUpgrade = exports.LizardWinStreakMultiplierUpgrade = function (_Upgrade) {
    _inherits(LizardWinStreakMultiplierUpgrade, _Upgrade);

    function LizardWinStreakMultiplierUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, LizardWinStreakMultiplierUpgrade);

        var _this = _possibleConstructorReturn(this, (LizardWinStreakMultiplierUpgrade.__proto__ || Object.getPrototypeOf(LizardWinStreakMultiplierUpgrade)).call(this, game, _UpgradeConstants.UpgradeType.LIZARD, TOOLTIP_TEXT, upgradeKey, upgradeLevel, false, _PointsManager.PointType.LIZARDS));

        _this.setCostScalingConfig(_UpgradeConstants.LIZARD_WIN_STREAK_MULTIPLIER_BASE_COST);
        return _this;
    }

    _createClass(LizardWinStreakMultiplierUpgrade, [{
        key: "updateUiProperties",
        value: function updateUiProperties() {
            var beforeVal = this.game.ui.getDecimalPrettyPrintNumber(this.getUpgradeValue(), 2);
            var afterVal = this.game.ui.getDecimalPrettyPrintNumber(this.getUpgradeValue(true), 2);
            this.setUiText("Win Streak Multiplier " + this.getStatArrowText(beforeVal, "+" + afterVal, "x per win") + ": " + this.getPrettyPrintCost() + " pts");
        }
    }, {
        key: "getUpgradeValue",
        value: function getUpgradeValue(useNextLevel) {
            var level = this.getUpgradeLevel(useNextLevel);
            return _UpgradeConstants.LIZARD_WIN_STREAK_MULTIPLIER_INCREASE_AMOUNT * level;
        }
    }, {
        key: "getPreReqUpgradeKeys",
        value: function getPreReqUpgradeKeys() {
            return [_UpgradeConstants.UpgradeKey.UNLOCK_PAPER_SCISSOR_ROCK_POINTS];
        }
    }, {
        key: "getRequiredPrestigeLevel",
        value: function getRequiredPrestigeLevel() {
            return _UpgradeConstants.LIZARD_REQUIRED_PRESTIGE_LEVEL;
        }
    }]);

    return LizardWinStreakMultiplierUpgrade;
}(_Upgrade3.default);

},{"../../../constants/UpgradeConstants":5,"../../../managers/PointsManager":10,"../../Upgrade":19}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PaperFlatPointsUpgrade = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Upgrade2 = require("../../Upgrade");

var _Upgrade3 = _interopRequireDefault(_Upgrade2);

var _UpgradeConstants = require("../../../constants/UpgradeConstants");

var _PointsManager = require("../../../managers/PointsManager");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOOLTIP_TEXT = 'Earn more points for each round won using the power of paper.';

var PaperFlatPointsUpgrade = exports.PaperFlatPointsUpgrade = function (_Upgrade) {
    _inherits(PaperFlatPointsUpgrade, _Upgrade);

    function PaperFlatPointsUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, PaperFlatPointsUpgrade);

        var _this = _possibleConstructorReturn(this, (PaperFlatPointsUpgrade.__proto__ || Object.getPrototypeOf(PaperFlatPointsUpgrade)).call(this, game, _UpgradeConstants.UpgradeType.PAPER, TOOLTIP_TEXT, upgradeKey, upgradeLevel, false, _PointsManager.PointType.PAPERS));

        _this.setCostScalingConfig(_UpgradeConstants.PAPER_FLAT_POINTS_UPGRADE_COST_CONFIG);
        _this.setUpgradeValueScalingConfig(_UpgradeConstants.PAPER_FLAT_POINTS_UPGRADE_POINT_INCREASE_VALUE_CONFIG);
        return _this;
    }

    _createClass(PaperFlatPointsUpgrade, [{
        key: "updateUiProperties",
        value: function updateUiProperties() {
            this.setUiText("Bonus Base Points Per Win " + this.getStatArrowText(this.getUpgradeValue(), this.getUpgradeValue(true), ' pts') + ": " + this.getPrettyPrintCost() + " " + this.getPointType().toLowerCase());
        }
        // public getUpgradeValue(useNextLevel?: boolean): number {
        //   const level = this.getUpgradeLevel(useNextLevel);
        //   return PAPER_FLAT_POINTS_UPGRADE_POINT_INCREASE_AMOUNT * level;
        // }

    }, {
        key: "getPreReqUpgradeKeys",
        value: function getPreReqUpgradeKeys() {
            return [_UpgradeConstants.UpgradeKey.UNLOCK_PAPER_SCISSOR_ROCK_POINTS];
        }
    }]);

    return PaperFlatPointsUpgrade;
}(_Upgrade3.default);

},{"../../../constants/UpgradeConstants":5,"../../../managers/PointsManager":10,"../../Upgrade":19}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RockStreakIncrementUpgrade = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Upgrade2 = require("../../Upgrade");

var _Upgrade3 = _interopRequireDefault(_Upgrade2);

var _UpgradeConstants = require("../../../constants/UpgradeConstants");

var _PointsManager = require("../../../managers/PointsManager");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOOLTIP_TEXT = 'Winning with any game option will increase your streak by more each win.';

var RockStreakIncrementUpgrade = exports.RockStreakIncrementUpgrade = function (_Upgrade) {
    _inherits(RockStreakIncrementUpgrade, _Upgrade);

    function RockStreakIncrementUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, RockStreakIncrementUpgrade);

        var _this = _possibleConstructorReturn(this, (RockStreakIncrementUpgrade.__proto__ || Object.getPrototypeOf(RockStreakIncrementUpgrade)).call(this, game, _UpgradeConstants.UpgradeType.ROCK, TOOLTIP_TEXT, upgradeKey, upgradeLevel, false, _PointsManager.PointType.ROCKS));

        _this.setCostScalingConfig(_UpgradeConstants.ROCK_STREAK_INCREMENT_COST_CONFIG);
        _this.setUpgradeValueScalingConfig(_UpgradeConstants.ROCK_STREAK_INCREMENT_INCREASE_AMOUNT);
        return _this;
    }

    _createClass(RockStreakIncrementUpgrade, [{
        key: "updateUiProperties",
        value: function updateUiProperties() {
            var currVal = this.game.ui.getDecimalPrettyPrintNumber(this.getUpgradeValue(), 1);
            var nextVal = this.game.ui.getDecimalPrettyPrintNumber(this.getUpgradeValue(true), 1);
            this.setUiText("Base Streak Increment " + this.getStatArrowText(currVal, nextVal, '+ streak') + ": " + this.getPrettyPrintCost() + " " + this.getPointType().toLowerCase());
        }
    }, {
        key: "getPreReqUpgradeKeys",
        value: function getPreReqUpgradeKeys() {
            return [_UpgradeConstants.UpgradeKey.UNLOCK_PAPER_SCISSOR_ROCK_POINTS];
        }
    }]);

    return RockStreakIncrementUpgrade;
}(_Upgrade3.default);

},{"../../../constants/UpgradeConstants":5,"../../../managers/PointsManager":10,"../../Upgrade":19}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ScissorGameSpeedUpgrade = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Upgrade2 = require("../../Upgrade");

var _Upgrade3 = _interopRequireDefault(_Upgrade2);

var _UpgradeConstants = require("../../../constants/UpgradeConstants");

var _PointsManager = require("../../../managers/PointsManager");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOOLTIP_TEXT = 'Increase the speed of the game using the power of scissors.';

var ScissorGameSpeedUpgrade = exports.ScissorGameSpeedUpgrade = function (_Upgrade) {
    _inherits(ScissorGameSpeedUpgrade, _Upgrade);

    function ScissorGameSpeedUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, ScissorGameSpeedUpgrade);

        var _this = _possibleConstructorReturn(this, (ScissorGameSpeedUpgrade.__proto__ || Object.getPrototypeOf(ScissorGameSpeedUpgrade)).call(this, game, _UpgradeConstants.UpgradeType.SCISSOR, TOOLTIP_TEXT, upgradeKey, upgradeLevel, false, _PointsManager.PointType.SCISSORS));

        _this.setCostScalingConfig(_UpgradeConstants.SCISSOR_GAME_SPEED_INCREASE_COST_CONFIG);
        _this.setUpgradeValueScalingConfig(_UpgradeConstants.SCISSOR_GAME_SPEED_INCREASE_AMOUNT_VALUE_CONFIG);
        return _this;
    }

    _createClass(ScissorGameSpeedUpgrade, [{
        key: "updateUiProperties",
        value: function updateUiProperties() {
            this.setUiText("Game Speed " + this.getStatArrowText(this.getUpgradeValue(), this.getUpgradeValue(true), 'ms per round') + ": " + this.getPrettyPrintCost() + " " + this.getPointType().toLowerCase());
        }
    }, {
        key: "getUpgradeValue",
        value: function getUpgradeValue(useNextLevel) {
            // Parent class handles the use of the scaling config. 
            // This is a special case though since we rely on another upgrade value.
            return this.game.upgrades.getUpgradeValue(_UpgradeConstants.UpgradeKey.GAME_SPEED_UPGRADE) - _get(ScissorGameSpeedUpgrade.prototype.__proto__ || Object.getPrototypeOf(ScissorGameSpeedUpgrade.prototype), "getUpgradeValue", this).call(this, useNextLevel);
        }
    }, {
        key: "getPreReqUpgradeKeys",
        value: function getPreReqUpgradeKeys() {
            return [_UpgradeConstants.UpgradeKey.UNLOCK_PAPER_SCISSOR_ROCK_POINTS];
        }
    }]);

    return ScissorGameSpeedUpgrade;
}(_Upgrade3.default);

},{"../../../constants/UpgradeConstants":5,"../../../managers/PointsManager":10,"../../Upgrade":19}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpockCriticalWinUpgrade = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Upgrade2 = require("../../Upgrade");

var _Upgrade3 = _interopRequireDefault(_Upgrade2);

var _UpgradeConstants = require("../../../constants/UpgradeConstants");

var _PointsManager = require("../../../managers/PointsManager");

var _BoardManager = require("../../../managers/BoardManager");

var _RandomUtils = require("../../../utils/RandomUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_NON_CRIT_MULTPLIER = 1;
var DEFAULT_CRIT_MULTPLIER = 2;

var SpockCriticalWinUpgrade = exports.SpockCriticalWinUpgrade = function (_Upgrade) {
    _inherits(SpockCriticalWinUpgrade, _Upgrade);

    function SpockCriticalWinUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, SpockCriticalWinUpgrade);

        var _this = _possibleConstructorReturn(this, (SpockCriticalWinUpgrade.__proto__ || Object.getPrototypeOf(SpockCriticalWinUpgrade)).call(this, game, _UpgradeConstants.UpgradeType.SPOCK, "", upgradeKey, upgradeLevel, false, _PointsManager.PointType.SPOCKS));

        _this.setCostScalingConfig(_UpgradeConstants.SPOCK_CRITICAL_WIN_INCREASE_BASE_COST);
        return _this;
    }

    _createClass(SpockCriticalWinUpgrade, [{
        key: "updateUiProperties",
        value: function updateUiProperties() {
            this.setUiText("Critical Win Chance " + this.getStatArrowText(this.getUpgradeValue() * 100, this.getUpgradeValue(true) * 100, '%') + ": " + this.getPrettyPrintCost() + " " + this.getPointType().toLowerCase());
        }
    }, {
        key: "getUpgradeValue",
        value: function getUpgradeValue(useNextLevel) {
            var level = this.getUpgradeLevel(useNextLevel);
            return _UpgradeConstants.SPOCK_CRITICAL_WIN_CHANCE_INCREASE_AMOUNT * level;
        }
    }, {
        key: "getTooltipText",
        value: function getTooltipText() {
            return "Increase percent chance of a 'critical win' where you earn " + SpockCriticalWinUpgrade.getCriticalWinMultiplier() + "x points. Wins will have an '!' around them if it was a critical win.";
        }
        /** Check to see if you hit a crit.  */

    }, {
        key: "getPreReqUpgradeKeys",
        value: function getPreReqUpgradeKeys() {
            return [_UpgradeConstants.UpgradeKey.UNLOCK_PAPER_SCISSOR_ROCK_POINTS];
        }
    }, {
        key: "getRequiredPrestigeLevel",
        value: function getRequiredPrestigeLevel() {
            return _UpgradeConstants.SPOCK_REQUIRED_PRESTIGE_LEVEL;
        }
    }], [{
        key: "didRoundCriticalWin",
        value: function didRoundCriticalWin(game, gameResultType) {
            if (gameResultType != _BoardManager.GameResultType.WIN) {
                return false;
            }
            var upgrade = game.upgrades.getUpgrade(_UpgradeConstants.UpgradeKey.SPOCK_CRITICAL_WIN_UPGRADE);
            if (upgrade.getIsUpgraded()) {
                return (0, _RandomUtils.doesEventOccur)(upgrade.getUpgradeValue());
            }
            return false;
        }
    }, {
        key: "getCriticalWinMultiplier",
        value: function getCriticalWinMultiplier() {
            var didHitCriticalWin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            return didHitCriticalWin ? DEFAULT_CRIT_MULTPLIER : DEFAULT_NON_CRIT_MULTPLIER;
        }
    }]);

    return SpockCriticalWinUpgrade;
}(_Upgrade3.default);

},{"../../../constants/UpgradeConstants":5,"../../../managers/BoardManager":7,"../../../managers/PointsManager":10,"../../../utils/RandomUtils":44,"../../Upgrade":19}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FlatPointsUpgrade = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Upgrade2 = require("../../Upgrade");

var _Upgrade3 = _interopRequireDefault(_Upgrade2);

var _UpgradeConstants = require("../../../constants/UpgradeConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOOLTIP_TEXT = 'Earn more points for each round won.';

var FlatPointsUpgrade = exports.FlatPointsUpgrade = function (_Upgrade) {
    _inherits(FlatPointsUpgrade, _Upgrade);

    function FlatPointsUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, FlatPointsUpgrade);

        var _this = _possibleConstructorReturn(this, (FlatPointsUpgrade.__proto__ || Object.getPrototypeOf(FlatPointsUpgrade)).call(this, game, _UpgradeConstants.UpgradeType.GENERAL, TOOLTIP_TEXT, upgradeKey, upgradeLevel));

        _this.setCostScalingConfig(_UpgradeConstants.FLAT_POINTS_UPGRADE_COST_CONFIG);
        return _this;
    }

    _createClass(FlatPointsUpgrade, [{
        key: "updateUiProperties",
        value: function updateUiProperties() {
            this.setUiText("Base Points Per Win " + this.getStatArrowText(this.getUpgradeValue(), this.getUpgradeValue(true), " pts") + ": " + this.getPrettyPrintCost() + " pts");
        }
    }, {
        key: "getUpgradeValue",
        value: function getUpgradeValue(useNextLevel) {
            var level = this.getUpgradeLevel(useNextLevel);
            return 1 + _UpgradeConstants.FLAT_POINTS_UPGRADE_POINT_INCREASE_AMOUNT * level;
        }
    }]);

    return FlatPointsUpgrade;
}(_Upgrade3.default);

},{"../../../constants/UpgradeConstants":5,"../../Upgrade":19}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GameOptionEqualizer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Upgrade2 = require("../../Upgrade");

var _Upgrade3 = _interopRequireDefault(_Upgrade2);

var _UpgradeConstants = require("../../../constants/UpgradeConstants");

var _SelectionManager = require("../../../managers/SelectionManager");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOOLTIP_TEXT = 'Not all game options are created alike (and may not have equal W/L/T ratios). This increases the earnings for the disadvantaged types. Does not work on ties.';

var GameOptionEqualizer = exports.GameOptionEqualizer = function (_Upgrade) {
    _inherits(GameOptionEqualizer, _Upgrade);

    function GameOptionEqualizer(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, GameOptionEqualizer);

        return _possibleConstructorReturn(this, (GameOptionEqualizer.__proto__ || Object.getPrototypeOf(GameOptionEqualizer)).call(this, game, _UpgradeConstants.UpgradeType.GENERAL, TOOLTIP_TEXT, upgradeKey, upgradeLevel, true));
    }

    _createClass(GameOptionEqualizer, [{
        key: "updateUiProperties",
        value: function updateUiProperties() {
            this.setUiText("Game Option Equalizer: " + this.getPrettyPrintCost() + " pts");
        }
    }, {
        key: "getCost",
        value: function getCost() {
            return _UpgradeConstants.GAME_OPTION_EQUALIZER_COST;
        }
    }, {
        key: "getMaxUpgradeLevel",
        value: function getMaxUpgradeLevel() {
            // FIXME: Disabled win streak multiplier temporarily.
            return 0;
        }
        /** Get the multiplier for game options that are disadvantaged from W/L/T perspective. */

    }], [{
        key: "getGameOptionDisadvantagedMultiplier",
        value: function getGameOptionDisadvantagedMultiplier(game, gameOptionType) {
            // TODO(equalizer): Decide if we want this.
            return 1;
            // Not upgraded yet. No bonus.
            if (!game.upgrades.isUpgraded(_UpgradeConstants.UpgradeKey.GAME_OPTION_EQUALIZER)) {
                return 1;
            }
            // Not disadvantaged. No bonus.
            if (!GameOptionEqualizer.isGameOptionTypeDisadvantaged(game, gameOptionType)) {
                return 1;
            }
            return 2;
        }
    }, {
        key: "isGameOptionTypeDisadvantaged",
        value: function isGameOptionTypeDisadvantaged(game, gameOptionType) {
            if (!(game.upgrades.getUpgradeLevel(_UpgradeConstants.UpgradeKey.GAME_OPTION_PRESTIGE_UPGRADE) == _UpgradeConstants.LIZARD_REQUIRED_PRESTIGE_LEVEL)) {
                return false;
            }
            return gameOptionType == _SelectionManager.GameOptionType.LIZARD || gameOptionType == _SelectionManager.GameOptionType.PAPER;
        }
    }]);

    return GameOptionEqualizer;
}(_Upgrade3.default);

},{"../../../constants/UpgradeConstants":5,"../../../managers/SelectionManager":12,"../../Upgrade":19}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GameSpeedUpgrade = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Upgrade2 = require("../../Upgrade");

var _Upgrade3 = _interopRequireDefault(_Upgrade2);

var _UpgradeConstants = require("../../../constants/UpgradeConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOOLTIP_TEXT = 'Game will go faster.';

var GameSpeedUpgrade = exports.GameSpeedUpgrade = function (_Upgrade) {
    _inherits(GameSpeedUpgrade, _Upgrade);

    function GameSpeedUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, GameSpeedUpgrade);

        return _possibleConstructorReturn(this, (GameSpeedUpgrade.__proto__ || Object.getPrototypeOf(GameSpeedUpgrade)).call(this, game, _UpgradeConstants.UpgradeType.GENERAL, TOOLTIP_TEXT, upgradeKey, upgradeLevel));
    }

    _createClass(GameSpeedUpgrade, [{
        key: "updateUiProperties",
        value: function updateUiProperties() {
            this.setUiText("Game Speed " + this.getStatArrowText(this.getUpgradeValue(), this.getUpgradeValue(true), " speed") + ": " + this.getPrettyPrintCost() + " pts");
        }
    }, {
        key: "getCost",
        value: function getCost() {
            return _UpgradeConstants.GAME_SPEED_UPGRADE_BASE_COST + _UpgradeConstants.GAME_SPEED_UPGRADE_COST_INCREMENT_AMOUNT * this.upgradeLevel;
        }
    }, {
        key: "getUpgradeValue",
        value: function getUpgradeValue(useNextLevel) {
            var level = this.getUpgradeLevel(useNextLevel);
            return _UpgradeConstants.BASE_GAME_SPEED - _UpgradeConstants.GAME_SPEED_UPGRADE_REDUCTION_AMOUNT_IN_MS * level;
        }
    }, {
        key: "getMaxUpgradeLevel",
        value: function getMaxUpgradeLevel() {
            return 6;
        }
    }]);

    return GameSpeedUpgrade;
}(_Upgrade3.default);

},{"../../../constants/UpgradeConstants":5,"../../Upgrade":19}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PlayMultipleGameOptionsUpgrade = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Upgrade2 = require("../../Upgrade");

var _Upgrade3 = _interopRequireDefault(_Upgrade2);

var _UpgradeConstants = require("../../../constants/UpgradeConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOOLTIP_TEXT = 'Choose multiple options (paper/scissor/rock) per game round. The same option can be chosen multiple times. ' + 'Earn points for each selection. Each selection is processed one at a time.';
var costArray = _UpgradeConstants.PLAY_MULTIPLE_GAME_OPTIONS_COST_ARRAY;

var PlayMultipleGameOptionsUpgrade = exports.PlayMultipleGameOptionsUpgrade = function (_Upgrade) {
    _inherits(PlayMultipleGameOptionsUpgrade, _Upgrade);

    function PlayMultipleGameOptionsUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, PlayMultipleGameOptionsUpgrade);

        return _possibleConstructorReturn(this, (PlayMultipleGameOptionsUpgrade.__proto__ || Object.getPrototypeOf(PlayMultipleGameOptionsUpgrade)).call(this, game, _UpgradeConstants.UpgradeType.GENERAL, TOOLTIP_TEXT, upgradeKey, upgradeLevel));
    }

    _createClass(PlayMultipleGameOptionsUpgrade, [{
        key: "updateUiProperties",
        value: function updateUiProperties() {
            this.setUiText("Play Multiple Choices " + this.getStatArrowText(this.getUpgradeValue(), this.getUpgradeValue(true), " selections") + ": " + this.getPrettyPrintCost() + " pts");
        }
    }, {
        key: "getCost",
        value: function getCost() {
            var level = this.getUpgradeLevel();
            // if (level >= costArray.length) return costArray[costArray.length-1];
            return costArray[level];
            // return PLAY_MULTIPLE_GAME_OPTIONS_BASE_COST + (PLAY_MULTIPLE_GAME_OPTIONS_COST_INCREMENT_AMOUNT * this.upgradeLevel);
        }
    }, {
        key: "buyUpgrade",
        value: function buyUpgrade() {
            var didBuy = _get(PlayMultipleGameOptionsUpgrade.prototype.__proto__ || Object.getPrototypeOf(PlayMultipleGameOptionsUpgrade.prototype), "buyUpgrade", this).call(this);
            if (didBuy) {
                this.game.board.getSelectionManager().updateCustomSelectionCounts();
            }
            return didBuy;
        }
    }, {
        key: "getUpgradeValue",
        value: function getUpgradeValue(useNextLevel) {
            var level = this.getUpgradeLevel(useNextLevel);
            return _UpgradeConstants.DEFAULT_PLAY_MULTIPLE_GAME_OPTIONS_AMOUNT + level * _UpgradeConstants.PLAY_MULTIPLE_GAME_OPTIONS_INCREMENT_AMOUNT;
        }
    }, {
        key: "getMaxUpgradeLevel",
        value: function getMaxUpgradeLevel() {
            return costArray.length;
        }
    }]);

    return PlayMultipleGameOptionsUpgrade;
}(_Upgrade3.default);

},{"../../../constants/UpgradeConstants":5,"../../Upgrade":19}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RockAlwaysWinsUpgrade = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Upgrade2 = require("../../Upgrade");

var _Upgrade3 = _interopRequireDefault(_Upgrade2);

var _UpgradeConstants = require("../../../constants/UpgradeConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOOLTIP_TEXT = 'Rock always wins. It is unstoppable.';

var RockAlwaysWinsUpgrade = exports.RockAlwaysWinsUpgrade = function (_Upgrade) {
    _inherits(RockAlwaysWinsUpgrade, _Upgrade);

    function RockAlwaysWinsUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, RockAlwaysWinsUpgrade);

        return _possibleConstructorReturn(this, (RockAlwaysWinsUpgrade.__proto__ || Object.getPrototypeOf(RockAlwaysWinsUpgrade)).call(this, game, _UpgradeConstants.UpgradeType.GENERAL, TOOLTIP_TEXT, upgradeKey, upgradeLevel, true));
    }

    _createClass(RockAlwaysWinsUpgrade, [{
        key: "updateUiProperties",
        value: function updateUiProperties() {
            this.setUiText("Rock Always Wins: " + this.getPrettyPrintCost() + " pts");
        }
    }, {
        key: "getCost",
        value: function getCost() {
            var prestigeLevel = this.game.upgrades.getUpgradeValue(_UpgradeConstants.UpgradeKey.GAME_OPTION_PRESTIGE_UPGRADE);
            return _UpgradeConstants.ROCK_ALWAYS_WINS_BASE_COST[Math.min(prestigeLevel, _UpgradeConstants.ROCK_ALWAYS_WINS_BASE_COST.length - 1)];
        }
    }]);

    return RockAlwaysWinsUpgrade;
}(_Upgrade3.default);

},{"../../../constants/UpgradeConstants":5,"../../Upgrade":19}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RockNeverLosesUpgrade = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Upgrade2 = require("../../Upgrade");

var _Upgrade3 = _interopRequireDefault(_Upgrade2);

var _UpgradeConstants = require("../../../constants/UpgradeConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOOLTIP_TEXT = 'Rock never loses. It is the ultimate weapon.';

var RockNeverLosesUpgrade = exports.RockNeverLosesUpgrade = function (_Upgrade) {
    _inherits(RockNeverLosesUpgrade, _Upgrade);

    function RockNeverLosesUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, RockNeverLosesUpgrade);

        return _possibleConstructorReturn(this, (RockNeverLosesUpgrade.__proto__ || Object.getPrototypeOf(RockNeverLosesUpgrade)).call(this, game, _UpgradeConstants.UpgradeType.GENERAL, TOOLTIP_TEXT, upgradeKey, upgradeLevel, true));
    }

    _createClass(RockNeverLosesUpgrade, [{
        key: "updateUiProperties",
        value: function updateUiProperties() {
            this.setUiText("Rock Never Loses: " + this.getPrettyPrintCost() + " pts");
            this.game.board.getSelectionManager().updateCustomSelectionCounts();
        }
    }, {
        key: "getCost",
        value: function getCost() {
            var prestigeLevel = this.game.upgrades.getUpgradeValue(_UpgradeConstants.UpgradeKey.GAME_OPTION_PRESTIGE_UPGRADE);
            return _UpgradeConstants.ROCK_NEVER_LOSES_BASE_COST[Math.min(prestigeLevel, _UpgradeConstants.ROCK_NEVER_LOSES_BASE_COST.length - 1)];
        }
    }]);

    return RockNeverLosesUpgrade;
}(_Upgrade3.default);

},{"../../../constants/UpgradeConstants":5,"../../Upgrade":19}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TiesEarnPointsUpgrade = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Upgrade2 = require("../../Upgrade");

var _Upgrade3 = _interopRequireDefault(_Upgrade2);

var _UpgradeConstants = require("../../../constants/UpgradeConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOOLTIP_TEXT = 'Earn points from ties worth X% of a win.';

var TiesEarnPointsUpgrade = exports.TiesEarnPointsUpgrade = function (_Upgrade) {
    _inherits(TiesEarnPointsUpgrade, _Upgrade);

    function TiesEarnPointsUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, TiesEarnPointsUpgrade);

        return _possibleConstructorReturn(this, (TiesEarnPointsUpgrade.__proto__ || Object.getPrototypeOf(TiesEarnPointsUpgrade)).call(this, game, _UpgradeConstants.UpgradeType.GENERAL, TOOLTIP_TEXT, upgradeKey, upgradeLevel));
    }

    _createClass(TiesEarnPointsUpgrade, [{
        key: "updateUiProperties",
        value: function updateUiProperties() {
            var beforePercent = this.game.ui.getDecimalPrettyPrintNumber(this.getUpgradeValue() * 100, 0);
            var afterPercent = this.game.ui.getDecimalPrettyPrintNumber(this.getUpgradeValue(true) * 100, 0);
            this.setUiText("Ties Earn Points " + this.getStatArrowText(beforePercent, afterPercent, "% win pts per tie") + ": " + this.getPrettyPrintCost() + " pts");
        }
    }, {
        key: "getCost",
        value: function getCost() {
            return _UpgradeConstants.TIES_EARN_POINTS_UPGRADE_BASE_COST[this.upgradeLevel];
        }
    }, {
        key: "getMaxUpgradeLevel",
        value: function getMaxUpgradeLevel() {
            return _UpgradeConstants.TIES_EARN_POINTS_UPGRADE_BASE_COST.length;
        }
    }, {
        key: "getUpgradeValue",
        value: function getUpgradeValue(useNextLevel) {
            var level = this.getUpgradeLevel(useNextLevel);
            return _UpgradeConstants.TIES_EARN_POINTS_PERCENT_EARNED_INCREMENT_AMOUNT * level;
        }
    }]);

    return TiesEarnPointsUpgrade;
}(_Upgrade3.default);

},{"../../../constants/UpgradeConstants":5,"../../Upgrade":19}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UnlockPaperScissorRockPoints = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Upgrade2 = require("../../Upgrade");

var _Upgrade3 = _interopRequireDefault(_Upgrade2);

var _UpgradeConstants = require("../../../constants/UpgradeConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOOLTIP_TEXT = 'Unlock new point type for Papers, Scissors, and Rocks which are earned by winning with that option (i.e. win with rock and earn rock points).';

var UnlockPaperScissorRockPoints = exports.UnlockPaperScissorRockPoints = function (_Upgrade) {
    _inherits(UnlockPaperScissorRockPoints, _Upgrade);

    function UnlockPaperScissorRockPoints(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, UnlockPaperScissorRockPoints);

        return _possibleConstructorReturn(this, (UnlockPaperScissorRockPoints.__proto__ || Object.getPrototypeOf(UnlockPaperScissorRockPoints)).call(this, game, _UpgradeConstants.UpgradeType.GENERAL, TOOLTIP_TEXT, upgradeKey, upgradeLevel, true));
    }

    _createClass(UnlockPaperScissorRockPoints, [{
        key: "updateUiProperties",
        value: function updateUiProperties() {
            this.setUiText("Unlock Paper/Scissor/Rock Points: " + this.getPrettyPrintCost() + " pts");
        }
    }, {
        key: "getCost",
        value: function getCost() {
            return _UpgradeConstants.UNLOCK_PAPER_SCISSOR_ROCK_POINTS;
        }
    }]);

    return UnlockPaperScissorRockPoints;
}(_Upgrade3.default);

},{"../../../constants/UpgradeConstants":5,"../../Upgrade":19}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RockWinsMultiplyCurrentStreak = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Upgrade2 = require("../../Upgrade");

var _Upgrade3 = _interopRequireDefault(_Upgrade2);

var _UpgradeConstants = require("../../../constants/UpgradeConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOOLTIP_TEXT = 'Winning with rock multiplies your streak multiplier.';

var RockWinsMultiplyCurrentStreak = exports.RockWinsMultiplyCurrentStreak = function (_Upgrade) {
    _inherits(RockWinsMultiplyCurrentStreak, _Upgrade);

    function RockWinsMultiplyCurrentStreak(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, RockWinsMultiplyCurrentStreak);

        return _possibleConstructorReturn(this, (RockWinsMultiplyCurrentStreak.__proto__ || Object.getPrototypeOf(RockWinsMultiplyCurrentStreak)).call(this, game, _UpgradeConstants.UpgradeType.GENERAL, TOOLTIP_TEXT, upgradeKey, upgradeLevel));
    }

    _createClass(RockWinsMultiplyCurrentStreak, [{
        key: "updateUiProperties",
        value: function updateUiProperties() {
            var currVal = this.getUpgradeValue();
            var nextVal = this.getUpgradeValue(true);
            this.setUiText("Rock Wins Multiply Streak " + this.getStatArrowText(currVal, nextVal, "x streak") + ": " + this.getPrettyPrintCost() + " pts");
        }
    }, {
        key: "getCost",
        value: function getCost() {
            return _UpgradeConstants.ROCK_WINS_MULTIPLIES_STREAK_BASE_COST + _UpgradeConstants.ROCK_WINS_MULTIPLIES_STREAK_COST_MULTIPLIER * this.upgradeLevel;
        }
    }, {
        key: "getMaxUpgradeLevel",
        value: function getMaxUpgradeLevel() {
            // FIXME: Disabled win streak multiplier temporarily.
            return 0;
        }
    }, {
        key: "getPreReqUpgradeKeys",
        value: function getPreReqUpgradeKeys() {
            return [_UpgradeConstants.UpgradeKey.ROCK_ALWAYS_WINS_UPGRADE];
        }
    }, {
        key: "getUpgradeValue",
        value: function getUpgradeValue(useNextLevel) {
            return 1;
            // const level = this.getUpgradeLevel(useNextLevel);
            // const amount = 1 + ROCK_WINS_MULTIPLY_STREAK_INCREMENT * level;
            // console.log("ROCKZ: " + amount);
            // return amount;
        }
    }]);

    return RockWinsMultiplyCurrentStreak;
}(_Upgrade3.default);

},{"../../../constants/UpgradeConstants":5,"../../Upgrade":19}],39:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StreakMulliganUpgrade = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Upgrade2 = require("../../Upgrade");

var _Upgrade3 = _interopRequireDefault(_Upgrade2);

var _UpgradeConstants = require("../../../constants/UpgradeConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOOLTIP_TEXT = "Losing will not break your win streak X number of times.";

var StreakMulliganUpgrade = exports.StreakMulliganUpgrade = function (_Upgrade) {
    _inherits(StreakMulliganUpgrade, _Upgrade);

    function StreakMulliganUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, StreakMulliganUpgrade);

        return _possibleConstructorReturn(this, (StreakMulliganUpgrade.__proto__ || Object.getPrototypeOf(StreakMulliganUpgrade)).call(this, game, _UpgradeConstants.UpgradeType.GENERAL, TOOLTIP_TEXT, upgradeKey, upgradeLevel));
    }

    _createClass(StreakMulliganUpgrade, [{
        key: "updateUiProperties",
        value: function updateUiProperties() {
            var currLevel = this.getUpgradeLevel();
            var nextLevel = this.getUpgradeLevel(true);
            this.setUiText("Streak Mulligans " + this.getStatArrowText(currLevel, nextLevel, " mulligans") + ": " + this.getPrettyPrintCost() + " pts");
        }
    }, {
        key: "getCost",
        value: function getCost() {
            return _UpgradeConstants.STREAK_MULLIGAN_UPGRADE_BASE_COST[this.getUpgradeLevel()];
        }
    }, {
        key: "getMaxUpgradeLevel",
        value: function getMaxUpgradeLevel() {
            return _UpgradeConstants.STREAK_MULLIGAN_UPGRADE_BASE_COST.length;
        }
    }]);

    return StreakMulliganUpgrade;
}(_Upgrade3.default);

},{"../../../constants/UpgradeConstants":5,"../../Upgrade":19}],40:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TiesDoNotBreakStreakUpgrade = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Upgrade2 = require("../../Upgrade");

var _Upgrade3 = _interopRequireDefault(_Upgrade2);

var _UpgradeConstants = require("../../../constants/UpgradeConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOOLTIP_TEXT = "Ties don't break your win streak.";

var TiesDoNotBreakStreakUpgrade = exports.TiesDoNotBreakStreakUpgrade = function (_Upgrade) {
    _inherits(TiesDoNotBreakStreakUpgrade, _Upgrade);

    function TiesDoNotBreakStreakUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, TiesDoNotBreakStreakUpgrade);

        return _possibleConstructorReturn(this, (TiesDoNotBreakStreakUpgrade.__proto__ || Object.getPrototypeOf(TiesDoNotBreakStreakUpgrade)).call(this, game, _UpgradeConstants.UpgradeType.GENERAL, TOOLTIP_TEXT, upgradeKey, upgradeLevel, true));
    }

    _createClass(TiesDoNotBreakStreakUpgrade, [{
        key: "updateUiProperties",
        value: function updateUiProperties() {
            this.setUiText("Ties Do Not Break Streak: " + this.getPrettyPrintCost() + " pts");
        }
    }, {
        key: "getCost",
        value: function getCost() {
            return _UpgradeConstants.TIES_DO_NOT_BREAK_STREAK_UPGRADE_BASE_COST;
        }
    }]);

    return TiesDoNotBreakStreakUpgrade;
}(_Upgrade3.default);

},{"../../../constants/UpgradeConstants":5,"../../Upgrade":19}],41:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TiesExtendStreakUpgrade = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Upgrade2 = require("../../Upgrade");

var _Upgrade3 = _interopRequireDefault(_Upgrade2);

var _UpgradeConstants = require("../../../constants/UpgradeConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOOLTIP_TEXT = "Ties extend your win streak.";

var TiesExtendStreakUpgrade = exports.TiesExtendStreakUpgrade = function (_Upgrade) {
    _inherits(TiesExtendStreakUpgrade, _Upgrade);

    function TiesExtendStreakUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, TiesExtendStreakUpgrade);

        return _possibleConstructorReturn(this, (TiesExtendStreakUpgrade.__proto__ || Object.getPrototypeOf(TiesExtendStreakUpgrade)).call(this, game, _UpgradeConstants.UpgradeType.GENERAL, TOOLTIP_TEXT, upgradeKey, upgradeLevel));
    }

    _createClass(TiesExtendStreakUpgrade, [{
        key: "updateUiProperties",
        value: function updateUiProperties() {
            var currLevel = this.game.ui.getDecimalPrettyPrintNumber(this.getUpgradeValue() * 100, 0);
            var nextLevel = this.game.ui.getDecimalPrettyPrintNumber(this.getUpgradeValue(true) * 100, 0);
            this.setUiText("Ties Extend Win Streak: " + this.getStatArrowText(currLevel, nextLevel, "% streak") + ": " + this.getPrettyPrintCost() + " pts");
        }
    }, {
        key: "getMaxUpgradeLevel",
        value: function getMaxUpgradeLevel() {
            return _UpgradeConstants.TIES_EXTEND_STREAK_UPGRADE_BASE_COST.length;
        }
    }, {
        key: "getCost",
        value: function getCost() {
            return _UpgradeConstants.TIES_EXTEND_STREAK_UPGRADE_BASE_COST[this.getUpgradeLevel()];
        }
    }, {
        key: "getUpgradeValue",
        value: function getUpgradeValue(useNextLevel) {
            return _UpgradeConstants.TIES_EXTEND_STREAK_MULTIPLIER_INCREMENT_AMOUNT * this.getUpgradeLevel(useNextLevel);
        }
    }, {
        key: "getPreReqUpgradeKeys",
        value: function getPreReqUpgradeKeys() {
            return [_UpgradeConstants.UpgradeKey.TIES_DO_NOT_BREAK_STREAK_UPGRADE];
        }
    }]);

    return TiesExtendStreakUpgrade;
}(_Upgrade3.default);

},{"../../../constants/UpgradeConstants":5,"../../Upgrade":19}],42:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WinStreakMultiplierUpgrade = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Upgrade2 = require("../../Upgrade");

var _Upgrade3 = _interopRequireDefault(_Upgrade2);

var _UpgradeConstants = require("../../../constants/UpgradeConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// FIXME(WINSTREAK): Win streak cumulative or nah? Fix the other one too.
var TOOLTIP_TEXT = 'Earn more points for each consecutive win. This is a cumulative upgrade (i.e. 1 win is 1.05x, 2 wins are 1.10x, etc.).';

var WinStreakMultiplierUpgrade = exports.WinStreakMultiplierUpgrade = function (_Upgrade) {
    _inherits(WinStreakMultiplierUpgrade, _Upgrade);

    function WinStreakMultiplierUpgrade(game, upgradeKey) {
        var upgradeLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, WinStreakMultiplierUpgrade);

        return _possibleConstructorReturn(this, (WinStreakMultiplierUpgrade.__proto__ || Object.getPrototypeOf(WinStreakMultiplierUpgrade)).call(this, game, _UpgradeConstants.UpgradeType.GENERAL, TOOLTIP_TEXT, upgradeKey, upgradeLevel));
    }

    _createClass(WinStreakMultiplierUpgrade, [{
        key: "updateUiProperties",
        value: function updateUiProperties() {
            var beforeVal = this.game.ui.getDecimalPrettyPrintNumber(1 + this.getUpgradeValue(), 2);
            var afterVal = this.game.ui.getDecimalPrettyPrintNumber(1 + this.getUpgradeValue(true), 2);
            this.setUiText("Win Streak Multiplier " + this.getStatArrowText(beforeVal, "+" + afterVal, " per win") + ": " + this.getPrettyPrintCost() + " pts");
        }
    }, {
        key: "getCost",
        value: function getCost() {
            return 1 + _UpgradeConstants.WIN_STREAK_UPGRADE_BASE_COST[this.getUpgradeLevel()];
        }
    }, {
        key: "getUpgradeValue",
        value: function getUpgradeValue(useNextLevel) {
            var level = this.getUpgradeLevel(useNextLevel);
            return _UpgradeConstants.WIN_STREAK_UPGRADE_MULTIPLIER_INCREMENT * level;
        }
    }, {
        key: "getMaxUpgradeLevel",
        value: function getMaxUpgradeLevel() {
            return _UpgradeConstants.WIN_STREAK_UPGRADE_BASE_COST.length;
        }
    }]);

    return WinStreakMultiplierUpgrade;
}(_Upgrade3.default);

},{"../../../constants/UpgradeConstants":5,"../../Upgrade":19}],43:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.assertNoInvalidRules = exports.generateGameRulesHtml = undefined;

var _BoardManager = require("../managers/BoardManager");

var generateGameRulesHtml = exports.generateGameRulesHtml = function generateGameRulesHtml(game) {
    assertNoInvalidRules(game);
    var gameOptionTypes = Array.from(game.board.getSelectionManager().getValidGameOptionTypes().values());
    var htmlResult = "";
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = gameOptionTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var gameOption = _step.value;

            htmlResult += "** " + gameOption + " **\n";
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = gameOptionTypes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var otherOption = _step2.value;

                    var result = game.board.getRoundResult(gameOption, otherOption, true);
                    var compareText = void 0;
                    if (result == _BoardManager.GameResultType.WIN) {
                        compareText = " >> ";
                    } else if (result == _BoardManager.GameResultType.LOSE) {
                        compareText = " << ";
                    } else if (result == _BoardManager.GameResultType.TIE) {
                        compareText = " == ";
                    } else {
                        throw "Invalid gameResultType for generateGameRulesText " + result + ".";
                    }
                    htmlResult += gameOption + " " + compareText + " " + otherOption + "\n";
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            htmlResult += "\n";
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    htmlResult += "";
    return htmlResult;
};
var assertNoInvalidRules = exports.assertNoInvalidRules = function assertNoInvalidRules(game) {
    var gameOptionTypes = Array.from(game.board.getSelectionManager().getValidGameOptionTypes().values());
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = gameOptionTypes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var gameOption = _step3.value;
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = gameOptionTypes[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var otherOption = _step4.value;

                    if (gameOption == otherOption) {
                        continue;
                    }
                    var result = game.board.getRoundResult(gameOption, otherOption, true);
                    var inverseResult = game.board.getRoundResult(otherOption, gameOption, true);
                    if (result == inverseResult) {
                        console.error("Invalid game result " + gameOption + " vs. " + otherOption + " = " + result + " and " + otherOption + " vs. " + gameOption + " = " + inverseResult + ".");
                    } else if (result == _BoardManager.GameResultType.TIE || inverseResult == _BoardManager.GameResultType.TIE) {
                        console.error("Invalid game result " + gameOption + " vs. " + otherOption + " = " + result + " and " + otherOption + " vs. " + gameOption + " = " + inverseResult + ".");
                    }
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
};

},{"../managers/BoardManager":7}],44:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var doesEventOccur = exports.doesEventOccur = function doesEventOccur(probability) {
    if (probability < 0 || probability > 1) {
        throw "Invalid probability provided to doesEventOccur: " + probability + ".";
    }
    // Generate a random number and test if it falls within the probability range
    return Math.random() < probability;
};

},{}],45:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UpgradeAutoPurchaser = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UpgradeConstants = require("../constants/UpgradeConstants");

var _PointsManager = require("../managers/PointsManager");

var _priorityjs = require("priorityjs");

var _priorityjs2 = _interopRequireDefault(_priorityjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DISABLED_UPGRADES = new Set([
    // UpgradeKey.GAME_OPTION_PRESTIGE_UPGRADE,
]);
var HIGH_PRIORITY_UPGRADES = new Set([_UpgradeConstants.UpgradeKey.STREAK_MULLIGAN_UPGRADE, _UpgradeConstants.UpgradeKey.TIES_EARN_POINTS_UPGRADE, _UpgradeConstants.UpgradeKey.ROCK_ALWAYS_WINS_UPGRADE, _UpgradeConstants.UpgradeKey.ROCK_NEVER_LOSES_UPGRADE, _UpgradeConstants.UpgradeKey.SCISSORS_CHANGE_GAME_OPTION_TO_ROCK_UPGRADE, _UpgradeConstants.UpgradeKey.PAPER_CHANGE_GAME_OPTION_TO_ROCK_UPGRADE, _UpgradeConstants.UpgradeKey.SPOCKS_CHANGE_GAME_OPTION_TO_ROCK_UPGRADE, _UpgradeConstants.UpgradeKey.LIZARD_CHANGE_GAME_OPTION_TO_ROCK_UPGRADE, _UpgradeConstants.UpgradeKey.PLAY_MULTIPLE_GAME_OPTIONS_UPGRADE, _UpgradeConstants.UpgradeKey.TIES_EXTEND_STREAK_UPGRADE]);
var HIGH_PRIORITY_UPGRADE_WORTH_RATIO = 1 / 4;

var UpgradeAutoPurchaser = exports.UpgradeAutoPurchaser = function () {
    function UpgradeAutoPurchaser(game) {
        _classCallCheck(this, UpgradeAutoPurchaser);

        this.game = game;
        this.purchaseLog = [];
        this.initUpgradeQueues();
    }

    _createClass(UpgradeAutoPurchaser, [{
        key: "reset",
        value: function reset() {
            this.initUpgradeQueues();
            this.purchaseLog = [];
        }
    }, {
        key: "processUpgradePurchases",
        value: function processUpgradePurchases(timestamp) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.upgradeQueueTrackers.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var upgradeQueueTracker = _step.value;

                    this.autoPurchaseUpgrades(upgradeQueueTracker, timestamp);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "hasUpgradesLeft",
        value: function hasUpgradesLeft() {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.upgradeQueueTrackers.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var queueTracker = _step2.value;

                    if (queueTracker.pQueue.size() > 0) {
                        return true;
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return false;
        }
    }, {
        key: "clearQueueTrackers",
        value: function clearQueueTrackers() {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = this.upgradeQueueTrackers.values()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var upgradeQueueTracker = _step3.value;

                    upgradeQueueTracker.pQueue.clear();
                    upgradeQueueTracker.upgradeKeySet.clear();
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    }, {
        key: "initUpgradeQueues",
        value: function initUpgradeQueues() {
            this.upgradeQueueTrackers = new Map();
            for (var pt in _PointsManager.PointType) {
                var pointType = pt;
                var pQueue = new _priorityjs2.default.PriorityQ(function (upgrade1, upgrade2) {
                    // Order by effective cost such that we use purchase priorities.
                    return upgrade1.effectiveCost <= upgrade2.effectiveCost;
                });
                this.upgradeQueueTrackers.set(pointType, {
                    pQueue: pQueue,
                    upgradeKeySet: new Set(),
                    pointType: pointType
                });
            }
        }
    }, {
        key: "getPurchaseLog",
        value: function getPurchaseLog() {
            return this.purchaseLog;
        }
        /* Purchase all upgrades available based on a particular point type. */

    }, {
        key: "autoPurchaseUpgrades",
        value: function autoPurchaseUpgrades(upgradeQueueTracker, timestampInMs) {
            var upgradeKeySet = upgradeQueueTracker.upgradeKeySet,
                pQueue = upgradeQueueTracker.pQueue,
                pointType = upgradeQueueTracker.pointType;
            // Add any new upgrades that may be present.

            this.appendAllUpgradesToPriorityQueue(upgradeQueueTracker);
            // Process each upgrade and buy all that we can. Re-add back onto queue if more upgrades of that type are available.
            while (pQueue.size() > 0 && pQueue.peek().cost <= this.game.points.getPoints(pointType)) {
                var _pQueue$pop = pQueue.pop(),
                    upgrade = _pQueue$pop.upgrade,
                    cost = _pQueue$pop.cost;

                upgradeKeySet.delete(upgrade.getUpgradeKey());
                // Buy upgrade. Double check can afford.
                if (upgrade.canAffordToBuyUpgrade()) {
                    var purchaseLogEntry = {
                        cost: cost,
                        upgradeKey: upgrade.getUpgradeKey(),
                        timeInMs: timestampInMs
                    };
                    this.purchaseLog.push(purchaseLogEntry);
                    upgrade.buyUpgrade();
                }
                // Re-push upgrade or others that may have been unlocked.
                this.appendAllUpgradesToPriorityQueue(upgradeQueueTracker);
            }
        }
    }, {
        key: "appendAllUpgradesToPriorityQueue",
        value: function appendAllUpgradesToPriorityQueue(upgradeQueueTracker) {
            var pointType = upgradeQueueTracker.pointType,
                pQueue = upgradeQueueTracker.pQueue,
                upgradeKeySet = upgradeQueueTracker.upgradeKeySet;
            // Push all items onto the queue sorted by lowest cost

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = this.game.upgrades.getUpgradeKeysByPointType(pointType)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var upgradeKey = _step4.value;

                    var upgrade = this.game.upgrades.getUpgrade(upgradeKey);
                    if (upgrade == null) continue;
                    // Disabled.
                    if (DISABLED_UPGRADES.has(upgradeKey)) continue;
                    // Skip upgrades already present, not upgradeable, or wrong point type.
                    if (upgrade.getPointType() != pointType) continue;
                    // Already in the queue
                    if (upgradeKeySet.has(upgrade.getUpgradeKey())) continue;
                    // Not unlocked or maxed out.
                    if (!upgrade.isUnlocked() || upgrade.isMaxUpgradeLevel()) continue;
                    // Add to queue/set tracker
                    var cost = upgrade.getCost();
                    var effectiveCost = HIGH_PRIORITY_UPGRADES.has(upgrade.getUpgradeKey()) ? cost * HIGH_PRIORITY_UPGRADE_WORTH_RATIO : cost;
                    var upgradeKeyAndCostPair = {
                        upgrade: upgrade,
                        effectiveCost: effectiveCost,
                        cost: cost
                    };
                    pQueue.push(upgradeKeyAndCostPair);
                    upgradeKeySet.add(upgrade.getUpgradeKey());
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }
        }
    }]);

    return UpgradeAutoPurchaser;
}();

},{"../constants/UpgradeConstants":5,"../managers/PointsManager":10,"priorityjs":1}],46:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var createUpgradeScalingConfig = exports.createUpgradeScalingConfig = function createUpgradeScalingConfig(baseAmount, baseIncrement, incrementScaling, maxLevels) {
    var finalLevelIncrementMultiplier = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

    return {
        baseAmount: baseAmount,
        baseIncrement: baseIncrement,
        incrementScaling: incrementScaling,
        maxLevel: maxLevels,
        finalLevelIncrementMultiplier: finalLevelIncrementMultiplier,
        isCostConfig: false
    };
};
var createCostScalingConfig = exports.createCostScalingConfig = function createCostScalingConfig(baseAmount, baseIncrement, incrementScaling, maxLevels) {
    var finalLevelIncrementMultiplier = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

    return {
        baseAmount: baseAmount,
        baseIncrement: baseIncrement,
        incrementScaling: incrementScaling,
        maxLevel: maxLevels,
        finalLevelIncrementMultiplier: finalLevelIncrementMultiplier,
        isCostConfig: true
    };
};
var calculateValueFromScalingConfigAtLevel = exports.calculateValueFromScalingConfigAtLevel = function calculateValueFromScalingConfigAtLevel(level, scalingConfig) {
    var baseAmount = scalingConfig.baseAmount,
        baseIncrement = scalingConfig.baseIncrement,
        incrementScaling = scalingConfig.incrementScaling,
        maxLevel = scalingConfig.maxLevel,
        finalLevelIncrementMultiplier = scalingConfig.finalLevelIncrementMultiplier,
        isCostConfig = scalingConfig.isCostConfig;

    if (level === 0) return baseAmount;
    // Special handling for the final level. 
    // NOTE: We are 0 base levels for calculating cost, but not for values.
    var effectiveMaxLevel = isCostConfig ? maxLevel - 1 : maxLevel;
    if (finalLevelIncrementMultiplier != null && level === effectiveMaxLevel) {
        // Calculate what the previous level total and increment was and increase the increment by the finalLevelMultiplier.
        var prevIncrement = (level - 2) * incrementScaling + baseIncrement;
        var prevLevel = calculateValueFromScalingConfigAtLevel(level - 1, scalingConfig);
        return prevIncrement * finalLevelIncrementMultiplier + prevLevel;
    }
    // Standard increment calculation for other levels
    var incrementSum = level * baseIncrement + level * (level - 1) / 2 * incrementScaling;
    return baseAmount + incrementSum;
};
var generateUpgradeCostIncrementors = exports.generateUpgradeCostIncrementors = function generateUpgradeCostIncrementors(baseCost, baseIncrement, incrementScaling, maxLevels) {
    var result = [];
    result.push(baseCost);
    var lastIncrement = baseIncrement;
    var lastCost = baseCost;
    for (var i = 1; i < maxLevels; i++) {
        var amount = lastCost + lastIncrement;
        result.push(amount);
        lastCost = amount;
        lastIncrement += incrementScaling;
    }
    return result;
};

},{}]},{},[6]);
