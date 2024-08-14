package com.dev43.challengeapp;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/challenges")
@CrossOrigin(origins = "http://localhost:3000")
public class ChallengeController {

    private ChallengeService challengeService;

    public ChallengeController(ChallengeService challengeService) {
        this.challengeService = challengeService;
    }

    @GetMapping
    public ResponseEntity<List<Challenge>> getAllChallenges(){
        return new ResponseEntity<>(challengeService.getAllChallenges(),HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<String> addChallenge(@RequestBody Challenge challenge){
        boolean isChallengeAdded = challengeService.addChallenge(challenge);
        if(isChallengeAdded)
            return new ResponseEntity<>("Challenge is added Successfully",HttpStatus.OK);
        return new ResponseEntity<>("Challenge is not added",HttpStatus.NOT_FOUND);
    }

    @GetMapping ("/{month}")
    public ResponseEntity<Challenge> getChallenge(@PathVariable String month){
        Challenge challenge=challengeService.getChallenge(month);
        if(challenge !=null)
            return new ResponseEntity<>(challenge, HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateChallenge(@PathVariable Long id,@RequestBody Challenge updatedChallenge){
        boolean isChallengeUpdated = challengeService.updateChallenge(id,updatedChallenge);
        if(isChallengeUpdated)
            return new ResponseEntity<>("Challenge is updated Successfully",HttpStatus.OK);
        return new ResponseEntity<>("Challenge is not updated",HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteChallenge(@PathVariable Long id){
        boolean isChallengeDeleted= challengeService.deleteChallenge(id);
        if(isChallengeDeleted)
            return new ResponseEntity<>("Challenge is deleted Successfully",HttpStatus.OK);
        return new ResponseEntity<>("Challenge is not deleted",HttpStatus.NOT_FOUND);
    }
}
