@echo off
REM */AIPND-revision/intropyproject-classify-pet-images/run_models_batch_uploaded.bat
REM                                                                             
REM PROGRAMMER: Jennifer S.
REM DATE CREATED: 02/08/2018
REM REVISED DATE: 04/23/2018 - revised run_models_batch.sh to run on 
REM                            windows OS using bat and Anaconda Prompt 
REM PURPOSE: Runs all three models to test which provides 'best' solution on the Uploaded Images.
REM          Please note output from each run has been piped into a text file.
REM
REM Usage: run_models_batch_uploaded.bat  -- will run program from commandline on Window OS
REM 
@echo on
python check_images.py --dir pet_images/ --arch resnet  --dogfile dognames.txt > resnet_pet_images.txt
python check_images.py --dir pet_images/ --arch alexnet --dogfile dognames.txt > alexnet_pet_images.txt
python check_images.py --dir pet_images/ --arch vgg  --dogfile dognames.txt > vgg_pet_images.txt
