/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Gabriel and Yoochan
// Created on: May 2024
// This file contains the JS functions for index.html

/**
 * This class is Menu Scene.
 */
class MenuScene extends Phaser.Scene {
    /**
     * This method is the constructor.
     */
    constructor() {
      super({ key: "menuScene" })
  
      this.menuSceneBackgroundImage = null
      this.startButton = null
    }
  
  
    /**
     * Can be defined on your own Scenes.
     * This method is called by the Scene Manager when the scene starts,
     * before preload() and create().
     * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
     */
    init(data) {
      this.cameras.main.setBackgroundColor("#ffffff")
    }
  
    /**
     * Can be defined on your own Scenes.
     * Use it to load assets.
     */
    preload() {
      console.log("Menu Scene")
      this.load.image("menuSceneBackground", "./assets/factory-menu-start.jpg")
      this.load.image("startButton", "./assets/Heading.png")
    }
  
    /**
     * Can be defined on your own Scenes.
     * Use it to create your game objects.
     * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start() 
     */
    create(data) {
      this.menuSceneBackgroundImage = this.add.sprite(0, 0, "menuSceneBackground").setScale(2.0)
      this.menuSceneBackgroundImage.x = 1920 / 2
      this.menuSceneBackgroundImage.y = 1080 / 2
  
      this.startButton = this.add.sprite(1920 / 2, 1080 / 2, "startButton").setScale(2.8)
      this.startButton.setInteractive({ useHandCursor: true })
      this.startButton.on("pointerdown", () => this.clickButton())
    }
  
    /**
     * Should be overridden by your own Scenes.
     * This method is called once per game step while the scene is running.
     * @param {number} time - The current time.
     * @param {number} delta - The delta time in ms since the last frame.
     */
    update(time, delta) {
      //pass
    }
  
    clickButton() {
      this.scene.start("gameScene")
    }
  }
  
  export default MenuScene
  