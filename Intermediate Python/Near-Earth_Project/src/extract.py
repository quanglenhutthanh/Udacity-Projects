"""Extract data on near-Earth objects and close approaches from CSV and JSON files.

The `load_neos` function extracts NEO data from a CSV file, formatted as
described in the project instructions, into a collection of `NearEarthObject`s.

The `load_approaches` function extracts close approach data from a JSON file,
formatted as described in the project instructions, into a collection of
`CloseApproach` objects.

The main module calls these functions with the arguments provided at the command
line, and uses the resulting collections to build an `NEODatabase`.

You'll edit this file in Task 2.
"""
import csv
import json

from models import NearEarthObject, CloseApproach


def load_neos(neo_csv_path):
    """Read near-Earth object information from a CSV file.

    :param neo_csv_path: A path to a CSV file containing data about near-Earth objects.
    :return: A collection of `NearEarthObject`s.
    """
    list_neo = []
    with open(neo_csv_path, 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            row['name'] = row['name'] or None
            row['diameter'] = float(row['diameter']) if row['diameter'] else float('nan')
            row['pha'] = True if row['pha'] == "Y" else False
            neo = NearEarthObject(designation=row['pdes'],
                                  name=row['name'],
                                  diameter=row['diameter'],
                                  hazardous=row['pha'],)
            list_neo.append(neo)

    return list_neo


def load_approaches(cad_json_path):
    """Read close approach data from a JSON file.

    :param cad_json_path: A path to a JSON file containing data about close approaches.
    :return: A collection of `CloseApproach`es.
    """
    list_ca = []
    with open(cad_json_path) as jsonfile:
        reader = json.load(jsonfile)
        list_ca = []
        data_dict = [dict(zip(reader['fields'], data)) for data in reader['data']]
        for row in data_dict:
            approach = CloseApproach(
                designation=row['des'],
                time=row['cd'],
                distance=float(row['dist']),
                velocity=float(row['v_rel']),
            )
            list_ca.append(approach)

    return list_ca
