// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'
	| 'es'
	| 'fr'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	main: {
		updater: {
			/**
			 * New version available {version}
			 * @param {string} version
			 */
			title: RequiredParams<'version'>
			/**
			 * A new version ({version}) of Lindo is available. Do you want to update?
			 * @param {string} version
			 */
			message: RequiredParams<'version'>
			/**
			 * A required update ({version}) of Lindo is available, you must download it on GitHub.
			 * @param {string} version
			 */
			messageRequired: RequiredParams<'version'>
			/**
			 * Download
			 */
			download: string
			/**
			 * Ignore
			 */
			ignore: string
		}
		gameMenu: {
			file: {
				/**
				 * Application
				 */
				title: string
				/**
				 * New window
				 */
				newWindow: string
				/**
				 * New tab
				 */
				newTab: string
				/**
				 * Close tab
				 */
				closeTab: string
				/**
				 * Exit
				 */
				closeWindow: string
			}
			edit: {
				/**
				 * Edit
				 */
				title: string
				/**
				 * Undo
				 */
				undo: string
				/**
				 * Redo
				 */
				redo: string
				/**
				 * Cut
				 */
				cut: string
				/**
				 * Copy
				 */
				copy: string
				/**
				 * Paste
				 */
				paste: string
				/**
				 * Select all
				 */
				selectAll: string
			}
			window: {
				/**
				 * Window
				 */
				title: string
				/**
				 * Reload
				 */
				reload: string
				/**
				 * Previous tab
				 */
				prevTab: string
				/**
				 * Next tab
				 */
				nextTab: string
				/**
				 * Sound
				 */
				sound: string
				/**
				 * Turn on sound
				 */
				enableSound: string
				/**
				 * Turn off sound
				 */
				disableSound: string
				/**
				 * Zoom in
				 */
				zoomIn: string
				/**
				 * Zoom out
				 */
				zoomOut: string
				/**
				 * Reset zoom
				 */
				resetZoom: string
				/**
				 * Toggle Full screen
				 */
				fullScreen: string
			}
			infos: {
				/**
				 * ?
				 */
				title: string
				/**
				 * Release notes
				 */
				changelog: string
				/**
				 * Developer console
				 */
				console: string
				/**
				 * About us...
				 */
				about: string
			}
		}
		dialogs: {
			cacheCleared: {
				/**
				 * Cache cleared
				 */
				title: string
				/**
				 * Cache has been cleared on currently opened window
				 */
				message: string
			}
		}
	}
	notifications: {
		/**
		 * Start of turn for {characterName}
		 * @param {string} characterName
		 */
		fightTurn: RequiredParams<'characterName'>
		/**
		 * Incoming message from {senderName}
		 * @param {string} senderName
		 */
		privateMessage: RequiredParams<'senderName'>
		/**
		 * A tax collector is being attacked !
		 */
		taxCollector: string
		/**
		 * A Kolizeum has been found !
		 */
		kolizeum: string
		/**
		 * You are invited to join {senderName}'s group.
		 * @param {string} senderName
		 */
		partyInvitation: RequiredParams<'senderName'>
		/**
		 * You have been aggressed !
		 */
		aggression: string
		/**
		 * Bank
		 */
		saleMessage: string
	}
	window: {
		main: {
			tabsOverflow: {
				/**
				 * Lindo doesn't support more than 6 tab per window, above that it can be laggy and buggy. But you can open a new window and it will be working just fine.
				 */
				text: string
			}
		}
		changelog: {
			/**
			 * Release notes
			 */
			title: string
			/**
			 * Release
			 */
			prefix: string
		}
		unlockScreen: {
			/**
			 * Enter your master password to connect your dofus touch accounts automatically
			 */
			info: string
			/**
			 * Choose a team to connect
			 */
			chooseTeamConnect: string
			/**
			 * Connect
			 */
			connect: string
			/**
			 * Master password
			 */
			masterPassword: string
			/**
			 * Invalid password
			 */
			invalidPassword: string
			/**
			 * Unlock
			 */
			unlock: string
			/**
			 * Skip
			 */
			skip: string
		}
		updateGame: {
			/**
			 * Lindo update
			 */
			title: string
			/**
			 * Preparing update..
			 */
			step0: string
			/**
			 * Step 1 : Downloading Dofus files
			 */
			step1: string
			/**
			 * Step 2 : Lindo patch download
			 */
			step2: string
			/**
			 * Step 3 : Version resolution
			 */
			step3: string
			/**
			 * Step 4 : Applying the patches
			 */
			step4: string
			/**
			 * Step 5 : Writing modified files
			 */
			step5: string
			/**
			 * Step 6 : Delete old files
			 */
			step6: string
			/**
			 * Step 7 : Finalization
			 */
			step7: string
			/**
			 * Step 8 : Launch of Lindo..
			 */
			step8: string
			information: {
				/**
				 * Looking for updates...
				 */
				search: string
				/**
				 * Can't download the update ! Please try again later
				 */
				error: string
				/**
				 * Try again
				 */
				retry: string
			}
		}
		options: {
			/**
			 * Options
			 */
			title: string
			button: {
				/**
				 * Reset Settings
				 */
				reset: string
				/**
				 * Close
				 */
				close: string
			}
			dialogs: {
				resetSettings: {
					/**
					 * Reset all the settings ?
					 */
					title: string
					/**
					 * All app's settings will be reset to their default value
					 */
					message: string
					/**
					 * Reset
					 */
					confirm: string
					/**
					 * Cancel
					 */
					cancel: string
				}
			}
		}
	}
	option: {
		general: {
			/**
			 * General
			 */
			title: string
			/**
			 * Interface
			 */
			'interface': string
			/**
			 * Sound
			 */
			sound: string
			/**
			 * Game data
			 */
			gameData: string
			/**
			 * Debug
			 */
			debug: string
			/**
			 * Activate the debug logs. Warning: this may worsen the performance
			 */
			activateDebugLogs: string
			/**
			 * Language
			 */
			language: string
			/**
			 * Resolution
			 */
			resolution: string
			/**
			 * Full screen
			 */
			fullScreen: string
			/**
			 * Minimal interface
			 */
			minimalInterface: string
			/**
			 * Hide the multi-account tab bar
			 */
			hideTab: string
			/**
			 * Enable local map download (beta)
			 */
			localContent: string
			/**
			 * Enable game sound only on foreground window
			 */
			soundFocus: string
			/**
			 * Play on Dofus Touch Early
			 */
			early: string
			/**
			 * Apply and restart
			 */
			restart: string
			/**
			 * Re-download game data
			 */
			resetGame: string
			/**
			 * Clear cache
			 */
			clearCache: string
		}
		shortcuts: {
			/**
			 * Shortcuts
			 */
			title: string
			diver: {
				/**
				 * Miscellaneous
				 */
				header: string
				/**
				 * End your turn / Ready (fight)
				 */
				endTurn: string
				/**
				 * Open the chat
				 */
				openChat: string
				/**
				 * Open the menu
				 */
				openMenu: string
				/**
				 * Go to Upper Map
				 */
				goUp: string
				/**
				 * Go to Lower Map
				 */
				goDown: string
				/**
				 * Go to Left Map
				 */
				goLeft: string
				/**
				 * Go to Right Map
				 */
				goRight: string
				/**
				 * Show/Hide monster groups tooltips
				 */
				showMonsterTooltips: string
			}
			interfaces: {
				/**
				 * Interfaces
				 */
				header: string
				/**
				 * Character
				 */
				carac: string
				/**
				 * Spells
				 */
				spell: string
				/**
				 * Inventory
				 */
				bag: string
				/**
				 * Market place
				 */
				bidHouse: string
				/**
				 * Map
				 */
				map: string
				/**
				 * Friends
				 */
				friend: string
				/**
				 * Quests
				 */
				book: string
				/**
				 * Guild
				 */
				guild: string
				/**
				 * Kolizeum
				 */
				conquest: string
				/**
				 * Shop
				 */
				goultine: string
				/**
				 * Jobs
				 */
				job: string
				/**
				 * Alliance
				 */
				alliance: string
				/**
				 * Mount
				 */
				mount: string
				/**
				 * List of Guilds and Alliances
				 */
				directory: string
				/**
				 * Alignment
				 */
				alignment: string
				/**
				 * Bestiary
				 */
				bestiary: string
				/**
				 * Titles and Ornaments
				 */
				title: string
				/**
				 * Achievements
				 */
				achievement: string
				/**
				 * Daily Quests
				 */
				dailyQuest: string
				/**
				 * Spouse
				 */
				spouse: string
				/**
				 * Shopkeeper
				 */
				shop: string
			}
			items: {
				/**
				 * Items
				 */
				header: string
				/**
				 * Slot {x}
				 * @param {number} x
				 */
				slot: RequiredParams<'x'>
			}
			application: {
				/**
				 * Application
				 */
				header: string
				/**
				 * New window
				 */
				newWindow: string
				/**
				 * New tab
				 */
				newTab: string
				/**
				 * Tab {x}
				 * @param {number} x
				 */
				tab: RequiredParams<'x'>
				/**
				 * Next tab
				 */
				nextTab: string
				/**
				 * Previous tab
				 */
				prevTab: string
			}
			spells: {
				/**
				 * Spells
				 */
				header: string
				/**
				 * Slot {x}
				 * @param {number} x
				 */
				slot: RequiredParams<'x'>
			}
			mods: {
				/**
				 * Mods
				 */
				header: string
				/**
				 * Show/hide map resources
				 */
				mapResources: string
				/**
				 * Show/hide life bars
				 */
				healthBar: string
			}
			/**
			 * You can use special keys CTRL, SHIFT, SPACE, ALT/CMD You can specify your shortcut by pressing the desired keys at the same time after selecting the input
			 */
			information: string
			/**
			 * This shortcut key cannot be used.
			 */
			error: string
		}
		features: {
			/**
			 * Features
			 */
			title: string
			general: {
				/**
				 * General
				 */
				header: string
				/**
				 * Hide the Shop button
				 */
				hideShop: string
				/**
				 * Open menu when no window is open (ESC)
				 */
				activeOpenMenu: string
				/**
				 * Extend the delay before disconnection for inactivity
				 */
				disableInactivity: string
				/**
				 * Show zaap search filter
				 */
				zaapSearchFilter: string
			}
			fight: {
				/**
				 * Fight
				 */
				header: string
				/**
				 * Activate life bar display below fighters
				 */
				healthBar: string
				/**
				 * Automatically switch to an account when its turn starts
				 */
				focusFightTurn: string
				/**
				 * Show spell damage estimations in battle
				 */
				estimator: string
				/**
				 * Show combat chronometer
				 */
				fightChronometer: string
				/**
				 * Display monsters groups information on the map
				 */
				monsterTooltip: string
				/**
				 * Shortcut for show/hide monsters tooltip
				 */
				monsterTooltipShortcut: string
				/**
				 * Show fighters timeline vertically
				 */
				verticalTimeline: string
				/**
				 * Show challenge XP/Drop bonus
				 */
				challengePercent: string
			}
			group: {
				/**
				 * Group
				 */
				header: string
				/**
				 * Add an indicator to know if group members are on the same map
				 */
				partyMemberOnMap: string
				partyInfo: {
					/**
					 * Show party's level
					 */
					level: string
					/**
					 * Show party's prospecting
					 */
					prospecting: string
				}
				autoGroup: {
					/**
					 * Auto Group
					 */
					header: string
					/**
					 * Enable automatic grouping
					 */
					active: string
					/**
					 * Beware, following the group leader can be considered as boting for other players, use it with caution and in unpopulated areas.
					 */
					warning: string
					/**
					 * Beware, This feature can be considered as boting for other players, use it with caution and in unpopulated areas.
					 */
					warningTimer: string
					/**
					 * The characters in the group must be friends with the leader so that the invitation is automatic.
					 */
					explanation1: string
					/**
					 * The members follow the leader if the latter is on the same map.
					 */
					explanation2: string
					/**
					 * Name of leader
					 */
					leader: string
					/**
					 * Names of characters
					 */
					members: string
					/**
					 * Add a character
					 */
					addMember: string
					/**
					 * Follow the group leader
					 */
					followLeader: string
					/**
					 * Disable the Timer for the auto group
					 */
					disableTimer: string
					/**
					 * Skip "ready" automatically
					 */
					ready: string
					/**
					 * Enter combat automatically
					 */
					fight: string
					/**
					 * Time to follow (in seconds)
					 */
					delay: string
					/**
					 * Follow the leader on a map
					 */
					followOnMap: string
					/**
					 * Move on the same cell the leader moves
					 */
					strictMove: string
					/**
					 * You can't join a PvP fight automatically
					 */
					pvpWarning: string
				}
			}
			job: {
				/**
				 * Job
				 */
				header: string
				/**
				 * Show map resources
				 */
				showResources: string
				/**
				 * Activate display of ressources remaining time
				 */
				harvestIndicator: string
				/**
				 * Activate the display of job xp needed for leveling
				 */
				jobsXp: string
			}
			accounts: {
				/**
				 * Accounts
				 */
				header: string
			}
		}
		notifications: {
			/**
			 * Notifications
			 */
			title: string
			/**
			 * You can receive notifications from the game when the application is on the background. You will be notified:
			 */
			description: string
			/**
			 * When your turn starts (fight)
			 */
			fightTurn: string
			/**
			 * When you receive private messages
			 */
			privateMessage: string
			/**
			 * When a tax collector is attacked
			 */
			taxCollector: string
			/**
			 * When a kolizeum fight is found
			 */
			kolizeum: string
			/**
			 * When someone invites you to join a group
			 */
			partyInvitation: string
			/**
			 * When someone aggresses you
			 */
			aggression: string
			/**
			 * When an item is sold
			 */
			saleMessage: string
		}
		multiAccount: {
			/**
			 * Multi Account
			 */
			title: string
			/**
			 * Enable the multi account with your master password
			 */
			enable: string
			/**
			 * To use this feature, a password must be configured. It will be used to start Lindo with multi-account automation.
			 */
			notConfigured: string
			/**
			 * Configure password
			 */
			configurePassword: string
			/**
			 * Add Character
			 */
			addCharacter: string
			/**
			 * New Team
			 */
			newTeam: string
			/**
			 * Remove the password
			 */
			removePassword: string
			/**
			 * Change the password
			 */
			changePassword: string
			dialogs: {
				characterDialog: {
					/**
					 * Add new character account
					 */
					title: string
					/**
					 * Add
					 */
					confirm: string
					/**
					 * Cancel
					 */
					cancel: string
				}
				teamDialog: {
					/**
					 * Add new team
					 */
					title: string
					/**
					 * Team Name
					 */
					teamName: string
					/**
					 * Add Window
					 */
					addWindow: string
					/**
					 * Save
					 */
					confirm: string
					/**
					 * Cancel
					 */
					cancel: string
				}
				selectCharacter: {
					/**
					 * Select a character
					 */
					title: string
					/**
					 * Cancel
					 */
					cancel: string
				}
				passwordDialog: {
					/**
					 * Configure master password
					 */
					configurePassword: string
					/**
					 * Change master password
					 */
					changePassword: string
					/**
					 * Remove your master password ?
					 */
					removePassword: string
					/**
					 * If you remove your master password you will lost your multi account configuration
					 */
					removePasswordInfo: string
					/**
					 * Password
					 */
					password: string
					/**
					 * Confirm Password
					 */
					confirmPassword: string
					/**
					 * Old Password
					 */
					oldPassword: string
					/**
					 * Remove password
					 */
					confirmRemovePassword: string
					/**
					 * Validate
					 */
					validate: string
					/**
					 * Cancel
					 */
					cancel: string
				}
			}
			characterCard: {
				/**
				 * Character image will be save during the login
				 */
				characterImageNotLoaded: string
				buttons: {
					/**
					 * Select
					 */
					select: string
					/**
					 * Delete
					 */
					'delete': string
					/**
					 * Edit
					 */
					edit: string
					/**
					 * Remove
					 */
					remove: string
				}
			}
			teamWindowCard: {
				/**
				 * Window {position}
				 * @param {number} position
				 */
				window: RequiredParams<'position'>
				/**
				 * Add Character
				 */
				addCharacter: string
			}
			teamAccordion: {
				/**
				 * Delete team
				 */
				'delete': string
				/**
				 * Edit team
				 */
				edit: string
				/**
				 * Window {position}
				 * @param {number} position
				 */
				window: RequiredParams<'position'>
			}
		}
		about: {
			/**
			 * About
			 */
			title: string
			links: {
				/**
				 * Website
				 */
				website: string
				/**
				 * Github (source code)
				 */
				github: string
				/**
				 * Chat server
				 */
				chat: string
				/**
				 * Reddit (forum)
				 */
				reddit: string
				/**
				 * Release notes
				 */
				changelog: string
			}
			/**
			 * Lindo is an open-source software that allows you to play DOFUS Touch from your computer.
			 */
			text0: string
			/**
			 * Unlike an Android emulator, the code is directly interpreted by your computer, which makes it faster so you can play DOFUS Touch with the full performance of your computer !
			 */
			text1: string
			/**
			 * Originally known as DOFUS Touch No-Emu, this software developed by Daniel and Thomas was forced to close cause of an advertisement from Ankama.
			 */
			text2: string
		}
	}
	mod: {
		jobXP: {
			/**
			 * {xp} XP missing<br>before level {nextLevel}
			 * @param {number} nextLevel
			 * @param {number} xp
			 */
			xpMissing: RequiredParams<'nextLevel' | 'xp'>
		}
		monsterTooltip: {
			/**
			 * Level
			 */
			level: string
			/**
			 * Group
			 */
			group: string
		}
		partyInfo: {
			/**
			 * Lvl.
			 */
			level: string
		}
		runeLister: {
			/**
			 * Obtained {quantity} {runeName}
			 * @param {number} quantity
			 * @param {string} runeName
			 */
			message: RequiredParams<'quantity' | 'runeName'>
		}
		zaapSearchFilter: {
			/**
			 * Search a zaap
			 */
			placeholder: string
			/**
			 * Search a zaapi
			 */
			placeholderZaapi: string
			/**
			 * Search a prisme
			 */
			placeholderPrisme: string
		}
	}
}

