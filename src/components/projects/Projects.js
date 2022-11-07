import React, { useState } from "react"
import { ProjectCards } from "./projectCards/ProjectCards"
import { ProjectFullDescription } from "./projectFullDescription/ProjectFullDescription"
import { Provide } from "./provide/Provide"
import { RangeSlider } from "./rangeSlider/RangeSlider"

export function Projects({ width }) {
  const [handleValue, setHandleValue] = useState(0)
  const [selectedProjectCard, setSelectedProjectCard] = useState("")
  const [clickOnCard, setClickOnCard] = useState(false)

  return (
    <div className="projects">
      <div className="projects__left_part">
        <h2 className="projects__title">Проекты</h2>
        <div className="projects__filter">
          <RangeSlider width={width} setHandleValue={setHandleValue} handleValue={handleValue} />
          <ProjectCards setSelectedProjectCard={setSelectedProjectCard} handleValue={handleValue} setClickOnCard={setClickOnCard} />
        </div>
      </div>
      <div className="projects__right_part">
        {!clickOnCard ? (
          <Provide />
        ) : (
          <ProjectFullDescription width={width} selectedProjectCard={selectedProjectCard} setClickOnCard={setClickOnCard} handleValue={handleValue} />
        )}
      </div>
    </div>
  )
}