export type TranslationFunctions = {
	main: {
		updater: {
			/**
			 * New version available {version}
			 */
			title: (arg: { version: string }) => LocalizedString
			/**
			 * A new version ({version}) of Lindo is available. Do you want to update?
			 */
			message: (arg: { version: string }) => LocalizedString
			/**
			 * A required update ({version}) of Lindo is available, you must download it on GitHub.
			 */
			messageRequired: (arg: { version: string }) => LocalizedString
			/**
			 * Download
			 */
			download: () => LocalizedString
			/**
			 * Ignore
			 */
			ignore: () => LocalizedString
		}
		gameMenu: {
			file: {
				/**
				 * Application
				 */
				title: () => LocalizedString
				/**
				 * New window
				 */
				newWindow: () => LocalizedString
				/**
				 * New tab
				 */
				newTab: () => LocalizedString
				/**
				 * Close tab
				 */
				closeTab: () => LocalizedString
				/**
				 * Exit
				 */
				closeWindow: () => LocalizedString
			}
			edit: {
				/**
				 * Edit
				 */
				title: () => LocalizedString
				/**
				 * Undo
				 */
				undo: () => LocalizedString
				/**
				 * Redo
				 */
				redo: () => LocalizedString
				/**
				 * Cut
				 */
				cut: () => LocalizedString
				/**
				 * Copy
				 */
				copy: () => LocalizedString
				/**
				 * Paste
				 */
				paste: () => LocalizedString
				/**
				 * Select all
				 */
				selectAll: () => LocalizedString
			}
			window: {
				/**
				 * Window
				 */
				title: () => LocalizedString
				/**
				 * Reload
				 */
				reload: () => LocalizedString
				/**
				 * Previous tab
				 */
				prevTab: () => LocalizedString
				/**
				 * Next tab
				 */
				nextTab: () => LocalizedString
				/**
				 * Sound
				 */
				sound: () => LocalizedString
				/**
				 * Turn on sound
				 */
				enableSound: () => LocalizedString
				/**
				 * Turn off sound
				 */
				disableSound: () => LocalizedString
				/**
				 * Zoom in
				 */
				zoomIn: () => LocalizedString
				/**
				 * Zoom out
				 */
				zoomOut: () => LocalizedString
				/**
				 * Reset zoom
				 */
				resetZoom: () => LocalizedString
				/**
				 * Toggle Full screen
				 */
				fullScreen: () => LocalizedString
			}
			infos: {
				/**
				 * ?
				 */
				title: () => LocalizedString
				/**
				 * Release notes
				 */
				changelog: () => LocalizedString
				/**
				 * Developer console
				 */
				console: () => LocalizedString
				/**
				 * About us...
				 */
				about: () => LocalizedString
			}
		}
		dialogs: {
			cacheCleared: {
				/**
				 * Cache cleared
				 */
				title: () => LocalizedString
				/**
				 * Cache has been cleared on currently opened window
				 */
				message: () => LocalizedString
			}
		}
	}
	notifications: {
		/**
		 * Start of turn for {characterName}
		 */
		fightTurn: (arg: { characterName: string }) => LocalizedString
		/**
		 * Incoming message from {senderName}
		 */
		privateMessage: (arg: { senderName: string }) => LocalizedString
		/**
		 * A tax collector is being attacked !
		 */
		taxCollector: () => LocalizedString
		/**
		 * A Kolizeum has been found !
		 */
		kolizeum: () => LocalizedString
		/**
		 * You are invited to join {senderName}'s group.
		 */
		partyInvitation: (arg: { senderName: string }) => LocalizedString
		/**
		 * You have been aggressed !
		 */
		aggression: () => LocalizedString
		/**
		 * Bank
		 */
		saleMessage: () => LocalizedString
	}
	window: {
		main: {
			tabsOverflow: {
				/**
				 * Lindo doesn't support more than 6 tab per window, above that it can be laggy and buggy. But you can open a new window and it will be working just fine.
				 */
				text: () => LocalizedString
			}
		}
		changelog: {
			/**
			 * Release notes
			 */
			title: () => LocalizedString
			/**
			 * Release
			 */
			prefix: () => LocalizedString
		}
		unlockScreen: {
			/**
			 * Enter your master password to connect your dofus touch accounts automatically
			 */
			info: () => LocalizedString
			/**
			 * Choose a team to connect
			 */
			chooseTeamConnect: () => LocalizedString
			/**
			 * Connect
			 */
			connect: () => LocalizedString
			/**
			 * Master password
			 */
			masterPassword: () => LocalizedString
			/**
			 * Invalid password
			 */
			invalidPassword: () => LocalizedString
			/**
			 * Unlock
			 */
			unlock: () => LocalizedString
			/**
			 * Skip
			 */
			skip: () => LocalizedString
		}
		updateGame: {
			/**
			 * Lindo update
			 */
			title: () => LocalizedString
			/**
			 * Preparing update..
			 */
			step0: () => LocalizedString
			/**
			 * Step 1 : Downloading Dofus files
			 */
			step1: () => LocalizedString
			/**
			 * Step 2 : Lindo patch download
			 */
			step2: () => LocalizedString
			/**
			 * Step 3 : Version resolution
			 */
			step3: () => LocalizedString
			/**
			 * Step 4 : Applying the patches
			 */
			step4: () => LocalizedString
			/**
			 * Step 5 : Writing modified files
			 */
			step5: () => LocalizedString
			/**
			 * Step 6 : Delete old files
			 */
			step6: () => LocalizedString
			/**
			 * Step 7 : Finalization
			 */
			step7: () => LocalizedString
			/**
			 * Step 8 : Launch of Lindo..
			 */
			step8: () => LocalizedString
			information: {
				/**
				 * Looking for updates...
				 */
				search: () => LocalizedString
				/**
				 * Can't download the update ! Please try again later
				 */
				error: () => LocalizedString
				/**
				 * Try again
				 */
				retry: () => LocalizedString
			}
		}
		options: {
			/**
			 * Options
			 */
			title: () => LocalizedString
			button: {
				/**
				 * Reset Settings
				 */
				reset: () => LocalizedString
				/**
				 * Close
				 */
				close: () => LocalizedString
			}
			dialogs: {
				resetSettings: {
					/**
					 * Reset all the settings ?
					 */
					title: () => LocalizedString
					/**
					 * All app's settings will be reset to their default value
					 */
					message: () => LocalizedString
					/**
					 * Reset
					 */
					confirm: () => LocalizedString
					/**
					 * Cancel
					 */
					cancel: () => LocalizedString
				}
			}
		}
	}
	option: {
		general: {
			/**
			 * General
			 */
			title: () => LocalizedString
			/**
			 * Interface
			 */
			'interface': () => LocalizedString
			/**
			 * Sound
			 */
			sound: () => LocalizedString
			/**
			 * Game data
			 */
			gameData: () => LocalizedString
			/**
			 * Debug
			 */
			debug: () => LocalizedString
			/**
			 * Activate the debug logs. Warning: this may worsen the performance
			 */
			activateDebugLogs: () => LocalizedString
			/**
			 * Language
			 */
			language: () => LocalizedString
			/**
			 * Resolution
			 */
			resolution: () => LocalizedString
			/**
			 * Full screen
			 */
			fullScreen: () => LocalizedString
			/**
			 * Minimal interface
			 */
			minimalInterface: () => LocalizedString
			/**
			 * Hide the multi-account tab bar
			 */
			hideTab: () => LocalizedString
			/**
			 * Enable local map download (beta)
			 */
			localContent: () => LocalizedString
			/**
			 * Enable game sound only on foreground window
			 */
			soundFocus: () => LocalizedString
			/**
			 * Play on Dofus Touch Early
			 */
			early: () => LocalizedString
			/**
			 * Apply and restart
			 */
			restart: () => LocalizedString
			/**
			 * Re-download game data
			 */
			resetGame: () => LocalizedString
			/**
			 * Clear cache
			 */
			clearCache: () => LocalizedString
		}
		shortcuts: {
			/**
			 * Shortcuts
			 */
			title: () => LocalizedString
			diver: {
				/**
				 * Miscellaneous
				 */
				header: () => LocalizedString
				/**
				 * End your turn / Ready (fight)
				 */
				endTurn: () => LocalizedString
				/**
				 * Open the chat
				 */
				openChat: () => LocalizedString
				/**
				 * Open the menu
				 */
				openMenu: () => LocalizedString
				/**
				 * Go to Upper Map
				 */
				goUp: () => LocalizedString
				/**
				 * Go to Lower Map
				 */
				goDown: () => LocalizedString
				/**
				 * Go to Left Map
				 */
				goLeft: () => LocalizedString
				/**
				 * Go to Right Map
				 */
				goRight: () => LocalizedString
				/**
				 * Show/Hide monster groups tooltips
				 */
				showMonsterTooltips: () => LocalizedString
			}
			interfaces: {
				/**
				 * Interfaces
				 */
				header: () => LocalizedString
				/**
				 * Character
				 */
				carac: () => LocalizedString
				/**
				 * Spells
				 */
				spell: () => LocalizedString
				/**
				 * Inventory
				 */
				bag: () => LocalizedString
				/**
				 * Market place
				 */
				bidHouse: () => LocalizedString
				/**
				 * Map
				 */
				map: () => LocalizedString
				/**
				 * Friends
				 */
				friend: () => LocalizedString
				/**
				 * Quests
				 */
				book: () => LocalizedString
				/**
				 * Guild
				 */
				guild: () => LocalizedString
				/**
				 * Kolizeum
				 */
				conquest: () => LocalizedString
				/**
				 * Shop
				 */
				goultine: () => LocalizedString
				/**
				 * Jobs
				 */
				job: () => LocalizedString
				/**
				 * Alliance
				 */
				alliance: () => LocalizedString
				/**
				 * Mount
				 */
				mount: () => LocalizedString
				/**
				 * List of Guilds and Alliances
				 */
				directory: () => LocalizedString
				/**
				 * Alignment
				 */
				alignment: () => LocalizedString
				/**
				 * Bestiary
				 */
				bestiary: () => LocalizedString
				/**
				 * Titles and Ornaments
				 */
				title: () => LocalizedString
				/**
				 * Achievements
				 */
				achievement: () => LocalizedString
				/**
				 * Daily Quests
				 */
				dailyQuest: () => LocalizedString
				/**
				 * Spouse
				 */
				spouse: () => LocalizedString
				/**
				 * Shopkeeper
				 */
				shop: () => LocalizedString
			}
			items: {
				/**
				 * Items
				 */
				header: () => LocalizedString
				/**
				 * Slot {x}
				 */
				slot: (arg: { x: number }) => LocalizedString
			}
			application: {
				/**
				 * Application
				 */
				header: () => LocalizedString
				/**
				 * New window
				 */
				newWindow: () => LocalizedString
				/**
				 * New tab
				 */
				newTab: () => LocalizedString
				/**
				 * Tab {x}
				 */
				tab: (arg: { x: number }) => LocalizedString
				/**
				 * Next tab
				 */
				nextTab: () => LocalizedString
				/**
				 * Previous tab
				 */
				prevTab: () => LocalizedString
			}
			spells: {
				/**
				 * Spells
				 */
				header: () => LocalizedString
				/**
				 * Slot {x}
				 */
				slot: (arg: { x: number }) => LocalizedString
			}
			mods: {
				/**
				 * Mods
				 */
				header: () => LocalizedString
				/**
				 * Show/hide map resources
				 */
				mapResources: () => LocalizedString
				/**
				 * Show/hide life bars
				 */
				healthBar: () => LocalizedString
			}
			/**
			 * You can use special keys CTRL, SHIFT, SPACE, ALT/CMD You can specify your shortcut by pressing the desired keys at the same time after selecting the input
			 */
			information: () => LocalizedString
			/**
			 * This shortcut key cannot be used.
			 */
			error: () => LocalizedString
		}
		features: {
			/**
			 * Features
			 */
			title: () => LocalizedString
			general: {
				/**
				 * General
				 */
				header: () => LocalizedString
				/**
				 * Hide the Shop button
				 */
				hideShop: () => LocalizedString
				/**
				 * Open menu when no window is open (ESC)
				 */
				activeOpenMenu: () => LocalizedString
				/**
				 * Extend the delay before disconnection for inactivity
				 */
				disableInactivity: () => LocalizedString
				/**
				 * Show zaap search filter
				 */
				zaapSearchFilter: () => LocalizedString
			}
			fight: {
				/**
				 * Fight
				 */
				header: () => LocalizedString
				/**
				 * Activate life bar display below fighters
				 */
				healthBar: () => LocalizedString
				/**
				 * Automatically switch to an account when its turn starts
				 */
				focusFightTurn: () => LocalizedString
				/**
				 * Show spell damage estimations in battle
				 */
				estimator: () => LocalizedString
				/**
				 * Show combat chronometer
				 */
				fightChronometer: () => LocalizedString
				/**
				 * Display monsters groups information on the map
				 */
				monsterTooltip: () => LocalizedString
				/**
				 * Shortcut for show/hide monsters tooltip
				 */
				monsterTooltipShortcut: () => LocalizedString
				/**
				 * Show fighters timeline vertically
				 */
				verticalTimeline: () => LocalizedString
				/**
				 * Show challenge XP/Drop bonus
				 */
				challengePercent: () => LocalizedString
			}
			group: {
				/**
				 * Group
				 */
				header: () => LocalizedString
				/**
				 * Add an indicator to know if group members are on the same map
				 */
				partyMemberOnMap: () => LocalizedString
				partyInfo: {
					/**
					 * Show party's level
					 */
					level: () => LocalizedString
					/**
					 * Show party's prospecting
					 */
					prospecting: () => LocalizedString
				}
				autoGroup: {
					/**
					 * Auto Group
					 */
					header: () => LocalizedString
					/**
					 * Enable automatic grouping
					 */
					active: () => LocalizedString
					/**
					 * Beware, following the group leader can be considered as boting for other players, use it with caution and in unpopulated areas.
					 */
					warning: () => LocalizedString
					/**
					 * Beware, This feature can be considered as boting for other players, use it with caution and in unpopulated areas.
					 */
					warningTimer: () => LocalizedString
					/**
					 * The characters in the group must be friends with the leader so that the invitation is automatic.
					 */
					explanation1: () => LocalizedString
					/**
					 * The members follow the leader if the latter is on the same map.
					 */
					explanation2: () => LocalizedString
					/**
					 * Name of leader
					 */
					leader: () => LocalizedString
					/**
					 * Names of characters
					 */
					members: () => LocalizedString
					/**
					 * Add a character
					 */
					addMember: () => LocalizedString
					/**
					 * Follow the group leader
					 */
					followLeader: () => LocalizedString
					/**
					 * Disable the Timer for the auto group
					 */
					disableTimer: () => LocalizedString
					/**
					 * Skip "ready" automatically
					 */
					ready: () => LocalizedString
					/**
					 * Enter combat automatically
					 */
					fight: () => LocalizedString
					/**
					 * Time to follow (in seconds)
					 */
					delay: () => LocalizedString
					/**
					 * Follow the leader on a map
					 */
					followOnMap: () => LocalizedString
					/**
					 * Move on the same cell the leader moves
					 */
					strictMove: () => LocalizedString
					/**
					 * You can't join a PvP fight automatically
					 */
					pvpWarning: () => LocalizedString
				}
			}
			job: {
				/**
				 * Job
				 */
				header: () => LocalizedString
				/**
				 * Show map resources
				 */
				showResources: () => LocalizedString
				/**
				 * Activate display of ressources remaining time
				 */
				harvestIndicator: () => LocalizedString
				/**
				 * Activate the display of job xp needed for leveling
				 */
				jobsXp: () => LocalizedString
			}
			accounts: {
				/**
				 * Accounts
				 */
				header: () => LocalizedString
			}
		}
		notifications: {
			/**
			 * Notifications
			 */
			title: () => LocalizedString
			/**
			 * You can receive notifications from the game when the application is on the background. You will be notified:
			 */
			description: () => LocalizedString
			/**
			 * When your turn starts (fight)
			 */
			fightTurn: () => LocalizedString
			/**
			 * When you receive private messages
			 */
			privateMessage: () => LocalizedString
			/**
			 * When a tax collector is attacked
			 */
			taxCollector: () => LocalizedString
			/**
			 * When a kolizeum fight is found
			 */
			kolizeum: () => LocalizedString
			/**
			 * When someone invites you to join a group
			 */
			partyInvitation: () => LocalizedString
			/**
			 * When someone aggresses you
			 */
			aggression: () => LocalizedString
			/**
			 * When an item is sold
			 */
			saleMessage: () => LocalizedString
		}
		multiAccount: {
			/**
			 * Multi Account
			 */
			title: () => LocalizedString
			/**
			 * Enable the multi account with your master password
			 */
			enable: () => LocalizedString
			/**
			 * To use this feature, a password must be configured. It will be used to start Lindo with multi-account automation.
			 */
			notConfigured: () => LocalizedString
			/**
			 * Configure password
			 */
			configurePassword: () => LocalizedString
			/**
			 * Add Character
			 */
			addCharacter: () => LocalizedString
			/**
			 * New Team
			 */
			newTeam: () => LocalizedString
			/**
			 * Remove the password
			 */
			removePassword: () => LocalizedString
			/**
			 * Change the password
			 */
			changePassword: () => LocalizedString
			dialogs: {
				characterDialog: {
					/**
					 * Add new character account
					 */
					title: () => LocalizedString
					/**
					 * Add
					 */
					confirm: () => LocalizedString
					/**
					 * Cancel
					 */
					cancel: () => LocalizedString
				}
				teamDialog: {
					/**
					 * Add new team
					 */
					title: () => LocalizedString
					/**
					 * Team Name
					 */
					teamName: () => LocalizedString
					/**
					 * Add Window
					 */
					addWindow: () => LocalizedString
					/**
					 * Save
					 */
					confirm: () => LocalizedString
					/**
					 * Cancel
					 */
					cancel: () => LocalizedString
				}
				selectCharacter: {
					/**
					 * Select a character
					 */
					title: () => LocalizedString
					/**
					 * Cancel
					 */
					cancel: () => LocalizedString
				}
				passwordDialog: {
					/**
					 * Configure master password
					 */
					configurePassword: () => LocalizedString
					/**
					 * Change master password
					 */
					changePassword: () => LocalizedString
					/**
					 * Remove your master password ?
					 */
					removePassword: () => LocalizedString
					/**
					 * If you remove your master password you will lost your multi account configuration
					 */
					removePasswordInfo: () => LocalizedString
					/**
					 * Password
					 */
					password: () => LocalizedString
					/**
					 * Confirm Password
					 */
					confirmPassword: () => LocalizedString
					/**
					 * Old Password
					 */
					oldPassword: () => LocalizedString
					/**
					 * Remove password
					 */
					confirmRemovePassword: () => LocalizedString
					/**
					 * Validate
					 */
					validate: () => LocalizedString
					/**
					 * Cancel
					 */
					cancel: () => LocalizedString
				}
			}
			characterCard: {
				/**
				 * Character image will be save during the login
				 */
				characterImageNotLoaded: () => LocalizedString
				buttons: {
					/**
					 * Select
					 */
					select: () => LocalizedString
					/**
					 * Delete
					 */
					'delete': () => LocalizedString
					/**
					 * Edit
					 */
					edit: () => LocalizedString
					/**
					 * Remove
					 */
					remove: () => LocalizedString
				}
			}
			teamWindowCard: {
				/**
				 * Window {position}
				 */
				window: (arg: { position: number }) => LocalizedString
				/**
				 * Add Character
				 */
				addCharacter: () => LocalizedString
			}
			teamAccordion: {
				/**
				 * Delete team
				 */
				'delete': () => LocalizedString
				/**
				 * Edit team
				 */
				edit: () => LocalizedString
				/**
				 * Window {position}
				 */
				window: (arg: { position: number }) => LocalizedString
			}
		}
		about: {
			/**
			 * About
			 */
			title: () => LocalizedString
			links: {
				/**
				 * Website
				 */
				website: () => LocalizedString
				/**
				 * Github (source code)
				 */
				github: () => LocalizedString
				/**
				 * Chat server
				 */
				chat: () => LocalizedString
				/**
				 * Reddit (forum)
				 */
				reddit: () => LocalizedString
				/**
				 * Release notes
				 */
				changelog: () => LocalizedString
			}
			/**
			 * Lindo is an open-source software that allows you to play DOFUS Touch from your computer.
			 */
			text0: () => LocalizedString
			/**
			 * Unlike an Android emulator, the code is directly interpreted by your computer, which makes it faster so you can play DOFUS Touch with the full performance of your computer !
			 */
			text1: () => LocalizedString
			/**
			 * Originally known as DOFUS Touch No-Emu, this software developed by Daniel and Thomas was forced to close cause of an advertisement from Ankama.
			 */
			text2: () => LocalizedString
		}
	}
	mod: {
		jobXP: {
			/**
			 * {xp} XP missing<br>before level {nextLevel}
			 */
			xpMissing: (arg: { nextLevel: number, xp: number }) => LocalizedString
		}
		monsterTooltip: {
			/**
			 * Level
			 */
			level: () => LocalizedString
			/**
			 * Group
			 */
			group: () => LocalizedString
		}
		partyInfo: {
			/**
			 * Lvl.
			 */
			level: () => LocalizedString
		}
		runeLister: {
			/**
			 * Obtained {quantity} {runeName}
			 */
			message: (arg: { quantity: number, runeName: string }) => LocalizedString
		}
		zaapSearchFilter: {
			/**
			 * Search a zaap
			 */
			placeholder: () => LocalizedString
			/**
			 * Search a zaapi
			 */
			placeholderZaapi: () => LocalizedString
			/**
			 * Search a prisme
			 */
			placeholderPrisme: () => LocalizedString
		}
	}
}

export type Formatters = {}
